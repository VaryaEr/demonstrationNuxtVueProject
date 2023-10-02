<template>
  <div
    @click="closeAll()"
    v-if="isProductType || showSelectItem || isOpenItem"
    class="close-block"
  >
    x
  </div>
  <div
    class="table-block"
    v-if="!isProductType && !showSelectItem && !isOpenItem"
  >
    <h1>Заказы</h1>

    <LazyAdminSortBy
      :selectSortType="changeSortType"
      :keyArray="sortArray"
      :isSelectItem="selectSort"
      :selectItem="selectSortItem"
    >
    </LazyAdminSortBy>
    <LazyAdminTable
      :isCanEdit="true"
      v-if="dataEl"
      :editMethod="editItem"
      :openMethod="openItem"
      :deleteMethod="deleteItem"
      :data="dataEl"
      :columns="columns"
      :isCanDelete="false"
    >
    </LazyAdminTable>

    <a-pagination
      :pageSize="1"
      v-model:total="totalCount"
      @change="changedPagination()"
      v-model:current="currentCount"
      show-less-items
    />
  </div>
  <div v-if="isProductType || showSelectItem">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="Статусы" required>
        <a-select style="width: 200px" v-model:value="formState.status">
          <a-select-option v-for="el in status" :key="el" :value="el.eng">{{
            el.ru
          }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item v-if="showSelectItem">
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          Сохранить заказ
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  <div class="open-item" v-if="isOpenItem">
    <a-list bordered>
      <div class="btn-container">
        <button
          @click="editItem(openSelectItem.key)"
          id="edit-btn"
          class="ant-dropdown-link"
        >
          <font-awesome-icon icon="fa-solid fa-pen" />
        </button>
        <button
          @click="deleteItem(openSelectItem.key)"
          id="edit-trash"
          class="ant-dropdown-link"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>
      <a-list-item>
        <div>Id</div>
        {{ openSelectItem.id }}
      </a-list-item>
      <a-list-item>
        <div>ФИО</div>
        {{ openSelectItem.fio }}
      </a-list-item>
      <a-list-item>
        <div>E-mail</div>
        {{ openSelectItem.email }}
      </a-list-item>
      <a-list-item>
        <div>Статус</div>
        {{ openSelectItem.status_ru }}
      </a-list-item>
      <a-list-item>
        <div>Дата создания</div>
        {{ openSelectItem.created_at }}
      </a-list-item>
      <a-list-item>
        <div>Дата обновления</div>
        {{ openSelectItem.updated_at }}
      </a-list-item>
    </a-list>
    <LazyAdminTable
      :isCanEdit="false"
      :data="openSelectItem.order_items"
      :columns="productsColumns"
      :isCanDelete="false"
    >
    </LazyAdminTable>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth";
export default {
  data() {
    return {
      dataEl: null,
      columns: [
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "ФИО",
          dataIndex: "fio",
          key: "fio",
        },
        {
          title: "E-mail",
          key: "email",
          dataIndex: "email",
        },
        {
          title: "Id платежа",
          key: "payment_id",
          dataIndex: "payment_id",
        },
        {
          title: "Статус",
          key: "status_ru",
          dataIndex: "status_ru",
        },
        {
          title: "Дата создания",
          key: "created_at_changed",
          dataIndex: "created_at_changed",
        },
        {
          title: "Дата обновления",
          key: "updated_at_changed",
          dataIndex: "updated_at_changed",
        },
        {
          key: "action",
          slots: { customRender: "action" },
        },
      ],
      productsColumns: [
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Цена за единицу",
          dataIndex: "cost",
          key: "cost",
        },
        {
          title: "Количество",
          key: "count",
          dataIndex: "count",
        },
      ],
      productsOrder: [],
      status: [
        {
          eng: "pendingSale",
          ru: "Ожидает оплаты",
        },
        {
          eng: "canceled",
          ru: "Отменён",
        },
        {
          eng: "refund",
          ru: "Сделан возврат",
        },
        {
          eng: "paid",
          ru: "Оплачено",
        },
        {
          eng: "created",
          ru: "Создан",
        },
        {
          eng: "paidAtTheOffice",
          ru: "Оплачен в офисе",
        },
      ],
      formState: {
        status: "",
      },
      openSelectItem: {},
      isProductType: false,
      showSelectItem: false,
      selectObjectItem: {},
      isOpenItem: false,
      currentCount: 1,
      totalCount: 1,
      selectSortItem: null,
      sortArray: [],
      sortType: "DESC",
    };
  },
  created() {
    this.createSortList();
    this.getItems(true);
  },
  props: {
    error: {
      type: Function,
    },
    success: {
      type: Function,
    },
  },
  methods: {
    changeSortType(val) {
      this.sortType = val;
      this.getItems();
    },
    createSortList() {
      let sorts = [...this.columns].filter((el) => el.title);
      let defaultSort = {
        title: "Умолчанию",
        key: "id",
        dataIndex: "id",
      };
      this.selectSortItem = defaultSort;
      sorts.push(defaultSort);
      this.sortArray = sorts;
    },
    createProductType() {
      this.isProductType = true;
    },
    changedPagination() {
      this.getItems();
    },
    selectSort(key) {
      this.selectSortItem = key;
      this.getItems();
    },
    async onFinish(values) {
      let methodType = "POST";
      let url = "/api/order/";

      if (this.showSelectItem) {
        methodType = "PUT";
        url = "/api/order/" + this.formState.id;
      }
      await $fetch(url, {
        headers: {
          Authorization: `Bearer ${this.authStore.access_token}`,
        },
        method: methodType,
        body: {
          status: this.formState.status,
        },
      })
        .then((res) => {
          this.getItems();
          this.closeAll();
          this.formState.status = "";
          this.formState.id = null;
          this.success();
        })
        .catch((error) => {
          this.error();
        });
    },

    getItems() {
      let url = "/api/order";
      url += "?page=" + this.currentCount;
      url += "&sortBy=" + this.selectSortItem.key;
      url += "&sortDirection=" + this.sortType;
      $fetch(url, {
        headers: {
          Authorization: `Bearer ${this.authStore.access_token}`,
        },
        method: "GET",
      })
        .then((res) => {
          this.totalCount = res.data.links.length - 2;
          this.currentCount = res.data.current_page;
          let productType = JSON.parse(JSON.stringify(res.data.data));
          productType.forEach((el) => {
            el.key = el.id;
            el.fio = `${el.user_name} ${el.user_sername}`;
            el.updated_at_changed = el.updated_at
              .replace(".000000Z", "")
              .replace("T", " ");
            el.created_at_changed = el.created_at
              .replace(".000000Z", "")
              .replace("T", " ");
            el.status_ru =
              this.status[this.status.findIndex((x) => x.eng === el.status)].ru;
            el.order_items.forEach((prod) => {
              prod.name = `${prod.trade_offer.product.name}`;
              if (prod.trade_offer.packing) {
                prod.name += ` ${prod.trade_offer.packing.name}`;
              }
            });
          });
          this.dataEl = productType;
        })
        .catch((error) => {});
    },
    async deleteItem(id) {
      await $fetch(`/api/packing/${id}`, {
        headers: {
          Authorization: `Bearer ${this.authStore.access_token}`,
        },
        method: "DELETE",
      })
        .then((res) => {
          let currentEl = this.dataEl.findIndex((x) => x.key === id);
          this.dataEl.splice(currentEl, 1);
          this.success();
        })
        .catch((error) => {
          this.error();
        });
    },
    editItem(id) {
      this.showSelectItem = true;
      let currentEl = this.dataEl[this.dataEl.findIndex((x) => x.key === id)];
      this.formState.status = currentEl.status;
      this.formState.id = currentEl.id;
    },
    openItem(id) {
      let currentEl = this.dataEl[this.dataEl.findIndex((x) => x.key === id)];
      this.openSelectItem = currentEl;
      this.isOpenItem = true;
      this.productsOrder = currentEl.order_items;
    },
    closeAll() {
      this.isProductType = false;
      this.showSelectItem = false;
      this.isOpenItem = false;
    },
  },
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
};
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

.table-block li.ant-pagination-options {
  display: none;
}
</style>