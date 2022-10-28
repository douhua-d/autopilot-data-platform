import { SceneCache } from '@/hooks/useScene/useSceneCache';
import * as THREE from 'three';
import { createViews } from '@/hooks/useView/useCreateViews';
import { usePcdStore } from '@/store';
import { render } from '@/hooks/useRender/useRender3D';
import pcdManager from '@/hooks/usePcd/usePCD'

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
    this.loadMetaData();
  }

  initMetaData(meta) {
    this.meta = meta;
    sceneCache.updateMeta(meta);
  }

  initFirstScene() {
    let firstScene;
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
    createViews(scene, this.containerRef.value, this.renderer);
  }

  getCurFrame() {
    return sceneCache.currentFrameId || '1';
  }

  loadMetaData() {
    this.loadAllPcd();
  }

 async loadAllPcd() {
    const loadOneWorld = (loadedObj, pcdIndex, isAllLoaded) => {
      const pcdStore = usePcdStore();
      pcdStore.addPcdID(loadedObj.frameId);   //  记录已经加载pcd的帧

      if (pcdIndex === 1) {
        // 第一帧pcd加载完毕
        this.loadWorld(sceneCache.meta.taskId, sceneCache.meta.frames[0], () => {
          // hideMask();
          for (let i = 1; i < sceneCache.meta.srcList.length; i++) {
            // 预加载后续scene、world
            sceneCache.preloadScene(sceneCache.meta.taskId, i,
              // () => {
              //   on_world_loaded(sceneCache.meta.taskId, sceneCache.meta.srcList[i].id, i);
              // }
            );
          }
        });
      }
    };

    // showMask();
   const startIndex = 0;
   await pcdManager.startLoadPCD(this.meta.srcList, this.meta.taskId, startIndex, loadOneWorld);
  }

  onLoadWorldFinished(taskId, frameId) {
    if (frameId !== this.getCurFrame()) {
      return;
    }
    render();
  }

  // frameId 第几帧 从1开始
  loadWorld(taskId, frameId, loadedFirstWorldCb) {
    // sceneCache.currentScene.children = sceneCache.currentScene.children.filter(item => item.type !== 'Group');
    const world = sceneCache.worldList[Number(frameId) - 1];
    if (world.active) {
      loadedFirstWorldCb();
      this.onLoadWorldFinished(taskId, frameId);
    }
  }
}

export { MainController, sceneCache };
