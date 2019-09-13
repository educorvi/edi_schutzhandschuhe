import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from "bootstrap-vue";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/custom.scss"

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import {MdDivider, MdSteppers, MdButton} from "vue-material/dist/components"


import vueResource from "vue-resource"


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(MdDivider);
Vue.use(MdSteppers);
Vue.use(MdButton);

Vue.use(vueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
