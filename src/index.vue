<template>
  <div id="index">
    <appHeader> </appHeader>
    <mainSlider> </mainSlider>
    <appFooter> </appFooter>
   </div>
</template>

<script>
import appHeader from './components/header.vue'
import mainSlider from './components/main-page/main-slider.vue'
import appFooter from './components/footer.vue'

export default {
  name: 'Index',
  components: {
    appHeader,
    mainSlider,
    appFooter
  }
}
</script>

<style src='slick-carousel/slick/slick.css'>
    /* global styles */
</style>
