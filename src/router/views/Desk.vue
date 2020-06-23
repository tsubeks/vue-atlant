<template>
  <div class="container" ref="box">
    <h2>Desk page.</h2>
    <button
      v-if="removed.length >= 1"
      @click.stop="
        onRestore($refs.box.clientWidth / 2, $refs.box.clientHeight / 2)
      "
    >
      ⤺ Restore previous block
    </button>
    <!-- TODO: parent height is important -->
    <div class="grid">
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
    ...mapState("desk", ["blocks", "removed"]),
  },
  methods: {
    onRestore: function(x, y) {
      console.log(x,y)
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
  background: lighgrey;
}
</style>
