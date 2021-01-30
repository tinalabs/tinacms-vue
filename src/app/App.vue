<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EditableHelloWorld :title="title" :subtitle="subtitle" :body="body" />
</template>

<script>
  import EditableHelloWorld from './components/EditableHelloWorld.vue'
  import { HtmlFieldPlugin } from 'react-tinacms-editor'

  export default {
    name: 'App',
    inject: ['tinacms'],
    components: {
      EditableHelloWorld
    },
    data() {
      return {
        title: 'Welcome to Your Vue.js App',
        subtitle: 'This Vue.js app is editable with TinaCMS!',
        body: `
          <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
          </p>
          <h3>Installed CLI Plugins</h3>
          <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
          </ul>
          <h3>Essential Links</h3>
          <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
          </ul>
          <h3>Ecosystem</h3>
          <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
          </ul>
        `.trim()
      }
    },
    created: function() {
      this.tinacms.enable()
      this.tinacms.plugins.add(HtmlFieldPlugin)
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
