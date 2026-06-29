import {
  AppState,
  AppSurface,
  closeEditor,
  getState,
  navigateTo,
  openEditor,
  refreshData,
  resetAppForTests,
  saveRecord,
  subscribe,
} from '../features/runtime-ping-rootfix/runtime-ping-rootfix.store';

export interface AppBridgeApi {
  activeScreen: AppState['activeSurface'];
  route: AppState['activeSurface'];
  selectedRecord: AppState['selectedRecord'];
  counts: AppState['counts'];
  storageStatus: AppState['storageStatus'];
  lastError: AppState['lastError'];
  activePanel: AppState['activePanel'];
  navigate(surface: AppSurface): void;
  openEditor(recordId?: string): void;
  closeEditor(): void;
  saveRecord(updates?: Parameters<typeof saveRecord>[0]): void;
  refreshData(): void;
  reset(): void;
}

declare global {
  interface Window {
    app?: AppBridgeApi;
  }
}

let registered = false;

export function registerAppApi() {
  if (registered || typeof window === 'undefined') return;
  registered = true;

  const api: AppBridgeApi = {
    get activeScreen() {
      return getState().activeSurface;
    },
    get route() {
      return getState().activeSurface;
    },
    get selectedRecord() {
      return getState().selectedRecord;
    },
    get counts() {
      return getState().counts;
    },
    get storageStatus() {
      return getState().storageStatus;
    },
    get lastError() {
      return getState().lastError;
    },
    get activePanel() {
      return getState().activePanel;
    },
    navigate: navigateTo,
    openEditor,
    closeEditor,
    saveRecord,
    refreshData,
    reset: resetAppForTests,
  };

  window.app = api;

  // Keep the reference alive across state updates; getters always read fresh state.
  subscribe(() => {
    // no-op: the api object uses live getters.
  });
}
