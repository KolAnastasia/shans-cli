<template>
    <div class="main-info-news">
           <div class="info_news_title">
               Начало строительства завода по производству средств защиты растений и прочих агрохимических продуктов на территории ОЭЗ ППТ «Липецк»
           </div>
        <div class="info_news"> 
            <div class="info_news_date"> 1 ноября 2019  </div>
            <div class="info_news_source">Публикации в СМИ</div>
        </div>
        <div class="news_img">  <img src ="@/assets/news2.jpg"/> </div>
    </div>
</template>

<script>
export default {
    name: "titleNews",
}
</script>

<style lang="sass" scoped>
.info 
    &_news
        font-size: 12px
        line-height: 30px
        color: #9E9E9E
        display: flex
        margin-bottom: 25px
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
        &_title 
            font-weight: 800
            font-size: 36px
            line-height: 43px
            color: #000000
            margin-bottom: 25px
        &_img 
            margin-bottom: 35px
</style>