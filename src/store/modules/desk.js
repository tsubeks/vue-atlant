// initial state
const state = () => ({
  inc: 10,
  minSize: 100,
  order: [4, 3, 2, 1, 0],
  blocks: [
    { id: "0", x: 50, y: 100, width: 300, height: 100 },
    { id: "1", x: 450, y: 800, width: 300, height: 100 },
    { id: "2", x: 850, y: 1100, width: 300, height: 100 },
    { id: "3", x: 950, y: 800, width: 300, height: 100 },
  ],
  removed: [{ id: "4", x: 180, y: 300, width: 300, height: 200 }],
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  onResize: function(state, { id, x, y, width, height }) {
    const idx = state.blocks.findIndex((block) => block.id === id);

    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;

    state.blocks[idx] = { id: state.blocks[idx].id, x, y, width, height };
    state.blocks = [...state.blocks];
    state.order = [...state.order];
  },
  onDrag: function(state, { id, x, y }) {
    const idx = state.blocks.findIndex((block) => block.id === id);

    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;

    state.blocks[idx] = { ...state.blocks[idx], x, y };
    state.blocks = [...state.blocks];
    state.order = [...state.order];
  },
  onActivated: function(state, { id }) {
    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;
    state.order = [...state.order];
    state.blocks = [...state.blocks];
  },
  onRemove: function(state, { id }) {
    const idx = state.blocks.findIndex((block) => block.id === id);
    console.log(idx);

    // TODO: order?
    state.removed = [...state.removed, state.blocks[idx]];
    state.blocks = [...state.blocks.filter((block) => block.id !== id)];
    console.log(state.blocks);
  },
  onRestore: function(state, { x, y }) {
    // restore last
    const id = state.removed[state.removed.length - 1].id;
    const idx = state.removed.findIndex((block) => block.id === id);
    // TODO: order?
    state.blocks = [
      ...state.blocks,
      {
        ...state.removed[idx],
        x: x - 150,
        y: y - 50,
        width: 300,
        height: 100,
      },
    ];

    state.removed = [...state.removed.filter((block) => block.id !== id)];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
