<template>
  <section class="specialists-section">
    <h3 class="specialists-title">Примеры RF-лифтинга: До/После</h3>

    <div class="special-slider_container">
      <div class="specialists-slider" :style="{ transform: translateParam }">
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/rf-lifting/slider.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              Птоз нижней трети лица, глубокие морщины вокруг глаз, отсутствие
              результата от инъекционных процедур.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              RF лифтинг лица и подбородочной области + плазмотерапия.
              Необходимо проводить 1 раз в полгода. После первой процедуры был
              небольшой отек, который сохранялся несколько часов. Но уже через 4
              недели кожа стала преображаться, разгладились глубокие морщины и
              уплотнились ткани, благодаря чему ушел птоз. Пациент поддерживает
              эффект с помощью коллагенотерапии.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/rf-lifting/slider1.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              3 стадия целлюлита бедер и ягодицы, с которым тяжело справлялись
              массажи и липолитики.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              RF лифтинг на аппарате INMODE с плазмотерапией для лучшей
              регенерации после. Процедуру рекомендовалось проходить 1 раз в
              полгода. Поддерживать состояние курсом массажа RSL. Состояние
              стало лучше на целую стадию целлюлита. Теперь пациентка отмечает
              неровность только при движении, в статике кожа выглядит гладко, на
              ощупь упругая.
            </div>
          </div>
        </div>
        <div class="specialist-slide" :style="{ width: widthSlidePX }">
          <img
            preset="allimg"
            decoding="async"
            src="/images/new-balance/rf-lifting/slider2.png"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="slider-title">Проблема:</div>
            <div class="slider-text">
              Дряблая и свисающая кожа над коленями. Физической нагрузкой
              проблема не решалась.
            </div>
            <div class="slider-title">Результат:</div>
            <div class="slider-text">
              Чтобы уменьшить количество кожного лоскута и подкожно-жировой
              клетчатки было предложено пройти 1 процедуру RF лифтинга. Итоговый
              результат пациентка отметила через 2,5 месяца. Птоз уменьшился на
              50%. Девушка проходит поддерживающие процедуры на аппарате RSL.
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
      slideCount: 3,
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