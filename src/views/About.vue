<template lang="pug">
  .container
    .content-wrapper(@click.prevent="play(video.id)")
      .content__descriptions
        .content-wrapper__tittle Платформа «РОСИНФРА»
        .content-wrapper__subtittle Платформа «РОСИНФРА» – уникальное цифровое решение для выстраивания эффективного партнерства государства и бизнеса, направленного на увеличение количества и повышение качества инфраструктурных проектов.
      .content-wrapper__viedo
        fancy-box(:field="video")
</template>

<script>
import {video} from '../mixins/play.video'
import fancyBox from '../components/fancybox-simple'
export default {
  name: "About",
  components:{
    fancyBox
  },
  mixins: [video],
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_about'
      }
    }
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