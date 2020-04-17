<template>
  <div id="app" class="main">
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
export default {
  components: {
    TheHeader,
    TheNavBar,
    TheFooter
  },
  data: () => ({
    cond: true
  })
}
</script>
<style lang="scss" scoped>
 .main {
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 }
</style>
