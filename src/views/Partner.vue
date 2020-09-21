<template lang="pug">
  .container
    .content-wrapper(@click.prevent="play(video.id)")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle База партнёров
        .content-wrapper__subtittle Единое цифровое пространство для участников рынка инфраструктурных проектов с информацией о профиле деятельности, опыте реализации проектов, отраслевой специфике и территориальной привязке частных партнеров.
        .content-wrapper__ul
          ul
            li Надежные партнеры на любой этап реализации проекта
            li Самые востребованные услуги на рынке инфраструктуры и ГЧП
            li Удобный интерфейс с системой фильтров для поиска
            li Возможность подбора партнеров по индивидуальным запросам
      .content-wrapper__viedo
        fancy-box(:field="video")
</template>

<script>
import {video} from '../mixins/play.video'
import fancyBox from "@/components/fancybox-simple";
export default {
name: "Partner",
mixins: [video],
  components: {
    fancyBox
  },
  data: function () {
    return {
      video: {
        src: `${require('@/assets/video/video.mp4')}`,
        id: '_partner'
      }
    }
  },
}
</script>

<style scoped>

</style>