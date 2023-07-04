import { useEffect, useRef } from "react";

const useScrollToBottom = (
  callback: () => void
): React.MutableRefObject<Element | null> => {
  const containerRef = useRef<Element | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };

    const containerElement = containerRef.current;

    if (containerElement) {
      const observer = new IntersectionObserver(handleIntersect, options);
      const lastChild = containerElement.lastElementChild;

      if (lastChild) {
        observer.observe(lastChild);
      }

      return () => {
        if (lastChild) {
          observer.unobserve(lastChild);
        }
      };
    }
  }, [callback]);

  return containerRef;
};

export default useScrollToBottom;
