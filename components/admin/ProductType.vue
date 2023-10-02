<template>
    <div @click="closeAll()" v-if="isProductType || showSelectItem || isOpenItem" class="close-block">
        x
    </div>
    <div v-if="!isProductType && !showSelectItem && !isOpenItem">
        <h1>Типы товаров</h1>
        <a-button @click="createProductType()">Создать тип товара</a-button>
        <LazyAdminSortBy :selectSortType="changeSortType" :keyArray="sortArray" :isSelectItem="selectSort"
            :selectItem="selectSortItem"></LazyAdminSortBy>
        <LazyAdminTable :isCanEdit="true" v-if="dataEl" :editMethod="editItem" :openMethod="openItem"
            :deleteMethod="deleteItem" :data="dataEl" :columns="columns" :isCanDelete="false">
        </LazyAdminTable>
        <a-pagination :pageSize="1" v-model:total="totalCount" @change="changedPagination()" v-model:current="currentCount"
            show-less-items />
    </div>
    <div v-if="isProductType || showSelectItem">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Имя" name="name" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input v-model:value="formState.name">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="Описание" name="description" :rules="[{ message: 'Поле введено некорректно' }]">
                <a-textarea v-model:value="formState.description" placeholder="Описание" auto-size />
            </a-form-item>
            <a-radio-group v-model:value="formState.offer_type">
                <a-radio :value="1">service</a-radio>
                <a-radio :value="2">commodity</a-radio>
            </a-radio-group>
            <a-form-item v-if="!showSelectItem">
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Создать тип товара
                </a-button>
            </a-form-item>
            <a-form-item v-else-if="showSelectItem">
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Сохранить тип товара
                </a-button>
            </a-form-item>
        </a-form>
    </div>
    <div class="open-item" v-if="isOpenItem">

        <a-list bordered>
            <div class="btn-container">
                <button @click="editItem(openSelectItem.key)" id="edit-btn" class="ant-dropdown-link">
                    <font-awesome-icon icon="fa-solid fa-pen" />
                </button>
                <button @click="deleteItem(openSelectItem.key)" id="edit-trash" class="ant-dropdown-link">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
            </div>
            <a-list-item>
                <div>Имя</div> {{ openSelectItem.name }}
            </a-list-item>


            <a-list-item>
                <div>Описание</div> {{ openSelectItem.description }}
            </a-list-item>


            <a-list-item>
                <div>Тип</div> {{ openSelectItem.offer_type }}
            </a-list-item>


            <a-list-item>
                <div>Дата создания</div> {{ openSelectItem.created_at }}
            </a-list-item>

            <a-list-item>
                <div>Дата обновления</div> {{ openSelectItem.updated_at }}
            </a-list-item>

        </a-list>
    </div>
</template>

<script>
import { useAuthStore } from '../../stores/auth'
export default {
    data() {
        return {
            dataEl: null,
            columns: [
                {
                    title: 'Имя',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Тип',
                    dataIndex: 'offer_type',
                    key: 'offer_type',
                },
                {
                    title: 'Дата создания',
                    key: 'created_at',
                    dataIndex: 'created_at',
                },
                {
                    title: 'Дата обновления',
                    key: 'updated_at',
                    dataIndex: 'updated_at',
                },
                {
                    key: 'action', slots: { customRender: 'action' }
                }
            ],
            formState: {
                name: '',
                offer_type: 1,
                description: '',
                id: null
            },
            openSelectItem: {

            },
            isProductType: false,
            showSelectItem: false,
            selectObjectItem: {},
            isOpenItem: false,
            currentCount: 1,
            totalCount: 1,
            selectSortItem: null,
            sortArray: [],
            sortType: 'DESC'
        }
    },
    created() {
        this.createSortList()
        this.getItems(true)
    },
    props: {
        error: {
            type: Function
        },
        success: {
            type: Function
        }
    },
    methods: {
        changeSortType(val) {
            this.sortType = val
            this.getItems()
        },
        createSortList() {
            let sorts = [...this.columns].filter(el => el.title)
            let defaultSort = {
                title: 'Умолчанию',
                key: 'id',
                dataIndex: 'id',
            }
            this.selectSortItem = defaultSort
            sorts.push(defaultSort)
            this.sortArray = sorts
        },
        selectSort(key) {
            this.selectSortItem = key
            this.getItems()
        },
        createProductType() {
            this.isProductType = true
        },
        async onFinish(values) {
            let methodType = 'POST'
            let url = '/api/product-type/'

            if (this.showSelectItem) {
                methodType = 'PUT'
                url = '/api/product-type/' + this.formState.id
            }

            let offer_type = this.formState.offer_type == 1 ? 'service' : 'commodity'
            await $fetch(url, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: methodType,
                body: {
                    "offer_type": offer_type,
                    "description": this.formState.description,
                    "name": this.formState.name,
                }

            }).then(res => {
                this.getItems()
                this.closeAll()
                this.formState.name = ''
                this.formState.offer_type = 1
                this.formState.description = ''
                this.formState.id = null
                this.success()
            }).catch(error => {
                this.error()
            })
        },
        changedPagination() {
            console.log()
            this.getItems()
        },
        getItems() {
            let url = '/api/product-type'
            url += '?page=' + this.currentCount
            url += '&sortBy=' + this.selectSortItem.key
            url += '&sortDirection=' + this.sortType
            $fetch(url, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'GET',
            }).then(res => {
                this.totalCount = res.data.links.length - 2
                this.currentCount = res.data.current_page

                let productType = JSON.parse(JSON.stringify(res.data.data))
                productType.forEach(el => {
                    el.key = el.id
                });
                this.dataEl = productType
            }).catch(error => {
                this.error()
            })
        },
        async deleteItem(id) {

            await $fetch(`/api/product-type/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'DELETE',

            }).then(res => {
                let currentEl = this.dataEl.findIndex(x => x.key === id)
                this.dataEl.splice(currentEl, 1)
                this.success()
            }).catch(error => {
                this.error()
            })
        },
        editItem(id) {
            this.showSelectItem = true
            let currentEl = this.dataEl[this.dataEl.findIndex(x => x.key === id)]
            this.formState.name = currentEl.name
            this.formState.offer_type = currentEl.offer_type === 'service' ? 1 : 2
            this.formState.description = currentEl.description
            this.formState.id = id

        },
        openItem(id) {
            let currentEl = this.dataEl[this.dataEl.findIndex(x => x.key === id)]
            this.openSelectItem = currentEl
            this.isOpenItem = true
        },
        closeAll() {
            this.isProductType = false
            this.showSelectItem = false
            this.isOpenItem = false
        },
    },
    setup() {
        const authStore = useAuthStore()

        return {
            authStore
        };
    },
}
</script>

<style scoped>
h1 {
    font-size: 25px;
    margin-bottom: 25px;
}

.open-item li {
    display: flex;
}

.open-item .ant-list-item div {
    padding-right: 10px;
    border-right: 2px solid #f0f0f0;
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
    min-width: 147px;
}

.open-item .ant-list {
    position: relative;
}

.btn-container {
    position: absolute;
    right: 0;
    top: -40px;
}

.btn-container button {
    padding: 7px;

}

.open-item {
    padding-top: 50px;
}

.close-block {
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 40px;
    cursor: pointer;
}
</style>