import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import transactions from "@/store/modules/transactions";
import desk from "@/store/modules/desk";

Vue.use(Vuex);

// TODO: save only desk or everything?
// const deskState = new createPersistedState({
//   paths: ["desk"],
// });

export default new Vuex.Store({
  modules: {
    transactions,
    desk,
  },
  plugins: [createPersistedState()],
});
