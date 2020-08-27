<template>
  <div class="breadcrumbs breadcrumbs-section">
    <div class="container">
      <nav>
        <ul>
          <li
            v-for="(link, index) in links"
            :key="index"
          >
            <a href="#" >
              <div>
                {{ names[index] }}
              </div>
            </a>
          </li>
            <li class="active-page"> 
                {{actPage}}
            </li>
        </ul>
      </nav>
      <div class="breadcrumbs-heading-wrap">
        <h1 class="breadcrumbs-heading">{{heading}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: [
    'names',
    'links',
    "heading",
    "actPage",
  ], 

}

</script>

<style lang="sass" scoped>
    .breadcrumbs 
        .container 
            nav 
                ul 
                    list-style: none
                    padding: 0
                    margin: 50px 0
                    display: flex
                    max-width: 900px
                    flex-wrap: wrap
                    li 
                        margin-right: 17px
                        position: relative
                        a
                            font-size: 12px
                            line-height: 14px
                            color: #9E9E9E
                            text-decoration: none
                            transition: .2s
                            &:hover 
                                color: #000000
                                transition: .2s
                        &:after
                            position: absolute
                            content: ""
                            width: 5px
                            height: 5px
                            background: url('../assets/breadcrumb-ar.svg')
                            top: 50%
                            transform: translateY(-50%)
                            right: -10px
                        &:last-of-type:after 
                            display: none
                    .active-page 
                        font-size: 12px
                        line-height: 14px
                        color: #78BE20
        &-heading 
            margin-top: 0
            margin-bottom: 65px
            font-weight: 800
            font-size: 36px
            line-height: 43px
            text-transform: uppercase
            color: #000000

</style>