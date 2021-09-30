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
    //1. Give species input focus.
    const speciesInput = screen.getByPlaceholderText("species");
    console.log(speciesInput);
    //2. Type in species.
    //3. Give the age focus
    //4. Type in age.
    //5. Give the notes focus
    //6. Type in notes.
    //7. click our submit button

    //Assert: Check to see if species name appears
});