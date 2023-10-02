<template>
  <div
    data-elementor-type="wp-page"
    data-elementor-id="8489"
    class="elementor elementor-8489"
  >
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-8610372 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="8610372"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6fb7a91"
          data-id="6fb7a91"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-1b4b753 elementor-widget elementor-widget-aheto_heading"
              data-id="1b4b753"
              data-element_type="widget"
              data-widget_type="aheto_heading.default"
            >
              <div class="elementor-widget-container">
                <div
                  class="aheto-heading aheto-heading--rela__simple aheto_heading_63d2ffb8e192d"
                >
                  <h2 class="aheto-heading__title">Корзина</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-1ea27bf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="1ea27bf"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-default">
        <div
          class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-07e7df7"
          data-id="07e7df7"
          data-element_type="column"
        >
          <div class="elementor-widget-wrap elementor-element-populated">
            <div
              class="elementor-element elementor-element-7028ca6 elementor-widget elementor-widget-html"
              data-id="7028ca6"
              data-element_type="widget"
              data-widget_type="html.default"
            >
              <div class="elementor-widget-container">
                <div class="big-cart">
                  <div class="select-all">
                    <input
                      type="checkbox"
                      id="select-all"
                      name="select-all"
                      v-model="selectAll"
                    />
                    <label for="select-all">Выбрать все</label>
                  </div>
                  <div class="cart-wrapper">
                    <div class="cart-header cart-line">
                      <div class="ci-title">Наименование</div>
                      <div class="ci-price">Цена</div>
                      <div class="ci-quantity">Количество</div>
                      <div class="ci-total">Сумма</div>
                      <div class="ci-remove"></div>
                    </div>
                    <div v-if="items.length === 0" class="big-cart-items">
                      <div class="cart-empty">Корзина пуста</div>
                    </div>
                    <div v-if="items.length > 0" class="big-cart-items">
                      <div
                        v-for="item in items"
                        :key="item.id"
                        class="cart-line"
                      >
                        <div class="select-block">
                          <input
                            type="checkbox"
                            value="1"
                            v-model="item.select"
                          />
                        </div>

                        <div class="ci-title">
                          <div class="name-block">{{ item.product.name }}</div>
                          <div v-if="item.packing" class="packing-block">
                            {{ item.packing.name }}
                          </div>
                        </div>
                        <div class="ci-price">
                          {{ validationPrice(item.price) }} ₽
                        </div>
                        <div class="ci-quantity line-item__quantity">
                          <button @click="minus(item)" class="minus">−</button>
                          <span>
                            {{ item.count }}
                          </span>
                          <button @click="plus(item)" class="plus">+</button>
                        </div>
                        <div class="ci-total">
                          {{ validationPrice(item.price * item.count) }} ₽
                        </div>
                        <button @click="deleteItem(item)" class="remove-item">
                          <font-awesome-icon icon="fa-solid fa-times" />
                        </button>
                      </div>
                    </div>
                    <div class="big-cart-total cart-line">
                      <div class="ci-title"></div>
                      <div class="ci-price"></div>
                      <div class="ci-quantity">Итого:</div>
                      <div class="ci-total">
                        {{ validationPrice(allAmout) }} ₽
                      </div>
                      <div class="ci-remove"></div>
                    </div>
                  </div>
                  <div v-if="isLimitAmount" class="max-amount">
                    Максимум для оплаты 1 платежом онлайн - {{ limitAmount }} ₽
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-461e31f elementor-widget elementor-widget-aheto_heading"
              data-id="461e31f"
              data-element_type="widget"
              data-widget_type="aheto_heading.default"
            >
              <div class="elementor-widget-container">
                <div
                  class="aheto-heading aheto-heading--rela__simple aheto_heading_63d2ffb8ebf72"
                >
                  <h2 class="aheto-heading__title">Оформить заказ</h2>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-455c87e elementor-widget elementor-widget-shortcode"
              data-id="455c87e"
              data-element_type="widget"
              data-widget_type="shortcode.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-shortcode">
                  <div
                    class="wpcf7 js"
                    id="wpcf7-f8506-p8489-o1"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div class="screen-reader-response">
                      <p
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                      ></p>
                      <ul></ul>
                    </div>
                    <form
                      method="post"
                      class="wpcf7-form init"
                      aria-label="Contact form"
                      novalidate="novalidate"
                      data-status="init"
                    >
                      <div class="cart-form">
                        <div class="form-row">
                          <p>
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="text-name"
                              ><input
                                size="40"
                                v-model="dataUser.name"
                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Ваше имя*"
                                type="text"
                                name="text-name" /></span
                            ><span
                              class="wpcf7-form-control-wrap"
                              data-name="text-last-name"
                              ><input
                                size="40"
                                v-model="dataUser.surname"
                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Ваша фамилия*"
                                type="text"
                                name="text-last-name"
                            /></span>
                          </p>
                        </div>
                        <div class="form-row">
                          <p>
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="number"
                              ><input
                                size="40"
                                class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Телефон*"
                                v-model="dataUser.phone"
                                type="tel"
                                name="number" /></span
                            ><span
                              class="wpcf7-form-control-wrap"
                              data-name="email"
                              ><input
                                size="40"
                                v-model="dataUser.email"
                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="E-mail*"
                                type="email"
                                name="email"
                            /></span>
                          </p>
                        </div>
                        <div class="form-row-single">
                          <p>
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="text-comment"
                              ><input
                                size="40"
                                class="wpcf7-form-control wpcf7-text"
                                aria-invalid="false"
                                placeholder="Комментарий"
                                type="text"
                                name="text-comment"
                                v-model="dataUser.comment"
                            /></span>
                          </p>
                        </div>
                        <div class="form-acceptance">
                          <p>
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="acceptance-382"
                              ><span class="wpcf7-form-control wpcf7-acceptance"
                                ><span class="wpcf7-list-item"
                                  ><label
                                    ><input
                                      type="checkbox"
                                      name="acceptance-382"
                                      v-model="dataUser.agree"
                                      aria-invalid="false"
                                    /><span class="wpcf7-list-item-label"
                                      >Я даю свое согласие на обработку и
                                      использование моих персональных
                                      данных*</span
                                    ></label
                                  ></span
                                ></span
                              ></span
                            >
                          </p>
                        </div>
                        <div class="form-actions">
                          <p>
                            <button
                              @click="submitOrder(true)"
                              :disabled="!validationUserDataOnline()"
                              class="wpcf7-form-control has-spinner wpcf7-submit aheto-btn aheto-btn--primary aheto-btn--reverse"
                            >
                              ОПЛАТИТЬ ОНЛАЙН</button
                            ><span class="wpcf7-spinner"> </span>
                          </p>
                          <p>
                            <button
                              @click="submitOrder(false)"
                              :disabled="!validationUserData()"
                              class="wpcf7-form-control has-spinner wpcf7-submit aheto-btn aheto-btn--primary aheto-btn--reverse"
                            >
                              ОПЛАТИТЬ В КЛИНИКЕ</button
                            ><span class="wpcf7-spinner"> </span>
                          </p>
                        </div>
                      </div>
                      <div
                        class="wpcf7-response-output"
                        aria-hidden="true"
                      ></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-b0f70ab elementor-widget elementor-widget-aheto_heading"
              data-id="b0f70ab"
              data-element_type="widget"
              data-widget_type="aheto_heading.default"
            >
              <div class="elementor-widget-container">
                <div
                  class="aheto-heading aheto-heading--rela__simple aheto_heading_63d2ffb9004fd"
                >
                  <p class="aheto-heading__desc">
                    Мы ждем вас по адресу: Москва, Каширское шоссе, д.3, корп.2,
                    стр.4, этаж 6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <LazyModalWindow v-if="showModal" :text="textModal"> </LazyModalWindow>
