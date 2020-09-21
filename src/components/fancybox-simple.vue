<template lang="pug">
  div
    a.play-buttons.fancybox( data-fancybox :href="'#video' + field.id")
      img(:src="require('@/assets/img/play_button.svg')")
      .video(style="display: none;")
        video(:id="'video'+ field.id" width="100%" :data-caption="'Caption#' + field.id")
          source(:src="field.src" :data-caption="'Caption#' + field.id" type='video/mp4' )
    img(src="@/assets/video/preview.svg")

</template>

<script>
export default {
name: "fancybox-component-simple",
  props: ['field'],
}
</script>

<style>

</style>