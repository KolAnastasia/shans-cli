<template>
<div class="trailer-news_item">
    <a href="/">
        <div class="trailer-news_item_title">
            {{title}}
        </div> 
    </a>
        <div class="trailer-news_item_desc">
            {{desc}}
        </div>
        <div class="trailer-news_item_date">
            {{date}}
        </div>
</div>
</template>

<script>
export default {
    name: "trailerNewsItem",
    props: {
        title: String,
        date: String,
        desc: String,
        location: String
    }
}
</script>
<style lang="sass" scoped>

</style>