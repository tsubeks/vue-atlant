import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import transactions from "@/store/modules/transactions";
import desk from "@/store/modules/desk";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["desk"], //only save user module
});

export default new Vuex.Store({
  modules: {
    transactions,
    desk,
  },
  plugins: [vuexLocal.plugin],
});
