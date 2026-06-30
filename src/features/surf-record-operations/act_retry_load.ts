import {
  refreshData,
  setLastError,
} from '../runtime-ping-rootfix/runtime-ping-rootfix.store';

/**
 * Recover from a failed data load by reloading the canonical record set.
 */
export function actRetryLoad(): void {
  setLastError(null);
  refreshData();
}
