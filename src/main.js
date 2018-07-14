import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = require('./localized-strings.json');
const i18n = new VueI18n({
  locale: 'en', // to test this, set it to the "xx" locale, and see all the strings turn into --x-x-x--
  messages,
});

new Vue({
  el: '#app',
  i18n: i18n,
  render: h => h(App)
})
