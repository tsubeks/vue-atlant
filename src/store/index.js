import Vue from "vue";
import Vuex from "vuex";
import transactions from "@/store/modules/transactions";
import desk from "@/store/modules/desk";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transactions,
    desk,
  },
});
