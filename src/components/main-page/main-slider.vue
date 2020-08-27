<template>
  <div class="main-slider-wr">
    <slick ref="slick" :options="slickOptions" class="slider">
      <div class="main-slider-item">
        <picture>
          <source media="(max-width: 768px)" srcset="./../../assets/banner1-mob.jpg" />
          <img srcset="./../../assets/banner1.jpg" alt />
        </picture>

        <div class="main-slider_content">
          <h1>
            Производство
            <br />и реализация СЗР
          </h1>
          <div class="main-slider_content_bottom">
            <div
              class="main-slider_content_desc"
            >Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.</div>
          </div>
        </div>
      </div>
      <div class="main-slider-item">
        <picture>
          <source media="(max-width: 768px)" srcset="./../../assets/banner1-mob.jpg" />
          <img srcset="./../../assets/banner1.jpg" alt />
        </picture>
        <div class="main-slider_content">
          <h1>
            Производство
            <br />и реализация СЗР
          </h1>
          <div class="main-slider_content_bottom">
            <div
              class="main-slider_content_desc"
            >Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.</div>
          </div>
        </div>
      </div>
      <div class="main-slider-item">
        <picture>
          <source media="(max-width: 768px)" srcset="./../../assets/banner1-mob.jpg" />
          <img srcset="./../../assets/banner1.jpg" alt />
        </picture>
        <div class="main-slider_content">
          <h1>
            Производство
            <br />и реализация СЗР
          </h1>
          <div class="main-slider_content_bottom">
            <div
              class="main-slider_content_desc"
            >Ассортимент на сегодняшний день насчитывает более 62 препаратов из всех групп пестицидов.</div>
          </div>
        </div>
      </div>
    </slick>
    
  </div>
</template>

<script>

import Vue from 'vue';
import Slick from 'vue-slick';
export default {    
  name: "mainSlider", 
  components: { Slick },
  data() {
            return {
                    
                        //options can be used from the plugin documentation
                     	slickOptions: {
				slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: false,
                dots: false, // показывать `точки`
                arrows: true, // скрыть стрелки
                customPaging: function(slick) {
                    }
                }
                    
                    }
    },
    methods: {
            next() {
                    this.$refs.slick.next()
            },
            prev() {
                    this.$refs.slick.prev()
            },
            reInit() {
                    // Helpful if you have to deal with v-for to update dynamic lists
                    this.$refs.slick.reSlick()
            }
    }
  }

</script>

<style lang="sass" scoped>

.main-slider
    width: 100%
    &-item
        width: 100%
        position: relative
        img 
            width: 100%
    &_content
        position: absolute
        top: 127px
        left: 15%
        h1 
            font-weight: 800
            font-size: 48px
            line-height: 57px
            text-transform: uppercase
            color: #FFFFFF
            margin-top: 0
            margin-bottom: 50px
        &_desc
            font-size: 18px
            line-height: 30px
            color: #FFFFFF
            max-width: 410px
    &-wr .slick-arrow
        position: absolute
        z-index: 2

@media screen and (max-width: 600px) 
    .main-slider
        &_content 
            top: 65px
            left: 20px
            h1 
                font-size: 36px
            &_desc 
                padding-right: 20px
        
</style>