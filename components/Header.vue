<template>
  <header
    class="header-block"
    :class="{ show: isOpenServices, 'open-mobile': openMobileMenu === true }"
    @click.stop="openServices(true)"
  >
    <div class="logo-block">
      <NuxtLink to="/">
        <img
          preset="allimg"
          src="/images/new-balance/logo.png"
          loading="lazy"
        />
      </NuxtLink>
      <NuxtLink to="/">
        <img
          class="mobile-logo"
          preset="allimg"
          src="/images/new-balance/logo-mobile.png"
          loading="lazy"
          @click="mobileMenu(true)"
        />
      </NuxtLink>
    </div>

    <div class="menu-block">
      <div class="info-sub_block">
        <div class="adress-block">
          Москва, Каширское шоссе, д.3, корп. 2, стр. 4, этаж 6
        </div>
        <div class="phone">
          <a href="tel:+79399007190">+7 (939) 900-71-90</a>
        </div>
        <div class="basket">
          <NuxtLink to="/basket">
            <img
              preset="allimg"
              src="/images/new-balance/icons/basket.svg"
              loading="lazy"
            />
          </NuxtLink>
          <div
            class="mini-cart"
            :class="{ 'no-product': basketStore.basketArray.length === 0 }"
          >
            <div v-if="basketStore.basketArray.length > 0" class="title-basket">
              Корзина
            </div>
            <ul v-if="basketStore.basketArray.length === 0" class="mc-items">
              <li class="line-item">
                <div class="line-item-no__title">В корзине нет товаров</div>
                <div class="line-item-no__text">
                  Выберите что‑нибудь из наших услуг и добавьте в корзину.
                </div>
              </li>
            </ul>
            <ul v-if="basketStore.basketArray.length > 0" class="mc-items">
              <li
                v-for="item in basketStore.basketArray"
                :key="item.id"
                class="line-item"
                data-id="1676288907075"
              >
                <div class="basket-text">
                  <h3 class="line-item__title">{{ item.product.name }}</h3>

                  <div class="price-container">
                    <div class="line-item__price">
                      {{ validationPrice(item.price) }} ₽
                    </div>
                    <button @click="deleteItem(item)" class="remove-item">
                      <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                  </div>
                </div>
                <div class="line-item__quantity">
                  <button @click="minus(item)" class="minus">−</button>
                  <span>
                    {{ item.count }}
                  </span>
                  <button @click="plus(item)" class="plus">+</button>
                </div>
              </li>
            </ul>
            <div
              class="line-block"
              v-if="basketStore.basketArray.length > 0"
            ></div>
            <div class="mc-total" v-if="basketStore.basketArray.length > 0">
              <span>Итого: </span>{{ validationPrice(allAmout) }} ₽
            </div>
          </div>
        </div>
        <div @click="mobileMenu(true)">
          <Booking></Booking>
        </div>
        <div class="whats-up">
          <a
            href="https://wa.me/79951007600?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A1%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%E2%80%A6"
          >
            <img
              preset="allimg"
              src="/images/new-balance/icons/w-up.svg"
              loading="lazy"
            />
          </a>
        </div>
        <div class="mobile-phone-el">
          <a href="tel:+79399007190">
            <img
              preset="allimg"
              src="/images/new-balance/icons/phone-btn.svg"
              loading="lazy"
            />
          </a>
        </div>
        <NuxtLink @click="mobileMenu(true)" to="/booking" class="">
          <button class="entry-btn">Записаться</button>
        </NuxtLink>
      </div>
      <div class="menu-sub_block">
        <NuxtLink to="/about" @click="mobileMenu(true)" class="menu-item"
          >О нас</NuxtLink
        >
        <div class="menu-item menu-item-services">
          <div @click.stop="openServices()" class="name-services">
            Услуги
            <img
              :class="{ 'img-rotate': isOpenServices }"
              preset="allimg"
              src="/images/new-balance/icons/arrow.svg"
              loading="lazy"
            />
          </div>
          <div :class="{ show: isOpenServices }" class="services-block">
            <div class="services-type">
              <div class="type-name" @click.stop="bodyShow = !bodyShow">
                Тело
                <img
                  :class="{ 'img-rotate': bodyShow }"
                  preset="allimg"
                  src="/images/new-balance/icons/arrow.svg"
                  loading="lazy"
                />
              </div>
              <div
                class="items"
                @click="mobileMenu(true)"
                :class="{ show: bodyShow }"
              >
                <NuxtLink to="/laser-hair-removal" class="type-item"
                  >ЛАЗЕРНАЯ ЭПИЛЯЦИЯ</NuxtLink
                >
              </div>
            </div>
            <div class="services-type">
              <div class="type-name" @click.stop="faceShow = !faceShow">
                Лицо
                <img
                  :class="{ 'img-rotate': faceShow }"
                  preset="allimg"
                  src="/images/new-balance/icons/arrow.svg"
                  loading="lazy"
                />
              </div>
              <div
                class="items"
                @click="mobileMenu(true)"
                :class="{ show: faceShow }"
              >
                <NuxtLink to="/rf-lifting" class="type-item"
                  >Микроигольчатый RF - лифтинг</NuxtLink
                >
                <NuxtLink to="/dermadrop" class="type-item">dermadrop</NuxtLink>
              </div>
            </div>
            <div class="services-type">
              <div class="type-name" @click.stop="healthShow = !healthShow">
                Здоровье
                <img
                  :class="{ 'img-rotate': healthShow }"
                  preset="allimg"
                  src="/images/new-balance/icons/arrow.svg"
                  loading="lazy"
                />
              </div>
              <div
                class="items"
                @click="mobileMenu(true)"
                :class="{ show: healthShow }"
              >
                <NuxtLink to="/xenon-therapy" class="type-item"
                  >КСЕНОНОТЕРАПИЯ</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <NuxtLink @click="mobileMenu(true)" to="/blog" class="menu-item"
          >блог</NuxtLink
        >
        <NuxtLink @click="mobileMenu(true)" to="/certificates" class="menu-item"
          >Сертификаты</NuxtLink
        >
        <NuxtLink
          @click="mobileMenu(true)"
          to="/contacts"
          class="menu-item menu-item_contact"
          >Контакты</NuxtLink
        >
        <div class="basket-menu_container">
          <NuxtLink
            @click="mobileMenu(true)"
            to="/basket"
            class="menu-item basket-menu"
            >Корзина</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="mobile-phone">
      <a href="tel:+79399007190">
        <img
          preset="allimg"
          src="/images/new-balance/icons/phone-btn.svg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="mobile-menu close-mobile" @click="mobileMenu()">
      <img
        preset="allimg"
        src="/images/new-balance/menu-mobile.png"
        loading="lazy"
      />
    </div>
    <div class="mobile-menu open-mobile-el" @click="mobileMenu()">
      <img
        preset="allimg"
        src="/images/close_FILL1_wght400_GRAD0_opsz481.svg"
        loading="lazy"
      />
    </div>
  </header>
  <div
    @click="openServices(true)"
    :class="{ show: isOpenServices }"
    class="shadow-modal"
  ></div>
