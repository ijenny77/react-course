# TaskFlow — React Learning Project

A real, production-style task manager built to teach React from the inside out.
Every file has comments explaining the React concept it demonstrates.

## 🚀 Get started

```bash
# 1. Clone or download this folder
cd react-taskflow

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Your browser opens at http://localhost:3000. The app hot-reloads whenever you save a file.

---

## 📁 Project structure

```
src/
├── App.js                        ← Root component, lifting state up
├── index.js                      ← Entry point (ReactDOM.render)
├── index.css                     ← Global CSS variables & resets
│
├── context/
│   └── TaskContext.js            ← useContext + useReducer (global state)
│
├── hooks/
│   ├── useLocalStorage.js        ← Custom hook: persists state to localStorage
│   └── useKeyboard.js            ← Custom hook: global keyboard shortcuts
│
└── components/
    ├── Sidebar.js / .module.css  ← Navigation, project list, stats
    ├── TaskList.js / .module.css ← List rendering, conditional rendering
    ├── TaskItem.js / .module.css ← Individual task, hover state, dispatch
    └── AddTaskModal.js / .module.css ← Controlled form, useEffect, useRef
```

---

## 🧠 React concepts in this project

| Concept | Where to find it |
|---|---|
| JSX | Every `.js` file |
| Functional components | Every component |
| Props | `TaskItem.js` receives `task` prop |
| useState | `AddTaskModal.js`, `TaskItem.js`, `App.js` |
| useEffect | `AddTaskModal.js`, `useKeyboard.js`, `useLocalStorage.js` |
| useRef | `AddTaskModal.js` (auto-focus) |
| useContext | `TaskContext.js` + every component via `useTasks()` |
| useReducer | `TaskContext.js` |
| useCallback | `App.js` |
| Custom hooks | `useLocalStorage.js`, `useKeyboard.js` |
| CSS Modules | Every `*.module.css` file |
| Controlled forms | `AddTaskModal.js` |
| List rendering + key | `TaskList.js`, `Sidebar.js` |
| Conditional rendering | `TaskList.js` (empty state), `TaskItem.js` (delete button) |
| Lifting state up | `App.js` owns modal state used by Sidebar + Modal |
| Event handling | `TaskItem.js`, `AddTaskModal.js` |

---

## 🏋️ Exercises to extend the project

**Beginner**
- [ ] Add a "due date" field to tasks
- [ ] Show the number of tasks per project in the sidebar
- [ ] Add a "clear completed" button

**Intermediate**
- [ ] Persist tasks to localStorage using `useLocalStorage`
- [ ] Add drag-and-drop reordering (try `@dnd-kit/core`)
- [ ] Add task editing (click a task title to edit inline)
- [ ] Add a search bar that filters tasks

**Advanced**
- [ ] Split into multiple pages with React Router
- [ ] Add user authentication (mock or real)
- [ ] Fetch tasks from a real API (JSONPlaceholder or Supabase)
- [ ] Add dark/light mode toggle using Context

---

## 📚 Learning resources

- [React official docs](https://react.dev) — best place to start
- [React hooks reference](https://react.dev/reference/react)
- [CSS Modules](https://github.com/css-modules/css-modules)
