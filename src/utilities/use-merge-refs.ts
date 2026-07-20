import { Ref, RefObject, useCallback } from 'react';

export default function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return useCallback((node: T) => {
    const cleanups: (() => void)[] = [];

    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        const cleanup = ref(node);
        if (typeof cleanup === 'function') cleanups.push(cleanup);
      } else {
        (ref as RefObject<T | null>).current = node;
      }
    });

    if (cleanups.length > 0) {
      return () => {
        for (const cleanup of cleanups) cleanup();
      }
    }
  }, [refs]);
}
