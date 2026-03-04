import { useEffect } from 'react';

/**
 * Custom hook to manage compact header state based on IntersectionObserver
 * Observes when a sentinel element leaves the viewport and toggles a 'compact' class
 * @param {string} headerSelector - CSS selector for the header element
 * @param {string} sentinelSelector - CSS selector for the sentinel element
 * @param {string} storageKey - sessionStorage key for persisting compact state
 * @param {Object} observerOptions - IntersectionObserver options
 */
export function useCompactHeader(
  headerSelector = '.case-header',
  sentinelSelector = '.header-sentinel',
  storageKey = 'caseHeaderCompact',
  observerOptions = {
    rootMargin: '0px 0px 100px 0px',
    threshold: 0.1,
  }
) {
  useEffect(() => {
    const header = document.querySelector(headerSelector);
    const sentinel = document.querySelector(sentinelSelector);

    if (!header || !sentinel) return;

    // Restore compact state from sessionStorage
    try {
      const stored = sessionStorage.getItem(storageKey);
      if (stored === 'true') header.classList.add('compact');
      if (stored === 'false') header.classList.remove('compact');
    } catch (e) {
      // sessionStorage might be unavailable
    }

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const compact = !entry.isIntersecting;
      header.classList.toggle('compact', compact);

      // Persist state to sessionStorage
      try {
        sessionStorage.setItem(storageKey, compact ? 'true' : 'false');
      } catch (e) {
        // sessionStorage might be unavailable
      }
    }, observerOptions);

    observer.observe(sentinel);

    // Cleanup
    return () => observer.disconnect();
  }, [headerSelector, sentinelSelector, storageKey, observerOptions]);
}
