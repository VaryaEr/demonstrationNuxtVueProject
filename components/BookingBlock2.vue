<template>
  <section class="section-form">
    <h3 class="specialists-title form-title">
      Не нашли ответа на свой вопрос?
    </h3>
    <div class="form-block">
      <div class="form-application">
        <div class="form-text">
          Оставьте заявку, и мы свяжемся с вами в течение 3 минут
        </div>
        <input type="text" placeholder="Ваше имя" v-model="dataUser.name" />

        <input
          size="40"
          aria-required="true"
          aria-invalid="false"
          placeholder="Телефон*"
          v-model="dataUser.phone"
          type="tel"
          name="number"
        />
        <div class="checkbox-block">
          <input type="checkbox" v-model="dataUser.agree" />
          <div class="checkbox-text">
            Я даю своё согласие на обработку и использование моих персональных
            данных*
          </div>
        </div>
        <button
          class="entry-btn button-form pink-hover"
          @click="submitFun()"
          :disabled="!validationUserData()"
        >
          Отправить
        </button>
      </div>

      <div class="specialist-block">
        <img
          preset="allimg"
          decoding="async"
          src="/images/new-balance/Rectangle50(1).png"
          alt="specialist"
        />
      </div>
    </div>
  </section>
  <LazyModalWindow v-show="showModal" :text="textModal"> </LazyModalWindow>
</template>
<script>
import { useUtmStore } from "../stores/utm";
export default {
  data() {
    return {
      dataUser: {
        name: "",
        phone: "",
        comment: "",
        agree: false,
      },
      textModal: "",
      showModal: false,
    };
  },
  watch: {
    "dataUser.phone": function (val) {
      if (val !== undefined && val !== null) {
        this.dataUser.phone = this.telMask(val);
      }
    },
  },
  methods: {
    validationUserData() {
      let res = true;
      res &= this.dataUser.name.length > 1;
      res &= this.dataUser.phone.length === 18;
      res &= this.dataUser.agree === true;
      return res;
    },
    submitFun() {
      event.preventDefault();
      let methodType = "POST";
      let url = "/api/client/appointment/";
      const my_source = this.utmStore.utm_source;
      const my_campaign = this.utmStore.utm_campaign;
      const my_content = this.utmStore.utm_content;
      const my_medium = this.utmStore.utm_medium;
      $fetch(url, {
        method: methodType,
        body: {
          user_name: this.dataUser.name,
          phone: this.dataUser.phone,
          comment: this.dataUser.comment,
          user_data_confirm: this.dataUser.agree,
          utm_source: my_source,
          utm_campaign: my_campaign,
          utm_content: my_content,
          utm_medium: my_medium,
        },
      })
        .then((res) => {
          let formData = {
            fio: this.dataUser.name,
            phoneNumber: this.dataUser.phone,
            requestUrl: window.location.href,
            subject: "Запись",
          };
          this.dataUser.name = "";
          this.dataUser.phone = "";
          this.dataUser.comment = "";
          this.dataUser.agree = false;
          this.textModal = `Ваша заявка успешно отправлена. Менеджеры свяжутся с Вами в ближайшее время`;
          this.showModal = true;

          setTimeout(() => {
            this.showModal = false;
          }, 4000);
        })
        .catch((error) => {
          this.textModal = `ОШИБКА! Повторите попытку позже`;
          this.showModal = true;
          setTimeout(() => {
            this.showModal = false;
          }, 4000);
        });
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
    const utmStore = useUtmStore();
    return {
      utmStore,
    };
  },
};
</script>
<style scoped>
.specialists-title {
  color: #42474e;
  text-align: center;
  font-family: Playfair Display;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 40px;
}
.section-form {
  margin-top: 64px;
}
.form-block {
  display: flex;
  padding-bottom: 64px;
}
.form-application {
  border-radius: 8px;
  background: #fff;
  padding: 32px 96px;
}
.form-application {
  width: 50%;
  margin-right: 48px;
}

.form-application input[type="text"],
.form-application input[type="tel"] {
  padding: 16px;
  gap: 8px;
  border-radius: 2px;
  background: #fff2f2;
  height: 56px;
  width: 100%;
  margin-bottom: 16px;
  border: none;
}

.form-application input[type="text"]:focus-visible,
.form-application input[type="tel"]:focus-visible {
  border: none;
  outline-width: 0;
}
.form-text {
  color: #7b7d80;
  text-align: center;
  font-family: Segoe UI;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 28px;
}
.entry-btn {
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
}
.button-form {
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
}
.specialist-block img {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
}

.specialist-block {
  position: relative;
  width: 50%;
}
.specialist-name {
  color: #a87e72;
  text-align: center;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 8px;
}
.specialist-role {
  color: #7b7d80;
  text-align: center;
  font-family: Segoe UI;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-specialist_text {
  position: absolute;
  background: #fed6cc;
  box-shadow: 0px 10px 50px 0px rgba(67, 72, 78, 0.08);
  display: flex;
  width: 304px;
  padding: 16px 32px;
  align-items: flex-start;
  gap: 8px;
  top: 0;
  right: -278px;
  color: var(--color-title, #42474e);
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.checkbox-block {
  display: flex;
}
.checkbox-block input {
  margin-right: 8px;
  margin-top: -1px;
}
@media (max-width: 1300px) {
  .form-application {
    width: auto;
    padding: 32px 32px 48px 32px;
  }
}
@media (max-width: 1150px) {
  .form-application {
    width: 100%;
    padding: 32px 32px 48px 32px;
    margin-right: 0;
  }
  .specialist-block {
    display: none;
  }
  .checkbox-block {
    display: flex;
  }

  .checkbox-block input {
    margin-right: 8px;
    margin-top: -1px;
  }
  .entry-btn {
    margin-right: 16px;
  }
  .specialist-block {
    margin-right: 195px;
  }
  .form-specialist_text {
    right: -195px;
  }
}
@media (max-width: 1050px) {
  .entry-btn {
    width: 100%;
  }
  .specialist-block {
    margin-right: 0;
    margin-top: 112px;
    width: auto;
  }
  .specialist-block img {
    width: 232px;
    height: 226px;
  }
  .form-specialist_text {
    width: 208px;
    right: 0;
    top: -112px;
  }
}
@media (max-width: 768px) {
  .checkbox-block {
    align-items: baseline;
  }
  .section-form {
    margin-top: 64px;
  }
  .specialists-title {
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .form-application {
    margin-right: 0;
    padding: 32px 16px;
    box-shadow: 0px 10px 50px 0px rgba(67, 72, 78, 0.08);
    border-radius: 8px;
    width: 100%;
  }
  .form-text {
    color: #42474e;
    text-align: center;
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .specialist-block {
    display: none;
  }
}
</style>