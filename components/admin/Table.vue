<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template v-slot:action="{ record }">
      <div class="btn-container">
        <button
          v-if="isCanEdit"
          @click="editMethod(record.key)"
          id="edit-btn"
          class="ant-dropdown-link"
        >
          <font-awesome-icon icon="fa-solid fa-pen" />
        </button>
        <button
          @click="openMethod(record.key)"
          id="edit-eye"
          class="ant-dropdown-link"
        >
          <font-awesome-icon icon="fa-solid fa-eye" />
        </button>
        <button
          v-if="isCanDelete"
          @click="deleteMethod(record.key)"
          id="edit-trash"
          class="ant-dropdown-link"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>
    </template>
  </a-table>
</template>

<script>
export default {
  methods: {
    editEl() {
      console.log(1);
    },
    openEl() {
      console.log(2);
    },
    openDelete() {
      console.log(3);
    },
  },
  props: {
    columns: Array,
    data: Array,
    isCanDelete: Boolean,
    isCanEdit: Boolean,
    deleteMethod: {
      type: Function,
    },
    editMethod: {
      type: Function,
    },
    openMethod: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.ant-table-wrapper {
  width: 100%;
  margin-top: 60px;
}

.btn-container {
  width: max-content;
}

.ant-menu-inline {
  width: 256px;
  max-width: 25%;
  height: 100vh;
  position: fixed;
}

.ant-switch-checked,
.ant-switch {
  position: absolute;
  right: 20px;
  top: 20px;
}

.header-title {
  display: block;
  height: 55px;
  font-size: 19px;
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.container-block {
  display: flex;
}

.template-block {
  width: auto;
  padding-left: 20px;
  margin-right: auto;
  margin-top: 60px;
  margin-left: 256px;
}

.ant-table-thead > tr > th {
  background: #dddada;
}

.ant-dropdown-link {
  color: #606060;
  padding-right: 4px;
  padding-left: 4px;
  transition: 0.3s ease;
}

.ant-dropdown-link:hover {
  color: #979797;
}
</style>