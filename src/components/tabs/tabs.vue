<template>
  <div>
      <div class="heading-wrap">
        <div class="tabs">
          <ul>
            <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      

      <div class="tabs-details">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props :  ['heading'],
  data() {
    return { tabs: [] };
    
  },
  

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  },

  mounted() {
    if (window.innerWidth < 960) {
      
    } 
  }
}
</script>

<style lang="sass" scoped>
  .heading-wrap
          .tabs 
              ul 
                  display: flex
                  justify-content: center
                  list-style: none
                  margin: 0
                  padding: 0
                  flex-wrap: wrap  
                  li
                    padding: 0 65px 30px 65px
                    a 
                        font-weight: 800
                        font-size: 12px
                        line-height: 14px
                        letter-spacing: 0.1em
                        text-transform: uppercase
                        color: #9E9E9E
                        text-decoration: none
                  .is-active 
                    border-bottom: 3px solid #78BE20
                    a
                      color: #000000
  .tabs-details
    background-color: #F9F9F9
    padding: 80px 80px 100px 80px 
    margin-bottom: 100px

  @media screen and (max-width: 1350px)
    .heading-wrap .tabs ul li 
      padding: 0 20px 30px 20px
</style>