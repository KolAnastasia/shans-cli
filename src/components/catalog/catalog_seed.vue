<template>
    <div class="catalog-seed-wr">
                
     <catalog-seed-item  v-for="(item, index) in filteredData"
                    :key="index"
                :title="item.title"
                :desc="item.desc" 
                :imgUrl="item.imgUrl"
                :purposeImg="item.purposeImg"
                :typeImg="item.typeImg"
                :purposeText="item.purposeText"
                :typeText="item.typeText"
                :productRipeness="item.productRipeness"
                 />
    </div>
</template>


<script>

import catalogSeedItem from "@/components/catalog/catalogSeedItem.vue";
import axios from "axios"


export default {
     components: {
        catalogSeedItem
    },

    props:{
        selectedFilters:Array
    }, 
    
    data: function() {
        
        return {
            allProducts : [],
            
        }
    },
    
    computed:{
        filteredData:function(){
            let result = this.allProducts;
            this.selectedFilters.forEach(function(selectedFilter) {
                let tempFilteredData = result;
                tempFilteredData = result.filter(function(product){
                    return product[selectedFilter.filterName]==selectedFilter.selectedValue
                });
                result = tempFilteredData;
            });
            this.$emit('dataFiltered', result)
            return result;
        }
    },
    mounted(){
        axios.get('/seedCatalog.json').then(response => {
            this.allProducts = response.data
            this.filteredData = this.allProducts;
        });
    },    
}

</script>

<style lang="sass" scoped>
.catalog-seed-wr
    display: grid 
    grid-template-columns: repeat(auto-fit, minmax(330px, 330px))
    grid-gap: 64px 15px
    justify-content: space-between


</style>
