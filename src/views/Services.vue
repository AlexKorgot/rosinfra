<template lang="pug">
.service__content
  transition(name="fade" mode="out-in")
    router-view
  .app__footer
    app-footer
</template>

<script>
import AppFooter from "../components/app-footer.vue"
export default {
name: "Services",
  components: {
    AppFooter
  },
}
</script>

<style scoped>

</style>