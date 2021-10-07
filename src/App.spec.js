import { render, screen } from "@testing-library/react";
import App from "./App";
import React from 'react';

test('Render without errors', () => {
    render(<App />);
})

test('When App mounts, Add New Animal header exists on the screen', () => {
    // Arrange: render the component
    render(<App />);

    // Act: find our header 
    const something = 'hello';
    const header = screen.getByText(/add new's animal/i);

    // Assert: Verify that the header is on the screen
    expect(header).toBeTruthy();
})