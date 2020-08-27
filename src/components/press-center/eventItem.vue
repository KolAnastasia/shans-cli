
<template>
    <div class="event_item" >
        <a href="/">
            <div class="event_item_title"> {{title}}</div>
        </a>            
            <div class="event_item_desc"> {{ desc }}</div>       
            <div class="event_item_date"> {{ date }}</div>       
            <div class="event_item_location"> {{ location }}</div>       
    </div>
</template>

<script>
export default {
    name: "eventItem",
    props: {
        title: String,
        date: String,
        desc: String,
        location: String
    }
}

</script>

<style lang="sass" scoped>
.event_item
    a 
        text-decoration: none 
    &_title 
        font-weight: bold
        font-size: 18px
        line-height: 24px
        color: #000000
        transition: .2s
        margin-bottom: 12px
        
        &:hover 
            color: #78BE20
            transition: .2s
    &_desc 
        font-size: 14px
        line-height: 24px
        margin-bottom: 15px
    &_date 
        position: relative
        font-weight: bold
        font-size: 14px
        line-height: 30px
        color: #9E9E9E
        padding-left: 25px
        &:before 
            position: absolute
            content: ""
            background-image: url("../../assets/evenetDateIcon.svg")
            left: 0
            top: 50%
            width: 14px
            height: 15px
            transform: translateY(-50%)
            margin-bottom: 12px

    &_location
        position: relative
        font-size: 14px
        line-height: 30px
        color: #9E9E9E
        padding-left: 25px
        &:before 
            position: absolute
            content: ""
            background-image: url("../../assets/eventGeoIcon.svg")
            left: 0
            top: 4px
            width: 14px
            height: 15px
</style>