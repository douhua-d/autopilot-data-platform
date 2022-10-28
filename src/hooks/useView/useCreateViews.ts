import * as THREE from 'three';
import { viewsConfig } from '@/hooks/useView/viewConfig';
import { render } from '@/hooks/useRender/useRender3D';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { mainController } from '@/hooks/useControl/useControl';

let cameraPerspective: THREE.PerspectiveCamera;
let cameraOrthographic: THREE.OrthographicCamera;

const createMainView = (scene, containerRef, renderer) => {
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
    -aspect * 200,
    aspect * 200,
    200,
    -200,
    -200,
    200
  );

  // 当前相机
  currentCamera = cameraPerspective;
  currentCamera.position.z = 50;
  currentCamera.lookAt(0, 0, 0);

  mainView.currentCamera = currentCamera;

  mainView.cameraPerspective = cameraPerspective;
  mainView.cameraOrthographic = cameraOrthographic;

  mainView.viewport = {
    left: window.innerWidth * mainView.left,
    bottom: window.innerHeight - window.innerHeight * mainView.bottom,
    width: window.innerWidth * mainView.width,
    height: window.innerHeight * mainView.height,
    zoom_ratio: mainView.zoom_ratio
  };

  const orbit = new OrbitControls(currentCamera, containerRef);
  orbit.update();
  orbit.addEventListener('change', render);
  mainView.orbit = orbit;

  // const control = new TransformControls(currentCamera, renderer.domElement);
  // control.setSpace("local");
  // control.addEventListener("change", render);
  //
  // control.attach(scene.children[2]);
  // scene.add(control);
  // mainView.control = control;
  //
  // control.addEventListener("dragging-changed", function(event) {
  //   console.log("dragging-changed", event);
  //   orbit.enabled = !event.value;
  // });
};

function createViews(scene, containerRef, renderer) {
  createMainView(scene, containerRef, renderer);
}

function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  cameraPerspective.aspect = aspect;
  cameraPerspective.updateProjectionMatrix();

  cameraOrthographic.left = cameraOrthographic.bottom * aspect;
  cameraOrthographic.right = cameraOrthographic.top * aspect;
  cameraOrthographic.updateProjectionMatrix();

  mainController.renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

export { onWindowResize, createMainView, createViews };
