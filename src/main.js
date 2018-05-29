// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import routes from './routerlist'
import Router from 'vue-router'
Vue.use(Router)

Vue.use(ElementUI);
import './assets/css/ele-g.css'
import './assets/css/style.css'

// console.log(routes)
import Demoblock from "@/components/Demo-block"
Vue.component('demoblock',Demoblock)
const router = new Router({
  routes
});
router.beforeEach((route, redirect, next) => {
  document.title = route.meta.title || document.title;
  next();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
