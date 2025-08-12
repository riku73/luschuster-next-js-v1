import { useEffect, useCallback } from 'react'

interface UseFocusTrapOptions {
  isActive: boolean
  containerRef: React.RefObject<HTMLElement | null>
  initialFocusRef?: React.RefObject<HTMLElement | null>
  restoreFocusRef?: React.RefObject<HTMLElement | null>
  onEscape?: () => void
}

export function useFocusTrap({
  isActive,
  containerRef,
  initialFocusRef,
  restoreFocusRef,
  onEscape
}: UseFocusTrapOptions) {
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return []
    
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ')
    
    const elements = containerRef.current.querySelectorAll(selector)
    return Array.from(elements) as HTMLElement[]
  }, [containerRef])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isActive) return

    if (event.key === 'Escape' && onEscape) {
      event.preventDefault()
      onEscape()
      return
    }

    if (event.key !== 'Tab') return

    const focusableElements = getFocusableElements()
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      // Shift + Tab - moving backwards
      if (document.activeElement === firstElement || !containerRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        lastElement.focus()
      }
    } else {
      // Tab - moving forwards
      if (document.activeElement === lastElement || !containerRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }, [isActive, getFocusableElements, containerRef, onEscape])

  // Set up focus trap
  useEffect(() => {
    if (!isActive) return

    const previouslyFocusedElement = document.activeElement as HTMLElement

    // Focus initial element or first focusable element
    const initialElement = initialFocusRef?.current
    const focusableElements = getFocusableElements()
    
    if (initialElement && focusableElements.includes(initialElement)) {
      initialElement.focus()
    } else if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    // Add event listener
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      // Remove event listener
      document.removeEventListener('keydown', handleKeyDown)
      
      // Restore focus to previously focused element or restore focus ref
      const restoreElement = restoreFocusRef?.current || previouslyFocusedElement
      if (restoreElement && document.body.contains(restoreElement)) {
        restoreElement.focus()
      }
    }
  }, [isActive, handleKeyDown, getFocusableElements, initialFocusRef, restoreFocusRef])

  return {
    getFocusableElements
  }
}