import { useState, useEffect, RefObject } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param elementRef Reference to the DOM element to observe
 * @param options IntersectionObserver options
 * @returns boolean indicating if the element is visible
 */
const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  options = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options]);

  return isVisible;
};

export default useIntersectionObserver;