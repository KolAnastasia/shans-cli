<template>
    <div class="catalog_item">
        <a href="/catalog_szr_inner"> 
            <div class="catalog_item_img"> 
                <img :src="photoUrl"/>
            </div>
            <div class="catalog_item_title">
                {{title}}</div>

            <div class="catalog_item_desc">{{desc}}</div>
            <div class="catalog_item_act-subst"> 
                <span> Действующее вещество: </span>
                    {{activeSubstance}}
            </div>
            <div class="catalog_item_icons">
                <div class="catalog_item_mark">
                    <img :src="typeIconUrl"/>
                </div>
                <div class="catalog_item_fav"> 
                    <img src="../../assets/cat-favourite.svg"/>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "catalogItem",
    props: {
        title:String,
        desc:String,
        activeSubstance:String,
        typeIconUrl:String,
        photoUrl:String
    }

}

</script>

<style lang="sass" scoped>

    .catalog
        padding: 100px 0
        &_item 
            max-width: 330px
            border: 1px solid #E5E5E5
            padding: 30px
            box-sizing: border-box
            position: relative
            &:hover 
                -webkit-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
                -moz-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
                box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.64)
                transition: .2s
                .catalog_item_img 
                    background-image: url("../../assets/hover-bg.svg")
                    transition: .2s 
                    background-position: top center 
                    background-size: cover

            &_img 
                margin-bottom: 30px
                text-align: center
                img 
                    width: 100%
                    max-width: 127px
                    margin: 0 auto
            a 
                text-decoration: none 

            &_title
                font-weight: bold
                font-size: 23px
                line-height: 36px
                margin-bottom: 10px
                color: #000000
            &_desc
                font-size: 14px
                line-height: 24px
                color: #9E9E9E
                margin-bottom: 25px
                min-height: 75px
            &_icons 
                position: absolute
                top: 10px
                width: calc(100% - 60px)
                display: flex
                justify-content: space-between
            &_mark 
                width: 48px 
            &_fav 
                width: 30px
            &_act-subst 
                font-size: 14px
                line-height: 24px
                color: #9E9E9E
                span 
                    font-weight: bold
                    color: #78BE20
                    display: block
                    margin-bottom: 5px

</style>
