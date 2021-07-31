import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import custom from './components/custom.vue'
Vue.component('custom',custom)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import uctest from './pages/uctest/home.vue'
Vue.component('uctest',uctest)

import ucbiz from './pages/ucbiz/home.vue'
Vue.component('ucbiz',ucbiz)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



