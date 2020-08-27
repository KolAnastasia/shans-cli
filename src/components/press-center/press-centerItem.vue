<template>
    <div class="news_item" >
      
            <img :src ="photoUrl"/>
            <div class="news_item_text-wr">
                <a href="/inner-news">
                    <div class="news_item_title"> {{title}}</div>
                </a>
            <div class="news_item_desc"> {{desc}}</div>
            <div class="news_item_info"> 
                <div class="news_item_date"> {{ date }}</div>
                <div class="news_item_source"> {{ source }}</div>
            </div>
             </div>

    </div>
</template>

<script>

export default {
    name: "press-centerItem",
    props: {
        title:String,
        desc:String,
        date:String,
        source:String,
        photoUrl:String
    }
}

</script>

<style lang="sass" scoped>
.news_item
        &_title 
            font-weight: bold
            font-size: 18px
            line-height: 24px
            margin-bottom: 12px
        &_desc 
            font-weight: normal
            font-size: 14px
            line-height: 24px
            color: #000000
            margin-bottom: 12px
        .news_item_text-wr 
            padding-top: 25px
        a 
            text-decoration: none
            color: #000000
      
            &:hover 
                color: #78BE20
                transition: .2s
        &_info 
            font-size: 12px
            line-height: 30px
            color: #9E9E9E
            display: flex
        &_date 
            margin-right: 30px 
            position: relative 
            &:after 
                position: absolute
                content: "\2022"
                right: -15px
                top: 50%
                transform: translateY(-50%)
                width: 3px
                height: 12px
                line-height: 1


           
</style>