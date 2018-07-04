import Vue from 'vue';
import App from './App.vue';
import './firebase';
import VueFire from 'vuefire';
import Icon from 'vue-awesome/components/Icon';

Vue.use(VueFire);
Vue.component('icon', Icon);

new Vue({
  el: '#app',
  render: h => h(App)
});