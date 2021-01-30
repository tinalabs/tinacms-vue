import { TinaCMS } from "tinacms";

export const TinaVuePlugin = {
  defaultOptions: {
    cms: new TinaCMS({
      enabled: false,
      sidebar: true
    })
  },

  install(app, options = {}) {
    let userOptions = {
      ...this.defaultOptions, 
      ...options
    };

    app.provide('tinacms', userOptions.cms)

    app.mixin({
      created() {
        console.log(app);
      }
      // inject tina into components
    })
  }
}

export default TinaVuePlugin