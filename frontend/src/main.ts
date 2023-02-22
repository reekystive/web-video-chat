import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.ts'
import router from './plugins/router.ts'
import i18n from './plugins/i18n.ts'


createApp(App)
  .use(vuetify)
  .use(router)
  .use(i18n)
  .mount('#app')
