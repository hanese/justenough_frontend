import {createRouter, createWebHistory} from 'vue-router'
import Profil from "@/views/Profil.vue";
import Einkaufsliste from "@/views/Einkaufsliste.vue";
import Home from "@/views/Home.vue";
import Zutaten from "@/views/Zutaten.vue";
import Rezepte from "@/views/Rezepte.vue";
import Impressum from "@/views/Impressum.vue";
import Login from "@/views/Login.vue";
import AktuellesRezept from "@/views/AktuellesRezept.vue";
import WhatCanICook from "@/views/WhatCanICook.vue";
import StartLogin from "@/views/StartLogin.vue";
import store from "@/store";


const routes = [
    {path: '/profil', name: 'Profil', component: Profil, meta: { requiresAuth: true }},
    {path: '/einkaufsliste', name: 'Einkaufsliste', component: Einkaufsliste, meta: { requiresAuth: true }},
    {path: '/zutaten', name: 'Zutaten', component: Zutaten, meta: { requiresAuth: true }},
    {path: '/rezepte', name: 'Rezepte', component: Rezepte, meta: { requiresAuth: true }},
    {path: '/home', name: 'Home', component: Home, meta: { requiresAuth: true }},
    {path: '/impressum', name: 'Impressum', component: Impressum, meta: { requiresAuth: true }},
    {path: '/login', name: 'Login', component: Login, meta: { requiresAuth: true }},
    {path: '/aktuellesRezept', name: 'AktuellesRezept', component: AktuellesRezept, meta: { requiresAuth: true }},
    {path: '/whatCanICook', name: 'WhatCanICook', component: WhatCanICook, meta: { requiresAuth: true }},
    {path: '/', name: 'StartLogin', component: StartLogin}


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    const isLoggedIn = store.state.isLoggedIn;
    const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

    if (requiresAuth && !isLoggedIn) {
        next({ name: 'StartLogin' }); // Benutzer wird zur Anmeldeseite weitergeleitet
    } else {
        next();
    }
});
export default router