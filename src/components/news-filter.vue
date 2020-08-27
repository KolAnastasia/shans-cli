<template>
  <div :class="'filter-'+name">    
    <div class="filter-choose" v-on:change="onValueChange">
      
      <div class="filter-wrapper">
        <div class="filter-wr">
          <div id="city" class="filter">
            <div class="filter_header">
              <span class="select__current">{{title}}</span>
            </div>
            <div class="filter_body">
              <div class="filter_body_item"  v-for="(item, index) in options" :key="index" :data-value="item.value">{{item.text}}</div>
            </div>
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
}

</script>
<style scoped lang="sass">
/* @import 'filter-styles.scss'; */

.filter
    margin-right: 10px
    &-choose
        display: flex
        font-size: 14px
        line-height: 17px
        font-weight: bold
        color: #000000
        width: 100%
        justify-content: space-between
        padding-right: 35px
        position: relative
        svg
            margin-top: 6px
    &_header 
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
    &.active 
        .filter_body
            line-height: 1.3 
            max-height: 100%      
            background-color: #ffffff
            overflow: visible
            transition: .2s
            &_item 
                background-color: #ffffff
                z-index: 99
                position: relative
                padding-left: 21px
                margin-left: -21px
                padding-top: 10px 
                &:last-of-type 
                  padding-bottom: 10px

.filter-dateNews
  width: 100%
  padding-left: 21px
  margin-right: 35px
  position: relative
  &:after 
    position: absolute 
    content: ""
    background-color: #E5E5E5
    height: 32px
    width: 1px
    right: 0
    top: -8px
 
.filter-themeNews 
  width: 100%
</style>