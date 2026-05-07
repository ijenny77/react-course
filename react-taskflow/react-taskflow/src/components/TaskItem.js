// 🧠 REACT CONCEPT: Event handlers + props + derived state
// TaskItem receives a `task` object as a prop (read-only data from parent).
// It dispatches actions to the global context to mutate state.
// useState manages local UI state (hover) that doesn't need to be global.

import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import styles from './TaskItem.module.css';

const PRIORITY_CONFIG = {
  high:   { label: 'High',   color: '#f56565', bg: 'rgba(245,101,101,0.1)' },
  medium: { label: 'Medium', color: '#f6ad55', bg: 'rgba(246,173,85,0.1)' },
  low:    { label: 'Low',    color: '#3ecf8e', bg: 'rgba(62,207,142,0.1)' },
};

export default function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [hovered, setHovered] = useState(false);

  const pri = PRIORITY_CONFIG[task.priority];
  const age = timeAgo(task.created);

  function handleToggle() {
    dispatch({ type: 'TOGGLE_TASK', id: task.id });
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_TASK', id: task.id });
  }

  return (
    <li
      className={`${styles.item} ${task.done ? styles.done : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Custom checkbox */}
      <button
        className={`${styles.check} ${task.done ? styles.checkDone : ''}`}
        onClick={handleToggle}
        aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}
      >
        {task.done && <span className={styles.checkmark}>✓</span>}
      </button>

      {/* Task body */}
      <div className={styles.body}>
        <span className={styles.taskTitle}>{task.title}</span>
        <div className={styles.meta}>
          <span
            className={styles.priority}
            style={{ color: pri.color, background: pri.bg }}
          >
            {pri.label}
          </span>
          <span className={styles.project}>{task.project}</span>
          <span className={styles.age}>{age}</span>
        </div>
      </div>

      {/* Delete button — only visible on hover */}
      {hovered && (
        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
          aria-label="Delete task"
        >
          ×
        </button>
      )}
    </li>
  );
}

// Utility function: human-readable relative time
function timeAgo(timestamp) {
  const diff = Date.now() - timestamp;
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);

  if (mins < 1)   return 'just now';
  if (mins < 60)  return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
