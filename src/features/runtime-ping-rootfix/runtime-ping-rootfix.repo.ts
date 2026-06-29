import { DEFAULT_ACTIVE_SURFACE, DEFAULT_RECORDS, RuntimePingRecord } from '../../__fixtures__/runtime-ping-rootfix.fixture';

const STORAGE_KEY = 'runtime-ping-rootfix:v1';

export interface PersistedSnapshot {
  activeSurface?: string;
  selectedRecordId?: string | null;
  records?: RuntimePingRecord[];
}

export interface LoadResult {
  snapshot: PersistedSnapshot;
  status: 'loaded' | 'default' | 'corrupted-recovered';
  error: string | null;
}

export interface SaveResult {
  status: 'saved' | 'error';
  error: string | null;
}

export function loadPersistedState(): LoadResult {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        snapshot: {
          activeSurface: DEFAULT_ACTIVE_SURFACE,
          selectedRecordId: null,
          records: DEFAULT_RECORDS,
        },
        status: 'default',
        error: null,
      };
    }
    const parsed = JSON.parse(raw) as PersistedSnapshot;
    return {
      snapshot: {
        activeSurface: parsed.activeSurface ?? DEFAULT_ACTIVE_SURFACE,
        selectedRecordId: parsed.selectedRecordId ?? null,
        records: Array.isArray(parsed.records) && parsed.records.length > 0
          ? parsed.records
          : DEFAULT_RECORDS,
      },
      status: 'loaded',
      error: null,
    };
  } catch (err) {
    return {
      snapshot: {
        activeSurface: DEFAULT_ACTIVE_SURFACE,
        selectedRecordId: null,
        records: DEFAULT_RECORDS,
      },
      status: 'corrupted-recovered',
      error: err instanceof Error ? err.message : 'Corrupted persisted data was reset',
    };
  }
}

export function savePersistedState(snapshot: PersistedSnapshot): SaveResult {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    return { status: 'saved', error: null };
  } catch (err) {
    return {
      status: 'error',
      error: err instanceof Error ? err.message : 'Failed to persist state',
    };
  }
}
