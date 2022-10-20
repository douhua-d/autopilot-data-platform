import { viewsConfig } from '@/hooks/useView/viewConfig';
import { mainController } from '@/hooks/useControl/useControl';
import { sceneCache } from '@/hooks/useControl/useMainController';
import { debounce } from 'lodash';

const renderDefaultView = debounce(renderDefaultViewNoDebounce, 0, { maxWait: 20 });

function renderDefaultViewNoDebounce() {
  const mainView = viewsConfig[0];
  mainController.renderer.render(sceneCache.currentScene, mainView.currentCamera);
}

function render() {
  renderDefaultViewNoDebounce();
}

export { renderDefaultView, render };
