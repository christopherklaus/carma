<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" integrity="sha384-rtJEYb85SiYWgfpCr0jn174XgJTn4rptSOQsMroFBPQSGLdOC5IbubP6lJ35qoM9" crossorigin="anonymous">
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style lang="sass">
@import './assets/stylesheets/application.sass'

#app
  margin-top: 4%

</style>
