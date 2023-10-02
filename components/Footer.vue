<template>
  <div class="mane-container">
    <div class="mane-container_block container-fluid">
      <NuxtLink to="/">
        <img src="/images/Group61(1).png" alt="logo" class="logo-block" />
      </NuxtLink>
      <div class="main-block_contacts">
        <div class="contact-title">Контакты</div>
        <div class="adress">
          г. Москва, Каширское шоссе, д.3, корп. 2, стр. 4, этаж 6
        </div>
        <div class="phone">
          <a href="tel:+79399007190">+7 (939) 900-71-90</a>
        </div>
        <div class="legal-information">
          <NuxtLink to="/legal-information">Правовая информация</NuxtLink>
        </div>
        <div class="social-network">
          <a href="https://t.me/BALANCE_MC">
            <img src="/images/Component1(3).svg" alt="vk" />
          </a>
          <a href="https://vk.com/balancemc"
            ><img src="/images/Component1(4).svg" alt="tg"
          /></a>
          <a href="https://www.youtube.com/@Balance_medcentre"
            ><img src="/images/Component1(5).svg" alt="yt"
          /></a>
        </div>
      </div>
      <div class="services-block">
        <div class="body-block block-el">
          <div class="title-body title-el">Тело</div>
          <ul>
            <li>
              <NuxtLink to="/rsl-sculpting">RSL-скульптор </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cryolipolysis-clatuu">Криолиполиз Сlatuu</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/spa-massage"> SРА Массаж</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/laser-hair-removal"> Лазерная эпиляция</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/floating">Флоатинг </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="face-block block-el">
          <div class="title-face title-el">Лицо</div>
          <ul>
            <li>
              <NuxtLink to="/ultraformer">Ultraformer </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dermadrop">Dermadrop</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/biorevitalization"> Биоревитализация</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/botulinum-therapy"> Ботулинотерапия</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/mesotherapy">Мезотерапия </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="health-block block-el">
          <div class="title-health title-el">Здоровье</div>
          <ul>
            <li>
              <NuxtLink to="/analyzes">Анализы</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dietology">Диетология</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/xenon-therapy">Ксенонотерапия </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/psychology">Психология</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/endocrinology">Эндокринология </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="balance-block block-el">
          <div class="title-balance title-el">Balance</div>
          <ul>
            <li>
              <NuxtLink to="/about">О нас</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Блог</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/certificates">Сертификаты </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacts">Контакты </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>


<style scoped>
.title-el {
  color: var(--color-title, #42474e);
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  margin-bottom: 24px;
}

.block-el li {
  color: var(--color-title, #42474e);
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.04px;
  /* 186% */
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  overflow-wrap: break-word;
}

.block-el li a {
  color: var(--color-title, #42474e);
}

.block-el li:last-child {
  margin-bottom: 0;
}

.block-el:nth-child(2),
.block-el:nth-child(3) {
  margin: auto;
  margin-top: 0;
}

.mane-container_block {
  display: grid;
  margin-bottom: 96px;
  grid-template-areas:
    "post-1 post-3"
    "post-2 post-3";
}

.logo-block {
  width: 344.676px;
  height: 64.004px;
  grid-area: post-1;
  margin-bottom: 32px;
  min-width: 344.676px;
}

.contact-title {
  color: var(--color-title, #42474e);
  /* Desktop/Text L */
  font-family: Playfair Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;
}

.adress {
  color: var(--color-title, #42474e);
  /* Desktop/Text XS */
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 16px;
}

.phone {
  color: var(--color-title, #42474e);
  /* Desktop/Text M */
  font-family: Segoe UI;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 24px;
}

.legal-information {
  color: var(--color-title, #42474e);
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  /* 20.8px */
  text-decoration-line: underline;
  margin-bottom: 24px;
}

.legal-information a {
  color: var(--color-title, #42474e);
}

.social-network {
  display: flex;
}

.social-network img {
  margin-right: 8px;
}

.social-network img:last-child {
  margin-right: 8px;
}

.mane-container {
  background: var(
    --gradient-01,
    linear-gradient(
      138deg,
      rgba(247, 149, 91, 0.75) 0%,
      rgba(255, 226, 147, 0.75) 100%
    )
  );
  padding: 40px 0 84px;
}

.block-el ul {
  max-width: 170px;
  width: 100%;
}

.services-block {
  margin-left: 32px;
  grid-area: post-3;
  display: flex;
}

@media (max-width: 1150px) {
  .mane-container_block {
    grid-template-areas:
      "post-1 "
      "post-3 "
      "post-2 ";
    margin-bottom: 0;
  }

  .services-block {
    margin-left: 0;
    margin-top: 30px;
    grid-template-areas:
      "post-1 post-2"
      "post-3 post-4";
    display: grid;
  }

  .main-block_contacts {
    margin-top: 40px;
  }

  .block-el {
    flex: 50%;
  }

  .block-el ul {
    max-width: initial;
  }

  .services-block div.block-el {
    margin-top: 0;
    margin-left: 0;
    margin-right: 100%;
    width: max-content;
  }

  .services-block div.balance-block,
  .services-block div.title-health {
    margin-top: 40px;
  }

  .logo-block {
    width: 258.507px;
    height: 48px;
    min-width: 258.507px;
  }

  .mane-container {
    padding: 44px 0 84px;
  }
}

@media (max-width: 768px) {
  .health-block,
  .face-block,
  .body-block,
  .title-balance {
    display: none;
  }
  .mane-container {
    padding: 32px 0;
  }
  .logo-block {
    width: 215.423px;
    min-width: 215.423px;
    height: 40.002px;
    margin: auto;
    margin-bottom: 32px;
  }

  div.services-block,
  .services-block div.balance-block {
    margin-top: 0;
  }

  .services-block {
    display: block;
  }

  .services-block div.block-el {
    margin-right: 0;
    margin: 0 auto;
  }

  .main-block_contacts {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    margin-top: 32px;
  }

  .block-el ul {
    margin-bottom: 0;
    text-align: center;
  }

  .social-network {
    justify-content: center;
  }

  .block-el li {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 26.04px;
    /* 217% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
}
</style>