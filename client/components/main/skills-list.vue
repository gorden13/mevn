<template>
  <div class="skills">
    <h3>Мои навыки</h3>
    <ul class="skills-list">
      <li>html, css, препроцессоры sass/scss/less</li>
      <li>Хорошие знания javascript (es5, es6+)</li>
      <li>Большой опыт Kendo.js, Kendo MVVM</li>
      <li>typescript, jquery</li>
      <li>Опыт по стэку Vue/Nuxt (vuex, axios, vue-router, auth)</li>
      <li>REST api</li>
      <li>Опыт взаимодествия с grunt, webpack</li>
      <li>Кроссбраузерная и адаптивная верстка (flexbox, Bootstrap)</li>
      <li>Знание и применение методологии БЭМ</li>
      <li>Имеется небольшой опыт работы со стэком node.js/express /mongoDB/mongoose</li>
      <li>Опыт разработки кроссплатформенных десктопных приложений с помощью electron.js, nw.js</li>
      <li>Работа с картографическим JavaScript API (google map, yandex map)</li>
      <li>Разработка мобильных приложений на платформе Telerik (ios, android) с помощью kendo mobile</li>
      <li>Разработка мобильных приложений NativeSript + Vue (ios, android). Использование NativeScript Sidekick, NativeScript CLI</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.skills {
  margin-top: 50px;
  &-list {
    li {
      &:before {
        content:  "—";
        position: relative;
        left: -5px;
      }
    }
  }
}
</style>
