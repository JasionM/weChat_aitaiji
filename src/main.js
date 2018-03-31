// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './config.js'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
