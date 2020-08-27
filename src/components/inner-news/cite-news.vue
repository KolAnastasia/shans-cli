<template>
    <div class="cite-wrapp">
        <div class="cite-wrapp_content"> 
            <p>Одно из преимуществ проекта заключается в создании научно-исследовательского  и лабораторного  центра, которые позволят  решать вопросы качества продукции, комплексного изучения средств  защиты растений, их биологической активности и экологической безопасности.</p>
            <div class="cite-wrapp_content--bold"> – пояснила генеральный директор ГК «Шанс» Окорокова Наталья Вячеславовна </div>
        </div>
    </div>
</template>

<script>
export default {

    name: "citeNews",
    
}
</script>

<style lang="sass" scoped>
.cite-wrapp_content 
    background-color: #F9F9F9
    padding: 83px 
    padding-left: 175px
    font-weight: 500
    position: relative
    &:before 
        content: ""
        position: absolute 
        background-image: url('../../assets/cite-icon.svg')
        left: 88px
        top: 107px
        width: 42px
        height: 28px
    &--bold 
        font-weight: bold

</style>