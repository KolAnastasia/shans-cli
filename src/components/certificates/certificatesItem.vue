<template>
    <div class="documentation_item" >
        <a href="#" >
            <div class="documentation_item_number"> {{number}}</div>
            <div class="documentation_item_title"> {{name}}</div>
        </a>
    </div>
</template>

<script>

export default {
    
    props: {
        name:String,
        link:String,
        number:String
    }
}

</script>

<style lang="sass" scoped>
    .documentation
        &_item
            border-bottom: 1px solid #C4C4C4
            padding: 5px 0
            a 
                display: flex
                text-decoration: none
                padding: 15px
                align-items: center
                &:hover 
                    background-color: #E5E5E5
            &:first-of-type
                border-top: 1px solid #C4C4C4  
            &_number 
                font-weight: bold
                font-size: 16px
                line-height: 19px
                color: #303030
                margin-right: 20px
            &_title 
                font-size: 16px
                line-height: 19px
                color: #303030


</style>