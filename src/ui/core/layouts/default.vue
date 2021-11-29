<template>
  <v-app>
    <v-main>
      <v-container>
        <div>
          <v-row justify="center">
            <div class="titulo">
              <img
                src="../assets/pokemon-logo.png"
                height="130"
                width="350"
                alt="pokemon"
              />
            </div>
          </v-row>
        </div>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
#app {
  background-color: #900;
  background-image: linear-gradient(147deg, #900 0%, #f00 74%);
}

.titulo {
  justify-content: center;
  display: flex;
}
@media (min-width: 1700px) {
  .titulo {
    margin-right: 100px;
  }
}
</style>
