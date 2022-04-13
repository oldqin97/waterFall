import waterFall from './src/waterFall.vue';

export default {
  install(app) {
    app.component(waterFall.name, waterFall);
  },
};
