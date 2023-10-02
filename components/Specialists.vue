<template>
  <section class="specialists-section container-fluid">
    <h3 class="title-el title-el_block">Наша команда специалистов</h3>
    <div class="special-slider_container">
      <div class="specialists-slider" :style="{ transform: translateParam }">
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra.png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Разбежкина Анастасия Евгеньевна</div>
            <div class="spec-role">Врач-косметолог, дерматовенеролог</div>
            <div class="spec-experience">Стаж работы: более 12 лет</div>
            <ul class="spec-list">
              <li class="list-el_spec">Аппаратные процедуры</li>
              <li class="list-el_spec">Иньекционные процедуры</li>
              <li class="list-el_spec">Авторские методики по anti-age</li>
              <li class="list-el_spec">Лечение гипергидроза</li>
              <li class="list-el_spec">Работа по акупунктурным точкам</li>
            </ul>
          </div>
        </div>
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra(1).png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Мельникова Юлия Романовна</div>
            <div class="spec-role">Косметолог-эстетист</div>
            <div class="spec-experience">Стаж работы: более 7 лет</div>
            <ul class="spec-list">
              <li class="list-el_spec">Аппаратные процедуры</li>
              <li class="list-el_spec">Иньекционные процедуры</li>
              <li class="list-el_spec">
                Лечение акне, постакне, розацеа, гипергидроза
              </li>
              <li class="list-el_spec">Лечение выпадения волос.</li>
              <li class="list-el_spec">Работа по акупунктурным точкам</li>
              <li class="list-el_spec">Различные пилинги</li>
            </ul>
          </div>
        </div>
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra(2).png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Туманова Александра Александровна</div>
            <div class="spec-role">Косметолог-эстетист</div>
            <div class="spec-experience">Стаж работы: более 3 лет</div>
            <ul class="spec-list">
              <li class="list-el_spec">Аппаратные процедуры</li>
              <li class="list-el_spec">Массажи лица</li>
              <li class="list-el_spec">Уходовые процедуры</li>
              <li class="list-el_spec">Лечение проблемной кожи</li>
              <li class="list-el_spec">Различные чистки</li>
              <li class="list-el_spec">Различные пиллинги</li>
            </ul>
          </div>
        </div>
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra(3).png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Щербаков Александр Васильевич</div>
            <div class="spec-role">Массажист</div>
            <div class="spec-experience">Стаж работы: более 12 лет</div>
            <div class="all-types">Все виды массажей:</div>
            <ul class="spec-list">
              <li class="list-el_spec">классический</li>
              <li class="list-el_spec">лимфодренажный</li>
              <li class="list-el_spec">антицеллюлитный</li>
              <li class="list-el_spec">баночный</li>
              <li class="list-el_spec">спортивный</li>
              <li class="list-el_spec">скульптурный</li>
              <li class="list-el_spec">корректионный</li>
              <li class="list-el_spec">висцеральный</li>
              <li class="list-el_spec">медицинский</li>
            </ul>
          </div>
        </div>
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra(4).png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Егорушкина Анастасия Олеговна</div>
            <div class="spec-role">Косметолог-эстетист</div>
            <div class="spec-experience">Стаж работы: более 3 лет</div>
            <ul class="spec-list">
              <li class="list-el_spec">Аппаратные методики</li>
              <li class="list-el_spec">Массажи лица</li>
              <li class="list-el_spec">Уходовые процедуры</li>
              <li class="list-el_spec">Лечение проблемной кожи</li>
              <li class="list-el_spec">Различные чистки</li>
              <li class="list-el_spec">Лазерная эпиляция Soprano Platinum</li>
            </ul>
          </div>
        </div>
        <div class="specialist-slide">
          <img
            preset="allimg"
            decoding="async"
            src="/images/1vrach-Tumanova-Alexandra(5).png?webp"
            alt="specialist"
          />
          <div class="desc-specialist_block">
            <div class="spec-name">Комиссарова Яна Валерьевна</div>
            <div class="spec-role">Врач-терапевт, гастроэнтеролог</div>
            <div class="spec-experience">Стаж работы: более 3 лет</div>
            <ul class="spec-list">
              <li class="list-el_spec">Консультация по терапии</li>
              <li class="list-el_spec">Консультация по гастроэнтерологии</li>
              <li class="list-el_spec">Проведение процедуры ксенонотерапии</li>
            </ul>
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
    };
  },
  computed: {
    sliderCount() {
      if (process.client) {
        if (window.innerWidth < 770) {
          return 1;
        }
        if (window.innerWidth < 1020) {
          return 2;
        }
        if (window.innerWidth < 1200) {
          return 3;
        }
        if (window.innerWidth >= 1200) {
          return 4;
        }
      }
      return null;
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
    this.widthSlide =
      document.getElementsByClassName("specialist-slide")[0].clientWidth;
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
}

.desc-specialist_block {
  background: white;
}
section {
  margin-top: 64px;
}
.specialists-slider {
  display: flex;
  transition: transform 1000ms ease 0s;
}

.specialist-slide img {
  width: 100%;
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
    width: calc(100vw - 40px);
    padding-right: 32px;
  }
}
</style>