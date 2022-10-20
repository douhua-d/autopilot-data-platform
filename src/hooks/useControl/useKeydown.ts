import { viewsConfig } from '@/hooks/useView/viewConfig';
import { onWindowResize } from '@/hooks/useView/useCreateViews';

export function keydown(event: { key: any }) {
  switch (event.key) {
    case 'c':
      const mainView = viewsConfig[0];
      const position = mainView.currentCamera.position.clone();

      mainView.currentCamera = mainView.currentCamera.isPerspectiveCamera
        ? mainView.cameraOrthographic
        : mainView.cameraPerspective;
      mainView.currentCamera.position.copy(position);

      mainView.orbit.object = mainView.currentCamera;
      mainView.control.camera = mainView.currentCamera;

      mainView.currentCamera.lookAt(
        mainView.orbit.target.x,
        mainView.orbit.target.y,
        mainView.orbit.target.z
      );
      onWindowResize();
      console.log(mainView.currentCamera);
      break;
  }
}
