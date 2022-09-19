<template>
  <div id="container" ref="containerRef">
    <meg-button type="primary">按钮</meg-button>
  </div>
</template>

<script lang="ts" setup>
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { onMounted } from 'vue';
import { pcdLoader } from '@/hooks/usePcd/usePcdLoader';
import { scene, camera, render, init } from '@/hooks/useScene/useScene';

let cube;

onMounted(() => {
  init();
  addCube();
  pcdLoader();

  // // Apifox 生成 mock 数据
  // var myHeaders = new Headers();
  // myHeaders.append("User-Agent", "apifox/1.0.0 (https://www.apifox.cn)");
  //
  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow"
  // };
  //
  // fetch("http://127.0.0.1:4523/m1/1629773-0-default/api/getData", requestOptions)
  //   .then(response => response.text())
  //   // .then(result => console.log(result))
  //   .catch(error => console.log("error", error));
});

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
