<template lang="pug">
  .container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
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
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from "@/mixins/play.video";

export default {
  name: "Helps",
  mixins: [video]
}
</script>

<style scoped>

</style>