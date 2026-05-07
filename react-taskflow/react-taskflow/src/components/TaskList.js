// 🧠 REACT CONCEPT: Conditional rendering + list rendering
// This component shows different UI based on state (empty, loading, tasks).
// It uses .map() to render a TaskItem for each task.
// The `key` prop is critical — React uses it to track list items efficiently.

import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const FILTER_LABELS = {
  all:   'All Tasks',
  today: 'Today',
  done:  'Completed',
};

export default function TaskList() {
  const { state, visibleTasks } = useTasks();

  const title = state.activeProject
    ? state.activeProject
    : FILTER_LABELS[state.filter] || 'Tasks';

  // Sort: high priority first, then by date
  const sorted = [...visibleTasks].sort((a, b) => {
    const pri = { high: 0, medium: 1, low: 2 };
    if (pri[a.priority] !== pri[b.priority]) return pri[a.priority] - pri[b.priority];
    return b.created - a.created;
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.count}>{visibleTasks.length} task{visibleTasks.length !== 1 ? 's' : ''}</span>
      </header>

      {/* Conditional rendering: show empty state or task list */}
      {sorted.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>◎</span>
          <p>No tasks here.</p>
          <p className={styles.emptyHint}>Add one with the button or ⌘K</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {sorted.map(task => (
            // key is required when rendering lists — helps React with reconciliation
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </main>
  );
}
