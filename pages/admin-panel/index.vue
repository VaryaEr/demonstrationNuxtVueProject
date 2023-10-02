<template>
  <div v-if="!isAuth" class="auth-block">
    <h1>Авторизация</h1>
    <a-form :model="formState" name="normal_login" class="login-form">
      <a-form-item
        label="E-mail"
        name="username"
        :rules="[
          {
            required: true,
            message: 'Поле введено некорректно',
            type: 'email',
          },
        ]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix> </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Пароль"
        name="password"
        :rules="[{ required: true, message: 'Поле введено некорректно' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix> </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember"
            >Запомнить пароль</a-checkbox
          >
        </a-form-item>
      </a-form-item>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          Войти
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  <div v-if="isAuth">
    <a-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    />
    <div class="container-block">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        mode="inline"
        :theme="theme"
      >
        <div class="header-title">Админ-панель</div>
        <a-menu-item key="productType"> Типы товаров </a-menu-item>
        <a-menu-item key="products"> Товары </a-menu-item>
        <a-menu-item key="tradeOffers"> Торговые предложения </a-menu-item>
        <a-menu-item key="packings"> Признаки </a-menu-item>
        <a-menu-item key="orders"> Заказы </a-menu-item>
        <a-menu-item key="users"> Пользователи </a-menu-item>
      </a-menu>
      <div class="template-block">
        <LazyAdminProductType
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'productType'"
        >
        </LazyAdminProductType>
        <LazyAdminOrders
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'orders'"
        >
        </LazyAdminOrders>
        <LazyAdminProducts
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'products'"
        >
        </LazyAdminProducts>
        <LazyAdminUsers
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'users'"
        >
        </LazyAdminUsers>
        <LazyAdminTradeOffers
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'tradeOffers'"
        >
        </LazyAdminTradeOffers>
        <LazyAdminPackings
          :error="error"
          :success="success"
          v-if="selectedKeys.toString() === 'packings'"
        >
        </LazyAdminPackings>
      </div>
    </div>
  </div>
</template>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

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
  padding-right: 20px;
  padding-bottom: 100px;
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

.auth-block {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.auth-block h1 {
  font-size: 25px;
  margin-bottom: 25px;
}

.auth-block .ant-form {
  width: 50%;
}
</style>
<script>
definePageMeta({ layout: "other" });
import { useAuthStore } from "../../stores/auth";
import { Modal } from "ant-design-vue";

export default {
  data() {
    return {
      isAuth: true,
      formState: {
        username: "",
        password: "",
        remember: true,
      },
    };
  },
  created() {},
  computed: {
    disabled() {
      return !(this.formState.username && this.formState.password);
    },
  },
  methods: {
    replaceAuthStore(token) {
      this.authStore.replaceAuth(token);
    },
  },
  setup() {
    const authStore = useAuthStore();
    const state = reactive({
      theme: "dark",
      selectedKeys: ["productType"],
    });
    const changeTheme = (checked) => {
      state.theme = checked ? "dark" : "light";
    };
    const error = () => {
      Modal.error({
        title: "Ошибка!",
        content: h("div", {}, [
          h("p", "Операция прошла с ошибкой"),
          h(
            "p",
            "Попробуйте повторить снова, поменять данные или перезагрузить страницу"
          ),
        ]),
      });
    };
    const success = () => {
      Modal.success({
        title: "Успешно!",
        content: h("div", {}, [h("p", "Операция успешно выполнена")]),
      });
    };
    return {
      ...toRefs(state),
      changeTheme,
      authStore,
      error,
      success,
    };
  },
};
</script>