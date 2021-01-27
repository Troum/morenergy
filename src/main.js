import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import {ButtonPlugin, CardPlugin,
  CollapsePlugin,
  FormPlugin, FormGroupPlugin,
  FormInputPlugin, NavbarPlugin, NavPlugin,
  ListGroupPlugin, LayoutPlugin, ProgressPlugin,
  ModalPlugin, InputGroupPlugin, FormTextareaPlugin,
  ToastPlugin, PaginationPlugin } from "bootstrap-vue";
import * as truncate from 'truncate-html'
import AxiosPlugin from './plugins/axios-plugin';
import VueTruncate from 'vue-truncate-filter';
import { Editor } from '@toast-ui/vue-editor';
import { Viewer } from '@toast-ui/vue-editor';
import defaultOptions from './config';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import './ml';
import 'vue-resize/dist/vue-resize.css'
import './scss/styles.scss';
import VueCookies from 'vue-cookies';
import VueResize from 'vue-resize';

Vue.use(VueResize);
Vue.use(VueCookies);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(ListGroupPlugin);
Vue.use(InputGroupPlugin);
Vue.use(CollapsePlugin);
Vue.use(FormTextareaPlugin);
Vue.use(ToastPlugin);
Vue.use(PaginationPlugin);
Vue.use(AxiosPlugin);
Vue.use(VueTruncate);
Vue.use(Editor, defaultOptions);
Vue.use(ProgressPlugin);
Vue.use(Viewer);
Vue.use(VueMeta);
Vue.config.productionTip = false;

Vue.filter('truncateHtml', (value, size) => {
  return truncate.default(value, size)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
