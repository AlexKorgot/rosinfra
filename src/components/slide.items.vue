<template lang="pug">
  .items-container(@click="goToItem(field.url)")
    .img
      img(:src="field.image")
    .items-container__title {{field.title}}
    .items-container__subTitle {{field.subTitle}}
</template>

<script>
export default {
  name: 'slide-items',
  props: ['field'],
  methods: {
    goToItem(url){
      this.$router.push({
        name: url
      })
    }
  }
}
</script>

<style scoped lang="sass">
.items-container
  width: 355px
  min-height: 276px
  background: #FFFFFF
  box-shadow: -15px -15px 30px rgba(242, 243, 246, 0.3), 15px 15px 30px rgba(145, 153, 181, 0.2)
  border-radius: 10px
  padding: 28px 32px
  margin-bottom: 30px
  img
    max-width: 72px
    display: block
    margin-bottom: 36px
  &__title
    margin-bottom: 19px
    font-size: 28px
    font-weight: 500
  &__subTitle
    font-size: 16px
    font-weight: 300
</style>
