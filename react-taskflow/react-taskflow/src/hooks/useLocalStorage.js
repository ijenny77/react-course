// 🧠 REACT CONCEPT: Custom Hook
// A custom hook is just a function that starts with "use" and can call other hooks.
// This one syncs state with localStorage so data persists on page refresh.

import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Lazy initializer: reads from localStorage once on mount
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Sync to localStorage whenever value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage might be full or unavailable — fail silently
    }
  }, [key, value]);

  return [value, setValue];
}
