// 🧠 REACT CONCEPT: Root component + lifting state up
// App is the root. It owns the modal's open/close state because
// BOTH the Sidebar (button) and AddTaskModal (onClose) need it.
// This is "lifting state up" — the common ancestor owns shared state.

import React, { useState, useCallback } from 'react';
import { TaskProvider } from './context/TaskContext';
import { useKeyboard } from './hooks/useKeyboard';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import styles from './App.module.css';

// Inner component — can use useKeyboard (which uses useEffect)
function AppInner() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal  = useCallback(() => setModalOpen(true),  []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  // Register ⌘K / Ctrl+K shortcut using our custom hook
  useKeyboard('k', openModal, { meta: true });

  return (
    <div className={styles.layout}>
      <Sidebar onAddTask={openModal} />
      <TaskList />
      <AddTaskModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

// Root component wraps everything in the TaskProvider (context)
export default function App() {
  return (
    <TaskProvider>
      <AppInner />
    </TaskProvider>
  );
}