</template>
<script>
import { useBasketStore } from "../stores/basket";
import { useUtmStore } from "../stores/utm";

export default {
  data() {
    return {
      selectAll: true,
      limitAmount: 250000,
      isLimitAmount: false,
      dataUser: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        comment: "",
        agree: "",
      },

      textModal: "",
      showModal: false,
    };
  },
  watch: {
    // Note: only simple paths. Expressions are not supported.
    selectAll(val) {
      if (val === true) {
        this.items.forEach((el) => {
          el.select = true;
        });
      } else {
        this.items.forEach((el) => {
          el.select = false;
        });
      }
    },
    "dataUser.phone": function (val) {
      if (val !== undefined && val !== null) {
        this.dataUser.phone = this.telMask(val);
      }
    },
  },
  computed: {
    allAmout() {
      let amount = 0;
      this.basketStore.basketArray.forEach((el) => {
        if (el.select) {
          amount += el.count * el.price;
        }
      });
      this.isLimitAmount = this.limitAmount <= amount;
      return amount;
    },
    items() {
      let itemsArray = [...this.basketStore.basketArray];
      itemsArray.forEach((el) => {
        el.select = true;
      });
      return itemsArray;
    },
  },
  methods: {
    validationUserData() {
      let res = true;
      res &= this.dataUser.name.length > 2;
      res &= this.dataUser.surname.length > 2;
      res &= this.dataUser.phone.length === 18;
      res &= this.dataUser.email.length > 5;
      res &= this.dataUser.agree === true;
      res &= this.items.length > 0;
      return res;
    },
    validationUserDataOnline() {
      let res = true;
      res &= this.validationUserData();
      res &= this.isLimitAmount === false;

      return res;
    },
    submitOrder(isAcquiring) {
      event.preventDefault();
      let items = [];
      this.items.forEach((el) => {
        if (el.select === true) {
          let objectItem = {
            id: el.id,
            count: el.count,
          };
          items.push(objectItem);
        }
      });
      let url = "api/client/order";

      const my_source = this.utmStore.utm_source;
      const my_campaign = this.utmStore.utm_campaign;
      const my_content = this.utmStore.utm_content;
      const my_medium = this.utmStore.utm_medium;
      let data = {
        user_name: this.dataUser.name,
        user_sername: this.dataUser.surname,
        email: this.dataUser.email,
        phone: this.dataUser.phone,
        user_data_confirm: !!this.dataUser.agree,
        items: items,
        isAcquiring: isAcquiring,
        utm_source: my_source,
        utm_campaign: my_campaign,
        utm_content: my_content,
        utm_medium: my_medium,
      };
      if (this.dataUser.comment && this.dataUser.comment.length > 3) {
        data.comment = this.dataUser.comment;
      }

      $fetch(url, {
        method: "POST",
        body: data,
      })
        .then((res) => {
          if (res.status == "success") {
            let formData = {
              fio: this.dataUser.name + " " + this.dataUser.surname,
              phoneNumber: this.dataUser.phone,
              requestUrl: window.location.href,
              subject: "Корзина - эквайринг",
              email: this.dataUser.email,
            };
            if (isAcquiring === true) {

              window.location.href = res.redirect;
            }

            this.items.forEach((el) => {
              if (el.select === true) {
                this.deleteItem(el);
              }
            });
            if (isAcquiring === false) {
              formData.subject = "Корзина - заказ";
              this.textModal = `Ваш заказ создан. Менеджеры свяжутся с Вами в ближайшее время`;
              this.showModal = true;
              setTimeout(() => {
                this.showModal = false;
              }, 4000);
            }
          }
        })
        .catch((error) => {
          this.textModal = `ОШИБКА! Повторите попытку позже`;
          this.showModal = true;
          setTimeout(() => {
            this.showModal = false;
          }, 4000);
        });
    },
    minus(el) {
      this.basketStore.minus(el);
    },
    plus(el) {
      this.basketStore.plus(el);
    },
    validationPrice: function (price) {
      let currentPrice = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 2,
      }).format(price);
      currentPrice = currentPrice.replace(",00", "");
      return currentPrice;
    },
    deleteItem(el) {
      this.basketStore.deleteItem(el);
    },
    telMask(value) {
      let mask = "+7 (000) 000-00-00";
      const telLegth = 11;
      let literalPattern = /[0\*]/;
      let numberPattern = /[0-9]/;
      let newValue = "";
      const number = value.replace(/[^\d]/g, "");
      if (number.length === telLegth) {
        return `+7 (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(
          7,
          9
        )}-${number.slice(9)}`;
      }
      try {
        let maskLength = mask.length;
        let valueIndex = 0;
        let maskIndex = 0;

        for (; maskIndex < maskLength; ) {
          if (maskIndex >= value.length) break;

          if (
            mask[maskIndex] === "0" &&
            value[valueIndex].match(numberPattern) === null
          )
            break;

          // Found a literal
          while (mask[maskIndex].match(literalPattern) === null) {
            if (value[valueIndex] === mask[maskIndex]) break;
            newValue += mask[maskIndex++];
          }
          newValue += value[valueIndex++];
          maskIndex++;
        }
        return newValue;
      } catch (e) {
        console.error(e);
      }
    },
  },
  setup() {
    const basketStore = useBasketStore();
    const utmStore = useUtmStore();
    return {
      basketStore,
      utmStore,
    };
  },
};
</script>
<style scoped>
@media all {
  .wpcf7 .screen-reader-response {
    position: absolute;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    word-wrap: normal !important;
  }

  .wpcf7 form .wpcf7-response-output {
    margin: 2em 0.5em 1em;
    padding: 0.2em 1em;
    border: 2px solid #00a0d2;
  }

  .wpcf7 form.init .wpcf7-response-output {
    display: none;
  }

  .wpcf7-form-control-wrap {
    position: relative;
  }

  .wpcf7-list-item {
    display: inline-block;
    margin: 0 0 0 1em;
  }

  .wpcf7-list-item-label::before,
  .wpcf7-list-item-label::after {
    content: " ";
  }

  .wpcf7-spinner {
    visibility: hidden;
    display: inline-block;
    background-color: #23282d;
    opacity: 0.75;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 100%;
    padding: 0;
    margin: 0 24px;
    position: relative;
  }

  .wpcf7-spinner::before {
    content: "";
    position: absolute;
    background-color: #fbfbfc;
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    border: none;
    border-radius: 100%;
    transform-origin: 8px 8px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .wpcf7-spinner::before {
      animation-name: blink;
      animation-duration: 2000ms;
    }
  }

  .wpcf7 .wpcf7-submit:disabled {
    cursor: not-allowed;
  }

  .wpcf7 input[type="email"],
  .wpcf7 input[type="tel"] {
    direction: ltr;
  }
}

