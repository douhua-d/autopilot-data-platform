<template>
  <div class="wrapper">
    <h3>{{ count }}</h3>
    <button class="btn" @click="accumulate">增加+1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useCommonStore } from '@/store';

const commonStore = useCommonStore();
const count = computed(() => commonStore.count);
const accumulate = () => commonStore.accumulate();
</script>

<style lang="less">
.wrapper {
  margin: 50px;

  .btn {
    margin-top: 10px;
    color: red;
  }
}
</style>
