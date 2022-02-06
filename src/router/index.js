import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Portfolio from "@/views/Portfolio";
import Services from "@/views/Services";
import Informations from "@/views/Informations";
import Avis from "@/views/Avis";
import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/a_propos',
    name: 'Informations',
    component: Informations
  },
  {
    path: '/avis',
    name: 'Avis',
    component: Avis
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
