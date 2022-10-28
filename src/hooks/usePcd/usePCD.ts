import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';

export const pcdLoader = (url: string) => {
  return new Promise((resolve, reject) => {
    const loader = new PCDLoader();
    loader.load(
      url,
      points => {
        resolve(points);
      },

      xhr => {
        const percent = ((xhr.loaded / xhr.total) * 100).toFixed(2);
        console.log('pcd load percent', `${percent}%`);
      },

      error => {
        console.log('load pcd error', error);
        reject(error);
      }
    );
  });
};

class PCDManager {
  taskID: null;
  actionTime: null;
  pcdList: never[];
  stopLoad: {};
  constructor() {
    this.taskID = null;
    this.actionTime = null;
    this.pcdList = []; // 要加载的pcd list
    this.stopLoad = {}; // 记录要停止加载的ID
  }

  pcdLoader(url: string) {
    return new Promise((resolve, reject) => {
      const loader = new PCDLoader();
      loader.load(
        url,
        points => {
          resolve(points);
        },

        xhr => {
          const percent = ((xhr.loaded / xhr.total) * 100).toFixed(2);
          console.log('pcd load percent', `${percent}%`);
        },

        error => {
          console.log('load pcd error', error);
          reject(error);
        }
      );
    });
  }

  startLoadPCD(srcList, taskID, startIndex = 0, loadOneWorld) {
    this.taskID = taskID;
    this.pcdList = srcList;
    this.actionTime = new Date().getTime(); // 每次开始调用加载，设置一个flag记录启动时间

    const loadList = srcList.slice(startIndex);
    const flag = this.actionTime;

    for (const [index, item] of loadList.entries()) {
      if (flag !== this.actionTime || this.stopLoad[taskID]) {
        // 有新的加载任务，则跳出当前加载循环
        // 或者需要停止加载了 this.stopLoad = true
        return;
      }

      const frameIndex = index + startIndex; // 记录当前加载的是第几帧的pcd
      const frameId = String(taskID) + String(item.id); // string
      const isLastFrame = frameIndex === loadList.length - 1;

      // 不在本地indexDB的情况下，需要请求加载
      const loadRes = this.pcdLoader(item.pcd.url).then(points => {
        return points;
      }).catch(err => {
        return err;
      });

      console.log("loadRes",loadRes);

      const loadedObj = {
        taskID,
        frameId
      };

      loadOneWorld && loadOneWorld(loadedObj, frameIndex, isLastFrame);
    }
  }

  /**
   * 根据taskID停止加载pcd
   * @param {string} taskID
   */
  stopLoad(taskID) {
    this.stopLoad[taskID] = true;
  }
}

let pcdManagerInstance: PCDManager;
const pcdManager = () => {
  if (pcdManagerInstance) {
    return pcdManagerInstance;
  }
  return (pcdManagerInstance = new PCDManager());
};

export default pcdManager();
