const state = () => ({
  inc: 10,
  minSize: 100,
  order: [4, 3, 2, 1, 0],
  blocks: [
    { id: "0", x: 50, y: 100, width: 300, height: 100 },
    { id: "1", x: 250, y: 200, width: 300, height: 100 },
    { id: "2", x: 150, y: 300, width: 300, height: 100 },
    { id: "3", x: 350, y: 200, width: 300, height: 100 },
  ],
  // FIXME: in dev mode this somehow returns to default, but persist state changes
  removed: [{ id: "4", x: 180, y: 300, width: 300, height: 200 }],
});

const getters = {};

const actions = {};

// there is no common util for flexibility
const mutations = {
  onResize: function(state, { id, x, y, width, height }) {
    // find index in array by id
    const idx = state.blocks.findIndex((block) => block.id === id);

    // right order
    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;

    // update block
    state.blocks[idx] = { id: state.blocks[idx].id, x, y, width, height };

    // update links
    state.blocks = [...state.blocks];
    state.order = [...state.order];
  },
  onDrag: function(state, { id, x, y }) {
    // find index in array by id
    const idx = state.blocks.findIndex((block) => block.id === id);

    // right order
    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;

    // update block
    state.blocks[idx] = { ...state.blocks[idx], x, y };

    // update links
    state.blocks = [...state.blocks];
    state.order = [...state.order];
  },
  onActivated: function(state, { id }) {
    // right order
    let indexOfTopOrder = state.order.indexOf(state.order.length - 1);
    state.order[indexOfTopOrder] = state.order[id];
    state.order[id] = state.order.length - 1;

    // update links
    state.order = [...state.order];
    state.blocks = [...state.blocks];
  },
  onRemove: function(state, { id }) {
    // find index in array by id
    const idx = state.blocks.findIndex((block) => block.id === id);

    // TODO: check if the order is right or not here
    // update values and links
    state.removed = [...state.removed, state.blocks[idx]];
    state.blocks = [...state.blocks.filter((block) => block.id !== id)];
  },
  onRestore: function(state, { x, y }) {
    let defaultHeight = 100;
    let defaultWidth = 300;
    // restore last, it can be any id in the future
    const id = state.removed[state.removed.length - 1].id;
    const idx = state.removed.findIndex((block) => block.id === id);

    // TODO: check if the order is right or not here
    // update values and links
    state.blocks = [
      ...state.blocks,
      {
        ...state.removed[idx],
        x: x - defaultWidth / 2,
        y: y - defaultHeight / 2,
        width: defaultWidth,
        height: defaultHeight,
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
