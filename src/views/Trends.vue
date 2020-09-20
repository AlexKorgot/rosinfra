<template lang="pug">
  .container
    .content-wrapper(@click="play()")
      .play-buttons
        img(:src="require('@/assets/img/play_button.svg')")
      .content__descriptions
        .content-wrapper__service Сервис
        .content-wrapper__tittle Тренды и аналитика
        .content-wrapper__subtittle Агрегированная база знаний в сфере инвестиций в инфраструктуру с регулярно обновляемыми данными по рынку ГЧП и библиотекой уникальных аналитических материалов по тематике развития инфраструктуры в России и зарубежных странах.
        .content-wrapper__ul
          ul
            li Интерактивная аналитика по рынку проектов ГЧП в России
            li Сравнительный анализ инвестиций в инфраструктуру за рубежом
            li Рейтинг субъектов Российской Федерации по уровню развития ГЧП
            li Судебная практика и решения ФАС с оценкой влияния на рынок
            li Самая большая библиотека в сфере ГЧП
      .content-wrapper__viedo
        video(id="video" poster="@/assets/video/preview.svg")
          source(:src="require('@/assets/video/video.mp4')" type='video/mp4' )
</template>

<script>
import {video} from '../mixins/play.video'
export default {
  name: "Trends",
  mixins: [video]
}
</script>

<style scoped>

</style>