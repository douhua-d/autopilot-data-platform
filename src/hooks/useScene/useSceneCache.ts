import { makeNewWorld } from "@/hooks/useScene/useWorld";
import * as THREE from "three";

export class SceneCache {
  worldList: any[];
  currentScene: null;
  currentWorld: null;
  currentSceneIndex: null;
  currentFrameId: null;
  meta: null;

  constructor() {
    this.worldList = [];
    this.currentScene = null;
    this.currentWorld = null;
    this.currentSceneIndex = null;
    this.currentFrameId = null;
    this.meta = null;
  }

  updateCurrentIndex(index) {
    // currentSceneIndex 下标是从0开始的
    this.currentSceneIndex = index;
    this.currentScene = this.worldList[index].scene;
    this.currentWorld = this.worldList[index];
    this.currentFrameId = this.currentWorld.file_info?.frame_id;
  }

  updateMeta(meta) {
    this.meta = meta;
  }

  getAllWorld() {
    return this.worldList;
  }

  createScene(index) {
    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(1));
    // // 增加roi
    // const roiType = configStore.roiType[index];
    // if (!isFalse(roiType)) {
    //   const roi = configStore.roiConfig.find(r => {
    //     return r.value === roiType
    //   });
    //   if (roi && roi.config.type === 'circle') {
    //     const box = calcCircleROI(roi.config);
    //     scene.add(box);
    //   } else if (roi) {
    //     const box = calcRectangleROI(roi.config);
    //     scene.add(box);
    //   }
    // }

    return scene;
  }

  preloadScene(taskId, index, worldLoadedCallback) {
    // const id = this.meta.srcList[index].id;
    const world = makeNewWorld(taskId, 0, false);

    //  创建scene
    const scene = this.createScene(index);
    world.activate(
      scene,

      // destroy_old_world
      () => {
      },

      // on_finished
      () => {
        worldLoadedCallback && worldLoadedCallback(index);
      }
    );
    this.worldList[index] = world;
    return { scene, world };
  }
}
