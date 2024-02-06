<script setup>
import LogoImage from "./components/LogoImage.vue";
import AppTitle from "./components/AppTitle.vue";
import CounterInc from "./components/CounterInc.vue";
</script>

<template>
  <div id="app">
    <header>
      <LogoImage />

      <div class="wrapper">
        <AppTitle />
        <CounterInc />
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
