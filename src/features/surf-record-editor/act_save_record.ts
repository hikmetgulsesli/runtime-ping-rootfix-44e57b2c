import { RuntimePingRecord } from '../../__fixtures__/runtime-ping-rootfix.fixture';
import {
  saveRecord,
  setLastError,
} from '../runtime-ping-rootfix/runtime-ping-rootfix.store';

export interface SaveRecordInput {
  name?: string;
  target?: string;
  priority?: RuntimePingRecord['priority'];
  status?: RuntimePingRecord['status'];
}

function preventDefault(event?: unknown) {
  if (
    event &&
    typeof event === 'object' &&
    'preventDefault' in event &&
    typeof (event as Event).preventDefault === 'function'
  ) {
    (event as Event).preventDefault();
  }
}

function readFormInput(): SaveRecordInput {
  if (typeof document === 'undefined') return {};

  const nameEl = document.getElementById('recordName') as HTMLInputElement | null;
  const targetEl = document.getElementById('endpointUrl') as HTMLInputElement | null;
  const priorityEl = document.querySelector(
    "input[name='priority']:checked",
  ) as HTMLInputElement | null;

  return {
    name: nameEl?.value || undefined,
    target: targetEl?.value || undefined,
    priority: (priorityEl?.value as RuntimePingRecord['priority']) || undefined,
  };
}

function isValidTarget(target?: string): boolean {
  if (!target) return true;
  return /^https?:\/\//.test(target);
}

/**
 * Persist the record editor form.
 * Validates the endpoint URL before delegating to the store so that invalid
 * values surface a recoverable error without mutating persisted state.
 */
export function actSaveRecord(event?: unknown, overrides?: Partial<RuntimePingRecord>): void {
  preventDefault(event);

  const input = overrides ? overrides : readFormInput();

  if (!isValidTarget(input.target)) {
    setLastError('Invalid URL format. Must start with http:// or https://');
    return;
  }

  saveRecord(input);
}
