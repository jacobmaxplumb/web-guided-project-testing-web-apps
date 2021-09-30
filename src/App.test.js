import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test("renders without errors", () => {
    render(<App/>);
});

test("on mount, new animal header renders", () => {
    //Arrange: render our App
    render(<App/>);

    //Act: find our header element
    const headerEl = screen.queryByText("Add New Animal");
    console.log(headerEl);

    //Assert: pass the test if our header element exists
});