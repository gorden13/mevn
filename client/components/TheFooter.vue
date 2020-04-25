<template>
  <div class="footer">
    <p class="footer--copyright">
      &#x24B8;, {{ copyright }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    copyright () {
      const date = Date.now()
      const fullYear = new Date(date).getFullYear()
      return `${fullYear} все права защищены`
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 20px;
    text-align: center;
    background: #333;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
