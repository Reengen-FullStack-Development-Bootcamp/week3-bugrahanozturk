<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    Header,
  },

  created() {
    const log = JSON.parse(localStorage.getItem("logs")) || [];

    log.push({
      path: this.$route.path,
    });

    localStorage.setItem("logs", JSON.stringify(log));
  },
};
</script>
