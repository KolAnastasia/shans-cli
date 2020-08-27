<template>
    <div class="catalog-micro-wr">
                
     <catalog-micro-item  v-for="(item, index) in filteredData"
                    :key="index"
                :title="item.title"
                :desc="item.desc" 
                :imgUrl="item.imgUrl"
                :typeImg="item.typeImg"
               
                :actComponents="item.actComponents"
                 />
    </div>
</template>


<script>

import catalogMicroItem from "@/components/catalog/catalog_microItem.vue";
import axios from "axios"


export default {
     components: {
        catalogMicroItem
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
        axios.get('/catalogMicro.json').then(response => {
            this.allProducts = response.data
            this.filteredData = this.allProducts;
        });
    },    
}

</script>

<style lang="sass" scoped>
.catalog-micro-wr
    display: grid 
    grid-template-columns: repeat(auto-fit, minmax(330px, 330px))
    grid-gap: 64px 15px
    justify-content: space-between


</style>
