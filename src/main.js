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
})


   
function smoothScrollTo(toElem) {
  var element = document.documentElement,
      start = element.scrollTop,
      to = document.getElementById(toElem).offsetTop-40,
      change = to - start,
      currentTime = 0,
      increment = 20, 
      duration = duration || 600;
  
  var animateScroll = function(){
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
};