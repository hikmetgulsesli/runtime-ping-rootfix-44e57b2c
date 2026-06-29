import { useCallback, useSyncExternalStore } from 'react';
import {
  AppCounts,
  computeCounts,
  DEFAULT_ACTIVE_SURFACE,
  DEFAULT_RECORDS,
  RuntimePingRecord,
} from '../../__fixtures__/runtime-ping-rootfix.fixture';
import { loadPersistedState, savePersistedState } from './runtime-ping-rootfix.repo';

export type AppSurface =
  | 'record-operations'
  | 'pipeline-board'
  | 'insights'
  | 'record-editor'
  | 'settings'
  | 'system-logs';

export type AppPanel = 'menu' | null;

export interface AppState {
  activeSurface: AppSurface;
  selectedRecordId: string | null;
  selectedRecord: RuntimePingRecord | null;
  records: RuntimePingRecord[];
  counts: AppCounts;
  storageStatus: 'default' | 'loaded' | 'saved' | 'corrupted-recovered' | 'error';
  lastError: string | null;
  activePanel: AppPanel;
  isBootstrapped: boolean;
}

const VALID_SURFACES: AppSurface[] = [
  'record-operations',
  'pipeline-board',
  'insights',
  'record-editor',
  'settings',
  'system-logs',
];

function normalizeSurface(value: unknown): AppSurface {
  if (typeof value === 'string' && (VALID_SURFACES as string[]).includes(value)) {
    return value as AppSurface;
  }
  return DEFAULT_ACTIVE_SURFACE;
}

function createDefaultState(): AppState {
  const records = DEFAULT_RECORDS;
  return {
    activeSurface: DEFAULT_ACTIVE_SURFACE,
    selectedRecordId: null,
    selectedRecord: null,
    records,
    counts: computeCounts(records),
    storageStatus: 'default',
    lastError: null,
    activePanel: null,
    isBootstrapped: false,
  };
}

let state = createDefaultState();
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function setState(partial: Partial<AppState>) {
  state = { ...state, ...partial };
  emit();
}

export function getState(): AppState {
  return state;
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function persist() {
  const { status, error } = savePersistedState({
    activeSurface: state.activeSurface,
    selectedRecordId: state.selectedRecordId,
    records: state.records,
  });
  setState({ storageStatus: status, lastError: error });
}

export function bootstrap() {
  if (state.isBootstrapped) return;

  const { snapshot, status, error } = loadPersistedState();
  const records = snapshot.records ?? DEFAULT_RECORDS;
  const selectedRecordId = snapshot.selectedRecordId ?? null;
  const activeSurface = normalizeSurface(snapshot.activeSurface);
  const selectedRecord = records.find((r) => r.id === selectedRecordId) || null;

  setState({
    records,
    selectedRecord,
    selectedRecordId,
    activeSurface,
    counts: computeCounts(records),
    storageStatus: status,
    lastError: error,
    activePanel: null,
    isBootstrapped: true,
  });
}

export function navigateTo(surface: AppSurface) {
  setState({ activeSurface: surface, activePanel: null });
  persist();
}

export function openEditor(recordId?: string) {
  const selectedRecord = recordId
    ? state.records.find((r) => r.id === recordId) || null
    : null;
  setState({
    activeSurface: 'record-editor',
    selectedRecord,
    selectedRecordId: selectedRecord?.id ?? null,
    activePanel: null,
  });
}

export function closeEditor() {
  setState({ activeSurface: 'record-operations', activePanel: null });
  persist();
}

export function saveRecord(updates?: Partial<RuntimePingRecord>) {
  const current = state.selectedRecord;
  let records = state.records;

  if (current) {
    records = records.map((r) =>
      r.id === current.id ? { ...r, ...updates, id: r.id } : r,
    );
  } else if (updates) {
    const newRecord: RuntimePingRecord = {
      id: `rec-${Date.now()}`,
      name: updates.name ?? 'New Ping Record',
      target: updates.target ?? '0.0.0.0',
      status: updates.status ?? 'open',
      priority: updates.priority ?? 'medium',
      lastPingAt: new Date().toISOString(),
    };
    records = [...records, newRecord];
  }

  const selectedRecord = current
    ? records.find((r) => r.id === current.id) || null
    : records[records.length - 1] || null;

  setState({
    records,
    selectedRecord,
    selectedRecordId: selectedRecord?.id ?? null,
    counts: computeCounts(records),
    activeSurface: 'record-operations',
    lastError: null,
  });
  persist();
}

export function refreshData() {
  const records = [...DEFAULT_RECORDS];
  setState({
    records,
    selectedRecord: null,
    selectedRecordId: null,
    counts: computeCounts(records),
    lastError: null,
  });
  persist();
}

export function toggleMenuPanel() {
  setState({ activePanel: state.activePanel === 'menu' ? null : 'menu' });
}

export function setLastError(error: string | null) {
  setState({ lastError: error });
}

export function resetAppForTests() {
  state = createDefaultState();
  emit();
}

export function useRuntimePingStore(): AppState {
  const selector = useCallback(() => getState(), []);
  return useSyncExternalStore(subscribe, selector, selector);
}
