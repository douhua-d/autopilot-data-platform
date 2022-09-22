<template>
  <div id="container" ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { onMounted } from 'vue';
import { scene, camera, render } from '@/hooks/useScene/useScene';
import { init } from '@/hooks/useControl/useControl';

let cube;

onMounted(() => {
  init();
  addCube();
});

const addCube = () => {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  cube = new Mesh(geometry, material);
  scene.add(cube);
  // camera.position.z = 50;
  render();
};
</script>

<style lang="less" scoped></style>
