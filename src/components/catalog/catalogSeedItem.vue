<template>

            <a href="/" class="seed-item-link"> 
    <div class="seed-item"> 
            <img :src="imgUrl"  />
            <div class="seed-item_title"> {{ title }} </div>
            
            <div class="seed-item_desc"> {{desc}} </div>
            <div class="seed-item_icons"> 
                <div class="seed-item_icons_purpose"> 
                    <img :src="purposeImg" />
                        <span v-html="purposeText"></span>
                    
                </div>
                <div class="seed-item_icons_type"> 
                     <img :src="typeImg" />
                    <span v-html="typeText"></span>
                </div>
            </div>
            <div class="seed-item_fav"> 
                <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.0474 10.1458L21.6435 9.61615C21.4888 9.60383 21.3527 9.51145 21.2971 9.36364L18.4765 2.52738C18.0868 1.58509 17.2085 1 16.1817 1C15.1549 1 14.2828 1.58509 13.8869 2.53354L11.0602 9.37596C10.9983 9.51761 10.8684 9.61615 10.7138 9.62847L3.32218 10.1581C2.32014 10.2136 1.46655 10.8664 1.13872 11.8272C0.804705 12.8002 1.08305 13.8226 1.87479 14.4939L7.59632 19.1992C7.71384 19.2978 7.76951 19.4579 7.7324 19.6057L5.9881 26.713C5.78398 27.452 5.92625 28.2157 6.37779 28.8131C6.84169 29.4167 7.56539 29.78 8.3262 29.78C8.79629 29.78 9.25401 29.6384 9.63133 29.3859L15.8848 25.512C16.0147 25.4319 16.1817 25.4319 16.3116 25.512L22.6269 29.3736C23.0228 29.6384 23.4805 29.78 23.9444 29.78C24.6558 29.78 25.3609 29.4413 25.8186 28.8685C26.2949 28.2773 26.4681 27.5074 26.2949 26.7376L24.5444 19.6119C24.5073 19.4579 24.563 19.2978 24.6805 19.1992L30.4886 14.4816C31.268 13.8164 31.5463 12.7941 31.2185 11.821C30.8969 10.8602 30.0371 10.2012 29.0474 10.1458ZM29.5237 13.3176L23.7279 18.0291C23.1589 18.491 22.8991 19.2547 23.0785 19.9691L24.829 27.0825C24.9217 27.5013 24.7547 27.7907 24.6434 27.9262C24.4702 28.1418 24.2104 28.2773 23.9506 28.2773C23.7898 28.2773 23.629 28.228 23.4558 28.111L17.1157 24.231C16.8126 24.0462 16.4662 23.9477 16.1075 23.9477C15.7487 23.9477 15.3962 24.0462 15.0931 24.2371L8.81485 28.1233C8.4128 28.3882 7.87466 28.2711 7.59013 27.9016C7.47261 27.7476 7.3489 27.4828 7.46024 27.0948L9.21072 19.9629C9.38391 19.2547 9.13031 18.4971 8.56743 18.0352L2.85827 13.3361C2.40673 12.9481 2.53044 12.4492 2.57993 12.3075C2.62941 12.1659 2.83353 11.6917 3.42733 11.6609L10.8313 11.1312C11.5612 11.0758 12.1921 10.6262 12.4704 9.94873L15.2972 3.10631C15.5261 2.55202 16.0394 2.5089 16.1879 2.5089C16.3363 2.5089 16.8497 2.55202 17.0786 3.10631L19.9053 9.94873C20.1837 10.6262 20.8146 11.0758 21.5445 11.1312L28.9608 11.667C29.5423 11.6978 29.7464 12.172 29.7959 12.3137C29.833 12.443 29.9567 12.9419 29.5237 13.3176Z" fill="white" stroke="white"/>
                </svg>
            </div>
    </div>
    
            </a>
    
</template>

<script>
export default {
    props: {        
        title: String,
        desc: String,
        imgUrl: String,
        purposeImg: String,
        typeImg: String, 
        purposeText: String, 
        typeText: String,
        productRipeness: String
    }
}
</script>

<style lang="sass" scoped>

.seed-item-link 
    color: #000000
    text-decoration: none 
    transition: .2s
    &:hover 
        -webkit-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.4)
        -moz-box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.4)
        box-shadow: -5px 29px 22px -26px rgba(0,0,0,0.4)
        transition: .2s

.seed-item 
    padding: 36px
    border: 1px solid #E5E5E5
    box-sizing: border-box
    position: relative
    > img 
        margin-bottom: 36px
    &_title 
        font-weight: 800
        font-size: 24px
        line-height: 36px
        margin-bottom: 10px 
        color: #000000
    &_desc 
        font-size: 14px
        line-height: 24px
        color: #9E9E9E
        margin-bottom: 24px
    &_icons 
        display: flex 
        align-items: center
        &_purpose 
            background-color: #78BE20
            border-radius: 50px
            display: flex 
            align-items: center
            padding: 11px 13px 11px 13px 
            width: fit-content
            margin-right: 20px
            img 
                width: 20px 
                height: 20px
            span 
                font-weight: 800
                font-size: 12px
                line-height: 24px
                letter-spacing: 0.1em
                text-transform: uppercase
                color: #FFFFFF
                max-width: 0px 
                transition: .2s 
                overflow: hidden
                padding: 0 
                display: inline-block 
            &:hover 
                span 
                    max-width: 100% 
                    overflow: visible
                    transition: .2s 
                    padding: 0 10px
                    display: inline-block 
                    
        &_type 
            border-radius: 50px
            display: flex 
            align-items: center
            padding: 13px 13px 13px 13px 
            width: fit-content
            background-color: #F2994A
            img 
                width: 20px 
                height: 20px
            span 
                font-weight: 800
                font-size: 12px
                line-height: 24px
                letter-spacing: 0.1em
                text-transform: uppercase
                color: #FFFFFF
                max-width: 0px 
                transition: .2s 
                overflow: hidden
                padding: 0 
                display: inline-block 
            &:hover 
                span 
                    max-width: 100% 
                    overflow: visible
                    transition: .2s
                    padding: 0 10px
                    display: inline-block 
    &_fav 
        position: absolute 
        right: 60px 
        top: 60px
        z-index: 3




</style>