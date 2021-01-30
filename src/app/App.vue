<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EditableHelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
  import EditableHelloWorld from './components/EditableHelloWorld.vue'

  export default {
    name: 'App',
    inject: ['tinacms'],
    components: {
      EditableHelloWorld
    },
    created: function() {
      this.tinacms.enable()
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
