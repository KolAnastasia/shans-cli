<!-- Компонент для Фильтра-->
<template>
    <div :class="'filter-'+name" class="filter-item">    
      <div class="filter-choose" v-on:change="onValueChange">
        <div class="filter-wrapper">
            <div id="city" class="filter">
              <div class="filter_header">
                <span class="select__current">{{title}}</span>
              </div>
              <div class="filter_body">
                <div class="filter_body_item"  v-for="(item, index) in options" :key="index" :data-value="item.value">{{item.text}}</div>
              </div>
            </div>
        </div>
        
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4 5L7.4641 0.5H0.535898L4 5Z" fill="#9E9E9E"/>
      </svg>
      </div>
    </div>
</template>
<script>

import filterMixin from "@/components/shared/filterMixin.js";

export default {
    mixins:[filterMixin]
};

</script>
<style scoped lang="sass">
/* @import 'filter-styles.scss'; */

.filter
    margin-right: 35px
    position: relative
    &-choose
        display: flex
        font-size: 14px
        line-height: 17px
        color: #000000
        svg
            margin-top: 6px
    &_header 
      font-weight: bold
      cursor: pointer
    &_body
        line-height: 0
        max-height: 0
        overflow: hidden 
        position: absolute
        left: 0
        right: 0
        top: 100%
        width: 100%
        transition: .2s
    
    &-item 
        background: #F9F9F9
        padding: 21px 35px
        position: relative
        &:after 
          position: absolute
          content: ""
          width: 1px 
          height: 32px
          background-color: #E5E5E5
          right: 0
          top: 12px
        &:last-of-type
          &:after 
            display: none

.filter-productPests:after 
  display: none

    // &.active 
    //     .filter_body
    //         line-height: 1.3 
    //         max-height: 100%      
    //         background-color: #ffffff
    //         overflow: visible
    //         transition: .2s
    //         &_item 
    //             background-color: #ffffff
    //             z-index: 99
    //             position: relative
</style>