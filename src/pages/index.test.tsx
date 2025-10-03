import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import TodoTaskContainer from '../components/TodoTaskContainer'


// test('renders TodoTaskContainer text', () => {
//   const { getByText } = render(<TodoTaskContainer />);
//   expect(getByText('TodoTaskContainer')).toBeInTheDocument();
// })

test('there is a component named "todoTaskContainer"', () => {
  expect(() => render(<TodoTaskContainer />)).not.toThrow();
})
