import { useEffect } from 'react';
import {
  bootstrap,
  closeEditor,
  navigateTo,
  openEditor,
  refreshData,
  saveRecord,
  useRuntimePingStore,
} from './features/runtime-ping-rootfix/runtime-ping-rootfix.store';
import { registerAppApi } from './test/bridge';
import {
  InsightsRuntimePingRootfix,
  PipelineBoardRuntimePingRootfix,
  RecordEditorRuntimePingRootfix,
  RecordOperationsRuntimePingRootfix,
} from './screens';
import type {
  InsightsRuntimePingRootfixActionId,
  PipelineBoardRuntimePingRootfixActionId,
  RecordEditorRuntimePingRootfixActionId,
  RecordOperationsRuntimePingRootfixActionId,
} from './screens';

export default function App() {
  const state = useRuntimePingStore();

  useEffect(() => {
    bootstrap();
    registerAppApi();
  }, []);

  useEffect(() => {
    if (state.activeSurface !== 'record-editor') return;

    const record = state.selectedRecord;
    const nameEl = document.getElementById('recordName') as HTMLInputElement | null;
    const targetEl = document.getElementById('endpointUrl') as HTMLInputElement | null;

    if (nameEl) nameEl.value = record?.name ?? '';
    if (targetEl) targetEl.value = record?.target ?? '';

    if (record?.priority) {
      const priorityEl = document.querySelector(
        `input[name='priority'][value='${record.priority}']`,
      ) as HTMLInputElement | null;
      if (priorityEl) priorityEl.checked = true;
    } else {
      const defaultPriorityEl = document.querySelector(
        "input[name='priority'][value='medium']",
      ) as HTMLInputElement | null;
      if (defaultPriorityEl) defaultPriorityEl.checked = true;
    }
  }, [state.activeSurface, state.selectedRecord]);

  const navActions = {
    'record-operations-1': () => navigateTo('record-operations'),
    'pipeline-board-2': () => navigateTo('pipeline-board'),
    'insights-3': () => navigateTo('insights'),
    'settings-4': () => navigateTo('record-operations'),
    'system-logs-5': () => navigateTo('record-operations'),
  } as const;

  const recordOperationsActions: Partial<
    Record<RecordOperationsRuntimePingRootfixActionId, () => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'notifications-2': () => {},
    'account-circle-3': () => {},
    'create-record-4': () => openEditor(),
    'refresh-data-5': () => refreshData(),
    'status-all-6': () => {},
    'date-last-7-days-7': () => {},
    'chevron-left-8': () => {},
    'chevron-right-9': () => {},
    'edit-10': () => openEditor('rec-001'),
    'edit-11': () => openEditor('rec-002'),
    'edit-12': () => openEditor('rec-003'),
    'edit-13': () => openEditor('rec-004'),
    'close-14': () => closeEditor(),
    'pause-15': () => {},
    'edit-details-16': () => openEditor(state.selectedRecordId ?? 'rec-001'),
  };

  const pipelineBoardActions: Partial<
    Record<PipelineBoardRuntimePingRootfixActionId, () => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'menu-2': () => {},
    'notifications-3': () => {},
    'account-circle-4': () => {},
    'create-record-5': () => openEditor(),
    'filter-6': () => {},
    'sort-7': () => {},
    'more-horiz-8': () => {},
    'edit-9': () => openEditor('rec-001'),
    'more-horiz-10': () => {},
    'edit-11': () => openEditor('rec-002'),
    'more-horiz-12': () => {},
    'edit-13': () => openEditor('rec-003'),
    'more-horiz-14': () => {},
    'edit-15': () => openEditor('rec-004'),
    'more-horiz-16': () => {},
  };

  const insightsActions: Partial<
    Record<InsightsRuntimePingRootfixActionId, () => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'menu-2': () => {},
    'notifications-3': () => {},
    'account-circle-4': () => {},
    'create-record-5': () => openEditor(),
    'filter-6': () => {},
    'export-summary-7': () => {},
    'view-all-8': () => navigateTo('record-operations'),
    'investigate-9': () => openEditor('rec-001'),
    'schedule-now-10': () => {},
  };

  const editorActions: Partial<
    Record<RecordEditorRuntimePingRootfixActionId, (e?: any) => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'cancel-2': () => closeEditor(),
    'save-record-3': (e) => {
      e?.preventDefault?.();
      saveRecord();
    },
    'cancel-4': () => closeEditor(),
    'save-record-5': (e) => {
      e?.preventDefault?.();
      saveRecord();
    },
  };

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      {state.activeSurface === 'record-operations' && (
        <RecordOperationsRuntimePingRootfix actions={recordOperationsActions} />
      )}
      {state.activeSurface === 'pipeline-board' && (
        <PipelineBoardRuntimePingRootfix actions={pipelineBoardActions} />
      )}
      {state.activeSurface === 'insights' && (
        <InsightsRuntimePingRootfix actions={insightsActions} />
      )}
      {state.activeSurface === 'record-editor' && (
        <RecordEditorRuntimePingRootfix actions={editorActions} />
      )}
    </div>
  );
}