</template>

<script>
import { useBasketStore } from "../stores/basket";
import { useUtmStore } from "../stores/utm";
export default {
  data() {
    return {
      isOpenServices: false,
      isMobMenuOpen: false,
      isOpenSubMenu: false,
      headerScroll: false,
      currentSubType: null,
      openMobileMenu: false,
      bodyShow: false,
      faceShow: false,
      healthShow: false,
    };
  },
  computed: {
    allAmout() {
      let amount = 0;
      this.basketStore.basketArray.forEach((el) => {
        amount += el.count * el.price;
      });
      return amount;
    },
  },
  created() {
    window.addEventListener("scroll", (event) => {
      this.headerScroll = window.scrollY > 0;
    });
    this.utmStore.createUrlParams();
  },
  methods: {
    mobileMenu(isDefault = false) {
      if (isDefault === false) {
        this.openMobileMenu = !this.openMobileMenu;
        if (this.openMobileMenu === true) {
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
          document.getElementsByTagName("body")[0].style.overflow = "initial";
        }
      } else {
        this.openMobileMenu = false;
        document.getElementsByTagName("body")[0].style.overflow = "initial";
        this.isOpenServices = false;
      }
    },
    openServices(isClose = false) {
      if (isClose) {
        this.isOpenServices = false;
      } else {
        this.isOpenServices = !this.isOpenServices;
      }
    },
    chooseSubType(val) {
      if (this.currentSubType === val) {
        this.currentSubType = null;
      } else {
        this.currentSubType = val;
      }
    },
    subMenuDesc(bool) {
      if (window.innerWidth > 1199) {
        this.isOpenSubMenu = bool;
      }
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

<style  scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

body img {
  object-fit: cover;
  max-width: initial;
}

a,
a:hover {
  color: black;
  text-decoration: none;
}

header {
  height: 96px;
  display: flex;
  padding: 16px;
  background: #fff;
  position: fixed;
  z-index: 4564;
  width: 100%;
  transition: all 0.9s ease;
}

.logo-block img {
  width: auto;
  height: 40px;
}

.logo-block a {
  width: fit-content;
  display: block;
}

.logo-block {
  margin: auto;
  margin-left: 13px;
}

.adress-block {
  max-width: 214px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #42474e;
  margin: auto;
  margin-left: 32px;
  margin-top: 13px;
  font-family: Segoe UI;
}

.info-sub_block {
  height: 32px;
  margin-bottom: 8px;
}

.basket-menu_container {
  display: none;
}

.info-sub_block {
  display: flex;
  justify-content: flex-end;
  margin-right: 16.41px;
}

.phone a {
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  color: #42474e;
}

.basket img {
  width: 24px;
}

.whats-up img {
  width: 32px;
}

.menu-block {
  width: 100%;
}

.mobile-phone-el {
  display: none;
}

.menu-sub_block {
  display: flex;
  justify-content: flex-end;
  max-width: 800px;
  margin-left: auto;
}

.menu-sub_block a {
  margin: auto;
}

.menu-sub_block a,
.menu-item-services {
  width: 100%;
}

.menu-item_contact {
  text-align: right;
}

.menu-sub_block .menu-item_contact {
  margin-right: 0;
}

.menu-item {
  line-height: 26.04px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  color: #a87e72;
  font-family: Segoe UI;
}

.menu-item img {
  width: 24px;
  height: 24px;
}

.mobile-logo,
.mobile-phone,
.mobile-menu {
  display: none;
}

.menu-item-services {
  position: relative;
}

.services-block {
  display: flex;
  background: white;
  position: absolute;
  z-index: 35546;
  top: 39px;
  left: -375px;
  box-shadow: 0px 10px 50px 0px rgba(67, 72, 78, 0.08);
}

.services-type {
  width: 320px;
  padding: 32px;
  border-right: 1px solid #eceded;
}

.type-item {
  color: #42474e;
  font-size: 14px;
  line-height: 26.04px;
  text-transform: uppercase;
  padding: 4px 16px 4px 8px;
  width: max-content;
  display: block;
}

.type-name {
  color: #a87e72;
  font-size: 20px;
  font-family: Playfair Display;
  line-height: 27px;
  margin-bottom: 24px;
  text-transform: none;
}

.shadow-modal {
  background: rgba(66, 71, 78, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4564;
  display: none;
}

.services-block {
  overflow: hidden;
  transition: all 1s ease;
  height: 0;
}

.name-services {
  cursor: pointer;
  display: flex;
}

.services-block.show {
  display: flex;
  height: 574px;
}

.shadow-modal.show {
  display: block;
  position: fixed;
}

header.show {
  position: fixed;
  width: 100%;
  z-index: 435345;
}

.basket {
  margin-left: 36px;
  position: relative;
}

.phone a {
  padding-top: 3px;
  font-family: Segoe UI;
}

.phone {
  padding: 3px;
}

.mini-cart {
  width: 401px;
  position: absolute;
  z-index: 45;
  background: #fff;
  box-shadow: 0px 10px 50px 0px rgba(67, 72, 78, 0.08);
  padding: 24px;
  border-radius: 2px;
  top: 38px;
  right: -195px;
  display: none;
}

.title-basket {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: var(--accident-color-2, #a87e72);
  font-family: Playfair Display;
  margin-bottom: 32px;
}

.entry-btn {
  display: none;
}

.basket-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.remove-item {
  color: #a87e72;
}

.line-item__title {
  width: 200px;
  margin-right: 24px;
  color: #42474e;
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 0;
}

.price-container {
  display: flex;
  align-items: flex-start;
}

.line-item__price {
  color: #42474e;
  text-align: right;
  font-family: Segoe UI;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-right: 16px;
}

.svg-inline--fa.fa-xmark {
  width: 24px;
}

.line-item__quantity {
  color: #7b7d80;
  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.04px;
}

.line-item__quantity span {
  margin: 0 16px;
}

.line-item {
  margin-bottom: 16px;
}

.line-block {
  width: 352px;
  height: 1px;
  background: #a87e72;
  margin: 32px 0;
}

.mc-total {
  color: #a87e72;
  text-align: right;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-align: right;
}

.no-product {
  background: #fff2f2;
}

.line-item-no__title {
  color: #a87e72;
  text-align: center;
  font-family: Playfair Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 40px;
  margin-bottom: 8px;
}

.type-name img {
  display: none;
}

.line-item-no__text {
  color: #7b7d80;
  text-align: center;
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.basket:hover .mini-cart {
  display: block;
}

.basket img {
  cursor: pointer;
}

.elementor-main .slick-dots li button {
  background: red;
}

.white-animation:before {
  background-color: #f15b67;
}

.white-animation:focus,
.white-animation:hover {
  color: white;
  border: 1px solid #f15b67;
}

.name-services:hover {
  color: black;
}

@media (max-width: 1300px) {
  .menu-sub_block {
    max-width: 650px;
  }

  .services-block {
    left: -450px;
  }
}

@media (max-width: 1150px) {
  .services-block {
    position: relative;
    flex-direction: column;
    left: 0;
    width: 100%;
    top: 0;
    box-shadow: none;
    margin-top: 0;
    display: block;
    transition: none;
  }

  .services-block.show {
    display: flex;
    height: auto;
    margin-top: 16px;
  }

  .open-mobile .entry-btn {
    border-radius: 2px;
    background: #f15b67;

    width: 280px;
    height: 56px;
    padding: 16px;
    gap: 8px;

    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26.04px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-right: 32px;
    color: white;
    display: block;
    max-width: 500px;
    width: auto;
    margin-top: 24px;
    max-width: 263px;
    width: 100%;
  }

  div.services-type {
    margin-left: 0;
    margin-right: 0;
  }

  .items {
    margin-left: 20px;
  }

  .menu-item_contact {
    text-align: left;
  }

  .mobile-phone {
    display: block;
    top: 16px;
  }

  .mobile-menu {
    display: block;
  }

  .open-mobile-el {
    display: none;
  }

  .open-mobile .open-mobile-el {
    display: block;
    right: 16px;
    top: 16px;
  }

  .open-mobile .close-mobile {
    display: none;
  }

  .menu-sub_block,
  .whats-up,
  .basket,
  .phone,
  .adress-block {
    display: none;
  }

  .open-mobile .menu-sub_block,
  .open-mobile .whats-up,
  .open-mobile .basket,
  .open-mobile .phone,
  .open-mobile .adress-block {
    display: block;
  }

  .whats-up {
    position: absolute;
    top: 16px;
    right: 75px;
    display: block;
  }

  .open-mobile .menu-block {
    width: auto;
  }

  header {
    padding: 16px 24px;
    position: fixed;
    z-index: 45654;
    width: 100%;
    flex-direction: column;
    height: 64px;
  }

  header.open-mobile {
    height: 100%;
    overflow: auto;
    overflow-y: scroll;
  }

  .logo-block img {
    display: none;
  }

  .logo-block .mobile-logo,
  .mobile-phone {
    display: block;
    width: 22px;
    height: 32px;
  }

  .logo-block .mobile-logo {
    margin-left: -5px;
    top: 16px;
    position: absolute;
  }

  .open-mobile .logo-block .mobile-logo {
    display: block;
    width: 22px;
    height: 32px;
  }

  .mobile-phone img {
    height: 32px;
  }

  .open-mobile .menu-block {
    order: 2;
  }

  .mobile-menu {
    order: 1;
  }

  .mobile-menu img {
    height: 24px;
    cursor: pointer;
  }

  .open-mobile-el img {
    height: 32px;
  }

  .mobile-phone {
    margin-left: 23px;
    display: block;
  }

  .mobile-menu {
    margin: 0;
    margin-left: 23px;
  }

  .open-mobile .logo-block {
    margin: 0;
  }

  .open-mobile .menu-item {
    display: block;
  }

  .open-mobile .menu-sub_block {
    display: block;
    z-index: 35345345345;
    position: relative;
    background: white;
    width: 100%;
    left: 0;
    top: 32px;
    padding: 0;
    height: 100%;
    max-width: 100%;
  }

  .open-mobile .menu-item {
    font-size: 14px;
    line-height: 26.04px;
    padding: 16px 0 8px;
    border-bottom: 1px #eceded solid;
    color: #a87e72;
  }

  .open-mobile .menu-sub_block::-webkit-scrollbar {
    width: 10px;
  }

  .open-mobile .menu-sub_block::-webkit-scrollbar-track {
    background-color: #eceded;
  }

  .open-mobile .menu-sub_block::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .mobile-menu {
    position: absolute;
    right: 24px;
    top: 20px;
  }

  .logo-block {
    margin-left: 0;
  }

  .mobile-phone {
    position: absolute;
    right: 75px;
  }

  .open-mobile .menu-block {
    display: flex;
    flex-direction: column-reverse;
  }

  .open-mobile .info-sub_block {
    margin-top: 60px;
    flex-direction: column;
    height: max-content;
  }

  .open-mobile .info-sub_block div {
    display: block;
    margin: 0;
  }

  .open-mobile .info-sub_block .phone {
    margin: 24px 0;
  }

  .open-mobile .info-sub_block .basket {
    display: none;
  }

  .open-mobile .adress-block {
    max-width: initial;
    order: 3;
    margin-top: 40px;
    color: #7b7d80;
  }

  .show.services-block {
    position: relative;
    flex-direction: column;
    left: 0;
    width: 100%;
    top: 0;
    box-shadow: none;
    margin-top: 16px;
  }

  .services-type {
    width: auto;
    height: auto;
    padding: 0;
    padding-left: 8px;
    border-right: none;
  }

  .services-type .items {
    height: 0;
    overflow: hidden;
  }

  .type-name {
    margin-bottom: 16px;
    color: var(--accident-color-2, #a87e72);
    /* Desktop/Text menu */
    font-family: Segoe UI;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26.04px;
    /* 186% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .show.items {
    height: auto;
    overflow: hidden;
  }

  .shadow-modal.show {
    display: none;
  }

  .mobile-phone {
    display: none;
  }

  .services-type .type-name {
    display: flex;
    right: 135px;
  }

  .type-name img {
    display: block;
  }

  .type-name .img-rotate {
    transform: rotate(180deg);
  }
}

@media (min-width: 768px) and (max-width: 1150px) {
  .open-mobile div.mobile-phone-el {
    display: block;
    margin-top: -55px;
    margin-left: 170px;
  }

  .open-mobile .info-sub_block div.adress-block {
    margin-top: 32px;
  }
}

@media (max-width: 768px) {
  .open-mobile .info-sub_block .whats-up {
    margin-top: -70px;
    margin-left: 235px;
    position: relative;
  }

  .mobile-phone {
    display: block;
  }

  .booking-btn {
    right: 115px;
  }

  .whats-up {
    display: none;
  }

  .open-mobile .info-sub_block .adress-block {
    margin-top: 32px;
  }

  .open-mobile .whats-up {
    display: block;
  }

  .open-mobile .open-mobile-el {
    display: block;
    right: 16px;
    top: 16px;
  }

  .open-mobile .info-sub_block .mobile-phone-el {
    display: none;
  }

  .open-mobile .entry-btn {
    margin-top: 30px;
  }
}
</style>