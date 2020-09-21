<template lang="pug">
  div
    a.play-buttons.fancybox(v-for="(item, i) in items" :key="i" data-fancybox="gallery" :href="'#video' + item.id")
      img(:src="require('@/assets/img/play_button.svg')")
      .video(style="display: none;")
        video(:id="'video'+ item.id" :data-caption="'Caption#' + item.id")
          source(:src="require('@/assets/video/video.mp4')" :data-caption="'Caption#' + item.id" type='video/mp4' )
    img(src="@/assets/video/preview.svg")

</template>

<script>
export default {
  name: "fancybox-component-collections",
  props: ['field'],
  data: function () {
    return {
      items: [
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: 1
        },
        {
          src: `${require('@/assets/video/video.mp4')}`,
          id: 2
        }
      ]
    }
  },
}
</script>