import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import Signup from './Signup';
import { create } from "react-test-renderer";
import { render, fireEvent, wait } from '@testing-library/react';

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
  render(<Signup />, container);
});

it("matches the snapshot", () => {
    const signup = create(<Signup />);
    expect(signup.toJSON()).toMatchSnapshot();
});
/*
it("submits correct values", async () => {
    const mockFunction = jest.fn(v => {
        console.log('this prints later')
        // done()
    })

    const { container } = render(<Signup />);

    console.log(container)

    const name = container.querySelector('input[name="username"]')
    const email = container.querySelector('input[name="email"]')
    const password = container.querySelector('input[name="password"]')
    const submit = container.querySelector('button[type="submit"]')
    const results = container.querySelector("textarea");

    console.log(name)
  
    await act(() => {
      fireEvent.change(name, {
        target: {
          value: "mockname"
        }
      })
    })
  
    await act(() => {
      fireEvent.change(email, {
        target: {
          value: "mock@email.com"
        }
      })
    })
  
    await act(() => {
      fireEvent.change(password, {
        target: {
          value: "mockpassword"
        }
      })
    })
  
    await act(() => {
      fireEvent.click(submit)
    })
  
    expect(results.innerHTML).toBe(
      '{"username":"mockname","password":"mockpassword","email":"mock@email.com"}'
    )
  })*/