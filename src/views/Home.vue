<template>
  <div class="home">
    显示的值{{ flag }}
    <button @click="changeHandler">改变值</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    let flag = ref(1);
    let changeHandler = (): void => {
      flag.value += 1;
    };

    return {
      flag,
      changeHandler
    };
  }
};

</script>

<style scoped>

</style>