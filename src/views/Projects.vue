<template lang="pug">
  .container
    .content-wrapper(@click.prevent="play(video.id)")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle База проектов
        .content-wrapper__subtittle Крупнейшая база планируемых и реализуемых проектов ГЧП со множеством параметров, документацией, экспертными комментариями и удобной навигацией.
        .content-wrapper__ul
          ul
            li Более 5000 проектов с указанием более 350 параметров
            li Планируемые к запуску проектные инициативы
            li Объекты инфраструктуры, подходящие под ГЧП
            li Информация об участниках и проектная документация
      .content-wrapper__viedo
        fancy-box(:field="video")
</template>

<script>
import {video} from '../mixins/play.video'
import fancyBox from '../components/fancybox-simple'
export default {
  mixins: [video],
  components: {
    fancyBox
  },
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_projects'
      }
    }
  },
  name: "Projects"
}
</script>

<style scoped>

</style>