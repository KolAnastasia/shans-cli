var filterMixin = {
    props: {
        title: String,
        options: Array,
        name: String,
    },
    methods: {
        onValueChange(event) {
        let filterName = this.name;
        //TODO: change after changing component template
        let selectedValue = event.target.value;
        this.$emit("filterChanged", { filterName, selectedValue });
        },
    },
    mounted() {
        let wrapClass  = ".filter-"+this.name;
        let filterName = this.name;
        let self = this;
        let selectHeader = document.querySelector(wrapClass + ' .filter-choose');

        let selectItem =  document.querySelectorAll(wrapClass + ' .filter_body_item');
        selectHeader.addEventListener("click", function () {
            selectToggle();
        });
        selectItem.forEach(function (item) {
            item.addEventListener("click", function () {
                selectChoose(item);
            });
        });
        function selectToggle() {
            document.querySelector(wrapClass + ' .filter').classList.toggle('active');
        }
        function selectChoose(option) {
            let selectedText = option.innerText;
            let selectedValue  = option.dataset.value;
            let selectedTextElem = document.querySelector(wrapClass + ' .select__current');
            selectedTextElem.innerText = selectedText;
            selectToggle();
            self.$emit("filterChanged", { filterName, selectedValue });
        }
        
    }
}
export default filterMixin;