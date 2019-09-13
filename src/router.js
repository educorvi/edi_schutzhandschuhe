import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import router from "@/router"
import {getLink} from "@/constants"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/katalog',
            name: 'Katalog',
            component: () => import("./views/Katalog")
        },
        {
            path: '/handschuh/:id',
            name: 'Handschuhdetails',
            component: () => import("./views/Handschuh")
        },



        {
            path: '/suche',
            name: 'Suche',
            component: () => import("./views/Suche/Suche")
        },
        {
            path: '/suche/biologisch',
            name: 'Suche - Biologische Gefährdung',
            component: () => import("./views/Suche/Gefaehrdungen/Suche_Biologisch")
        },
        {
            path: '/suche/chemisch',
            name: 'Suche - Chemische Gefährdung',
            component: () => import("./views/Suche/Gefaehrdungen/Suche_Chemisch")
        },
        {
            path: '/suche/mechanisch',
            name: 'Suche - Mechanische Gefährdung',
            component: () => import("./views/Suche/Gefaehrdungen/Suche_Mechanisch")
        },
        {
            path: '/suche/ergebnisse/:query',
            name: 'Suchergebnisse',
            component: () => import("./views/Suche/Ergebnisse")
        },
        {
            path: '/suche/:number',
            name: 'suche/num',
            beforeEnter: (to) => {
                router.push("/suche/" + getLink(parseInt(to.params.number)));
            }
        },


        {
            path: '/about',
            name: 'Über',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
