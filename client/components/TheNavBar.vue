<template>
  <nav class="navbar">
    <nuxt-link no-prefetch active-class="active" exact class="nav-link" to="/">
      Главная
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/portfolio">
      Портфолио
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/develop">
      Разработка
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/contacts">
      Контакты
    </nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    z-index: 1;
    background-color: $nav-bg-color;
    @media screen and (max-width: $screen-tablet-min-width) {
      flex-direction: column;
    }

    a {
      color: #929292;
      padding: 14px 20px;
      text-decoration: none;
      text-align: center;

      position: relative;
      display: block;
      margin: 0 1.5em;
      padding: 0.75em 0;
      text-align: center;
      // color: #b5b5b5;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #d94f5c;
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        -webkit-transition: -webkit-transform 0.1s;
        transition: transform 0.1s;
      }

      &.active {
        color: #d94f5c;
        &:before {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
          -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
        }
      }

      &:hover {
        // background-color: $nav-link-bg-hover-color;
        color: $white;
      }
    }
  }
</style>
