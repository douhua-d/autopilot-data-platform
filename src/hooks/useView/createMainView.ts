import * as THREE from 'three';
import { viewsConfig } from '@/hooks/useView/viewConfig';
import { render, renderer, scene } from '@/hooks/useScene/useScene';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

let cameraPerspective: THREE.PerspectiveCamera;
let cameraOrthographic: THREE.OrthographicCamera;

export const createMainView = () => {
  const mainView = viewsConfig[0];
  let currentCamera;

  const aspect = window.innerWidth / window.innerHeight;

  // 透视相机
  cameraPerspective = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    1,
    800
  );

  // 正交相机
  cameraOrthographic = new THREE.OrthographicCamera(
    -aspect * 100,
    aspect * 100,
    100,
    -100,
    -200,
    200
  );

  // 当前相机
  currentCamera = cameraPerspective;
  currentCamera.position.z = 50;
  currentCamera.lookAt(0, 0, 0);

  mainView.currentCamera = currentCamera;

  mainView.cameraPerspective = cameraPerspective;
  mainView.viewport = {
    left: window.innerWidth * mainView.left,
    bottom: window.innerHeight - window.innerHeight * mainView.bottom,
    width: window.innerWidth * mainView.width,
    height: window.innerHeight * mainView.height,
    zoom_ratio: mainView.zoom_ratio
  };

  const orbit = new OrbitControls(currentCamera, renderer.domElement);
  orbit.update();
  orbit.addEventListener('change', render);
  // orbit.enabled = false;
  // mainView.orbitPerspective = orbitPerspective;

  const control = new TransformControls(currentCamera, renderer.domElement);
  control.setSpace('local');
  control.addEventListener('change', render);

  console.log('scene', scene);
  console.log('control', control);

  control.attach(scene.children[2]);
  scene.add(control);
  mainView.control = control;

  control.addEventListener('dragging-changed', function (event) {
    console.log('dragging-changed', event);
    orbit.enabled = !event.value;
  });

  console.log('currentCamera', currentCamera);
};

export function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  cameraPerspective.aspect = aspect;
  cameraPerspective.updateProjectionMatrix();

  cameraOrthographic.left = -aspect * 200;
  cameraOrthographic.right = aspect * 200;
  cameraOrthographic.top = 200;
  cameraOrthographic.bottom = 200;
  cameraOrthographic.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}
