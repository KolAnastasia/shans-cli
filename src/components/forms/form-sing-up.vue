<template>
  <div class="form-sing-wrap">
    <div class="container">
      <div class="form-sing_wr">
        <div class="form-sing_left">
          <div class="form-sing_left_title">Получите бесплатную консультацию</div>
          <div class="form-sing_left_desc">
            Заполните форму и мы свяжемся с Вами
            в ближайшее время
          </div>
        </div>
        <div class="form-sing_right">
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="tel" name id placeholder="Телефон" />
            <div>
              <input type="checkbox" required checked id="agreement-sing" />
              <label for="agreement-sing">
                Даю согласие на
                <a href="#">обработку персональных данных</a>
              </label>
              <div class="btn-wrap">
                <button type="submit">
                  Отправить
                  <span>
                    <svg
                      width="39"
                      height="11"
                      viewBox="0 0 39 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5.5H37M37 5.5L32.4922 1M37 5.5L32.4922 10"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="sass" scoped>
.form-sing
    &-wrap 
        background-color: #78BE20
        padding: 95px 0 100px 0
        color: #ffffff
        background-image: url('../../assets/decoration-line.svg')
        background-repeat: no-repeat 
        background-size: cover
    &_wr
        display: flex
        justify-content: space-between
    &_left
        max-width: 570px
        &_title
            font-style: normal
            font-weight: bold
            font-size: 36px
            line-height: 43px
            text-transform: uppercase
            margin-bottom: 36px
        &_desc 
            max-width: 335px
            font-weight: normal
    &_right 
        input 
            display: block 
            width: 100%
            max-width: 490px
            background: none
            border: none 
            color: #ffffff
            padding-bottom: 16px
            border-bottom: 1px solid #ffffff
            margin-bottom: 50px
            font-size: 16px
            &::placeholder 
                color: #ffffff
                font-size: 12px
                line-height: 14px
                letter-spacing: 0.1em
                text-transform: uppercase
                opacity: 0.5
            &:focus::placehoder 
                    color: transparent                
        div 
            display: flex
            #agreement-sing
                display: none
            label 
                margin-left: 30px 
                position: relative
                font-size: 12px
                line-height: 14px
                color: rgba(256, 256, 256, 0.5)
                margin-right: 45px                
                cursor: pointer
                a 
                    color: rgba(256, 256, 256, 0.5)
                    text-decoration: none
                    &:hover 
                        text-decoration: underline
                &:before 
                    position: absolute
                    content: ""
                    left: -30px
                    top: -4px
                    width: 18px
                    opacity: 0.5
                    border: 1px solid #FFFFFF
                    height: 18px
                    cursor: pointer
                    display: flex
                    justify-content: flex-end
            button 
                background: none
                border: none
                width: 170px
                font-weight: 800
                font-size: 12px
                line-height: 14px
                display: flex
                align-items: center
                letter-spacing: 0.1em
                text-transform: uppercase
                cursor: pointer
                color: #FFFFFF
                text-align: right
                span 
                    display: inline-block
                    margin-left: 25px
                    transition: .2s
                &:hover 
                    span 
                        margin-left: 35px
                        transition: .2s 

#agreement-sing:checked + label:after 
    position: absolute
    content: ""
    width: 10px
    height: 10px
    background-color: #ffffff
    left: -25px
    top: 1px  

@media screen  and (max-width: 981px)
  .form-sing
    &_wr 
      flex-direction: column
    &_left
      max-width: 100%
      &_desc 
        margin-bottom: 50px
        max-width: 100%
    &_right 
      input 
        max-width: 100%
      div 
        justify-content: space-between

@media screen  and (max-width: 600px)
  .form-sing
    &_wr 
      flex-direction: column
    &_left
      max-width: 100%
    &_right 
      div 
        flex-direction: column
        label 
          margin-bottom: 40px
</style>