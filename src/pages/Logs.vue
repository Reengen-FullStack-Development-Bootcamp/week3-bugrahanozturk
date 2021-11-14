<template>
  <div>
    <h3>logs</h3>
    <hr />
    <ul>
      <li v-for="(log, index) in logs" :key="index">{{ log.path }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: [],
      admin: false,
    };
  },
  mounted() {
    this.admin = localStorage.getItem("admin");

    if (!this.admin)
      this.$router.push({
        path: "/",
        query: {
          status: false,
        },
      });

    this.logs = JSON.parse(localStorage.getItem("logs"));
  },
};
</script>

<style></style>
