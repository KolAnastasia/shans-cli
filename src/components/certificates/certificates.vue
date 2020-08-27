<template>
    <div class="container">
        <tabs>
            <div class="documentation-wr">
                <tab :name="docGroup.parentName" v-for="(docGroup, index) in docGroups" :key="index" :selected="docGroup.selected">
                    <certificates-item v-for="(item, index) in docGroup.items" :key="index"
                        :link="item.link"
                        :name="item.name" 
                        :number="item.number"
                    />
                     <btn-More></btn-More>
                </tab>
                
            </div>
        </tabs>
    </div>
</template>

<script>
import certificatesItem from "@/components/certificates/certificatesItem.vue";
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import btnMore from "@/components/buttons/btn-more.vue";
import axios from "axios"
export default {
    components: {
        certificatesItem,
        tabs,
        tab,
        btnMore
    },
    data: function() {
        return {
            docGroups : []
        }
    },
    mounted(){
        axios.get('/certificates.json').then(response => {
            this.docGroups = response.data;
            this.docGroups.forEach(function(docGroup){
                let i=1;
                docGroup.selected = false;
                docGroup.items.forEach(function(doc){
                    if (i < 10) {
                    doc.number = "0" + i;
                    }
                    else {
                        doc.number = "" + i;
                    }
                    i++;
                })
            });
            this.docGroups[0].selected = true;
        });
    }
    
}

</script>

<style lang="sass" scoped>
    .documentation
        &-wr
            .btn-more_wr 
                margin: 65px auto 0 auto


</style>
