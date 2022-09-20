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
      },
    );
  });
};
