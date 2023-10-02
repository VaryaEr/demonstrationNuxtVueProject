<template>
  <NuxtLink to="/booking"
    ><button class="booking-btn white-animation">Записаться</button></NuxtLink
  >
</template>

<script>
export default {};
</script>

<style scoped>
.booking-btn {
  border: 1px solid #f15b67;
  padding: 8px 16px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  line-height: 110%;
  color: #f15b67;
  margin: 0 24px;
  letter-spacing: 3px;
}
.white-animation:before {
  background-color: #f15b67;
}

.white-animation:focus,
.white-animation:hover {
  color: white;
  border: 1px solid #f15b67;
}

@media (max-width: 1150px) {
  .booking-btn {
    border-radius: 2px;
    position: absolute;
    top: 16px;
    right: 130px;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .booking-btn {
    top: 16px;
    width: 138px;
    right: 106px;
  }
}
</style>