// 🧠 REACT CONCEPT: Component composition + props
// Sidebar receives no props — it reads from context via useTasks().
// Notice how we map over an array to render a list (the .map() pattern).

import React from 'react';
import { useTasks } from '../context/TaskContext';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { label: 'All tasks',  filter: 'all',   icon: '◈' },
  { label: 'Today',      filter: 'today', icon: '◎' },
  { label: 'Completed',  filter: 'done',  icon: '◉' },
];

const PRIORITY_COLOR = { high: '#f56565', medium: '#f6ad55', low: '#3ecf8e' };

export default function Sidebar({ onAddTask }) {
  const { state, dispatch, projects, stats } = useTasks();

  function setFilter(filter) {
    dispatch({ type: 'SET_FILTER', filter });
    dispatch({ type: 'SET_PROJECT', project: null });
  }

  function setProject(project) {
    dispatch({ type: 'SET_PROJECT', project: project === 'All' ? null : project });
    dispatch({ type: 'SET_FILTER', filter: 'all' });
  }

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <span className={styles.logoMark}>⬡</span>
        <span className={styles.logoText}>TaskFlow</span>
      </div>

      {/* Stats row */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.pending}</span>
          <span className={styles.statLabel}>pending</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>{stats.done}</span>
          <span className={styles.statLabel}>done</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNum} style={{ color: '#f56565' }}>{stats.highPri}</span>
          <span className={styles.statLabel}>urgent</span>
        </div>
      </div>

      {/* Add task button */}
      <button className={styles.addBtn} onClick={onAddTask}>
        <span>+</span> New task
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      {/* Navigation filters */}
      <nav className={styles.nav}>
        <p className={styles.navLabel}>Views</p>
        {NAV_ITEMS.map(item => (
          <button
            key={item.filter}
            className={`${styles.navItem} ${state.filter === item.filter && !state.activeProject ? styles.active : ''}`}
            onClick={() => setFilter(item.filter)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Projects list */}
      <nav className={styles.nav}>
        <p className={styles.navLabel}>Projects</p>
        {projects.map(project => (
          <button
            key={project}
            className={`${styles.navItem} ${state.activeProject === project || (project === 'All' && !state.activeProject) ? styles.active : ''}`}
            onClick={() => setProject(project)}
          >
            <span
              className={styles.projectDot}
              style={{ background: stringToColor(project) }}
            />
            {project}
          </button>
        ))}
      </nav>
    </aside>
  );
}

// Utility: deterministic color from a string
function stringToColor(str) {
  const colors = ['#7c6aff', '#3ecf8e', '#f6ad55', '#f56565', '#60a5fa', '#f472b6'];
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}
