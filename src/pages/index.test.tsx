import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
// import TodoTaskContainer from '../components/TodoTaskContainer'
import Home from '../pages/index'


test('I can render the app', () => {
  render(<Home />);
})

test('Home page contains TodoTaskContainer component', () => {
  render(<Home />);

  expect(screen.getByTestId('todo-task-container')).toBeInTheDocument();
})
