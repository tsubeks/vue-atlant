import Vue from "vue";
import VueNativeSock from "vue-native-websocket";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

Vue.use(VueNativeSock, "wss://ws.blockchain.info/inv", {
  store,
  format: "json",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
