<template>
    <div class="news-wrap"> 
         <press-center-item class="main-press-center-item"
                        v-for="(item, index) in mainNewsItems"
                        :key="index"
                        :title="item.title"
                        :desc="item.desc"
                        :date="item.date"
                        :source="item.source"
                        :photoUrl="item.photoUrl"
                    >
                    
        <a href="/inner-news">
        </a>
         </press-center-item>
            <a href="/press-center" class="btn-text--green main-news-more"> <span>Все новости </span> 
                <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                </svg>
        </a>
    </div>
</template>

<script>
import pressCenterItem from '../press-center/press-centerItem'
import axios from 'axios';
export default {
  name: "news",
  components: {
    pressCenterItem
  },

  data: function () {
    return {
      newsItems: [],
      mainNewsItems: []
    };
  },
  
  mounted() {
    axios.get("/press-center.json").then((response) => {
      let sections = response.data;
      let newsSection = sections.filter(function (section) {
        return section.section == "Новости";
      });
      if (newsSection) {
        let newsItems = newsSection[0].items;
        this.mainNewsItems = newsItems.slice(0, 3);

      }

    });
  } 
};

</script>

<style lang="sass" scoped>

.news-wrap 
    display: grid
    grid-template-columns: 490px 1fr 1fr
    grid-gap: 10px 83px
    .main-press-center-item 
        &:first-of-type
            max-width: 490px 
            background-color: #F9F9F9
            .news_item_text-wr
                padding: 36px


.main-press-center-item:first-of-type .news_item_text-wr
    padding: 36px

.main-news-more 
    margin-top: 50px
    
</style>