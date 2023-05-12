import {createRouter, createWebHistory} from 'vue-router'
import Profil from "@/views/Profil.vue";
import Einkaufsliste from "@/views/Einkaufsliste.vue";
import Home from "@/views/Home.vue";
import Zutaten from "@/views/Zutaten.vue";
import Rezepte from "@/views/Rezepte.vue";
import Einstellungen from "@/views/Einstellungen.vue";
import Impressum from "@/views/Impressum.vue";
import RezeptSeite from "@/views/RezeptSeite.vue";
import Login from "@/views/Login.vue";
import AktuellesRezept from "@/views/AktuellesRezept.vue";
import WhatCanICook from "@/views/WhatCanICook.vue";


const routes = [
    {path: '/profil', name: 'Profil', component: Profil},
    {path: '/einkaufsliste', name: 'Einkaufsliste', component: Einkaufsliste},
    {path: '/zutaten', name: 'Zutaten', component: Zutaten},
    {path: '/rezepte', name: 'Rezepte', component: Rezepte},
    {path: '/', name: 'Home', component: Home},
    {path: '/einstellungen', name: 'Einstellungen', component: Einstellungen},
    {path: '/impressum', name: 'Impressum', component: Impressum},
    {path: '/rezeptseite', name: 'RezeptSeite', component: RezeptSeite},
    {path: '/login', name: 'Login', component: Login},
    {path: '/aktuellesRezept', name: 'AktuellesRezept', component: AktuellesRezept},
    {path: '/whatCanICook', name: 'WhatCanICook', component: WhatCanICook}


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router