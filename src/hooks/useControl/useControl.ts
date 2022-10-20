import { render } from '@/hooks/useRender/useRender3D';
import { pcdLoader } from '@/hooks/usePCD/usePCD';
import { Object3D } from 'three';
import { createViews, onWindowResize } from '@/hooks/useView/useCreateViews';
import { keydown } from '@/hooks/useControl/useKeydown';
import { ComputedRef } from 'vue';
import { MainController } from '@/hooks/useControl/useMainController';

const mainController = new MainController();

// 初始化 入口
const init = (containerRef: any, meta: ComputedRef<void>) => {
  // createViews();
  mainController.init(containerRef, meta);
  // loadPCD();
  // render();
  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('keydown', keydown);
};

// 加载pcd
const loadPCD = () => {
  pcdLoader('/mock/data/pcd/1.pcd')
    .then((res: any) => {
      res.material.size = 1;
      res.material.sizeAttenuation = false;
      console.log('res', res);
      scene.add(res as Object3D);
      render();
    })
    .catch(err => {
      console.log(err);
    });
};

export { init, mainController };
