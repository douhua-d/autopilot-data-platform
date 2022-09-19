import { Scene, WebGLRenderer, PerspectiveCamera, Object3D, Camera } from 'three';

let scene: Object3D;
let camera: Camera;
let renderer: WebGLRenderer;

const init = () => {
  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera);

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container: HTMLElement | null = document.getElementById('container');
  container!.appendChild(renderer.domElement);
};

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

export { scene, camera, render, init };
