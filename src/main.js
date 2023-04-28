import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/main.css'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

axios.defaults.baseURL = 'http://localhost:8000';  // the FastAPI backend
