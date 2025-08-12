import { useEffect, useRef, useCallback } from 'react'

interface UseKeyboardNavigationOptions {
  containerRef: React.RefObject<HTMLElement>
  focusableSelector?: string
  loop?: boolean
  onEscape?: () => void
}

export function useKeyboardNavigation({
  containerRef,
  focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  loop = true,
  onEscape
}: UseKeyboardNavigationOptions) {
  const currentFocusIndex = useRef(0)

  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return []
    
    const elements = containerRef.current.querySelectorAll(focusableSelector)
    return Array.from(elements) as HTMLElement[]
  }, [containerRef, focusableSelector])

  const focusElement = useCallback((index: number) => {
    const elements = getFocusableElements()
    if (elements.length === 0) return

    if (loop) {
      // Loop around if at boundaries
      if (index < 0) index = elements.length - 1
      if (index >= elements.length) index = 0
    } else {
      // Clamp to boundaries
      index = Math.max(0, Math.min(index, elements.length - 1))
    }

    currentFocusIndex.current = index
    elements[index]?.focus()
  }, [getFocusableElements, loop])

  const focusFirst = useCallback(() => {
    focusElement(0)
  }, [focusElement])

  const focusLast = useCallback(() => {
    const elements = getFocusableElements()
    focusElement(elements.length - 1)
  }, [focusElement, getFocusableElements])

  const focusNext = useCallback(() => {
    focusElement(currentFocusIndex.current + 1)
  }, [focusElement])

  const focusPrevious = useCallback(() => {
    focusElement(currentFocusIndex.current - 1)
  }, [focusElement])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        focusNext()
        break
      case 'Tab':
        if (event.shiftKey) {
          event.preventDefault()
          focusPrevious()
        } else {
          event.preventDefault()
          focusNext()
        }
        break
      case 'ArrowUp':
        event.preventDefault()
        focusPrevious()
        break
      case 'Home':
        event.preventDefault()
        focusFirst()
        break
      case 'End':
        event.preventDefault()
        focusLast()
        break
      case 'Escape':
        if (onEscape) {
          event.preventDefault()
          onEscape()
        }
        break
    }
  }, [focusNext, focusPrevious, focusFirst, focusLast, onEscape])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('keydown', handleKeyDown)
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [containerRef, handleKeyDown])

  // Update current focus index when focus changes
  useEffect(() => {
    const updateFocusIndex = () => {
      const elements = getFocusableElements()
      const activeElement = document.activeElement as HTMLElement
      const index = elements.indexOf(activeElement)
      if (index !== -1) {
        currentFocusIndex.current = index
      }
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener('focusin', updateFocusIndex)
    
    return () => {
      container.removeEventListener('focusin', updateFocusIndex)
    }
  }, [containerRef, getFocusableElements])

  return {
    focusFirst,
    focusLast,
    focusNext,
    focusPrevious,
    focusElement,
    getFocusableElements
  }
}