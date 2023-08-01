import Vue from 'vue'
import App from './App.vue'

import { List, Cell, CellGroup, Tab, Tabs } from 'vant';

Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tab);
Vue.use(Tabs);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
