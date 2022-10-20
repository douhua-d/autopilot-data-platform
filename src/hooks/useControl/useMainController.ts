import { SceneCache } from '@/hooks/useScene/useSceneCache';
import * as THREE from 'three';
import { createViews } from '@/hooks/useView/useCreateViews';

// 初始化外部对象
const sceneCache = new SceneCache();

class MainController {
  taskId: null;
  meta: null;
  containerRef: null;
  renderer: THREE.WebGLRenderer | null;

  constructor() {
    this.taskId = null;
    this.meta = null;
    this.containerRef = null;
    this.renderer = null;
  }

  init(containerRef, meta) {
    this.containerRef = containerRef;
    this.initMetaData(meta);
    this.initFirstScene();
  }

  initMetaData(meta) {
    this.meta = meta;
    sceneCache.updateMeta(meta);
  }

  initFirstScene() {
    let firstScene = null;
    if (sceneCache.getAllWorld()[0]) {
      firstScene = sceneCache.getAllWorld()[0].scene;
    } else {
      firstScene = sceneCache.preloadScene(this.meta.taskId, 0, () => {
        // 第一帧world 加载完毕后需要触发 render 进行渲染
        // on_world_loaded(this.meta.taskId, "1");
        // render();
      }).scene;
      console.log('firstScene', firstScene);
    }
    // 存入第一个场景的 scene
    sceneCache.updateCurrentIndex(0);

    // 初始化renderer
    this.initRenderer(firstScene);
  }

  initRenderer(scene) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.containerRef.value.appendChild(this.renderer.domElement);
    createViews(scene, this.containerRef.value,this.renderer);
  }
}

export { MainController, sceneCache };
