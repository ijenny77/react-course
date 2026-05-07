// 🧠 REACT CONCEPT: Context + useReducer
// This file shows how to manage global state without any external library.
// useContext lets ANY component access tasks without "prop drilling".
// useReducer handles complex state logic with clear action types.

import React, { createContext, useContext, useReducer } from 'react';

// 1. Create the context
const TaskContext = createContext(null);

// 2. Define initial data
const initialState = {
  tasks: [
    { id: 1, title: 'Set up React project', done: true,  priority: 'high',   project: 'Work',     created: Date.now() - 86400000 * 3 },
    { id: 2, title: 'Learn useState hook', done: true,   priority: 'high',   project: 'Learning', created: Date.now() - 86400000 * 2 },
    { id: 3, title: 'Build a todo app',    done: false,  priority: 'medium', project: 'Learning', created: Date.now() - 86400000 },
    { id: 4, title: 'Understand useEffect', done: false, priority: 'high',   project: 'Learning', created: Date.now() - 3600000 * 5 },
    { id: 5, title: 'Read React docs',     done: false,  priority: 'low',    project: 'Learning', created: Date.now() - 3600000 * 2 },
    { id: 6, title: 'Ship Q3 report',      done: false,  priority: 'high',   project: 'Work',     created: Date.now() - 3600000 },
    { id: 7, title: 'Buy groceries',       done: false,  priority: 'low',    project: 'Personal', created: Date.now() - 1800000 },
    { id: 8, title: 'Schedule dentist',    done: false,  priority: 'medium', project: 'Personal', created: Date.now() - 900000 },
  ],
  filter: 'all',     // 'all' | 'today' | 'done'
  activeProject: null, // null = all projects
};

// 3. Reducer — pure function handling state changes
function taskReducer(state, action) {
  switch (action.type) {

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.title,
            done: false,
            priority: action.priority || 'medium',
            project: action.project || 'Personal',
            created: Date.now(),
          },
        ],
      };

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.id ? { ...t, done: !t.done } : t
        ),
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.id),
      };

    case 'SET_FILTER':
      return { ...state, filter: action.filter };

    case 'SET_PROJECT':
      return { ...state, activeProject: action.project };

    default:
      return state;
  }
}

// 4. Provider component — wraps the app and shares state
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Derived data: projects list from tasks
  const projects = ['All', ...new Set(state.tasks.map(t => t.project))];

  // Filtered tasks based on current filter + project
  const visibleTasks = state.tasks.filter(task => {
    const matchesProject = !state.activeProject || task.project === state.activeProject;
    const matchesFilter =
      state.filter === 'all'   ? !task.done :
      state.filter === 'done'  ? task.done :
      state.filter === 'today' ? !task.done : true;
    return matchesProject && matchesFilter;
  });

  const stats = {
    total:     state.tasks.length,
    done:      state.tasks.filter(t => t.done).length,
    pending:   state.tasks.filter(t => !t.done).length,
    highPri:   state.tasks.filter(t => t.priority === 'high' && !t.done).length,
  };

  return (
    <TaskContext.Provider value={{ state, dispatch, projects, visibleTasks, stats }}>
      {children}
    </TaskContext.Provider>
  );
}

// 5. Custom hook — clean API for components to consume context
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used inside <TaskProvider>');
  return context;
}
