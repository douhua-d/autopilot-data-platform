<template>
  <div id="container" ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { Mesh, BoxGeometry, MeshBasicMaterial, Object3D } from 'three';
import { onMounted } from 'vue';
import { pcdLoader } from '@/hooks/usePcd/usePcdLoader';
import { scene, camera, render, init } from '@/hooks/useScene/useScene';

let cube;

onMounted(() => {
  init();
  addCube();
  loadPCD();
});

const loadPCD = () => {
  pcdLoader('/mock/data/pcd/car01.pcd').then(res => {
    console.log(res);
    scene.add(res as Object3D);
  });
};

const addCube = () => {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  cube = new Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 50;
  render();
};
</script>

<style lang="less" scoped></style>
