<template>
    <ul class="inner-news-list">
        <li class="inner-news-list_item"> <span> 1 этап: 60 млн. литров в год </span></li> 
        <li class="inner-news-list_item"> <span>2 этап: 100 млн. литров в год </span></li>
    </ul>
</template>
<script>
export default {
     name: "listNews",
}
</script>
<style lang="sass" scoped>

.inner-news-list
    margin: 0
    list-style: square
    padding-left: 20px
    &_item 
        position: relative 
        color: #78BE20
        span 
            color: #000000

</style>