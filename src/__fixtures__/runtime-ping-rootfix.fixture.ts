export interface RuntimePingRecord {
  id: string;
  name: string;
  target: string;
  status: 'open' | 'paused' | 'closed';
  priority: 'low' | 'medium' | 'high';
  lastPingAt: string;
}

export const DEFAULT_RECORDS: RuntimePingRecord[] = [
  {
    id: 'rec-001',
    name: 'Prod-DB-Ping',
    target: '10.0.1.10',
    status: 'open',
    priority: 'high',
    lastPingAt: '2026-06-29T10:00:00.000Z',
  },
  {
    id: 'rec-002',
    name: 'Auth-Service-Ping',
    target: 'auth.internal',
    status: 'open',
    priority: 'medium',
    lastPingAt: '2026-06-29T09:30:00.000Z',
  },
  {
    id: 'rec-003',
    name: 'CDN-Edge-Ping',
    target: 'cdn.example.com',
    status: 'paused',
    priority: 'low',
    lastPingAt: '2026-06-28T18:15:00.000Z',
  },
  {
    id: 'rec-004',
    name: 'Queue-Worker-Ping',
    target: 'queue.internal',
    status: 'open',
    priority: 'medium',
    lastPingAt: '2026-06-29T08:45:00.000Z',
  },
  {
    id: 'rec-005',
    name: 'Legacy-API-Ping',
    target: 'legacy.internal',
    status: 'closed',
    priority: 'low',
    lastPingAt: '2026-06-27T14:20:00.000Z',
  },
];

export interface AppCounts {
  recordsTotal: number;
  recordsOpen: number;
  recordsPaused: number;
  recordsClosed: number;
  pipelineTotal: number;
  alerts: number;
}

export function computeCounts(records: RuntimePingRecord[]): AppCounts {
  const recordsTotal = records.length;
  const recordsOpen = records.filter((r) => r.status === 'open').length;
  const recordsPaused = records.filter((r) => r.status === 'paused').length;
  const recordsClosed = records.filter((r) => r.status === 'closed').length;
  const pipelineTotal = records.filter((r) => r.status !== 'closed').length;
  const alerts = recordsOpen >= 3 ? 2 : recordsOpen >= 1 ? 1 : 0;
  return { recordsTotal, recordsOpen, recordsPaused, recordsClosed, pipelineTotal, alerts };
}

export const DEFAULT_COUNTS: AppCounts = computeCounts(DEFAULT_RECORDS);

export const DEFAULT_ACTIVE_SURFACE = 'record-operations';
