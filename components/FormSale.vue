<template>
  <div class="form-container">
    <div class="form-block">
      <div class="form-title">
        Забронируй за собой скидку на лазерную эпиляцию
      </div>
      <div class="input-block">
        <input placeholder="Имя*" type="text" v-model="dataUser.name" />
        <input
          size="40"
          aria-required="true"
          aria-invalid="false"
          placeholder="Телефон*"
          v-model="dataUser.phone"
          type="tel"
          name="number"
        />
      </div>
      <span class="input-checkbox"
        ><label
          ><input type="checkbox" v-model="dataUser.agree" /><span
            >Я даю свое согласие на обработку и использование моих персональных
            данных*</span
          ></label
        ></span
      >
      <div class="submit-wrap">
        <button
          class="entry-btn button-form pink-hover"
          @click="submitFun()"
          :disabled="!validationUserData()"
        >
          ЗАБРОНИРОВАТЬ
        </button>
      </div>
    </div>
    <div class="img-form-block">
      <img src="/images/new-balance/form-sale-img.png" alt="xenon-teraphy" />
    </div>
  </div>
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
        comment: "С формы 'скидка 50% на первый сеанс лазерной эпиляции'",
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
.form-title {
  font-family: Playfair Display;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 40px;
  text-align: center;
}
.input-block {
  display: flex;
  margin-bottom: 70px;
}
.input-block input {
  width: 100%;
  height: 27px;
  padding: 8px 0;
  border: none !important;
  outline: none !important;
  background: transparent;
  border-bottom: 1px solid #a87e72 !important;
}
.input-block input:first-child {
  margin-right: 31px;
}
.form-block,
.img-form-block {
  width: 100%;
}
.img-form-block img {
  height: 100%;
  object-fit: cover;
  object-position: -35px bottom;
}
.form-block {
  margin-right: 32px;
}
.form-container {
  display: flex;
  background: rgba(250, 191, 191, 0.25);
}
.form-block {
  padding: 24px;
}
.input-checkbox input {
  margin-right: 8px;
}
.input-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 68px;
  color: #7b7d80;
}
.entry-btn {
  width: 100% !important;
}
@media (max-width: 1150px) {
  .form-container {
    flex-direction: column;
  }
  .form-title {
    margin-bottom: 24px;
  }
  .input-block {
    margin-bottom: 45px;
  }
  .input-checkbox {
    margin-bottom: 52px;
  }
  .form-block {
    margin-right: 0;
  }
  .img-form-block img {
    object-position: right bottom;
    margin-left: auto;
  }
  .img-form-block {
    margin-top: 24px;
  }
}
@media (max-width: 768px) {
  .form-title {
    font-size: 20px;
    margin-bottom: 32px;
  }
  .input-block {
    flex-direction: column;
    margin-bottom: 32px;
  }
  .input-block input:first-child,
  .input-checkbox {
    margin-bottom: 32px;
  }
  .img-form-block {
    margin-top: 0;
  }
}
</style>
