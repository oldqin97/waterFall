/*
 * @Author: qin
 * @Date: 2022-04-06 23:51:46
 * @LastEditTime: 2022-04-07 01:22:50
 * @FilePath: \waterFall\water-fall\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import App from './App.vue';
import WaterFallPlugin from './WaterFallPlugin';

const app = createApp(App);

app.use(WaterFallPlugin);

app.mount('#app');
