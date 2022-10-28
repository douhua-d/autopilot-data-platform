import { pcdLoader } from '@/hooks/usePcd/usePCD';
import { Object3D } from 'three';
import { render } from '@/hooks/useRender/useRender3D';

class World {
  active: boolean;
  points: null;
  boxes: null;
  lines: null;
  create_time: number;
  task_meta: any;
  task_id: any;
  frame_id: any;
  frame_index: any;
  frame_info: any;
  on_preload_finished: null;
  scene: null;
  destroy_old_world: null;
  on_finished: null;

  constructor(task_id, frame_id, task_meta) {
    this.active = false;
    this.points = null;
    this.boxes = null;
    this.lines = null;
    this.create_time = 0;
    this.on_preload_finished = null;
    this.scene = null;
    this.destroy_old_world = null;
    this.on_finished = null;

    this.task_meta = task_meta;
    this.task_id = task_id;
    this.frame_id = frame_id;
    // this.frame_index = task_meta.srcList.findIndex(f => f.id === frame_id);
    // this.frame_info = task_meta.srcList[this.frame_index];
  }

  preload(isFirstFrame) {
    this.create_time = new Date().getTime();
    // this.on_preload_finished = on_preload_finished;
    // this.load_annotation();
    this.load_points();

    // let _self = this;
    // this.images.load(function (images_loaded_frames, frame_id) {
    //   _self.on_image_loaded(images_loaded_frames, frame_id);
    // }, selectedStore.activeCamera);
    //
    // EventBus.$emit("WorldInited", this.frame_id, this.boxes)
  }

  load_points() {
    console.log("load_points");
    pcdLoader('/mock/data/pcd/1.pcd')
      .then((res: any) => {
        res.material.size = 1;
        res.material.sizeAttenuation = false;
        console.log('pcd points----', res);
        this.scene.add(res as Object3D);
        render();
      })
      .catch(err => {
        console.log(err);
      });
  }

  activate(scene, destroy_old_world, on_finished) {
    this.scene = scene;
    this.active = true;
    this.destroy_old_world = destroy_old_world;
    this.on_finished = on_finished;
    // if (this.preload_finished()) {
    //   this.go();
    // }
  }
}

function makeNewWorld(task_id, frame_id, isFirstFrame) {
  const world = new World(task_id, frame_id, '');

  world.preload(isFirstFrame);

  return world;
}

export { makeNewWorld };
