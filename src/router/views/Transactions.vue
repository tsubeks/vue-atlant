<template>
  <div>
    <h2>Transactions page.</h2>
    <button @click="clickButton">Emit</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickButton: function() {
        this.$socket.sendObj({op: 'ping'})
    }
  }
};
</script>
