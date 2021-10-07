import { render } from "@testing-library/react"
import AnimalForm from "./AnimalForm"
import React from 'react'

test('Renders without errors', () => {
    render(<AnimalForm />)
})