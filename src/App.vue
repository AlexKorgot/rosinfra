<template lang="pug">
  #app
    .app__wrapper
      .app__header(@click="goToHome()")
        img(src="@/assets/img/logo.svg")
        transition(name="fade")
          .btn.btn-primary.btn-header(v-if="isVisible") Перейти к сервисам
      .app__content
        transition(name="fade" mode="out-in")
          router-view
</template>
<script>
import AppFooter from "./components/app-footer.vue"
export default {
  name: "App",
  components: {
    AppFooter
  },
  methods: {
    goToHome () {
      this.$router.push({
        name: 'Home'
      })
    }
  },
  computed: {
    isVisible() {
      return this.$route.meta && this.$route.meta.footer
    }
  }
}
</script>
<style lang="sass" src="@/assets/sass/main.sass"></style>

<style lang="sass">
*:focus
  outline: none!important
.fade-enter-active,
.fade-leave-active
  transition: all .3s ease-in-out
.fade-enter,
.fade-leave-active
  opacity: 0
.fade-footer-enter-active,
.fade-footer-leave-active
  transition: all 3s ease-in-out
.fade-footer-enter,
.fade-footer-leave-active
  opacity: 0
</style>