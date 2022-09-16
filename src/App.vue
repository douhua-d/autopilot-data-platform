<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>
</template>

<script>
import BasicLayout from "@layouts/BasicLayout.vue";

export default {
  name: "App",
  components: { BasicLayout }
};
</script>

<style scoped>

</style>