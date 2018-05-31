<template>
  <div id="app">
    <h1 class="logo">Sellaphone</h1>
    <main>
      <div class="column">
        <h2>Välj telefon</h2>
          <phones></phones>
      </div>
      <div class="column">
        <h2>Välj abonnemang</h2>
        <contracts></contracts>
        <h2>Datamängd</h2>
        <datas></datas>
        <h2>Tillval</h2>
        <extras></extras>
      </div>
      <div class="column c-3">
        <div>
        <h2>Ditt månadspris</h2>
          <monthlyPrice></monthlyPrice>
        </div>
        <order></order>
      </div>
    </main>
    <div id="confirm">
      <h1>Din beställning är mottagen</h1>
    </div>
  </div>
</template>

<script>
  import phones from './components/phones'
  import contracts from './components/contracts'
  import datas from './components/datas'
  import extras from './components/extras'
  import monthlyPrice from './components/monthlyPrice'
  import order from './components/order'
  export default {
    name: 'App',
    components: {
      phones,
      contracts, 
      datas, 
      extras,
      monthlyPrice, 
      order
    }
  }
</script>

<style>@import './style.css'</style>

