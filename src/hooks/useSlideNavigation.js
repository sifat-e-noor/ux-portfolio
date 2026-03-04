import { useState, useEffect } from 'react';

/**
 * Custom hook for managing slide navigation with session persistence
 * @param {string} storageKey - The sessionStorage key for persisting slide index
 * @param {number} totalSlides - Total number of slides
 * @returns {Object} - { slideIndex, goTo, next }
 */
export function useSlideNavigation(storageKey, totalSlides) {
  const normalize = (n) => {
    if (!Number.isFinite(n) || totalSlides <= 0) return 0;
    // ensure 0 <= result < totalSlides
    return ((n % totalSlides) + totalSlides) % totalSlides;
  };

  const [slideIndex, setSlideIndex] = useState(() => {
    try {
      const stored = sessionStorage.getItem(storageKey);
      const parsed = stored !== null ? Number(stored) : 0;
      return normalize(parsed);
    } catch (e) {
      return 0;
    }
  });

  function goTo(index) {
    if (totalSlides <= 0) return;
    setSlideIndex(normalize(Math.floor(index)));
  }

  function next() {
    if (totalSlides <= 0) return;
    setSlideIndex((s) => normalize(s + 1));
  }

  // Persist slide index across refreshes in sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(storageKey, String(slideIndex));
    } catch (e) {
      // sessionStorage may not be available in some environments
    }
  }, [slideIndex, storageKey]);

  // If totalSlides changes (e.g., slides added/removed), clamp index
  useEffect(() => {
    setSlideIndex((s) => normalize(s));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSlides]);

  return { slideIndex, goTo, next };
}
