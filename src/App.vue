<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>
</template>

<script lang="ts">
import BasicLayout from '@layouts/BasicLayout.vue';

export default {
  name: 'App',
  components: { BasicLayout }
};
</script>

<style scoped></style>
