<template>
    <div @click="closeAll()" v-if="isProductType || showSelectItem || isOpenItem" class="close-block">
        x
    </div>
    <div v-if="!isProductType && !showSelectItem && !isOpenItem">
        <h1>Торговое предложения</h1>
        <a-button @click="createProductType()">Создать торговое предложение</a-button>
        <LazyAdminSortBy :selectSortType="changeSortType" :keyArray="sortArray" :isSelectItem="selectSort"
            :selectItem="selectSortItem"></LazyAdminSortBy>
        <LazyAdminTable v-if="dataEl" :editMethod="editItem" :openMethod="openItem" :deleteMethod="deleteItem"
            :data="dataEl" :isCanEdit="true" :columns="columns" :isCanDelete="false">
        </LazyAdminTable>
        <a-pagination :pageSize="1" v-model:total="totalCount" @change="changedPagination()" v-model:current="currentCount"
            show-less-items />
    </div>
    <div v-if="isProductType || showSelectItem" class="form-content">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Описание" name="description" :rules="[{ message: 'Поле введено некорректно' }]">
                <a-textarea v-model:value="formState.description" placeholder="Описание" auto-size />
            </a-form-item>
            <a-form-item label="Цена" name="price" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input v-model:value="formState.price">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="Количество" name="count" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input v-model:value="formState.count">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="Товар" required>

                <a-select show-search not-found-content="Не найдено" @search="searchVal"
                    v-model:value="formState.product_id" :filter-option="false">
                    <a-select-option v-for="el in dataElProd" :key="el" :value="el.key">{{ el.name
                    }}</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="Признак">
                <a-select show-search :filter-option="false" not-found-content="Не найдено" @search="searchPacking"
                    v-model:value="formState.packing_id">

                    <a-select-option v-for="el in dataElPack" :key="el" :value="el.id">{{ el.name
                    }}</a-select-option>

                </a-select>
            </a-form-item>
            <a-radio-group v-model:value="formState.offer_type">
                <a-radio :value="1">Не выбрано</a-radio>
                <a-radio :value="2">service</a-radio>
                <a-radio :value="3">commodity</a-radio>
            </a-radio-group>
            <a-form-item label="Налоговая ставка" required>
                <a-select style="width: 300px;" v-model:value="formState.vat_code">
                    <a-select-option v-for="el in vatCodeArray" :key="el" :value="el.id">{{ el.name
                    }}</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="В архиве">
                <a-checkbox-group v-model:value="formState.in_archive">
                    <a-checkbox value="1" name="type"></a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item v-if="!showSelectItem">
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Создать торговое предложение
                </a-button>
            </a-form-item>
            <a-form-item v-else-if="showSelectItem">
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Сохранить изменения торгового предложения
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
                <div>Описание</div> {{ openSelectItem.description }}
            </a-list-item>


            <a-list-item>
                <div>Тип товара</div> {{ openSelectItem.product_type_name }}
            </a-list-item>
            <a-list-item>
                <div>Товар</div> {{ openSelectItem.product_name }}
            </a-list-item>
            <a-list-item>
                <div>Признак</div> {{ openSelectItem.packing_name }}
            </a-list-item>

            <a-list-item>
                <div>Цена</div> {{ openSelectItem.price }}
            </a-list-item>
            <a-list-item>
                <div>Количество</div> {{ openSelectItem.count }}
            </a-list-item>
            <a-list-item>
                <div>Налоговая ставка</div> {{ openSelectItem.vat_code_name
                }}
            </a-list-item>
            <a-list-item>
                <div>В архиве</div> {{ openSelectItem.in_archive_name
                }}
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
            dataEl: [],
            columns: [
                {
                    title: 'Тип товара',
                    dataIndex: 'product_type_name',
                    key: 'product_type_name',
                },
                {
                    title: 'Товар',
                    dataIndex: 'product_name',
                    key: 'product_name',
                },
                {
                    title: 'Признак',
                    dataIndex: 'packing_name',
                    key: 'packing_name',
                },
                {
                    title: 'Цена',
                    dataIndex: 'price',
                    key: 'price',
                },
                {
                    title: 'В архиве',
                    dataIndex: 'in_archive_name',
                    key: 'in_archive_name',
                },
                {
                    title: 'Налоговая ставка',
                    dataIndex: 'vat_code_name',
                    key: 'vat_code_name',
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
                    key: 'action', slots: { customRender: 'action' }
                }
            ],
            dataElType: null,
            formState: {
                description: '',
                product_type_id: undefined,
                product_id: undefined,
                price: 0,
                count: 1,
                id: null,
                packing_id: undefined,
                vat_code: 4,
                in_archive: false,
                offer_type: 1,
            },
            dataElProd: null,
            openSelectItem: {

            },
            isProductType: false,
            showSelectItem: false,
            selectObjectItem: {},
            isOpenItem: false,
            dataElPack: null,
            currentCount: 1,
            totalCount: 1,
            selectSortItem: null,
            sortArray: [],
            sortType: 'DESC',
            vatCodeArray: [
                {
                    id: 0,
                    name: 'Неизвестно'
                },
                {
                    id: 1,
                    name: 'Без НДС'
                },
                {
                    id: 2,
                    name: 'НДС по ставке 0%'
                },
                {
                    id: 3,
                    name: 'НДС по ставке 10%'
                },
                {
                    id: 4,
                    name: 'НДС чека по ставке 20%'
                },
                {
                    id: 5,
                    name: 'НДС чека по расчетной ставке 10/110'
                },
                {
                    id: 6,
                    name: 'НДС чека по расчетной ставке 20/120'
                },
            ]
        }
    },
    props: {
        error: {
            type: Function
        },
        success: {
            type: Function
        }
    },
    created() {
        this.createSortList()
        this.getItems()

    },
    methods: {
        searchVal(value) {
            if (value.length > 2) {
                let urlProduct = '/api/product'
                urlProduct += '?name=' + value


                $fetch(urlProduct, {
                    headers: {
                        Authorization: `Bearer ${this.authStore.access_token}`,
                    },
                    method: 'GET',
                }).then(res => {
                    let productType = JSON.parse(JSON.stringify(res.data.data))
                    productType.forEach(el => {
                        el.key = el.id
                    });

                    this.dataElProd = productType

                }).catch(error => {
                    
                    this.error()
                })
            }
        },
        searchPacking(value) {

            if (value.length > 2) {
                let urlPacking = '/api/packing'
                urlPacking += '?name=' + value


                $fetch(urlPacking, {
                    headers: {
                        Authorization: `Bearer ${this.authStore.access_token}`,
                    },
                    method: 'GET',
                }).then(res => {
                    let productType = JSON.parse(JSON.stringify(res.data.data))
                    this.dataElPack = productType

                }).catch(error => {
                    
                    this.error()
                })
            }
        },

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
            let url = '/api/trade-offer/'

            if (this.showSelectItem) {
                methodType = 'PUT'
                url = '/api/trade-offer/' + this.formState.id
            }

            let data = {
                "product_id": this.formState.product_id,
                "description": this.formState.description,
                "price": this.formState.price,
                "count": this.formState.count,
                "packing_id": this.formState.packing_id,
                "vat_code": this.formState.vat_code,
                "in_archive": !!this.formState.in_archive,

            }
            if (this.formState.offer_type !== 1) {
                let offer_type = this.formState.offer_type == 2 ? 'service' : 'commodity'
                data.offer_type = offer_type
            }
            await $fetch(url, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: methodType,
                body: data

            }).then(res => {
                this.getItems()
                this.closeAll()
                this.formState.product_id = undefined
                this.formState.description = ''
                this.formState.price = 0
                this.formState.count = 1
                this.formState.packing_id = undefined
                this.formState.id = null
                this.success()
            }).catch(error => {
                
                this.error()
            })
        },
        changedPagination() {
            this.getItems()
        },
        getItems() {
            let url = '/api/trade-offer'
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
                    el.product_type_id = el.product.product_type_id
                    el.product_name = el.product.name
                    el.in_archive_name = !!el.in_archive === true ? '+' : '-'
                    el.vat_code_name = this.vatCodeArray[this.vatCodeArray.findIndex(x => x.id === el.vat_code)].name
                    if (el.packing) {
                    el.packing_name = el.packing.name
                    }
                    el.product_type_name = el.product.product_type.name
                });
                this.dataEl = productType
                this.getProducts()
            }).catch(error => {
                
                this.error()
            })

            
        },
        getProducts() {
            
            let urlProduct = '/api/product'

            $fetch(urlProduct, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'GET',
            }).then(res => {
                let productType = JSON.parse(JSON.stringify(res.data.data))
                productType.forEach(el => {
                    el.key = el.id
                });

                this.dataElProd = productType
                this.getProductsType()
            }).catch(error => {
                
                this.error()
            })

        },
        getProductsType() {
            $fetch('/api/product-type', {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'GET',
            }).then(res => {
                let productType = JSON.parse(JSON.stringify(res.data.data))
                productType.forEach(el => {
                    el.key = el.id

                });
                this.dataElType = productType
           
                this.getPackings()
            }).catch(error => {
                
                this.error()
            })
        },
        getPackings() {
            let urlPacking = '/api/packing'


            $fetch(urlPacking, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'GET',
            }).then(res => {
                let productType = JSON.parse(JSON.stringify(res.data.data))
                this.dataElPack = productType
           
            }).catch(error => {
                
                this.error()
            })
        },
        async deleteItem(id) {

            await $fetch(`/api/trade-offer/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'PUT',
                body: {
                    "in_archive": true,

                }
            }).then(res => {
                let currentEl = this.dataEl.findIndex(x => x.key === id)
                this.dataEl.splice(currentEl, 1)
                this.closeAll()
                this.success()
            }).catch(error => {
                
                this.error()
            })
        },
        editItem(id) {
            this.closeAll()
            this.showSelectItem = true
            let currentEl = this.dataEl[this.dataEl.findIndex(x => x.key === id)]
            this.formState.product_id = currentEl.product_id
            this.formState.description = currentEl.description
            this.formState.id = id
            this.formState.price = currentEl.price
            this.formState.count = currentEl.count
            this.formState.packing_id = currentEl.packing_id
            this.formState.vat_code = currentEl.vat_code
            this.formState.in_archive = currentEl.in_archive

        },
        openItem(id) {
            this.closeAll()
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
            authStore,
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