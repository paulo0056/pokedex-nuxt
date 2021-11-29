<template>
  <v-container class="mt-2">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="3">
        <form action="">
          <v-text-field
            class="search-box"
            placeholder="Pesquise seu pokemon"
            solo
            background-color="red"
          ></v-text-field>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>
<style>
.search-box {
  border: solid 1px;
  height: 50px;
}
</style>
