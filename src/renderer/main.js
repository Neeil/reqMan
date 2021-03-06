import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import './icons' // icon

// import './permission' 

import { mockXHR } from '../../mock'

if(process.env.NODE_ENV === 'production'){
  mockXHR()
}



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
