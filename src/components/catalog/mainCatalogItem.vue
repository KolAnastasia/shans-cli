<template>
    <div class="main-catalog_item"> 
        <div class="main-catalog_item_img"> 
            <img :src="imgUrl" alt=""/>
        </div>
        <div class="main-catalog_item_category">{{category}} </div>
        <div class="main-catalog_item_desc">{{desc}} </div>
        <a href="#"> 
            <span class="btn-text--green"> <span>Подробнее </span> 
                <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                </svg>
            </span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        category: String,
        desc: String,
        imgUrl: String,
        link: String
    }
}
</script>

<style lang="sass" scoped>

.main-catalog_item 
    border: 1px solid #E5E5E5
    box-sizing: border-box
    padding: 35px 36px
    &_img 
        height: 310px
    &_category 
        font-weight: 800
        font-size: 24px
        line-height: 30px
        margin-top: 25px
        margin-bottom: 15px
        min-height: 60px
    &_desc 
        font-size: 14px
        line-height: 24px
        color: #9E9E9E
        margin-bottom: 48px
    a 
        text-decoration: none
</style>