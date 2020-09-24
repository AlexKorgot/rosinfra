<template lang="pug">
  #app(:class="bgClass")
    .app__wrapper()
      .app__header
        img(src="@/assets/img/logo.svg" @click="goToHome()")
        transition(name="fade")
          .btn.btn-primary.btn-header(v-if="isVisible" @click="goToServices()") Перейти к сервисам
      .app__content(@click="goToContents()")
        transition(name="fade" mode="out-in")
          router-view
</template>
<script>
import AppFooter from "./components/app-footer.vue"

export default {
  name: "App",
  data: function (){
    return {
      route: ""
    }
  },
  components: {
    AppFooter
  },
  methods: {
    goToServices(){
      switch(this.$route.name){
        case "about":
          this.$router.push({
            name: 'Contents'
          })
          break
        case "project":
          window.open("https://rosinfra.ru/project", "_blank")
          break
        case "partners":
          window.open("https://rosinfra.ru/companies", "_blank")
          break
        case "academy":
          window.open("https://rosinfra.ru/academy", "_blank")
          break
        case "trends":
          window.open("https://rosinfra.ru/digest", "_blank")
          break
        case "help":
          window.open("https://rosinfra.ru/home/landing/experts", "_blank")
          break
        case "news":
          window.open("https://rosinfra.ru/news", "_blank")
      }
    },
    goToContents(){
      if(this.$route.name === "Home"){
        this.$router.push({
          name: 'Contents'
        })
      } else {
        return false
      }
    },
    goToHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  },
  computed: {
    bgClass(){
      return this.$route.name === "Contents"? "app-bg-contents": ''
    },
    isVisible() {
      return this.$route.meta && this.$route.meta.footer
    }
  }
}
</script>
<style lang="sass" src="@/assets/sass/main.sass"></style>

<style lang="sass">
*:focus
  outline: none !important

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