<template lang="pug">
  .container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
      .content__descriptions
        .content-wrapper__tittle Платформа «РОСИНФРА»
        .content-wrapper__subtittle Платформа «РОСИНФРА» – уникальное цифровое решение для выстраивания эффективного партнерства государства и бизнеса, направленного на увеличение количества и повышение качества инфраструктурных проектов.
      .content-wrapper__viedo
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from '../mixins/play.video'
export default {
  name: "About",
  mixins: [video],
  data: function () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.content-wrapper
  &__tittle
    max-width: 760px
</style>