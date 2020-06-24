<template>
  <div class="container" ref="box">
    <h2>Desk page.</h2>
    <div class="inputs">
      <button
        v-if="removed.length >= 1"
        @click.stop="
          onRestore($refs.box.clientWidth / 2, $refs.box.clientHeight / 2)
        "
      >
        ⤺ Restore previous block
      </button>
      <select v-model="inc" @change="onCellChange($event)">
        <option disabled value="">Select cell size</option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
    </div>
    <div class="grid" :style="cellSizeStyle()">
      <DeskBlock v-for="(block, index) in blocks" :block="block" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeskBlock from "@/components/DeskBlock";

export default {
  components: { DeskBlock },
  computed: {
    ...mapState("desk", ["blocks", "inc", "removed"]),
  },
  methods: {
    cellSizeStyle: function() {
      return {
        backgroundSize: `${this.inc}px ${this.inc}px, ${this.inc}px ${this.inc}px`,
      };
    },
    onCellChange(event) {
      console.log("hey");
      this.$store.commit("desk/onCellChange", event.target.value);
    },
    onRestore: function(x, y) {
      console.log(x, y);
      this.$store.commit("desk/onRestore", {
        x,
        y,
      });
    },
  },
};
</script>

<style>
.container {
  height: 100%;
}
.grid {
  height: 100%;
  position: relative;
  backgroundcolor: purple;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
}

button {
  margin-right: 16px;
}

.inputs {
  margin-bottom: 16px;
}
</style>
