import { closeEditor } from '../runtime-ping-rootfix/runtime-ping-rootfix.store';

/**
 * Discard the current editor session and return to Record Operations.
 */
export function actCancelEdit(): void {
  closeEditor();
}
