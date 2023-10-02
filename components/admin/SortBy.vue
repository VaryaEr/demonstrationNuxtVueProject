<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            Сортировка по {{ selectItem.title }}
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu @click="onClick">
                <a-menu-item v-for="el in keyArray" :key="el">{{ el.title }}</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
    <a-radio-group v-model:value="sortDirection">
        <a-radio-button value="ASC" @click="onClickType('ASC')">По возрастанию</a-radio-button>
        <a-radio-button value="DESC" @click="onClickType('DESC')">По убыванию</a-radio-button>
    </a-radio-group>
</template>
<script>
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        DownOutlined,
    },
    data() {
        return {
            sortDirection: "DESC",
        }
    },
    props: {
        isSelectItem: {
            type: Function
        },
        selectSortType: {
            type: Function
        },
        keyArray: Array,
        selectItem: String,
    },
    methods: {
        onClick(key) {
            this.isSelectItem(key.key)
        },
        onClickType(val) {
            this.selectSortType(val)
        }
    }
});
</script>
<style scoped>
.ant-dropdown-link {
    margin-left: 100px;
    font-size: 16px;
    color: black;
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.ant-radio-group {
    margin-left: 30px;
}
</style>