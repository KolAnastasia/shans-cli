<template>
    <div class="main-catalog-wrap"> 
        <catalog-item
              v-for="(item, index) in mainCatalogItems"
              :key="index"
              :link="item.link"
              :category="item.category"
              :desc="item.desc"
              :imgUrl="item.imgUrl" />
    </div>
</template>

<script>

import catalogItem from "@/components/catalog/mainCatalogItem.vue";
import axios from "axios";

export default {
    components: {
        catalogItem,
    },
    data: function () {
        return {
        mainCatalogItems: []
        };
    },

    mounted() {
        axios.get('/main-catalog.json').then(response => {
            this.mainCatalogItems = response.data;
        });
    }
}

</script>

<style lang="sass" scoped>
.main-catalog-wrap 
    display: grid 
    grid-template-columns: repeat(auto-fit, minmax(327px, 327px))
    justify-content: space-between
    grid-gap: 25px 
    margin: 60px 0 100px 0

</style>