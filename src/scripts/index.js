import '../styles/main.scss';
import Vue from 'vue';
import App from './App';
import router from './router';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
