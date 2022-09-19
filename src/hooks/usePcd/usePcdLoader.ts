import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { scene } from '@/hooks/useScene/useScene';

const loader = new PCDLoader();
export const pcdLoader = (url = '/mock/data/pcd/0000000000.pcd') => {
  loader.load(
    '/mock/data/pcd/0000000000.pcd',
    points => {
      console.log('111', points);
      // points.geometry.center();
      // points.geometry.rotateX(Math.PI);
      // points.name = 'Zaghetto.pcd';
      scene.add(points);
    },

    xhr => {
      const percent = ((xhr.loaded / xhr.total) * 100).toFixed(2);
      console.log('pcd load percent', `${percent}%`);
    },

    error => {
      console.log('load pcd error', error);
    },
  );
};
