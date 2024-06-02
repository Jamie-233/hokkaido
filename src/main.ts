import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import 'element-plus/dist/index.css'
import '@/permission'
import '@/style.css'
import '@/styles/index.scss'

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  import('./mock')
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
