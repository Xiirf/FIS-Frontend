import React from 'react';
import Resetpassword from './Resetpassword';
import { render, unmountComponentAtNode } from 'react-dom';
import { create } from "react-test-renderer";

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
  render(<Resetpassword />, container);
});

it("matches the snapshot", () => {
    const resetpassword = create(<Resetpassword />);
    expect(resetpassword.toJSON()).toMatchSnapshot();
});