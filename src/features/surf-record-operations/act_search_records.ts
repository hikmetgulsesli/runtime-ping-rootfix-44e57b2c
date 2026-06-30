import { setLastError } from '../runtime-ping-rootfix/runtime-ping-rootfix.store';

/**
 * Read the current value from the persistent records search input.
 *
 * The current surface renders the full record list; this action normalizes the
 * query string and clears stale load errors so the input remains wired for
 * downstream filtering or future search-state integration.
 */
export function actSearchRecords(query?: string): string {
  const normalized = (query ?? '').trim().toLowerCase();
  setLastError(null);
  return normalized;
}
