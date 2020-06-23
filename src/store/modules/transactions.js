import Vue from "vue";
// initial state
const state = () => ({
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false,
  },
  utx: [],
  totalValue: 0,
});

// getters
const getters = {};

// actions
const actions = {
  sendMessage: function(context, message) {
    Vue.prototype.$socket.send(message);
  },
  sendPing: function() {
    Vue.prototype.$socket.sendObj({ op: "ping" });
  },
  unconfirmedSub: function() {
    Vue.prototype.$socket.sendObj({ op: "unconfirmed_sub" });
  },
  unconfirmedUnsub: function() {
    Vue.prototype.$socket.sendObj({ op: "unconfirmed_unsub" });
  },
  clearUtx: function(context) {
    context.commit("clearUtx");
  },
};

// mutations
const mutations = {
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    console.log(message);
    switch (message?.op) {
      case "utx":
        state.utx = [...state.utx, message.x];
        state.totalValue =
          state.totalValue + message.x.out.reduce((k, i) => k + i.value, 0);
        break;
      default:
        state.socket.message = message;
    }
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
  clearUtx(state) {
    state.utx = [];
    state.totalValue = 0;
  },
};

export default {
  // FIXME: please
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
