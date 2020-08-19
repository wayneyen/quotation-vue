import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//---- CSS
import 'bootstrap/dist/css/bootstrap.css'
import '../src/less/style_admin.less'

createApp(App).use(router).mount('#app')