@media all {
  .big-cart {
    padding: 40px;
    background: white;
    margin-top: 45px;
    padding-left: 70px;
  }

  .cart-line {
    display: grid;
    grid-template-columns: 6fr 3fr 3fr 3fr 1fr;
    grid-gap: 10px;
    font-family: "Old Standard TT";
    font-size: 22px;
    padding: 10px 0px;
    color: #000;
    align-items: flex-start;
  }

  .cart-header {
    font-family: "Arial";
    font-size: 18px;
    color: #565a5f;
    border-bottom: 1px solid #7f8388;
  }

  .big-cart-total {
    font-family: "Arial";
    border-top: 1px solid #7f8388;
  }

  .ci-price,
  .ci-quantity,
  .ci-total {
    justify-self: center;
    margin-bottom: 0px;
  }

  .ci-total {
    font-family: "Old Standard TT";
  }

  .ci-remove {
    justify-self: flex-end;
  }

  .cart-form {
    padding: 0px 40px;
  }

  .cart-form input:not([type="submit"]):not([type="checkbox"]) {
    width: 100%;
    padding: 13px 0px;
    border: none;
    border-bottom: 1px solid #7f8388;
    font-family: "Arial";
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: #484f55;
    background: transparent;
  }

  .cart-form .hidden,
  .cart-form .wpcf7-spinner {
    display: none;
  }

  .form-row p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 80px;
  }

  .form-row-single p {
    grid-template-columns: 1fr;
  }

  .form-acceptance {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .form-actions {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
  }

  .form-actions p:nth-child(2) {
    padding-left: 10px;
  }

  @media screen and (max-width: 840px) {
    .cart-line {
      font-size: 18px;
    }

    .cart-header {
      font-size: 14px;
    }

    .form-row p {
      grid-gap: 20px;
    }

    .cart-form input:not([type="submit"]):not([type="checkbox"]) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    .big-cart {
      padding: 22px;
    }
    .cart-form {
      padding: 0px 15px;
    }

    .form-row p {
      grid-gap: 20px;
    }
    .select-all {
      left: 7px !important;
      margin-top: -16px !important;
    }
    .select-block {
      left: -16px !important;
      top: 13px;
    }
  }
}

