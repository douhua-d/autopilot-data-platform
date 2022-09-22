import { initScene, render, scene } from '@/hooks/useScene/useScene';
import { pcdLoader } from '@/hooks/usePCD/usePCD';
import { Object3D } from 'three';
import { createMainView, onWindowResize } from '@/hooks/useView/createMainView';

// 初始化
export const init = () => {
  initScene();
  createMainView();
  loadPCD();
  window.addEventListener('resize', onWindowResize, false);
};

// 加载pcd
const loadPCD = () => {
  pcdLoader('/mock/data/pcd/car01.pcd')
    .then(res => {
      // console.log(res);
      scene.add(res as Object3D);
      render();
    })
    .catch(err => {
      console.log(err);
    });
};
