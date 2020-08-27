<template>
  <div class="container">
    <div class="press-center-main-wr">
    <tabs>
        <tab name="Пресс-центр" :selected="true">
            <div class="wrapper-grid">
                <div class="wrapper-grid_content">
                  <div class="press-center-content-wr">
                  <div class="news-filter-wr">
                    <news-filter  v-for="(item, index) in availableFilters"
                      :key="index" 
                      :title="item.title" 
                      :name="item.name" 
                      :options="item.options"
                      v-on:filterChanged="onFilterChanged" />
                    <button class="btn--green news-filter_btn"> Искать </button>
                  </div>
                    <div class="press-center-wr">
                    <press-center-item
                        v-for="(item, index) in newsItems"
                        :key="index"
                        :title="item.title"
                        :desc="item.desc"
                        :date="item.date"
                        :source="item.source"
                        :photoUrl="item.photoUrl"
                    />
                    </div>
                    <btn-more />
                 </div> 
                </div>
                <aside class="wrapper-grid_aside"> 
                  <div class="press-center_events-aside">
                  <div class="press-center_subtitle"> Ближайшие события </div>
                      <div class="nearest-events"> 
                           <div class="nearest-events_item"> 
                            <div class="nearest-events_item_subtitle"> 
                               <a href="/">
                              Растения получат «Шанс» из Липецка
                               </a>
                              </div>
                              <div class="nearest-events_item_desc">
                                О намерении ООО «Шанс энтерпрайз» построить завод на новой елецкой площадке ОЭЗ «Липецк» „Ъ“ рассказал гендиректор Иван Кошелев. 
                              </div>
                              <div class="nearest-events_item_date">
                              1 июня 2020 - 5 июня 2020 
                              </div>
                           </div>
                            <div class="nearest-events_item"> 
                            <div class="nearest-events_item_subtitle"> 
                              <a href="/">
                              Растения получат «Шанс» из Липецка
                              </a>
                              </div>
                              <div class="nearest-events_item_desc">
                                О намерении ООО «Шанс энтерпрайз» построить завод на новой елецкой площадке ОЭЗ «Липецк» „Ъ“ рассказал гендиректор Иван Кошелев. 
                              </div>
                              <div class="nearest-events_item_date">
                              1 июня 2020 - 5 июня 2020 
                              </div>
                           </div>
                      </div>
                      <a href="#календарь-событий" class="btn-text--green"> <span>Все события </span>
                        <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                        </svg>
                      </a>
                  </div>
                    <form-news />
                </aside>
            </div>
        </tab>
        <tab name="Календарь событий" :selected="false">
           <div class="wrapper-grid">
                <div class="wrapper-grid_content">
                      
                    <div class="press-center-wr">
                    <event-item
                        v-for="(item, index) in calendarItems"
                        :key="index"
                        :title="item.title"
                        :desc="item.desc"
                        :date="item.date"
                        :location="item.location"
                    />
                    </div>
                    <btn-more />
                </div>
                <aside class="wrapper-grid_aside"> 
                    <form-news />                    
                   
                </aside>
            </div>
        </tab>

        <tab name="Галерея" :selected="false">
          <div class="gallery-wr">
            <gallery-item
              v-for="(item, index) in galleryItems"
              :key="index"
              :title="item.title"
              :date="item.date"
              :photoUrl="item.photoUrl"
            ></gallery-item>
          </div>
        </tab>
    </tabs>
    </div>
  </div>
</template>

<script>
import pressCenterItem from "@/components/press-center/press-centerItem.vue";
import galleryItem from "@/components/press-center/galleryItem.vue";
import eventItem from "@/components/press-center/eventItem.vue";
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import formNews from "@/components/forms/form-news.vue";
import newsFilter from "@/components/news-filter.vue";
import btnMore from "@/components/buttons/btn-more.vue";
import axios from "axios";
import filtersPageMixin from "@/components/shared/filtersPageMixin.js";
export default {
  mixins: [filtersPageMixin],
  name: "press-center",
  components: {
    pressCenterItem,
    tabs,
    tab,
    btnMore,
    galleryItem,
    eventItem,
    formNews,
    newsFilter
  },
  data: function () {
    return {
      newsItems: [],
      calendarItems: [],
      galleryItems: [],
      filterGroups : ["dateNews", "themeNews"],
      selectedFilters:[],
      availableFilters:[],
    };
  },
  mounted() {
    axios.get("/press-center.json").then((response) => {
      let sections = response.data;
      let newsSection = sections.filter(function (section) {
        return section.section == "Новости";
      });
      if (newsSection) {
        this.newsItems = newsSection[0].items;
      }

      let calendarSection = sections.filter(function (section) {
        return section.section == "Календарь";
      });
      if (calendarSection) {
        this.calendarItems = calendarSection[0].items;
      }

      let gallerySection = sections.filter(function (section) {
        return section.section == "Галерея";
      });
      if (gallerySection) {
        this.galleryItems = gallerySection[0].items;
      }
    });

    axios.get('/newsFilter.json').then(response => {
      this.availableFilters = response.data.filter((item)=>{
        //берем только те фильтры, которрые перечислены в filterGroups
        return this.filterGroups.indexOf(item.name)!=-1
      });
    });
  }
      
};
</script>

<style lang="sass" scoped>
.press-center-main-wr div .heading-wrap .tabs ul 
  justify-content: center

.press-center-wr
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr))
    grid-gap: 50px 80px
    .news_item
        &:first-of-type
            grid-column: span 2
    
.wrapper-grid_content
    .btn-more_wr
      margin: 65px auto 0 auto

.gallery-wr 
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
    grid-gap: 50px 80px 

.press-center_events-aside 
  margin-bottom: 80px

.press-center_subtitle 
  font-weight: 800
  font-size: 24px
  line-height: 29px
  margin-bottom: 35px

.news-filter-wr
  display: flex
  align-items: center
  justify-content: space-between
  box-sizing: border-box
  background-color: #ffffff
  margin-bottom: 50px

.nearest-events 
  &_item
    margin-bottom: 35px
    &_subtitle 
      a
        font-weight: bold
        font-size: 18px
        line-height: 24px
        text-decoration: none
        margin-bottom: 15px
        color: #000
        transition: .2s
        &:hover 
          color: #78BE20
          transition: .2s
    &_desc 
      font-size: 14px
      margin-bottom: 15px
    &_date 
      font-weight: bold
      font-size: 12px
      line-height: 30px
      color: #78BE20
    &:last-of-type
      margin-bottom: 50px
   

</style>
