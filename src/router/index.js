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
import Vorratskammer from "@/views/Vorratskammer.vue";
import Registrierung from "@/views/Registrierung.vue";
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
    {path: '/vorratskammer', name: 'Vorratskammer', component: Vorratskammer, meta: { requiresAuth: true }},
    {path: '/registrierung', name: 'Registrierung', component: Registrierung},
    {path: '/', name: 'StartLogin', component: StartLogin}


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// performs an HTTP Request to get the Token Expiry
async function getCookieExpiry() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('access_token=')) {
            const cookieValue = cookie.substring('access_token='.length, cookie.length);
            const response = await fetch("http://localhost:8000/api/token/expiry/"+ cookieValue)
            return new Date(await response.json())
        }
    }
    return null;
}
router.beforeEach(async (to, from, next) => {
    // checks if Bearer Token is expired
    const isExpired = await getCookieExpiry() < new Date()
    // checks if the requested site requires auth
    const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
    if ((requiresAuth && !isExpired)) {
        // redirect to Login
        next({name: 'StartLogin'});
    } else {
        // redirect to requested Component
        next();
    }
});
export default router