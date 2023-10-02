<template>
  <section class="specialists-section">
    <h3 class="title-el title-el_block">Примеры эпиляции: До/После</h3>

    <div class="special-slider_container">
      <div class="specialists-slider" :style="{ transform: translateParam }">
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              Девушка обратилась с проблемой роста жесткого темного волоса в
              зоне бикини. Бритья хватало на сутки, а от шугаринга и воска
              появлялось раздражение. Хотелось избавиться от волос и не думать
              об их регулярном бритье.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Волос часто подвергался удалению, поэтому стал жестким. Количество
              визитов составило 10 раз. Уже после 3 процедуры рост волос
              замедлился. После 5 девушка отмечала рост волос только островками.
              На 10 процедуре рост отсутвовал. Для закрепления результата
              рекомендовали проходить эпиляцию раз в полгода или по
              необходимости.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider1.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">Эстетический дискомфорт</div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Было пройдено 5 процедур лазерной эпиляции. Волос был мягкий, но
              светлый. Курса отлично хватило для полного прекращения роста.
              Результатом очень довольна, отметила, что процедура абсолютно
              безболезненная. Для закрепления результата было рекомендовано
              проходить эпиляцию раз в полгода или по необходимости.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider2.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              «Ежик» на ногах через 12 часов после бритья, вросшие волосы.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Было пройдено 7 процедур лазерной эпиляции. После 3 сеанса девушка
              отметила смягчение волоса, реже пользовалась бритвой, после 5
              процедуры оставалось менее 80% волос. Совместно с голенью девушка
              прошла курс бикини и подмышечные впадины. Осталась очень довольна.
              Для закрепления результата было рекомендовано проходить эпиляцию
              раз в полгода или по необходимости.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider3.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              Эстетический дискомфорт и раздражение от бритья.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Молодому человеку было проведено 10 процедур, так как гость был
              мужского пола, колличесва процедур потребовалось больше, чем
              потребовалось бы девушке. На 5 процедуре волос стал мягче и рост
              уменьшился на 50%. К 10 процедуре рост прекратился совсем. Для
              закрепления результата было рекомендовано проходить эпиляцию раз в
              полгода или по необходимости.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider4.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              Вросшие волосы после бритья, раздражение.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Было пройдено 7 процедур лазерной эпиляции. После 3 сеанса девушка
              отметила рост волос островками. На 5 процедуре осталось около 10%
              волос и после 7 процедуры окончательно прекратился рост. Девушка
              также прошла курс эпиляции и на других зонах. Для закрепления
              результата было рекомендовано проходить эпиляцию раз в полгода или
              по необходимости.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/laser-hair-removal/slider5.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">Эстетический дискомфорт.</div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              5 сеансов лазерной эпиляции полностью убрали волос в
              обрабатываемой зоне. После 3 процедуры отмечался рост только 20%
              волос и к 5 сеансу отсутвовал совсем. Для закрепления результата
              было рекомендовано проходить эпиляцию раз в полгода или по
              необходимости.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spec-arrow">
      <button>
        <img
          preset="allimg"
          decoding="async"
          src="/images/Arrow3.svg"
          alt="specialist"
          @click="redoSlide()"
        />
      </button>
      <div class="slide-number">{{ slides + 1 }}/{{ maxSlidesAll }}</div>
      <button>
        <img
          preset="allimg"
          decoding="async"
          src="/images/Arrow3(1).svg"
          alt="specialist"
          @click="nextSlide()"
        />
      </button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      slides: 0,
      translateParam: "translate3d(0, 0, 0)",
      widthSlide: 0,
      slideCount: 6,
      widthSlidePX: "",
    };
  },
  computed: {
    sliderCount() {
      return 1;
    },
    maxSlides() {
      return Math.floor(this.slideCount / this.sliderCount);
    },
    maxSlidesAll() {
      let count = this.remainder > 0 ? 1 : 0;
      return this.maxSlides + count;
    },
    remainder() {
      return this.slideCount - this.maxSlides * this.sliderCount;
    },
  },
  mounted() {
    this.widthSlide = document.getElementsByClassName(
      "special-slider_container"
    )[0].clientWidth;
    this.widthSlidePX = this.widthSlide + "px";
  },
  methods: {
    nextSlide() {
      if (
        (this.slides < this.maxSlides - 1 && this.slides != 0) ||
        (this.slides === 0 && this.maxSlides > 1 && this.remainder === 0)
      ) {
        this.slides++;
        this.translateParam = `translate3d(-${
          this.widthSlide * this.slides * this.sliderCount
        }px, 0, 0)`;
      } else if (
        (this.slides === this.maxSlides - 1 || this.slides === 0) &&
        this.remainder > 0
      ) {
        this.slides++;
        this.translateParam = `translate3d(-${
          this.widthSlide * (this.slides - 1) * this.sliderCount +
          this.widthSlide * this.remainder
        }px, 0, 0)`;
        console.log(1);
      }
    },
    redoSlide() {
      if (this.slides <= this.maxSlides && this.slides != 0) {
        this.slides--;
        this.translateParam = `translate3d(-${
          this.widthSlide * this.slides * this.sliderCount
        }px, 0, 0)`;
      } else if (this.slides > this.maxSlides - 1 && this.remainder > 0) {
        this.slides--;
        this.translateParam = `translate3d(-${
          this.widthSlide * this.slides * this.sliderCount +
          this.widthSlide * this.remainder
        }px, 0, 0)`;
      }
    },
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
.specialists-slider {
  display: flex;
  transition: transform 1000ms ease 0s;
  width: max-content;
}

.specialist-block img {
  width: 297px;
  height: 288px;
  margin-bottom: 16px;
  position: relative;
}

.specialist-block {
  position: relative;
  margin-right: 278px;
  width: 100%;
  max-width: 297px;
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

.spec-name {
  color: #a87e72;
  text-align: center;
  font-family: Playfair Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.spec-role {
  color: #42474e;
  text-align: center;
  font-family: Segoe UI;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 8px 0;
}

.spec-experience {
  color: #7b7d80;
  text-align: center;
  font-family: Segoe UI;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.spec-list {
  list-style-type: disc;
  color: #7b7d80;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 8px;
  padding-left: 35px;
}

.desc-specialist_block {
  padding: 16px;
  padding-bottom: 32px;
  height: 100%;
}

.specialist-slide {
  width: 12%;
  padding-right: 32px;
  display: flex;
}

.desc-specialist_block {
  background: white;
}

.specialists-slider {
  display: flex;
  transition: transform 1000ms ease 0s;
}

.specialist-slide img {
  width: 50%;
}

.specialists-slider {
  width: max-content;
}

.special-slider_container {
  overflow: hidden;
}

.spec-arrow {
  display: flex;
  align-items: baseline;
  margin: auto;
  margin-top: 32px;
  width: fit-content;
}

.spec-arrow img {
  width: 40px;
  height: fit-content;
}
.slide-number {
  color: #f15b67;
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 0 23px;
}

@media (min-width: 769px) {
  .specialist-slide {
    width: 44.2vw;
  }
}

@media (min-width: 1020px) {
  .specialist-slide {
    width: 30.1vw;
  }
}

@media (min-width: 1200px) {
  .specialist-slide {
    width: 23vw;
  }
}

@media (min-width: 1360px) {
  .specialist-slide {
    width: 20.8vw;
  }
}

@media (min-width: 1440px) {
  .specialist-slide {
    width: 305px;
  }
}

@media (max-width: 1150px) {
  .form-specialist_text {
    right: -195px;
  }

  .specialist-block {
    margin-right: 195px;
  }
  .specialist-slide {
    flex-direction: column;
  }
  .specialist-slide img,
  .desc-specialist_block {
    width: 100%;
  }
}
@media (max-width: 1050px) {
  .specialist-block {
    margin-right: 0;
    margin-top: 112px;
  }

  .form-specialist_text {
    width: 208px;
    right: 0;
    top: -112px;
  }

  .specialist-block img {
    width: 232px;
    height: 226px;
    object-fit: cover;
  }

  .specialist-block {
    width: auto;
  }
}
@media (max-width: 768px) {
  .specialist-slide img {
    object-position: center center;
  }
}
.specialists-title {
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.specialist-block {
  display: none;
}

.specialists-section .spec-arrow {
  margin-top: 25px;
}
.spec-name {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.spec-role {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.spec-experience {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.specialist-slide {
  width: 100vw;
  padding-left: 16px;
  padding-right: 16px;
}
.desc-specialist_block {
  width: 50%;
}
.slider-title {
  color: #a87e72;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 8px;
}
.slider-text {
  color: #7b7d80;
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 16px;
}
.desc-specialist_block .slider-text:last-child {
  margin-bottom: 0;
}
@media (max-width: 1150px) {
  .specialist-slide img,
  .desc-specialist_block {
    width: 100%;
  }
}
</style>