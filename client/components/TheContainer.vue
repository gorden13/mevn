<template>
  <div class="main">
    <!-- <autoText /> -->
    <skillsList />
    <!-- примеры тестовых заданий по Vue.
    Описание заданий внутри проектов:

    https://github.com/gorden13/notelist
    https://github.com/gorden13/respondets
    https://github.com/gorden13/range-slider-example

    дополнительно:

    - Опыт использования средств командной разработки git, svn, TFS, Bitbucket, TortoiseGit, SourceTree
    - Использование pixel perfect, googleDevTools, Postman
    - Вёрстка по макетам axure
    - Опыт деплоя проектов на heroku, автодеплой.
    - Опыт командной разработки. Проведение ретроспектив
    - Умение быстро разбираться в чужом коде
    - Английский язык на техническом уровне
    - Огромное желание расти и развиваться! -->
  </div>
</template>

<script>
// import autoText from '@/components/auto-text'
import skillsList from '@/components/main/skills-list'
export default {
  components: {
    skillsList
    // autoText
  }
}
</script>

<style lang="scss" scoped>
  .main {
    flex: 70%;
    background-color: white;
    padding: 20px;
  }
</style>
