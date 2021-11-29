<template>
  <div><PokemonHome :api-url="apiUrl" :image-url="imageUrl" /></div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  layout: 'default',
  data() {
    return {};
  },
});
</script>
