import Vue from 'vue';
import App from './App.vue';
import './styles/index.less';
import router from './router';
import { store } from './store';

new Vue({
  router,
  pinia: store,
  render: h => h(App),
}).$mount('#app');
