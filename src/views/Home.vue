<template>
  <div id="container" ref="containerRef"></div>
</template>

<script lang="ts" setup>
import {
  Scene,
  Mesh,
  BoxGeometry,
  WebGLRenderer,
  PerspectiveCamera,
  MeshBasicMaterial,
} from 'three';
import { ref, onMounted } from 'vue';

const containerRef = ref();

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement);

  // // Apifox 生成 mock 数据
  // var myHeaders = new Headers();
  // myHeaders.append('User-Agent', 'apifox/1.0.0 (https://www.apifox.cn)');
  //
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // };
  //
  // fetch('http://127.0.0.1:4523/m1/1629773-0-default/api/getData', requestOptions)
  //   .then(response => response.text())
  //   // .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
});

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
</script>

<style lang="less" scoped></style>
