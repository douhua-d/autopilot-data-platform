import * as THREE from 'three';
import { viewsConfig } from '@/hooks/useView/viewConfig';
import { render, renderer } from '@/hooks/useScene/useScene';

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
