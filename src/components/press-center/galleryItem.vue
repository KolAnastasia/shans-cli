<template>
    <div class="gallery_item" >
        <a href="/">
            <img :src ="photoUrl"/>
            <div class="gallery_item_title"> {{title}}</div>
        </a>            
            <div class="gallery_item_date"> {{ date }}</div>       
    </div>
</template>

<script>
export default {
    name: "galleryItem",
    props: {
        title:String,
        date:String,
        photoUrl:String
    }
}

</script>

<style lang="sass" scoped>
.gallery_item 
    a 
        text-decoration: none        
        transition: .2s
        color: #000000
        img 
            margin-bottom: 25px
        &:hover 
            color: #78BE20
            transition: .2s
        
    &_title
        font-weight: bold
        font-size: 18px
        line-height: 24px
        margin-bottom: 10px
    &_date 
        font-size: 14px
        line-height: 24px
        color: #000000
</style>