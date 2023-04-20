import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import Einkaufsliste from "@/views/Einkaufsliste.vue";
import Home from "@/views/Home.vue";
import Zutaten from "@/views/Zutaten.vue";
import Rezepte from "@/views/Rezepte.vue";
const routes = [
    { path: '/login', name: 'Login', component: Login},
    { path: '/einkaufsliste', name: 'Einkaufsliste', component: Einkaufsliste},
    { path: '/zutaten', name: 'Zutaten', component: Zutaten},
    { path: '/rezepte', name: 'Rezepte', component: Rezepte},
    { path: '/', name: 'Home', component: Home},


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router