import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import i18n from './plugins/i18n'


createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .mount('#app')
