<template lang="pug">
  .container.container__home
    .home
      .home__tittle.h1 Платформа «РОСИНФРА»
      .home__subtittle.h2 Комплексное цифровое решение для работы с инфраструктурными проектами
      .btn__block
        .btn.btn-primary.box-shadow(@click="goTo") Начать знакомство с сервисами
        .btn.btn-white
          img(src="@/assets/img/icon_platform.svg")
          span Перейти на платформу
    .home__slider
      slick(ref="slick" :options="sliderSettings")
        div(v-for="(item, i) in slider" :key="i")
          slide-items(:field="item")
    .home__slider.slider-two
      slick(ref="slick" :options="sliderSettings")
        div(v-for="(item, i) in slider" :key="i")
          slide-items(:field="item")
</template>

<script>
import Slick from 'vue-slick';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import slideItems from '../components/slide.items'
export default {
  name: "Home",
  data: function () {
    return {
      sliderSettings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease",
        infinite: true,
        autoplaySpeed: 2000,
        speed: 2000,
        touchMove: true,
        pauseOnHover: false,
        useTransform: true,
        useCSS: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
     },
     slider: [
       {
         title: "База проектов",
         subTitle: "Крупнейшая база планируемых и реализуемых проектов",
         image: `${require('@/assets/img/icon_project.svg')}`,
         url: 'project'
       },
       {
         title: "ГЧП-Академия",
         subTitle: "Непрерывное развитие профильных компетенций",
         image: `${require('@/assets/img/icon_academy.svg')}`,
         url: 'academy'
       },
       {
         title: "База партнёров",
         subTitle: "Поиск партнеров на любом этапе подготовки и реализации проекта",
         image: `${require('@/assets/img/icon_partner.svg')}`,
         url: 'partner'
       },
       {
         title: "Тренды и аналитика",
         subTitle: "Актуальные данные по рынку инфраструктуры и ГЧП",
         image: `${require('@/assets/img/icon_trends.svg')}`,
         url: 'trends'
       },
       {
         title: "Помощь экспертов",
         subTitle: "Онлайн-консультации по вопросам применения механизмов ГЧП",
         image: `${require('@/assets/img/icon_helps.svg')}`,
         url: 'help'
       },
       {
         title: "Новости",
         subTitle: "Актуальные новости рынка ГЧП и мнения экспертов",
         image: `${require('@/assets/img/icon_news.svg')}`,
         url: 'news'
       }
     ]
    }
  },
  methods: {
    goTo(){
      this.$router.push({
        name: 'about'
      })
    }
  },
  components: {
    Slick,
    slideItems
  }
}
</script>

<style lang="sass">
</style>