<template>
    <div class="container">
        <h2>Desk page.</h2>
        <div class="grid">
          <DeskBlock v-for="(block, index) in blocks" :block="block" :key="index"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DeskBlock from '@/components/DeskBlock'

export default {
  components: {DeskBlock},
  computed: {
    ...mapState('desk', ['blocks'])
  }
}
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
