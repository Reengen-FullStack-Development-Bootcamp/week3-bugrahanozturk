<template>
  <header>
    <div class="menu">
      <router-link to="/" class="menu-item">Home</router-link>
      <router-link to="/admin/logs" class="menu-item" v-if="admin"
        >Admin</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      admin: false,
    };
  },
  mounted() {
    this.admin = localStorage.getItem("admin") || false;
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  background: silver;
  padding: 10px 20px;

  align-items: cener;

  height: 50px;

  .menu-item {
    color: white;
    font-size: 20px;
  }
}
</style>
