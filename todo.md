## Features

- Add a task
  - must have:
    - title
    - details
    - due date
    - Priority (low, medium or high)
- Edit a task
- Remove a task
- See a task
- Mark a task as done
- Add notes

## Component Structure

TodoApp/
├── components/
│ ├── TodoApp.tsx # Main container
│ ├── TaskForm/
│ │ ├── TaskForm.tsx # Add/Edit task form
│ │ └── TaskForm.test.tsx
│ ├── TaskList/
│ │ ├── TaskList.tsx # List of tasks
│ │ └── TaskList.test.tsx
│ ├── TaskItem/
│ │ ├── TaskItem.tsx # Individual task
│ │ └── TaskItem.test.tsx
│ ├── TaskFilters/
│ │ ├── TaskFilters.tsx # Filter controls
│ │ └── TaskFilters.test.tsx
│ └── UI/
│ ├── Button.tsx
│ ├── Input.tsx
│ ├── Select.tsx
│ └── Modal.tsx
├── types/
│ └── task.ts # TypeScript interfaces
└── hooks/
└── useTasks.ts # Custom hook for task management
