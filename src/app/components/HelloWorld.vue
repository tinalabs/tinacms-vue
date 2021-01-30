<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <article class="body">
      <div v-html="body" />
    </article>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: String,
      subtitle: String,
      body: String
    },
    created() { console.log({body: this.$props.body }) }
  }
</script>

<style>
  .body h3 {
    margin: 40px 0 0;
  }

  .body ul {
    list-style-type: none;
    padding: 0;
  }
  
  .body li {
    display: inline-block;
    margin: 0 10px;
  }

  .body a {
    color: #42b983;
  }
</style>
