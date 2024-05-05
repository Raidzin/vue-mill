import './assets/main.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ru'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  lang: quasarLang
})
app.use(createPinia())
app.use(router)

app.mount('#app')
