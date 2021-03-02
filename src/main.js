import React from 'react'
import ReactDOM from 'react-dom'
import { createApp } from 'vue'
import App from './app/App.vue'
import { TinaCMS } from 'tinacms'
import {Cms} from './cms/react'
import {TinaVuePlugin} from './cms/vue'

/**
 * Configure TinaCMS instance
 */
const cms = new TinaCMS({
  enabled: false,
  sidebar: true,
  toolbar: true
})

/**
 * Configure Vue Application
 */
const app = createApp(App)

app.use(TinaVuePlugin, {
  cms
})

app.mount('#app')

/**
 * Configure CMS Application
 */

if (app && shouldUseCMS) {
  ReactDOM.render(React.createElement(Cms, { cms, app }), document.querySelector('#tinacms'))
}
else {
  const shouldUseCMS = true;
}

