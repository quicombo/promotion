import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.scss'
import router from './router'
import { store } from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faBiohazard,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faBatteryThreeQuarters,
  faSkull,
  faCar,
  faCat,
  faCarCrash,
  faHospital
} from '@fortawesome/free-solid-svg-icons'
import {faNodeJs, faCss3, faHtml5, faVuejs, faSass} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,
    faBiohazard,
    faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryEmpty,
    faBatteryThreeQuarters,
    faSkull,
    faCar,
    faCat,
    faCarCrash,
    faHospital,
    faNodeJs, faCss3, faHtml5, faVuejs, faSass)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to,from, next) =>{
  app.$store.commit('setLoading', true)
  setTimeout(() => {
    next ();
  }, 1250)
});
router.afterEach(() => {
  app.$store.commit('setLoading', false)
});
/*router.beforeEach((to, from, next) => {
  app.$store.commit('showBattery')
  console.log('next')
  setTimeout(() => {
    next ();
  }, 1500)
});
router.afterEach(() => {
  console.log('back')
  app.$store.commit('hideBattery')
})*/
