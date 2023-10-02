<template>
    <div @click="closeAll()" v-if="isOpenItem || isCreateUser || isCnahgePassword" class="close-block">
        x
    </div>
    <div v-if="!isCreateUser && !isOpenItem && !isCnahgePassword">
        <h1>Пользователи</h1>
        <a-button @click="createUser()">Создать пользователя</a-button>
        <a-button @click="changePassword()">Сменить мой пароль</a-button>
        <LazyAdminSortBy :selectSortType="changeSortType" :keyArray="sortArray" :isSelectItem="selectSort"
            :selectItem="selectSortItem"></LazyAdminSortBy>
        <LazyAdminTable :data="dataEl" :openMethod="openItem" :isCanEdit="false" :columns="columns" :isCanDelete="false">
        </LazyAdminTable>
        <a-pagination :pageSize="1" v-model:total="totalCount" @change="changedPagination()" v-model:current="currentCount"
            show-less-items />
    </div>
    <div v-if="isCreateUser">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Имя" name="name" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input v-model:value="formState.name">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="Фамилия" name="sername" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input v-model:value="formState.sername">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="E-mail" name="email"
                :rules="[{ required: true, message: 'Поле введено некорректно', type: 'email' }]">
                <a-input v-model:value="formState.email">
                    <template #prefix>
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="Пароль" name="password" :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item label="Пароль" name="repeatPassword" :rules="[{ required: true, message: 'Пароли не совпадают' }]">
                <a-input-password v-model:value="formState.repeatPassword">
                    <template #prefix>
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Создать пользователя
                </a-button>
            </a-form-item>
        </a-form>
    </div>
    <div v-if="isCnahgePassword">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinishPassword">
            <a-form-item label="Пароль" name="changePassword"
                :rules="[{ required: true, message: 'Поле введено некорректно' }]">
                <a-input-password v-model:value="formState.changePassword">
                    <template #prefix>
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item label="Пароль" name="changePasswordRepeat"
                :rules="[{ required: true, message: 'Пароли не совпадают' }]">
                <a-input-password v-model:value="formState.changePasswordRepeat">
                    <template #prefix>
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Сменить пароль
                </a-button>
            </a-form-item>
        </a-form>
    </div>
    <div class="open-item" v-if="isOpenItem">

        <a-list bordered>
            <a-list-item>
                <div>Имя</div> {{ openSelectItem.name }}
            </a-list-item>


            <a-list-item>
                <div>Фамилия</div> {{ openSelectItem.sername }}
            </a-list-item>


            <a-list-item>
                <div>E-mail</div> {{ openSelectItem.email }}
            </a-list-item>
            <a-list-item>
                <div>Роль</div> {{ openSelectItem.role }}
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
                    title: 'Фамилия',
                    dataIndex: 'sername',
                    key: 'sername',
                },
                {
                    title: 'E-mail',
                    key: 'email',
                    dataIndex: 'email',
                },
                {
                    title: 'Роль',
                    key: 'role',
                    dataIndex: 'role',
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
                password: '',
                repeatPassword: '',
                email: '',
                sername: '',
                changePassword: '',
                changePasswordRepeat: ''
            },
            openSelectItem: {

            },
            selectObjectItem: {},
            isOpenItem: false,
            showSelectItem: false,
            isCreateUser: false,
            isCnahgePassword: false,
            currentCount: 1,
            totalCount: 1,
            selectSortItem: null,
            sortArray: [],
            sortType: 'DESC'
        }
    },
    created() {
        this.createSortList()
        this.getItems()

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
        createUser() {
            this.isCreateUser = true
        },
        async onFinish(values) {
            this.isCreateUser = false
            await $fetch('/api/signup', {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'POST',
                body: {
                    "password": this.formState.password,
                    "name": this.formState.name,
                    "sername": this.formState.sername,
                    "email": this.formState.email
                }

            }).then(res => {
                this.getItems()
                this.formState.password = ''
                this.formState.name = ''
                this.formState.sername = ''
                this.formState.email = ''
                this.formState.repeatPassword = ''
                this.success()
            }).catch(error => {
                this.error()
            })
        },
        async onFinishPassword() {
            this.isCnahgePassword = false
            await $fetch('/api/user/upd-pwd', {
                headers: {
                    Authorization: `Bearer ${this.authStore.access_token}`,
                },
                method: 'PUT',
                body: {
                    "password": this.formState.changePassword
                }

            }).then(res => {
                this.getItems()
                this.formState.changePassword = ''
                this.formState.changePasswordRepeat = ''
                this.success()
            }).catch(error => {
                this.error()
            })
        },
        changePassword() {
            this.isCnahgePassword = true

        },
        changedPagination() {
            this.getItems()
        },
        getItems() {
            let url = '/api/user'
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

            })
        },
        openItem(id) {
            this.closeAll()
            let currentEl = this.dataEl[this.dataEl.findIndex(x => x.key === id)]
            this.openSelectItem = currentEl
            this.isOpenItem = true
        },
        closeAll() {
            this.isCreateUser = false
            this.showSelectItem = false
            this.isOpenItem = false
            this.isCnahgePassword = false
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