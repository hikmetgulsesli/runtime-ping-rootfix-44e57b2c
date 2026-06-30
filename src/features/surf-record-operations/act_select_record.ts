import { openEditor } from '../runtime-ping-rootfix/runtime-ping-rootfix.store';

/**
 * Open the record editor for an existing record.
 */
export function actSelectRecord(recordId: string): void {
  openEditor(recordId);
}
