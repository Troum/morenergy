import Vue from 'vue'
import Router from 'vue-router'
import {from} from "bootstrap-vue/esm/utils/array";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/HomepageView')
        },
        {
            path: '/consultings',
            name: 'consultings',
            component: () => import('./views/ConsultingsView')
        },
        {
            path: '/consultings/entwicklung',
            name: 'entwicklung',
            component: () => import('./views/BeratungView')
        },
        {
            path: '/consultings/studien',
            name: 'studien',
            component: () => import('./views/BeratungView2')
        },
        {
            path: '/consultings/simulation',
            name: 'simulation',
            component: () => import('./views/BeratungView3')
        },
        {
            path: '/consultings/power',
            name: 'power',
            component: () => import('./views/BeratungView4')
        },
        {
            path: '/consultings/dguv',
            name: 'dguv',
            component: () => import('./views/BeratungView5')
        },
        {
            path: '/consultings/netzimpedanzmessungen',
            name: 'netzimpedanzmessungen',
            component: () => import('./views/BeratungView6')
        },
        {
            path: '/produkte',
            name: 'produkte',
            component: () => import('./views/ProdukteView')
        },
        {
            path: '/produkte/onis',
            name: 'produkt.onis',
            component: () => import('./views/ProdukteOnisView')
        },
        {
            path: '/produkte/mome',
            name: 'produkt.mome',
            component: () => import('./views/ProdukteMomeView')
        },
        {
            path: '/referenzen',
            name: 'referenzen',
            component: () => import('./views/ReferenzenView')
        },
        {
            path: '/videos',
            name: 'videos',
            component: () => import('./views/VideosView')
        },
        {
            path: '/team-morenergy',
            name: 'team',
            component: () => import('./views/TeamView')
        },
        {
            path: '/kontakt',
            name: 'kontakt',
            component: () => import('./views/KontaktView')
        },
        {
            path: '/aktuelles',
            name: 'news',
            component: () => import('./views/AktuellesView')
        },
        {
            path: '/aktuelles/:slug',
            name: 'aktuelle',
            component: () => import('./views/AktuelleView')
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: () => import('./views/ImpressumView')
        },
        {
            path: '/datenschutz',
            name: 'datenschutz',
            component: () => import('./views/DatenschutzView')
        },
        {
            path: '/cookies',
            name: 'cookies',
            component: () => import('./views/CookiesView')
        },
        {
            path: '/pvanlage',
            name: 'pvanlage',
            component: () => import('./views/Reason1View')
        },
        {
            path: '/hochhauslift',
            name: 'hochhauslift',
            component: () => import('./views/Reason2View')
        },
        {
            path: '/elektrische',
            name: 'elektrische',
            component: () => import('./views/Reason3View')
        }
    ],
});
router.beforeEach((from, to, next) => {
    if (to.name) {
        if (document.getElementById('collapse').classList.contains('me_show')) {
            document.getElementById('toggler').classList.remove('is-active');
            document.getElementById('collapse').classList.remove('me_show');
            document.getElementById('collapse').style.height = '0';
            document.getElementById('collapse').style.display = 'block';
        }
    }
    next();
});
router.afterEach((to, from) => {
    setTimeout(() => document.getElementsByClassName('vld-overlay')[0] ? document.getElementsByClassName('vld-overlay')[0].remove() : null, 2000);
});

export default router;
