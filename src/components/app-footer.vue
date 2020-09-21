<template lang="pug">
  .footer
    .footer__item(v-for="(item,i) in items" :key=i :class="{active: getActive(item.url)}" @click="goToPage(item.url)")
      .footer__item__img
        img(:src="item.image")
      .footer__item__text {{item.title}}
      .footer__active-line
</template>

<script>
export default {
  name: "app-footer",
  data: function () {
    return {
      items: [
        {
          image: `${require('@/assets/img/logo_footer.svg')}`,
          title: 'О платформе',
          url: 'about'
        },
        {
          image: `${require('@/assets/img/icon_project.svg')}`,
          title: 'База проектов',
          url: 'project'
        },
        {
          image: `${require('@/assets/img/icon_partner.svg')}`,
          title: 'База партнеров',
          url: 'partners'
        },
        {
          image: `${require('@/assets/img/icon_academy.svg')}`,
          title: 'ГЧП-Академия',
          url: 'academy'
        },
        {
          image: `${require('@/assets/img/icon_trends.svg')}`,
          title: 'Тренды и аналитика',
          url: 'trends'
        },
        {
          image: `${require('@/assets/img/icon_helps.svg')}`,
          title: 'Помощь экспертов',
          url: 'help'
        },
        {
          image: `${require('@/assets/img/icon_news.svg')}`,
          title: 'Новости',
          url: 'news'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    goToPage(url){
      this.$router.push({
        name: url
      })
    },
    getActive(url) {
      return this.$route.name === url;
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  display: flex
  flex: 0 0 100%
  background: transparent
  justify-content: space-between
  &__active-line
    position: absolute
    width: 100%
    background: var(--primary-color)
    height: 8px
    bottom: 0
    left: 0
    opacity: 0
    border-bottom-right-radius: 10px
    border-bottom-left-radius: 10px
  &__item:first-child
    box-shadow: 0px 9px 40px rgba(181, 37, 40, 0.35)
  &__item
    position: relative
    opacity: .7
    width: 230px
    height: 195px
    background: #fff
    box-shadow: -15px -15px 30px rgba(242, 243, 246, 0.3), 15px 15px 30px rgba(145, 153, 181, 0.1)
    border-radius: 10px
    font-weight: 500
    font-size: 20px
    text-align: center
    padding: 39px 30px 39px 30px
    transition: all .3s ease-in-out
    &.active
      position: relative
      z-index: 999
      opacity: 1
      box-shadow: -15px -15px 30px rgba(242, 243, 246, 0.3), 15px 15px 30px rgba(145, 153, 181, 0.1)
      border: 1px solid #E9EBF0
      &:before
        content: ''
        z-index: -1
        background: #fff
        position: absolute
        height: 30px
        width: 30px
        border-left: 1px solid #E9EBF0
        border-top: 1px solid #E9EBF0
        border-radius: 5px
        left: 50%
        margin-left: -15.5px
        top: -16px
        transform: rotate(45deg)
      &
        .footer__active-line
          opacity: 1
    &__img
      margin-bottom: 19px
</style>