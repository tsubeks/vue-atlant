<template>
  <div>
    <p>{{index + 1}}</p>
    <h4>From:</h4><a v-for="(i, ii) in tx.inputs" :key="ii + '-from'" :href="'https://www.blockchain.com/btc/address/' + i.prev_out.addr" target="_blank">{{i.prev_out.addr}}<br /></a>
    <h4>To:</h4><a v-for="(o, oi) in tx.out" :key="oi + '-to'" :href="'https://www.blockchain.com/btc/address/' + o.addr" target="_blank">{{o.addr}}<br /></a>
    <h4>BTC:</h4>
    {{ satoshiToBTC(tx.out.reduce(((k, i) => k + i.value), 0)) }}
  </div>
</template>

<script>
import bitcoinUnits from "bitcoin-units";

export default {
  name: 'TransactionCard',
  props: ['tx', 'index'],
  methods: {
    // TODO: own utils
    satoshiToBTC(value) {
      return bitcoinUnits(value, "satoshi")
        .to("BTC")
        .value();
    },
  }
}

</script>

<style scoped>

  div {
    display: flex;
    flex-flow: column;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    width: 90%;
    margin: 16px 0;
    padding: 16px;
    box-shadow: 0 0 16px rgba(0,0,0,0.32);
    border-radius: 8px;
    position: relative;
  }

  p {
    font-size: 32px;
    position: absolute;
    margin: 0px;
    top: 16px;
    left: 16px;
  }

  h4 {
    margin: 4px;
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    overflow: hidden;
    max-width: 80%;
    text-overflow: ellipsis;
  }
</style>
