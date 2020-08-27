<template>
    <header class="header">
        <div class="container"> 
           <div class="header_wrap">
                <div class="header_logo">
                    <a href="/"> 
                        <img class="header_logo_img" src="./../assets/logo.svg" alt=""/>
                    </a>
                </div>
                <nav class="header_menu">
                    <ul>
                        <li><a href="#">О компании </a></li>    
                        <li><a href="#"> Карьера </a></li>    
                        <li><a href="#">Пресс-центр</a></li>    
                        <li><a href="#">Документация </a></li>    
                        <li><a href="#">Контакты</a></li>   
                    </ul>
                </nav>
                <div class="header-city-tel">
                    <div class="header_city-choose"> 
                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.51597 0.75L3.5 3.20461L5.48403 0.75H1.51597Z" fill="#78BE20" stroke="#78BE20"/>
                        </svg>
                        <div class="header_city-wrapper">
                            <div class="header_city-wr">
                                <div id="city" class="header_city">
                                    <div class="header_city_header">
                                        <span class="select__current">Воронеж</span></div>
                                    <div class="header_city_body">
                                        <div class="header_city_body_item" data-value="voronezh"> Воронеж </div>
                                        <div class="header_city_body_item" data-value="lipetsk">  Липецк </div>
                                        <div class="header_city_body_item" data-value="belgorod"> Белгород </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header_number">
                        <a href="tel:+74732204941" class="header_number_link">+7 (473) 220-49-41</a>
                    </div>
                </div>
                <div class="header_language">
                    <span> Язык сайта </span>
                    <div class="header_language_value">
                        <div class="header_language_value_flag">
                            <img src="../assets/header_flag.svg" alt="">
                        </div>
                         <div class="header_language_value_country">
                             Россия
                         </div>
                    </div>
                </div>
                <div class="header_favourites">
                    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.0474 10.1458L21.6435 9.61615C21.4888 9.60383 21.3527 9.51145 21.2971 9.36364L18.4765 2.52738C18.0868 1.58509 17.2085 1 16.1817 1C15.1549 1 14.2828 1.58509 13.8869 2.53354L11.0602 9.37596C10.9983 9.51761 10.8684 9.61615 10.7138 9.62847L3.32218 10.1581C2.32014 10.2136 1.46655 10.8664 1.13872 11.8272C0.804705 12.8002 1.08305 13.8226 1.87479 14.4939L7.59632 19.1992C7.71384 19.2978 7.76951 19.4579 7.7324 19.6057L5.9881 26.713C5.78398 27.452 5.92625 28.2157 6.37779 28.8131C6.84169 29.4167 7.56539 29.78 8.3262 29.78C8.79629 29.78 9.25401 29.6384 9.63133 29.3859L15.8848 25.512C16.0147 25.4319 16.1817 25.4319 16.3116 25.512L22.6269 29.3736C23.0228 29.6384 23.4805 29.78 23.9444 29.78C24.6558 29.78 25.3609 29.4413 25.8186 28.8685C26.2949 28.2773 26.4681 27.5074 26.2949 26.7376L24.5444 19.6119C24.5073 19.4579 24.563 19.2978 24.6805 19.1992L30.4886 14.4816C31.268 13.8164 31.5463 12.7941 31.2185 11.821C30.8969 10.8602 30.0371 10.2012 29.0474 10.1458ZM29.5237 13.3176L23.7279 18.0291C23.1589 18.491 22.8991 19.2547 23.0785 19.9691L24.829 27.0825C24.9217 27.5013 24.7547 27.7907 24.6434 27.9262C24.4702 28.1418 24.2104 28.2773 23.9506 28.2773C23.7898 28.2773 23.629 28.228 23.4558 28.111L17.1157 24.231C16.8126 24.0462 16.4662 23.9477 16.1075 23.9477C15.7487 23.9477 15.3962 24.0462 15.0931 24.2371L8.81485 28.1233C8.4128 28.3882 7.87466 28.2711 7.59013 27.9016C7.47261 27.7476 7.3489 27.4828 7.46024 27.0948L9.21072 19.9629C9.38391 19.2547 9.13031 18.4971 8.56743 18.0352L2.85827 13.3361C2.40673 12.9481 2.53044 12.4492 2.57993 12.3075C2.62941 12.1659 2.83353 11.6917 3.42733 11.6609L10.8313 11.1312C11.5612 11.0758 12.1921 10.6262 12.4704 9.94873L15.2972 3.10631C15.5261 2.55202 16.0394 2.5089 16.1879 2.5089C16.3363 2.5089 16.8497 2.55202 17.0786 3.10631L19.9053 9.94873C20.1837 10.6262 20.8146 11.0758 21.5445 11.1312L28.9608 11.667C29.5423 11.6978 29.7464 12.172 29.7959 12.3137C29.833 12.443 29.9567 12.9419 29.5237 13.3176Z" fill="#78BE20" stroke="#78BE20"/>
                    </svg>
                    <span> 20 </span>
                </div>
           </div>
        </div>
        <nav class="main-nav">
            <div class="container">
                <ul>
                    <li><a href="/catalog_szr">Средства защиты растений</a></li>
                    <li><a href="/catalog_micro">Микроудобрения</a></li>
                    <li><a href="/catalog_seed">Элитные семена</a></li>
                    <li><a href="/">Программы защиты растений </a></li>
                    <li><a href="/">Вредные объекты</a></li>
                    <li><a href="/">Полезная информация</a></li>
                        <li>
                            <a href="/search">
                                <div class="header_seacrh-btn" >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7871 12.7475L10.3359 9.28317C11.2233 8.26509 11.7095 6.98412 11.7095 5.65058C11.7095 2.5349 9.08299 0 5.85474 0C2.62649 0 0 2.5349 0 5.65058C0 8.76627 2.62649 11.3012 5.85474 11.3012C7.06667 11.3012 8.22158 10.9484 9.20899 10.2787L12.6864 13.7692C12.8318 13.9149 13.0273 13.9953 13.2368 13.9953C13.4351 13.9953 13.6232 13.9223 13.766 13.7896C14.0694 13.5078 14.0791 13.0406 13.7871 12.7475ZM5.85474 1.47407C8.24092 1.47407 10.1821 3.3476 10.1821 5.65058C10.1821 7.95357 8.24092 9.8271 5.85474 9.8271C3.46855 9.8271 1.52732 7.95357 1.52732 5.65058C1.52732 3.3476 3.46855 1.47407 5.85474 1.47407Z" fill="white"/>
                                    </svg>
                                </div>
                            </a>
                        </li>  
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header',
    mounted() {
    let select = function () {
              let selectHeader = document.querySelector('.header_city_header');
              let selectItem =  document.querySelectorAll('.header_city_body_item');
              selectHeader.addEventListener("click", function () {
                  selectToggle();
                document.querySelector('.header_number_link').classList.toggle('hidden')
              });
              selectItem.forEach(function (item) {
                  item.addEventListener("click", function () {
                      selectChoose(item);
                  });
              });
              function selectToggle() {
                  document.querySelector('.header_city').classList.toggle('active');
              }
              function selectChoose(option) {
                  let selectedText = option.innerText
                  document.querySelector('.select__current').innerText(selectedText);
                  selectToggle();
              }
          };
          select();
  }
}

    


