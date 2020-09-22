<template lang="pug">
  .container
    .container__collections
      fancy-collections(:field="items")
    .container__arrow
      .btn.btn-primary.box-shadow(@click="goTo()")
        img(:src="require('@/assets/img/arrow.svg')")
      span Перейти на платформу
</template>

<script>
import FancyCollections from "../components/fancybox-collections"

export default {
  name: "Contents",
  data: function (){
    return {
      items: [
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '1',
          img: `${require('@/assets/img/fc_img_1.svg')}`,
          title: "База проектов",
          subtitle: "Крупнейшая база планируемых и реализуемых инфраструктурных проектов",
          class: "mt",
          flexClass: ""
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '2',
          img: `${require('@/assets/img/fc_img_2.svg')}`,
          title: "База партнёров",
          subtitle: "Поиск партнеров на любом этапе подготовки и реализации проекта",
          class: "mt",
          flexClass: ""
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '3',
          img: `${require('@/assets/img/icon_trends.svg')}`,
          title: "Тренды и аналитика",
          subtitle: "Актуальные данные по рынку инфраструктуры и ГЧП",
          class: "",
          flexClass: "flex-width"
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '4',
          img: `${require('@/assets/img/icon_helps.svg')}`,
          title: "Помощь экспертов",
          subtitle: "Онлайн-консультации по вопросам применения механизмов ГЧП",
          class: "",
          flexClass: "flex-width"
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '5',
          img: `${require('@/assets/img/icon_academy.svg')}`,
          title: "ГЧП-Академия",
          subtitle: "Непрерывное развитие профильных компетенций",
          class: "",
          flexClass: "flex-width"
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: '6',
          img: `${require('@/assets/img/icon_news.svg')}`,
          title: "Новости",
          subtitle: "Актуальные новости рынка ГЧП и мнения экспертов",
          class: "",
          flexClass: "flex-width"
        }
      ]
    }
  },
  methods: {
    goTo(){
      this.$router.push({
        name: "about"
      })
    }
  },
  components: {
    FancyCollections
  }
}
</script>

<style scoped>

</style>