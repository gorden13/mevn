<template>
  <nav class="navbar">
    <nuxt-link no-prfetch active-class="active" class="nav-link" to="/">
      Главная
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/">
      Школа английского
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/">
      Фото
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/">
      Контакты
    </nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    background-color: #333;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

    a {
      color: white;
      padding: 14px 20px;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: #ddd;
        color: black;
      }
    }
  }
</style>
