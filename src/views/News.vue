<template lang="pug">
  .container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
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
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from "@/mixins/play.video";

export default {
name: "News",
mixins: [video]
}
</script>

<style scoped>

</style>