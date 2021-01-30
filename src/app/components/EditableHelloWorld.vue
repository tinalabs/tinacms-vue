<template>
  <HelloWorld 
    v-bind:title="modifiedValues.title"
    v-bind:subtitle="modifiedValues.subtitle"
    v-bind:body="modifiedValues.body"
  />
</template>

<script>
  import { Form } from 'tinacms'
  import HelloWorld from './HelloWorld'

  export default {
    name: 'EditableHelloWorld',
    inject: ['tinacms'],
    props: {
      title: String,
      subtitle: String,
      body: String
    },
    components: {
      HelloWorld
    },
    data: function() {
      return {
        modifiedValues: this.$props
      }
    },
    created: function() {
      const form = new Form({
        id: "hello-world",
        label: "Hello World",
        fields: [
          { name: "title", label: "Title", component: "text" },
          { name: "subtitle", label: "Subtitle", component: "textarea" },
          { name: "body", label: "Body", component: "html" }
        ],
        initialValues: this.$props
      })

      this.tinacms.plugins.add(form);

      form.subscribe(({values}) => this.$data.modifiedValues = values, { values: true} );
    }
  }
</script>
