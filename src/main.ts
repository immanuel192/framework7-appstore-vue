import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Framework7Vue from 'framework7-vue';
import Framework7, { Device } from './framework7-custom';
import './registerServiceWorker';
import App from './App.vue';
import './css/framework7-custom.less';
import 'framework7-icons/css/framework7-icons.css';
import './css/app.less';

Framework7.use(Framework7Vue);
Vue.use(VueCompositionApi);
Vue.config.productionTip = true;

// Fix viewport scale on mobiles
if ((Device.ios || Device.android) && Device.standalone) {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    const viewPortContent = viewport.getAttribute('content');
    viewport.setAttribute('content', `${viewPortContent}, maximum-scale=1, user-scalable=no`);
  }
}

new Vue({
  render: (h) => h(App),
}).$mount('#app');
