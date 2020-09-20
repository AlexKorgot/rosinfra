<template lang="pug">
  .container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
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
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from '../mixins/play.video'
export default {
  mixins: [video],
  name: "Projects"
}
</script>

<style scoped>

</style>