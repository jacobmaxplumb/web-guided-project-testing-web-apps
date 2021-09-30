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
    
    //queryBy: if an element does not exist, returns a null value
    const headerEl = screen.queryByText("Add Old Animal");

    //getBy: if an element does not exist, the test fails
    // const headerEl = screen.getByText("Add Old Animal");

    console.log(headerEl);

    //Assert: pass the test if our header element exists
    // expect(headerEl).toBeInTheDocument();
});