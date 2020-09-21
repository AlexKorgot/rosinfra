<template lang="pug">
  .container
    .content-wrapper(@click.prevent="play(video.id)")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle Новости
        .content-wrapper__subtittle Актуальные новости рынка ГЧП и мнения экспертов
        .content-wrapper__ul
          ul
            li Подбор участников для структурирования и реализации проекта
            li Возможность самостоятельно выбрать конкурентное предложение
            li Безопасность и полная конфиденциальность
      .content-wrapper__viedo
        fancy-box(:field="video")
</template>

<script>
import {video} from "@/mixins/play.video";
import fancyBox from "@/components/fancybox-simple";

export default {
name: "News",
mixins: [video],
  components: {
    fancyBox
  },
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_news'
      }
    }
  },
}
</script>

<style scoped>

</style>