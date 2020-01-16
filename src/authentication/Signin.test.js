import React from 'react';
import Signin from './Signin';
import { render, unmountComponentAtNode } from 'react-dom';
import { create } from "react-test-renderer";
import { BrowserRouter as Router } from 'react-router-dom';

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  render(<Router><Signin /></Router>, container);
});

it("matches the snapshot", () => {
    const signin = create(<Router><Signin /></Router>);
    expect(signin.toJSON()).toMatchSnapshot();
});