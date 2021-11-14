<template>
  <div>
    <candle-chart></candle-chart>

    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      Yetkiniz yok

      <template>
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import CandleChart from "../components/CandleChart.vue";
export default {
  name: "App",
  data() {
    return {
      snackbar: false,
    };
  },
  components: {
    CandleChart,
  },

  mounted() {
    if (this.$route.query) if (!this.$route.query.success) this.snackbar = true;
  },
};
</script>

<style></style>
