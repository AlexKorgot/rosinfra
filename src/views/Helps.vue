<template lang="pug">
  .container
    .content-wrapper(@click.prevent="play(video.id)")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle Помощь экспертов
        .content-wrapper__subtittle Привлечение профильных экспертов, обладающих практическим опытом в сфере ГЧП, к решению проблемных вопросов, возникающих при подготовке  и реализации инфраструктурных проектов.
        .content-wrapper__ul
          ul
            li Онлайн-консультации по ключевым вопросам подготовки проектов
            li Блиц-оценка планируемых проектов с рекомендациями по доработке
            li Экспертиза финансовой и юридической документации по проектам
            li Экспертиза оценки сравнительного преимущества и бюджетной эффективности
      .content-wrapper__viedo
        fancy-box(:field="video")
</template>

<script>
import {video} from "@/mixins/play.video";
import fancyBox from "@/components/fancybox-simple";

export default {
  name: "Helps",
  mixins: [video],
  components: {
    fancyBox
  },
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_helps'
      }
    }
  },
}
</script>

<style scoped>

</style>