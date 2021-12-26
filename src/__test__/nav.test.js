import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";

describe('Test Navbar.js component', () => {
  it('shoud render Navbar component', () => {
    const component = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    //component.getByText('GIPHY');
    expect(component.container).toHaveTextContent('GIPHY');
  })
})