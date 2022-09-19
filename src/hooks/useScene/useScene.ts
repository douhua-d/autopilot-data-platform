import { Scene, WebGLRenderer, PerspectiveCamera, Object3D } from 'three';

let scene: Object3D;
let camera: Object3D;
let renderer;

const init = () => {
  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera);

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.getElementById('container');
  container.appendChild(renderer.domElement);
};

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

export { scene, camera, render, init };
