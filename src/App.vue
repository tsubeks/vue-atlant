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

<!-- TODO: update styles for mobile -->
html { height:100%; }
body { position:absolute; top:0; bottom:0; right:0; left:0; margin: 0 }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.router-link-active {
    text-decoration: none;
    background: tomato;
    color: white;
}

a {
    color: black;
    padding: 8px 0;
    text-decoration: none;
}
</style>
