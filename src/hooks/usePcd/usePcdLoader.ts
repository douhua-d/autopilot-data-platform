import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';
import { scene } from '@/hooks/useScene/useScene';

const loader = new PCDLoader();
export const pcdLoader = (url = '../../../mock/data/pcd/0000000000.pcd') => {
  console.log('开始 进行pcdLoader ');
  loader.load(url, function (points) {
    points.geometry.center();
    points.geometry.rotateX(Math.PI);
    points.name = 'Zaghetto.pcd';
    scene.add(points);
  });
};
