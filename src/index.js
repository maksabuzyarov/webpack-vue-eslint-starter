import './styles/main.scss';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  router,
});
