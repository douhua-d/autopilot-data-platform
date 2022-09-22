import * as THREE from 'three';

const viewsConfig: any[] = [
  {
    left: 0,
    bottom: 0,
    width: 1.0,
    height: 1.0,
    background: new THREE.Color(0.0, 0.0, 0.0),
    zoom_ratio: 1.0 //useless for mainview
  },
  {
    left: 0.8,
    bottom: 0.7,
    width: 0.2,
    height: 0.3,
    background: new THREE.Color(0.1, 0.1, 0.2),
    zoom_ratio: 1.0
  },
  {
    left: 0.8,
    bottom: 0.5,
    width: 0.2,
    height: 0.2,
    background: new THREE.Color(0.1, 0.2, 0.1),
    zoom_ratio: 1.0
  },
  {
    left: 0.8,
    bottom: 0.3,
    width: 0.2,
    height: 0.2,
    background: new THREE.Color(0.2, 0.1, 0.1),
    zoom_ratio: 1.0
  }
];

export { viewsConfig };
