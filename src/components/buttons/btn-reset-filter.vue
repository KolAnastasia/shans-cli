<template>
  <div class="filter-btn-reset">
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.1475 5.96665C13.4716 4.25806 11.2433 3.31708 8.8732 3.31708H7.57231L9.66029 1.18314L8.49692 0L4.43039 4.15603L8.44385 8.31619L9.61538 7.14146L7.542 4.9923H8.8732C12.8598 4.9923 16.1032 8.29892 16.1032 12.3634C16.1032 16.4278 12.8598 19.7344 8.8732 19.7344C4.88656 19.7344 1.64317 16.4278 1.64317 12.3632V11.5256L0 11.5258V12.3634C0 14.7797 0.922975 17.0515 2.59891 18.7601C4.27481 20.4687 6.50311 21.4097 8.8732 21.4097C11.2433 21.4097 13.4716 20.4687 15.1475 18.7601C16.8234 17.0514 17.7464 14.7797 17.7464 12.3634C17.7464 9.94705 16.8234 7.67528 15.1475 5.96665Z"
        fill="#78BE20"
      />
    </svg>
    <span>Сбросить</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.filter-btn-reset 
    display: flex 
    align-items: center 
    cursor: pointer
    span  
        font-weight: 800
        font-size: 12px
        line-height: 14px
        letter-spacing: 0.1em
        text-transform: uppercase
        color: #78BE20
    svg 
        margin-right: 13px
</style>