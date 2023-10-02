<template>
  <section class="section-adress">
    <h3 class="adress-title specialists-title">Наши контакты</h3>
    <div class="map-contact_block">
      <div class="map-block">
        <div class="map-wrapper">
          <div class="map-overlay"></div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Aabe117eae782b7148e10be965891d1d1aa04877f0fd39785ea912f8ebbc9e45d"
            frameborder="0"
            allowfullscreen="true"
            width="100%"
            height="449px"
            style="display: block"
          ></iframe>
        </div>
      </div>
      <div class="contact-block">
        <div class="moscow-text">Москва</div>
        <div class="adress-block">
          <img
            preset="allimg"
            decoding="async"
            src="/images/Component5.svg"
            alt=""
            class=""
          />
          <div class="adress-text">
            Каширское шоссе, д.3, корп. 2, стр. 4, этаж 6
          </div>
        </div>
        <div class="phone-block">
          <img
            preset="allimg"
            decoding="async"
            src="/images/Component6.svg"
            alt=""
            class=""
          />
          <div class="phone-text">
            <a href="tel:+79399007190">+7 (939) 900-71-90</a>
          </div>
        </div>
        <div class="email-block">
          <img
            preset="allimg"
            decoding="async"
            src="/images/Component7.svg"
            alt=""
            class=""
          />
          <div class="email-text">balance_mc+6136799@mail.ru</div>
        </div>
        <div class="social-network">
          <a href="https://vk.com/balancemc">
            <img
              preset="allimg"
              decoding="async"
              src="/images/Component1.svg"
              alt=""
              class="vk"
            />
          </a>
          <a href="https://t.me/BALANCE_MC">
            <img
              preset="allimg"
              decoding="async"
              src="/images/Component1(1).svg"
              alt=""
              class="tg"
            />
          </a>
          <a href="https://www.youtube.com/@Balance_medcentre">
            <img
              preset="allimg"
              decoding="async"
              src="/images/Component1(2).svg"
              alt=""
              class="yt"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
.section-adress {
  padding-bottom: 96px;
  margin-top: 64px;
}
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
.map-contact_block {
  display: flex;
}
.map-block {
  height: 449px;
  width: 100%;
  margin-right: 32px;
}
.contact-block {
  width: 100%;
  max-width: 480px;
}
.adress-block img,
.email-block img,
.phone-block img {
  width: 32px;
  margin-right: 16px;
}

.adress-block div,
.email-block div,
.phone-block div {
  color: #7b7d80;
  font-family: Segoe UI;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}
.adress-block,
.email-block,
.phone-block {
  display: flex;
  align-items: flex-start;
}
.social-network {
  margin-top: 40px;
  display: flex;
}
.social-network img {
  margin-right: 8px;
  width: 48px;
  height: 48px;
}

.moscow-text {
  color: #a87e72;
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 40px;
}
.phone-text {
  margin-bottom: 22px;
}

@media (max-width: 768px) {
  .section-adress {
    margin: 64px 0;
    margin-bottom: 0;
    padding-bottom: 32px;
  }
  .specialists-title {
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .map-contact_block {
    display: flex;
    flex-direction: column-reverse;
  }
  .contact-block {
    max-width: 100%;
  }
  .adress-block div,
  .phone-block div {
    margin-bottom: 24px;
  }
  .adress-block div,
  .email-block div,
  .phone-block div {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .social-network {
    width: fit-content;
    margin: auto;
    margin-bottom: 32px;
    margin-top: 24px;
  }
}
</style>