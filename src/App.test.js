import { render, screen } from '@testing-library/react';
import App from './App';

test('Empty test', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
