<template>
    <div class="catalog-szr-wr">
                
     <catalog-item  v-for="(item, index) in filteredData"
                    :key="index"
                :title="item.title"
                :desc="item.desc" 
                :activeSubstance="item.activeSubstance"
                :typeIconUrl="item.typeIconUrl"
                :photoUrl="item.photoUrl" />
    </div>
</template>


<script>

import catalogItem from "@/components/main-page/catalog-item";
import axios from "axios"


export default {
     components: {
        catalogItem
    },

    props:{
        selectedFilters:Array
    },  data: function() {
        
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
        axios.get('/plantProtectionData.json').then(response => {
            this.allProducts = response.data
            this.filteredData = this.allProducts;
        });
    },

    methods: {

    next() {
        this.$refs.slick.next();
        console.log("NEXT")
    },

    prev() {
        this.$refs.slick.prev();
    },

    reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$refs.slick.reSlick()
    },

    
    },
    
}

</script>

<style lang="sass" scoped>

</style>
