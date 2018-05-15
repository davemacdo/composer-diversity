import Vue from 'vue'
import App from './App.vue'
const {flag, name, code} = require('country-emoji');

new Vue({
  el: '#app',
  render: h => h(App)
})
