<template>
    <div class="btn-more_wr">
        <div class="btn-more_icon">
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0L5.5 12M5.5 12L10 7.49217M5.5 12L1 7.49217" stroke="#78BE20" stroke-width="2"/>
            </svg>
        </div>
        <span> 
            Показать всё
        </span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.btn-more
    &_icon 
        padding: 15px 24px
        border: 1px solid #E5E5E5
        box-sizing: border-box
        margin-right: 25px
        transition: .2s
        transform: rotateX(0)
    &_wr
        display: flex
        align-items: center
        cursor: pointer
        max-width: 237px
        span 
            font-weight: 800
            font-size: 14px
            line-height: 17px
            letter-spacing: 0.1em
            text-transform: uppercase
            color: #78BE20
            font-weight: 800
            font-size: 14px
            line-height: 17px
            letter-spacing: 0.1em
            text-transform: uppercase
            color: #78BE20
   
        &:hover 
            .btn-more_icon svg path
                stroke: #000000 !important
                transition: .2s
            span 
                color: #000000
    
  
   
</style>