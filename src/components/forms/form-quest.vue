<template>
  <div class="form-quest">
    <div class="container">
      <div class="form-quest_top">
        <div class="form_title">Остались вопросы?</div>
        <div class="form_desc">
          Звоните по телефону
          <a href="tel:+74732204941">+7 (473) 220-49-41</a> или заполните форму и мы свяжемся с Вами в ближайшее время
        </div>
      </div>
      <form class="form-quest_form">
        <input type="text" name="name" id placeholder="Ваше имя" />
        <input type="tel" name="tel" id placeholder="Телефон" />
        <input type="email" name="email" id placeholder="E-mail" />
        <div class="form-quest_theme-wr">
          <div id="theme" class="form-quest_theme">
            <div class="form-quest_header">
              <span class="form-quest__current">Выберите вид деятельности</span>
            </div>
            <div class="form-quest_body">
              <div class="form-quest_body_item" data-value="value1">Выберите вид деятельности 1</div>
              <div class="form-quest_body_item" data-value="value2">Выберите вид деятельности 2</div>
              <div class="form-quest_body_item" data-value="value3">Выберите вид деятельности 3</div>
            </div>
          </div>
        </div>
        <input type="text" name="quest" id="questions" placeholder="Ваш вопрос"/>
        <div class="form-quest_geo">
          <a href="#">
            <img :src="getImage('geo-ic.svg')" alt />
            Ближайший офис
          </a>
        </div>
        <div class="form-quest_bottom-wr">
        <div class="form-quest_agreement">
          <input type="checkbox" name id="agreement-quest" checked  required/>
          <label for="agreement-quest">Даю согласие на <a href="#" >обработку персональных данных </a></label>
        </div>
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
</template>

<script>
export default {
  mounted() {
    let select = function () {
              let selectHeader = document.querySelector('.form-quest_header');
              let selectItem =  document.querySelectorAll('.form-quest_body_item');
              selectHeader.addEventListener("click", function () {
                  selectToggle();
              });
              selectItem.forEach(function (item) {
                  item.addEventListener("click", function () {
                      selectChoose(item);
                  });
              });
              function selectToggle() {
                  document.querySelector('.form-quest_theme').classList.toggle('active');
              }
              function selectChoose(option) {
                  let selectedText = option.innerText
                  document.querySelector('.form-quest__current').innerText(selectedText);
                  selectToggle();
              }
          };
          select();
  }
      
};


</script>

<style lang="sass" scoped>
.form
    &-quest 
        background-color: #78BE20
        color: #ffffff
        padding: 80px 0
        background-image: url('../../assets/decoration-line.svg')
        background-repeat: no-repeat 
        background-size: cover
        &_top
            display: flex
            justify-content: space-between
            margin-bottom: 50px 
        &_header 
          cursor: pointer
          position: relative
          font-weight: bold
          font-size: 12px
          line-height: 14px
          letter-spacing: 0.1em
          text-transform: uppercase
          opacity: 0.5
          border-bottom: 1px solid rgba(256, 256, 256, 0.5)
          padding-bottom: 12px
          &:after
            position: absolute
            content: ""
            background: url('../../assets/select-icon.svg')
            right: 15px
            top: 2px
            width: 8px
            height: 5px
        &_theme 
            position: relative
            .form-quest_body
              max-height: 0
              position: absolute
              left: 0
              right: 0
              top: 100%
              overflow: hidden
              line-height: 0
              background-color: #78BE20
              &_item 
                background-color: #78BE20
                padding-bottom: 10px
        &_theme.active 
            .form-quest_body
              max-height: 100%
              position: absolute
              left: 0
              right: 0
              bottom: 0
              overflow: visible
              line-height: 100%
        &_geo
          a 
            color: #ffffff
            display: flex
            font-weight: 800
            font-size: 12px
            line-height: 14px
            letter-spacing: 0.1em
            text-transform: uppercase
            align-items: center
            text-decoration: none
            img 
              margin-right:  15px
              max-width: 14px
            &:hover 
              text-decoration: underline
        &_agreement
          #agreement-quest 
            display: none 
          label 
            margin-left: 30px 
            position: relative
            font-size: 12px
            line-height: 14px
            color: rgba(256, 256, 256, 0.5)
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
        &_bottom-wr
          grid-column: span 2
          display: flex
          justify-content: space-between


    &_title 
        font-weight: bold
        font-size: 36px
        line-height: 43px
        text-transform: uppercase
        color: #FFFFFF
    &_desc
        max-width: 490px
        a 
            color: #ffffff
            font-weight: bold
            text-decoration: none
            &:hover 
                text-decoration: underline
    &-quest_form 
        display: grid
        grid-gap: 35px 80px
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr))
        input 
            border: none
            border-bottom: 1px solid rgba(256, 256, 256, 0.5)
            background: none
            padding-bottom: 12px
            color: #ffffff
            box-sizing: border-box
            font-size: 16px
            &::placeholder
                font-weight: bold
                font-size: 12px
                line-height: 14px
                letter-spacing: 0.1em
                text-transform: uppercase
                color: #FFFFFF
                opacity: 0.5
            &:focus::placeholder 
                color: transparent
        #questions 
            grid-column: span 2
        .btn-wrap
          display: flex
          justify-content: flex-end
          button 
            background: none
            border: none
            width: 200px
            font-weight: 800
            font-size: 12px
            line-height: 14px
            display: flex
            align-items: center
            letter-spacing: 0.1em
            text-transform: uppercase
            cursor: pointer
            color: #FFFFFF
            span 
              display: inline-block
              margin-left: 25px
              transition: .2s
            &:hover 
              span 
                margin-left: 35px
                transition: .2s


#agreement-quest:checked + label:after 
  position: absolute
  content: ""
  width: 10px
  height: 10px
  background-color: #ffffff
  left: -25px
  top: 1px



@media screen and (max-width: 1200px) 
  .form-quest
    &_form
      .btn-wrap 
        justify-content: flex-start

@media screen and (max-width: 1000px) 
  .form
    &_title
      margin-bottom: 15px
    &-quest
      &_top
        flex-direction: column
      &_form
        #questions
          grid-column: span 1
    &_desc 
      max-width: 100%

@media screen and (max-width: 800px) 
  .form
    &-quest
      &_form
        #questions
          grid-column: span 1
      &_bottom-wr
        grid-column: span 1

@media screen and (max-width: 600px) 
  .form
    &-quest
      &_bottom-wr
        flex-direction: column
      &_agreement 
        margin-bottom: 40px

</style>