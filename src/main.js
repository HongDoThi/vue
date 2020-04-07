import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify/lib";
import "./plugins/vuetify";
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  router,
  Vuetify,
  render: h => h(App)
}).$mount("#app");
