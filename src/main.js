import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/styles/app.css'

import '@purge-icons/generated'

const app = createApp(App)

app.use(router)

app.mount('#app')
