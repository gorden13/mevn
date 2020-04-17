<template>
  <div class="container">
    <TheAside />
    <TheContainer />
  </div>
</template>

<script>
import TheAside from '@/components/TheAside'
import TheContainer from '@/components/TheContainer'
export default {
  components: {
    TheAside,
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
</style>
