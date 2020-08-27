<template>
        <div class="news-slider-wr"> 
            <slick-slide
                ref="slick"
                :options="slickOptions" 
                class="slider">
                <div class="news-slider-item">
                   <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>
                <div class="news-slider-item">
                    <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>
                <div class="news-slider-item">
                    <img :src="getImage('sliderNews1.jpg')" alt="" />
                </div>  
            </slick-slide>
        </div> 
</template>

<script>
export default {
    
    data() {
		return {
			slickOptions: {
				slidesToShow: 1,
                slidesToScroll: 1,
                
                arrows: true, // скрыть стрелки
                nextArrow: '<div class="next-arrow slick-arrow" style="position: absolute;bottom: -15px;right: 0;width: 15px; cursor: pointer;height: 15px;"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5H12M12 5.5L7.49217 1M12 5.5L7.49217 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>',
                prevArrow: '<div class="prev-arrow slick-arrow" style="position: absolute;bottom: -15px;cursor: pointer;right: 55px;width: 15px; height: 15px;"> <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5.5H2M2 5.5L6.50783 1M2 5.5L6.50783 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>',
        },
        mounted() {
           
        },
      methods: {

        next() {
            this.$refs.slick.next();
            console.log("NEXT")
        },
 
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
           this.$refs.slick.reSlick()
        },
 
        
      },
    };
  },
  
  
}

</script>

<style lang="sass" scoped>
.news-slider
    width: 100%
    &-item
        width: 100%
        position: relative
        img 
            width: 100%
    &-wr 
        width: 100%
        position: relative
        max-width: 980px
        margin: 50px 0

.news-slider-wr 
    position: relative
    .slick-arrow
        position: absolute
        bottom: -15px
        right: 0
        width: 15px 
        height: 15px
        background-color: #000000

</style>