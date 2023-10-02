<template>
  <div class="notice notification-visible">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
/*! CSS Used from: https://balance-msk.ru/wp-content/themes/rela-child-theme/style.css?ver=6.1.1 ; media=all */
@media all {
  .notice {
    transition: all 0.3s ease;
    position: fixed;
    width: 280px;
    max-width: 90%;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f59b90;
    color: #fff;
    text-align: center;
    font-size: 18px;
    opacity: 0;
    z-index: 1000;
  }

  .notification-visible {
    opacity: 1;
  }
}

/*! CSS Used from: https://balance-msk.ru/wp-content/themes/rela/assets/css/general.css?ver=6.1.1 ; media=all */
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
}

/*! CSS Used from: https://balance-msk.ru/wp-content/plugins/aheto/assets/frontend/css/style.css ; media=all */
@media all {
  *,
  ::after,
  ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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

  ::selection {
    background-color: #a87e72;
    color: var(--c-white);
  }
}
</style>