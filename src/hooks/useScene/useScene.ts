import { Scene, WebGLRenderer, PerspectiveCamera, Object3D, Camera, AxesHelper } from 'three';
import { viewsConfig } from '@/hooks/useView/viewConfig';

let scene: Object3D;
let renderer: WebGLRenderer;

const initScene = () => {
  scene = new Scene();
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const container: HTMLElement | null = document.getElementById('container');
  container!.appendChild(renderer.domElement);

  const axesHelper = new AxesHelper(3);
  scene.add(axesHelper);
};

const render = () => {
  // requestAnimationFrame(render);
  const mainView = viewsConfig[0];
  renderer.render(scene, mainView.currentCamera);
};

export { scene, camera, renderer, render, initScene };
