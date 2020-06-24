<template>
  <vue-draggable-resizable
    :min-width="minSize"
    :min-height="minSize"
    :grid="[inc, inc]"
    :z="findZIndex()"
    :x="block.x"
    :y="block.y"
    :w="block.width"
    :h="block.height"
    @dragging="onDrag"
    @resizing="onResize"
    @activated="onActivated"
    :parent="true"
    class="container"
  >
    <div class="header">
      <div class="remove" v-on:click.stop="onRemove">✗</div>
      Title {{ parseInt(block.id) + 1 }}
    </div>
    <p>
      X: {{ block.x }} / Y: {{ block.y }} <br />
      W: {{ block.width }} / H:
      {{ block.height }}
    </p>
  </vue-draggable-resizable>
</template>

<script>
import { mapState } from "vuex";
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

export default {
  name: "DeskBlock",
  components: { VueDraggableResizable },
  props: ["block"],
  computed: {
    ...mapState("desk", ["blocks", "inc", "minSize", "order"]),
  },
  methods: {
    findZIndex: function() {
      return this.order[this.block.id];
    },
    onRemove: function() {
      this.$store.commit("desk/onRemove", {
        id: this.block.id,
      });
    },
    onResize: function(x, y, width, height) {
      this.$store.commit("desk/onResize", {
        id: this.block.id,
        x,
        y,
        width,
        height,
      });
    },
    onDrag: function(x, y) {
      this.$store.commit("desk/onDrag", {
        id: this.block.id,
        x,
        y,
      });
    },
    onActivated: function() {
      this.$store.commit("desk/onActivated", {
        id: this.block.id,
      });
    },
  },
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.32);
  background: purple;
  color: white;
}

.header {
  border-radius: 8px;
  background: purple;
  color: white;
  font-size: 24px;
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
}

.remove {
  position: absolute;
  top: 0px;
  left: 8px;
  cursor: pointer;
  font-size: 24px;
  color: white;
}
</style>
