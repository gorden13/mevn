<template>
  <div id="app" class="main">
    <!-- <bgCanvas /> -->
    <TheHeader />
    <TheNavBar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheNavBar from '@/components/TheNavBar'
import TheFooter from '@/components/TheFooter'
// import bgCanvas from '@/components/header/bg-canvas'
export default {
  components: {
    // bgCanvas,
    TheHeader,
    TheNavBar,
    TheFooter
  }
}
</script>
<style lang="scss" scoped>
 .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $white;
  }
</style>
