// 🧠 REACT CONCEPT: useEffect for side effects + cleanup
// This hook listens for keyboard shortcuts globally.
// The cleanup function (returned from useEffect) removes the listener
// when the component unmounts — preventing memory leaks.

import { useEffect } from 'react';

export function useKeyboard(key, callback, modifiers = {}) {
  useEffect(() => {
    function handleKeyDown(e) {
      const matchesKey = e.key === key;
      const matchesMeta = modifiers.meta ? (e.metaKey || e.ctrlKey) : true;
      const matchesShift = modifiers.shift ? e.shiftKey : true;

      if (matchesKey && matchesMeta && matchesShift) {
        e.preventDefault();
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup: remove listener when component unmounts or deps change
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, modifiers.meta, modifiers.shift]);
}
