<template>
    <div class="form-news-wr"> 
        <div class="form-news_title"> 
            Подпишитесь на наши новости
        </div>
        <form class="form-news_form"> 
            <input type="email" placeholder="Ваш e-mail" required/>
            <div>
                <input type="checkbox" id="form-news_agreement" required checked/>
                <label for="form-news_agreement"> Даю согласие на <a href="#"> обработку персональных данных </a> </label>
            </div>
            <button class="btn-text--green form-news_btn"> 
                <span> Подписаться </span>
                <svg width="39" height="11" viewBox="0 0 39 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10" stroke="#78BE20" stroke-width="2"/>
                </svg>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.form-news
    &-wr
        background: #F9F9F9
        width: 100% 
    &_title 
        font-weight: 800
        font-size: 24px
        line-height: 29px
        color: #000000
        margin-bottom: 25px
    &_form 
        input 
            padding: 23px 10px 23px 35px 
            width: 100%
            border: none
            margin-bottom: 25px
            box-sizing: border-box
            &::placeholder 
                font-weight: 800
                font-size: 12px
                line-height: 14px
                letter-spacing: 0.1em
                text-transform: uppercase
                color: #9E9E9E
            &:focus 
                outline: none
        #form-news_agreement 
            display: none

        label 
            position: relative
            display: inline-block
            font-size: 12px
            line-height: 14px
            color: #9E9E9E
            margin-left: 35px
            margin-bottom: 50px
            cursor: pointer
            a 
                color: #9E9E9E
                text-decoration: none
                &:hover 
                    text-decoration: underline
            &:before
                position: absolute
                content: ""
                width: 18px
                height: 18px
                border: 1px solid #E5E5E5   
                left: -33px
                top: -3px     

#form-news_agreement:checked + label:after 
    position: absolute
    content: ""
    width: 10px
    height: 10px
    border: 1px solid #E5E5E5   
    left: -29px
    top: 1px     
    background-color: #78BE20

</style>