<template lang="pug">
.container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle ГЧП-Академия
        .content-wrapper__subtittle Профессиональное развитие и обмен опытом в сфере инфраструктуры и ГЧП с возможностью выстраивания индивидуальной траектории обучения в дистанционном и очном формате.
        .content-wrapper__ul
          ul
            li Базовые и узкоотраслевые знания
            li Эксперты-преподаватели с опытом реализации проектов ГЧП
            li Программы обучения продолжительностью от нескольких часов до месяца
            li Подготовка проектных команд в регионах на примере реальных проектов
            li ГЧП-словарь – ключевые термины рынка ГЧП в интерактивном формате
      .content-wrapper__viedo
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from '../mixins/play.video'
export default {
  name: "Academy",
  mixins: [video]
}
</script>

<style scoped>

</style>