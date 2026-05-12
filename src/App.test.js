// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuarkusNative title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuarkusNative/i);
    expect(titleElement).toBeInTheDocument();
});
