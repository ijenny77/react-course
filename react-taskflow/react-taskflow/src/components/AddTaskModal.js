// 🧠 REACT CONCEPT: Controlled form + useEffect for focus + conditional rendering
// This modal demonstrates:
// - Controlled inputs (value + onChange)
// - useEffect to auto-focus an input when modal opens
// - Lifting state up (parent controls isOpen, child calls onClose)
// - Form submission handling with preventDefault

import React, { useState, useEffect, useRef } from 'react';
import { useTasks } from '../context/TaskContext';
import styles from './AddTaskModal.module.css';

const PROJECTS = ['Work', 'Personal', 'Learning', 'Health', 'Finance'];
const PRIORITIES = ['high', 'medium', 'low'];

export default function AddTaskModal({ isOpen, onClose }) {
  const { dispatch } = useTasks();

  // Controlled form state — each field lives in React state
  const [title, setTitle]       = useState('');
  const [priority, setPriority] = useState('medium');
  const [project, setProject]   = useState('Personal');

  // useRef gives us a direct reference to the DOM input element
  const inputRef = useRef(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setPriority('medium');
      setProject('Personal');
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    if (!title.trim()) return;

    dispatch({
      type: 'ADD_TASK',
      title: title.trim(),
      priority,
      project,
    });

    onClose();
  }

  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    // Backdrop — clicking outside closes the modal
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()} // prevent backdrop click from firing
      >
        <h2 className={styles.heading}>New task</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Controlled text input */}
          <input
            ref={inputRef}
            className={styles.input}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="What needs to be done?"
          />

          <div className={styles.row}>
            {/* Priority selector */}
            <div className={styles.field}>
              <label className={styles.label}>Priority</label>
              <div className={styles.pills}>
                {PRIORITIES.map(p => (
                  <button
                    key={p}
                    type="button"
                    className={`${styles.pill} ${priority === p ? styles.pillActive : ''}`}
                    data-pri={p}
                    onClick={() => setPriority(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Project selector */}
            <div className={styles.field}>
              <label className={styles.label}>Project</label>
              <select
                className={styles.select}
                value={project}
                onChange={e => setProject(e.target.value)}
              >
                {PROJECTS.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancel} onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submit}
              disabled={!title.trim()}
            >
              Add task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
