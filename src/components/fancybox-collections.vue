<template lang="pug">
  .fancy-container
    .fancy-container-item(v-for="(item, i) in field" :key="i" :class="item.flexClass")
      a(data-fancybox="gallery" :href="'#video' + item.id" @click="addClassBody()")
        .fancy-container-item__descriptions
          .title {{item.title}}
          .subtittle {{item.subtitle}}
          .play-icon
            img(:src="require('@/assets/img/icon_play_mini.svg')")
        .fancy-container-item__img(:class="item.class")
          img(:src="item.img")
        .video(style="display: none;")
          video(:id="'video'+ item.id" :data-caption="'Caption#' + item.id")
            source(:src="item.src" :data-caption="'Caption#' + item.id" type='video/mp4' )

</template>

<script>
export default {
  name: "fancybox-component-collections",
  props: ['field'],
  data: function () {
    return {

    }
  },
}
</script>

<style lang="sass" scoped>
.fancy-container
  display: flex
  width: 100%
  max-width: 1369px
  flex-wrap: wrap
  justify-content: space-between
  &-item
    flex: 0 0 667px
    background: #FFFFFF
    box-shadow: -15px -15px 30px rgba(242, 243, 246, 0.3), 15px 15px 30px rgba(145, 153, 181, 0.2)
    border-radius: 10px
    padding: 33px 64px 42px 29px
    //height: 300px
    margin: 0 0px 35px 0px
    height: 300px
    flex-wrap: wrap-reverse
    &.flex-width
      flex: 0 0 316px
      padding-right: 26px
      margin-bottom: 0
      height: 376px
    &__img
      &.mt
        margin-top: -23px
        height: 232px
      img
        height: 100%
    &__descriptions
      display: flex
      flex-direction: column
      justify-content: space-between
      .title
        //margin-bottom: 19px
        font-size: 28px
        font-weight: 500
      .subtittle
        font-size: 16px
        font-weight: 300
        max-width: 221px
        //margin-bottom: 48px
        line-height: 1.4
    a
      display: flex
      text-decoration: none
      justify-content: space-between
      align-items: inherit
      flex-wrap: wrap-reverse
      height: 100%
      color: rgba(35,52,107,1)
      &:focus
        color: rgba(35,52,107,1)
</style>

