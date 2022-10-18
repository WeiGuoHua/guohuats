import { App, createApp, useAttrs } from 'vue';
import ElementPlus from 'element-plus';
import '@/assets/style/base.scss';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import router from './router/index';
import Appv from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import axios from './utils/request';
import { createPinia } from 'pinia';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

let app = createApp(Appv);

function useTable(app: App) {
  app.use(VXETable);
  // 给 vue 实例挂载内部对象，例如：
  app.config.globalProperties.$XModal = VXETable.modal
  app.config.globalProperties.$XPrint = VXETable.print
  app.config.globalProperties.$XSaveFile = VXETable.saveFile
  app.config.globalProperties.$XReadFile = VXETable.readFile
}
app.config.globalProperties.$http = axios;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
const pinia = createPinia();
app.use(ElementPlus).use(pinia).use(router).use(useTable).mount('#app');
