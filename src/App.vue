<template>
  <div id="app">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/desk">Desk</router-link>
        <router-link to="/transactions">Transactions</router-link>
        <hr />
        <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
    background: tomato;
}
</style>
