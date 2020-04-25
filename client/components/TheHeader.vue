<template>
  <div class="header">
    <div class="header__info">
      <h1>gorden13</h1>
      <p>разработка реактивных веб-сайтов</p>
    </div>

    <!-- <img src="~assets/images/bg_header.png" class="logo" alt="logo"> -->
    <vue-particles color="#fff" particleopacity="1" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .header {
    height: 450px;
    background: #333;
    // background-image: url('~assets/images/23.png');
    // background-size: cover;
    @media screen and (max-width: $screen-tablet-min-width) {
      & .logo {
        width: 100%;
      }
    }
    &__info {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      top: 50%;
      height: 75px;
      justify-content: space-between;
      color: $white;
    }
  }
</style>
