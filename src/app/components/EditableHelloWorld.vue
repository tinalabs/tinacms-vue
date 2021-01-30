<template>
  <HelloWorld v-bind:msg="modifiedValues.msg"></HelloWorld>
</template>

<script>
  import { Form } from 'tinacms'
  import HelloWorld from './HelloWorld'

  export default {
    name: 'EditableHelloWorld',
    inject: ['tinacms'],
    props: {
      msg: String
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
          { name: "msg", label: "Message", component: "text" }
        ],
        initialValues: this.$props
      })

      this.tinacms.plugins.add(form);

      form.subscribe(({values}) => this.$data.modifiedValues = values, { values: true} );
    }
  }
</script>
