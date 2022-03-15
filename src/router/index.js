import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Portfolio from "@/views/Portfolio";
import Services from "@/views/Services";
import Informations from "@/views/Informations";
import Avis from "@/views/Avis";
import Contact from "@/views/Contact";
import Projet from "@/views/Projet";
import Home from "@/views/eng/Home";
import Portfolioeng from "@/views/eng/Portfolioeng";
import Serviceseng from "@/views/eng/Serviceseng";
import About from "@/views/eng/About";
import Testimonials from "@/views/eng/Testimonials";
import GetInTouch from "@/views/eng/Get-in-touch";
import Project from "@/views/eng/Project";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: {
      title: 'Clément Torchiat - Développeur Front-end & Webdesigner'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Clément Torchiat - Portfolio'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Clément Torchiat - Services'
    }
  },
  {
    path: '/a_propos',
    name: 'Informations',
    component: Informations,
    meta: {
      title: 'Clément Torchiat - À propos'
    }
  },
  {
    path: '/avis',
    name: 'Avis',
    component: Avis,
    meta: {
      title: 'Clément Torchiat - Avis'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Clément Torchiat - Contact'
    }
  },
  {
    path: '/portfolio/:id',
    name: 'Projet',
    component: Projet,
    meta: {
      title: 'Clément Torchiat - Portfolio'
    }
  },
  {
    path: '/eng',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Clément Torchiat -  Front-end Developer & Webdesigner'
    }
  },
  {
    path: '/eng/portfolio',
    name: 'Portfolioeng',
    component: Portfolioeng,
    meta: {
      title: 'Clément Torchiat -  Portfolio'
    }
  },
  {
    path: '/eng/services',
    name: 'Serviceseng',
    component: Serviceseng,
    meta: {
      title: 'Clément Torchiat -  Services'
    }
  },
  {
    path: '/eng/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Clément Torchiat -  About'
    }
  },
  {
    path: '/eng/testimonials',
    name: 'Testimonials',
    component: Testimonials,
    meta: {
      title: 'Clément Torchiat -  Testimonials'
    }
  },
  {
    path: '/eng/get-in-touch',
    name: 'Get-in-touch',
    component: GetInTouch,
    meta: {
      title: 'Clément Torchiat -  Get in touch'
    }
  },
  {
    path: '/eng/portfolio/:id',
    name: 'Project',
    component: Project,
    meta: {
      title: 'Clément Torchiat -  Portfolio'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
      .forEach(tag => document.head.appendChild(tag));
  next();
});
