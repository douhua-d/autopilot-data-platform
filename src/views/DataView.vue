<template>
  <div id="container" ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { init } from '@/hooks/useControl/useControl';
import { metaTest } from '/mock/mock.js';

// 声明props
const props = defineProps({
  taskId: String,
  frames: Array,
  dataType: {
    type: String,
    default: 'track' // 跟踪-track  检测-check
  }
});

// 通过props的一些数据，处理的整体的元数据
// const meta = computed(() => {
//
// });

const meta = metaTest;

const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  console.log('onMounted---test meta-----', meta);
  init(containerRef, meta);
});
</script>

<style lang="less" scoped></style>
