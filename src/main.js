import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap"

createApp(App).use(router).mount('#app')