<template>
  <div class="aside">
    <h2>Новостная лента</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <b>{{ item.date + ': ' }}</b>
        {{ item.name }}
        <div data-v-92e1ffbc="" class="fakeimg">
          Image
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        date: '14 марта',
        name: 'Сегодня десткий садик не работает, но выможете прийти и просто посмотреть на него со стороны'
      },
      {
        date: '13 марта',
        name: 'отмечали пятницу 13'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
 .aside {
    flex: 30%;
    background-color: #f1f1f1;
    padding: 20px;
  }
</style>
