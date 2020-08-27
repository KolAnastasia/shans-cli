<template>
    <div class="plants-item">
        <div class="plants-item_img"> 
            <img :src="imgUrl" />
        </div>
        <div class="plants-item_title"> 
            {{title}}
        </div>
        <div class="plants-item_desc">
            {{desc}}
        </div>
    </div>
</template>


<script>

export default {
    name: "catalogplantsItem",
    props:{
        title: String,
        desc: String, 
        imgUrl: String
    },

}


</script>



<style lang="sass" scoped>
.plants-item 
    max-width: 330px 
    padding: 48px 36px 72px 36px 
    -webkit-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
    -moz-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
    box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
    background-color: #ffffff
    margin-right: 80px
    &_img 
        height: 165px 
        width: auto
        margin-bottom: 48px
    &_title 
        font-weight: 800
        font-size: 24px
        line-height: 30px
        margin-bottom: 16px 
    &_desc 
        font-size: 14px 
        line-height: 1.7
        color: #9E9E9E
        min-height: 70px
</style>