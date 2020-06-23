// initial state
const state = () => ({
  inc: 10,
  blocks: [
    { id: "1", x: 50, y: 100, width: 300, height: 100 },
    { id: "2", x: 450, y: 800, width: 300, height: 100 },
    { id: "3", x: 850, y: 1100, width: 300, height: 100 },
    { id: "4", x: 950, y: 800, width: 300, height: 100 },
  ],
  deleted: [{ id: "5", x: 180, y: 300, width: 300, height: 200 }],
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  onResize: function(state, { id, x, y, width, height }) {
    const idx = state.blocks.findIndex((block) => block.id === id);
    state.blocks[idx] = { id: state.blocks[idx].id, x, y, width, height };
    state.blocks = [...state.blocks];
  },
  onDrag: function(state, { id, x, y }) {
    const idx = state.blocks.findIndex((block) => block.id === id);
    state.blocks[idx] = { ...state.blocks[idx], x, y };
    state.blocks = [...state.blocks];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