@media all {
  ::selection {
    background: #000;
    color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0 !important;
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
  }

  ul {
    list-style-position: inside;
  }

  p {
    margin-bottom: 15px;
  }

  h2 {
    color: var(--c-dark);
    font-family: var(--font-2);
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-size: 45px;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 30px;
    }
  }

  h2:first-child {
    margin-top: 0;
  }
}

@media all {
  .elementor {
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;
  }

  .elementor *,
  .elementor :after,
  .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .elementor-element {
    --flex-direction: initial;
    --flex-wrap: initial;
    --justify-content: initial;
    --align-items: initial;
    --align-content: initial;
    --gap: initial;
    --flex-basis: initial;
    --flex-grow: initial;
    --flex-shrink: initial;
    --order: initial;
    --align-self: initial;
    -ms-flex-preferred-size: var(--flex-basis);
    flex-basis: var(--flex-basis);
    -webkit-box-flex: var(--flex-grow);
    -ms-flex-positive: var(--flex-grow);
    flex-grow: var(--flex-grow);
    -ms-flex-negative: var(--flex-shrink);
    flex-shrink: var(--flex-shrink);
    -webkit-box-ordinal-group: var(--order);
    -ms-flex-order: var(--order);
    order: var(--order);
    -ms-flex-item-align: var(--align-self);
    align-self: var(--align-self);
  }

  .elementor-element:where(.e-con-full, .elementor-widget) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: var(--flex-direction);
    flex-direction: var(--flex-direction);
    -ms-flex-wrap: var(--flex-wrap);
    flex-wrap: var(--flex-wrap);
    -webkit-box-pack: var(--justify-content);
    -ms-flex-pack: var(--justify-content);
    justify-content: var(--justify-content);
    -webkit-box-align: var(--align-items);
    -ms-flex-align: var(--align-items);
    align-items: var(--align-items);
    -ms-flex-line-pack: var(--align-content);
    align-content: var(--align-content);
    gap: var(--gap);
  }

  .elementor-section {
    position: relative;
  }

  .elementor-section .elementor-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }

  @media (max-width: 1024px) {
    .elementor-section .elementor-container {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  .elementor-section.elementor-section-boxed > .elementor-container {
    max-width: 1140px;
  }

  .elementor-widget-wrap {
    position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
  }

  .elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .elementor-widget-wrap > .elementor-element {
    width: 100%;
  }

  .elementor-widget {
    position: relative;
  }

  .elementor-widget:not(:last-child) {
    margin-bottom: 20px;
  }

  .elementor-column {
    min-height: 1px;
  }

  .elementor-column {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .elementor-column-gap-default
    > .elementor-column
    > .elementor-element-populated {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .elementor-column.elementor-col-100 {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .elementor-column {
      width: 100%;
    }
  }

  .elementor-element .elementor-widget-container {
    -webkit-transition: background 0.3s, border 0.3s, border-radius 0.3s,
      -webkit-box-shadow 0.3s;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      -webkit-box-shadow 0.3s;
    -o-transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s, -webkit-box-shadow 0.3s;
  }
}

@media all {
  .elementor-section.elementor-section-boxed > .elementor-container {
    max-width: 1140px;
  }

  .elementor-widget:not(:last-child) {
    margin-bottom: 20px;
  }

  .elementor-element {
    --widgets-spacing: 20px;
  }

  @media (max-width: 1024px) {
    .elementor-section.elementor-section-boxed > .elementor-container {
      max-width: 1024px;
    }
  }

  @media (max-width: 767px) {
    .elementor-section.elementor-section-boxed > .elementor-container {
      max-width: 767px;
    }
  }
}

@media all {
  .elementor-8489 .elementor-element.elementor-element-8610372 {
    padding-top: 155px;
    padding-bottom: 35px;
    background-color: #a87e72;
  }

  .elementor-8489
    .elementor-element.elementor-element-1b4b753
    .aheto-heading__title {
    text-align: center;
    color: white;
  }

  .elementor-8489
    .elementor-element.elementor-element-1b4b753
    > .elementor-widget-container {
    margin: 0px 0px 40px 0px;
  }

  .elementor-8489 .elementor-element.elementor-element-1ea27bf {
    margin-top: 0px;
    padding-bottom: 80px;
    background: #fef8f5;
  }

  .elementor-8489
    .elementor-element.elementor-element-461e31f
    .aheto-heading__title {
    text-align: center;
  }

  .elementor-8489
    .elementor-element.elementor-element-461e31f
    > .elementor-widget-container {
    margin: 80px 0px 40px 0px;
  }

  .elementor-8489
    .elementor-element.elementor-element-b0f70ab
    .aheto-heading__desc {
    text-align: center;
    color: #000000;
    font-size: 20px;
  }

  .elementor-8489
    .elementor-element.elementor-element-b0f70ab
    > .elementor-widget-container {
    margin: 60px 0px 0px 0px;
  }
}

@media all {
  *,
  ::after,
  ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  section {
    display: block;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  input {
    overflow: visible;
  }

  [type="submit"] {
    -webkit-appearance: button;
  }

  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  input[type="checkbox"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  *,
  ::after,
  ::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  * {
    outline: 0;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  h2 {
    text-transform: none;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  ::selection {
    background-color: #a87e72;
    color: var(--c-white);
  }

  .aheto-btn {
    position: relative;
    outline: 0;
    font-style: normal;
    cursor: pointer;
    -webkit-transition: 0.3s all;
    -o-transition: 0.3s all;
    transition: 0.3s all;
    text-decoration: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
  }

  .aheto-btn:focus,
  .aheto-btn:hover {
    text-decoration: none;
  }
}

@media all {
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.86;
    color: rgba(67, 72, 78, 0.7);
    font-style: normal;
  }

  h2 {
    font-family: "Old Standard TT";
    font-weight: 400;
    color: #43484e;
    font-style: normal;
  }

  h2 {
    font-size: 45px;
    line-height: 1.2;
    font-family: "Old Standard TT";
    font-weight: 400;
    color: #43484e;
    font-style: normal;
  }

  .aheto-btn {
    font-weight: 400;
    font-size: 11px;
    line-height: 1.15;
    letter-spacing: 3.3px;
    font-style: normal;
    padding: 23px 35px;
    border: 1px solid;
    border-radius: 0px;
  }

  .aheto-btn.aheto-btn--primary {
    background: #a87e72;
    color: #ffffff;
  }

  .aheto-btn.aheto-btn--primary:hover {
    border-color: #f59b90;
    background: #f59b90;
    color: #ffffff;
  }

  .aheto-btn.aheto-btn--primary.aheto-btn--reverse {
    background: #f59b90;
    color: #ffffff;
    border-color: #f59b90;
  }

  .aheto-btn.aheto-btn--primary.aheto-btn--reverse:hover {
    background: #a87e72;
    color: #ffffff;
    border-color: #a87e72;
  }

  @media (max-width: 991px) {
    h2 {
      font-size: 40px;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 30px;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@font-face {
  font-family: "Old Standard TT";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts//MwQsbh3o1vLImiwAVvYawgcf2eVer2q3bHNiZg.woff2) format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

.big-cart-items .ci-title {
  display: flex;
}

.name-block {
  width: 50%;
  overflow-wrap: anywhere;
}

.packing-block {
  width: 50%;
  color: #a87e72;
  text-align: left;
  margin-left: 30px;
  overflow-wrap: anywhere;
}

.select-block {
  position: absolute;
  left: 25px;
}

.select-all {
  position: absolute;
  left: 25px;
  margin-top: -22px;
}

.select-all label {
  margin-left: 20px;
}

.max-amount {
  position: absolute;
  right: 35px;
  color: red;
}

.ci-quantity.line-item__quantity span {
  padding: 15px;
}

@media screen and (max-width: 760px) {
  .cart-header {
    display: none;
  }
  .select-block {
    left: -45px;
  }
  .ci-price {
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  .ci-total {
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  .big-cart-items .ci-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .name-block {
    width: 100%;
  }
  .cart-line {
    position: relative;
  }
  .remove-item {
    position: absolute;
    top: 14px;
    right: 12px;
  }
  div .remove-item:nth-child(1) {
    top: -24px;
  }
  .packing-block,
  .name-block {
    text-align: left;
  }
  .packing-block {
    width: 100%;
    color: #a87e72;
    text-align: left;
    margin-left: 0;
  }

  .cart-line {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .cart-line:not(:last-of-type) {
    border-bottom: 1px solid #aaa;
  }

  .ci-remove {
    justify-self: center;
  }

  .form-row p {
    grid-gap: 14px;
    grid-template-columns: 1fr;
  }

  .aheto-btn {
    padding: 23px 10px;
  }
}
</style>