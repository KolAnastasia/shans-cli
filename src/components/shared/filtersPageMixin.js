var filterPageMixin = {
    methods:{
        //Update selectedFilters to send this data to catalog
        onFilterChanged({filterName, selectedValue}){
          //TODO: check after changing of html for catalog-filter
          let newFilter = {
            "filterName": filterName,
            "selectedValue": selectedValue
          }
          //before adding filter value to selected filters, check and remove if it already exists there
          let existingFilterIndex  = this.selectedFilters.findIndex(filter => filter.filterName === newFilter.filterName);
          if(existingFilterIndex!=-1){
            this.selectedFilters.splice(existingFilterIndex, 1)
          }
          //add new filter to selected filters
          this.selectedFilters.push(newFilter)
        },
        // Show in filters only options available in filtered data
        //TODO: test filters with more data and more filters 
        onDataFiltered(filteredData){
          this.availableFilters.forEach(filter => {
            let allAvailableValues = filteredData.map(function(product){
              return product[filter.name];
            });
            let availableOptions = filter.options.filter(function(option){
              return allAvailableValues.some(value=>value==option.value);
            });
            filter.options = availableOptions;
          });
        }
      }
}
export default filterPageMixin;