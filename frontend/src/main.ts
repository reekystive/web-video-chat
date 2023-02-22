import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.ts'
import router from './plugins/router.ts'


createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
