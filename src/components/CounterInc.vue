<template>
  <div>
    <div>Contador: {{ counter }}</div>
    <button id="addButton" @click="counter++">Adicionar</button>
    <button id="resetButton" @click="counter = 0">Reiniciar</button>
  </div>
</template>

<script>
export default {
  name: "counter-inc",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
