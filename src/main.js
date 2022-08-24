import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/styles/app.css'
import '@/styles/bootstrap.min.css'
import '@/styles/magnific-popup.css'
import '@/styles/jquery-ui.css'
import '@/styles/owl.carousel.min.css'
import '@/styles/owl.theme.default.min.css'
import '@/styles/lightgallery.min.css'
import '@/styles/swiper.css'
import '@/styles/aos.css'
import '@/styles/style.css'
import '@/styles/style.css'
import '@/fonts/icomoon/style.css'
import '@/fonts/flaticon/font/flaticon.css'

import '@purge-icons/generated'

const app = createApp(App)

app.use(router)

app.mount('#app')