</script>
<style lang="sass" scoped>
.header
    &_wrap
        padding: 25px 0
        display: flex
        justify-content: space-between
        align-items: center
    &_menu
        display: flex
        align-items: center
        ul 
            display: flex
            list-style: none
            padding-left: 0
            margin: 0
            li 
                margin-right: 30px
                a 
                    text-decoration: none
                    color: #000000
                    padding: 15px 0
                    font-size: 0.875rem
                    transition: .2s
                    &:hover 
                        color: #78BE20
                        transition: .2s
    &_city
        margin-left: 10px
        position: relative
        &-choose
            display: flex
            font-size: 14px
            line-height: 17px
            color: #9E9E9E
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
            .header_city_body
                line-height: 1.3 
                max-height: 100%      
                background-color: #ffffff
                overflow: visible
                transition: .2s
                &_item 
                    background-color: #ffffff
                    z-index: 99
                    position: relative
    &_number
        position: relative
        &::before
            position: absolute
            right: calc(100% + 12px)
            top: 6px
            width: 10px
            height: 14px
            content: ""
            background: url('../assets/mob-icon.svg')
        &_link
            font-weight: 800
            font-size: 14px
            line-height: 17px
            color: #000000    
            text-decoration: none            
            &:hover
                color: #78BE20
                transition: .2s    
            &.hidden 
                opacity: 0

    &_language
        font-size: 14px
        line-height: 17px
        color: #9E9E9E
        &_value
            display: flex
            align-items: center
            margin-top: 10px
            &_country
                font-weight: 800
                font-size: 14px
                line-height: 17px
                color: #000000
                margin-left: 10px

    &_favourites 
        width: 60px
        height: 60px
        border: 1px solid #E5E5E5
        display: flex
        align-items: center
        justify-content: center
        position: relative
        cursor: pointer

        span 
            display: inline-block
            background-color: #78BE20
            padding: 4px 5px
            border-radius: 50%
            font-weight: bold
            font-size: 10px
            line-height: 12px
            color: #FFFFFF
            position: absolute
            top: -12px
            right: 6px
    
    

    .main-nav
        background: #78BE20
        ul 
            list-style: none
            padding: 0
            margin: 0
            display: flex
            padding: 10px 0
            justify-content: space-between
            li a 
                font-weight: bold
                font-size: 14px
                line-height: 17px
                color: #FFFFFF
                text-decoration: none
                padding: 12px 5px
                display: inline-block
                position: relative
                &:hover
                    text-decoration: underline

.header_seacrh-btn
    background-color: #67AD0F
    padding: 25px
    height: 100%
    margin-top: -21px
    margin-bottom: -22px

@media screen and (max-width: 1200px) 
    .header 
        &_menu 
            display: none 
    
    .main-nav
        display: none
</style>