import React from 'react';
import {render, screen} from '@testing-library/react';
import AnimalForm from './AnimalForm';

test("renders without errors", () => {
    render(<AnimalForm/>);
});

test("displays species when submitting all fields", ()=> {
    //Arrange: render our component
    render(<AnimalForm />);
    //Act: Submit our form
    //Assert: Check to see if species name appears
});