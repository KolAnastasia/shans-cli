<template>
    <div class="catalog-plants--wrapper">
        <slick-slide
                ref="slick"
                :options="slickOptions" 
                class="slider"
                v-if="allProducts.length">
                <div class="catalog-plants-item"
                    v-for="(item, index) in allProducts"
                    :key="index"
                >
                
                <catalog-item 
                :title="item.title"
                :desc="item.desc" 
                :imgUrl="item.imgUrl" />

                </div> 
        </slick-slide>
        <a href="/" class="btn-text--green catalog-plants-more"> <span>Вся продукция </span> 
            <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
            </svg>
        </a>
    </div>
</template>

<script>
//TODO: paging
import catalogItem from "@/components/main-page/catalog-plants-item";
import axios from "axios"
export default {
    name: "catalogPlants",
    components: {
        catalogItem
    },
    
    data: function() {
        
        return {
            allProducts : [],
            slickOptions: {
				slidesToShow: 4,
                slidesToScroll: 1,
                // dots: true, // показывать `точки`
                //  customPaging: function (slider, i) {
                   
                //         return '<span>' + this.slickCurrentSlide + '</span>';
                //     },
                arrows: true, // скрыть стрелки
                nextArrow: '<div class="next-arrow slick-arrow" style="position: absolute;top: -94px;right: 28.5%;width: 15px; cursor: pointer;height: 15px;"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5H12M12 5.5L7.49217 1M12 5.5L7.49217 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>',
                prevArrow: '<div class="prev-arrow slick-arrow" style="position: absolute;top: -94px;cursor: pointer;right: calc(28.5% + 69px);width: 15px; height: 15px;"> <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5.5H2M2 5.5L6.50783 1M2 5.5L6.50783 10" stroke="#9E9E9E" stroke-width="2"/></svg></div>',
            }
        }
    },
    mounted(){
        axios.get('/catalogPlants.json').then(response => {
            this.allProducts = response.data
        });
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
    
}


</script>

<style lang="sass" scoped>
.catalog-plants--wrapper 
    width: 140%
.catalog-plants-more 
    margin-top: 64px
</style>
