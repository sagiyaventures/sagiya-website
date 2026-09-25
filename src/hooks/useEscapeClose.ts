import { useEffect, useRef, RefObject } from 'react';

/**
 * Accessibility fix for the modal dialogs (ConsultationModal,
 * ArchitectureModal, TelemetryModal): previously they had no role="dialog",
 * no Escape-to-close, and no initial focus move, so keyboard/screen-reader
 * users had no standard way to know they were in a dialog or to close it
 * without a mouse. This hook adds both:
 *  - Escape key closes the dialog.
 *  - focus moves to the dialog panel when it opens, and the panel is a
 *    focusable landmark (pair with tabIndex={-1} on the element the ref
 *    is attached to).
 */
export function useEscapeClose(isOpen: boolean, onClose: () => void): RefObject<HTMLDivElement> {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    // Move focus into the dialog so screen readers announce it and
    // keyboard users don't stay tabbing through the hidden background page.
    panelRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return panelRef;
}
