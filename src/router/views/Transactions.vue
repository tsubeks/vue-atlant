<template>
  <div>
    <h2>
      Unconfirmed transactions page.
    </h2>
    <h2 :style="{ color: socket.isConnected ? 'green' : 'red' }">
      {{ socket.isConnected ? 'Connected' : 'Disconnected'}}
    </h2>
    <div>
      <button @click="unconfirmedSub">Subscribe</button>
      <button @click="unconfirmedUnsub">Unsubscribe</button>
      <button @click="clearUtx">Clear</button>
    </div>
    <h3>Total: {{ satoshiToBTC(totalValue) }} BTC</h3>
    <div class="container">
      <TransactionCard v-for="(tx, index) in utx" :tx="tx" :index="index" :key="tx.hash" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import bitcoinUnits from "bitcoin-units";
import TransactionCard from "@/components/TransactionCard";

export default {
  components: { TransactionCard },
  computed: {
    ...mapState({
      socket: (store) => store.transactions.socket,
      utx: (store) => store.transactions.utx,
      totalValue: (store) => store.transactions.totalValue,
    }),
  },
  methods: {
    ...mapActions([
      "sendPing",
      "unconfirmedSub",
      "unconfirmedUnsub",
      "clearUtx",
    ]),
    satoshiToBTC(value) {
      return bitcoinUnits(value, "satoshi")
        .to("BTC")
        .value();
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin: 0 16px;
  }
</style>
