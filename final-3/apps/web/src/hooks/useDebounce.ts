import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [delayedValue, setDelayedValue] = useState<T>();

  useEffect(() => {
    const t = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);
  return delayedValue;
}
