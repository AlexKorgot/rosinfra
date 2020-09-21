<template lang="pug">
.container
    .content-wrapper(@click.prevent="play(video.id)")
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
        fancy-box(:field="video")
</template>

<script>
import {video} from '../mixins/play.video'
import fancyBox from "@/components/fancybox-simple";
export default {
  name: "Academy",
  components: {
    fancyBox
  },
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_academy'
      }
    }
  },
  mixins: [video]
}
</script>

<style scoped>

</style>