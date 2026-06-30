import { useEffect } from 'react';
import {
  bootstrap,
  getState,
  navigateTo,
  useRuntimePingStore,
} from './features/runtime-ping-rootfix/runtime-ping-rootfix.store';
import { actCancelEdit } from './features/surf-record-editor/act_cancel_edit';
import { actSaveRecord } from './features/surf-record-editor/act_save_record';
import { actCreateRecord } from './features/surf-record-operations/act_create_record';
import { actRetryLoad } from './features/surf-record-operations/act_retry_load';
import { actSelectRecord } from './features/surf-record-operations/act_select_record';
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
    'settings-4': () => navigateTo('settings'),
    'system-logs-5': () => navigateTo('system-logs'),
  } as const;

  const recordOperationsActions: Partial<
    Record<RecordOperationsRuntimePingRootfixActionId, () => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'notifications-2': () => {},
    'account-circle-3': () => {},
    'create-record-4': () => actCreateRecord(),
    'refresh-data-5': () => actRetryLoad(),
    'status-all-6': () => {},
    'date-last-7-days-7': () => {},
    'chevron-left-8': () => {},
    'chevron-right-9': () => {},
    'edit-10': () => actSelectRecord(getState().records[0]?.id),
    'edit-11': () => actSelectRecord(getState().records[1]?.id),
    'edit-12': () => actSelectRecord(getState().records[2]?.id),
    'edit-13': () => actSelectRecord(getState().records[3]?.id),
    'close-14': () => actCancelEdit(),
    'pause-15': () => {},
    'edit-details-16': () =>
      actSelectRecord(state.selectedRecordId ?? getState().records[0]?.id),
  };

  const pipelineBoardActions: Partial<
    Record<PipelineBoardRuntimePingRootfixActionId, () => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'menu-2': () => {},
    'notifications-3': () => {},
    'account-circle-4': () => {},
    'create-record-5': () => actCreateRecord(),
    'filter-6': () => {},
    'sort-7': () => {},
    'more-horiz-8': () => {},
    'edit-9': () => actSelectRecord('rec-001'),
    'more-horiz-10': () => {},
    'edit-11': () => actSelectRecord('rec-002'),
    'more-horiz-12': () => {},
    'edit-13': () => actSelectRecord('rec-003'),
    'more-horiz-14': () => {},
    'edit-15': () => actSelectRecord('rec-004'),
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
    'create-record-5': () => actCreateRecord(),
    'filter-6': () => {},
    'export-summary-7': () => {},
    'view-all-8': () => navigateTo('record-operations'),
    'investigate-9': () => actSelectRecord('rec-001'),
    'schedule-now-10': () => {},
  };

  const editorActions: Partial<
    Record<RecordEditorRuntimePingRootfixActionId, (e?: any) => void>
  > = {
    ...navActions,
    'support-docs-1': () => {},
    'cancel-2': () => actCancelEdit(),
    'save-record-3': (e) => actSaveRecord(e),
    'cancel-4': () => actCancelEdit(),
    'save-record-5': (e) => actSaveRecord(e),
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
      {(state.activeSurface === 'settings' || state.activeSurface === 'system-logs') && (
        <section className="p-lg">
          <h1 className="font-headline-sm text-on-surface">
            {state.activeSurface === 'settings' ? 'Settings' : 'System Logs'}
          </h1>
          <p className="text-on-surface-variant mt-md">Placeholder for {state.activeSurface}.</p>
          <button
            type="button"
            className="mt-md rounded bg-primary px-md py-sm text-on-primary"
            onClick={() => navigateTo('record-operations')}
          >
            Back to Record Operations
          </button>
        </section>
      )}
    </div>
  );
}
