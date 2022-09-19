import Vue from 'vue';
import MegUI from 'meg-ui';
import App from './App.vue';
import router from './router';
import { store } from './store';
import 'meg-ui/lib/theme/index.css';
import './styles/index.less';

Vue.use(MegUI);
new Vue({
  router,
  pinia: store,
  render: h => h(App),
}).$mount('#app');
