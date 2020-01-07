import React from 'react';
import ListaNegra from './ListaNegra';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = document.createElement("div");

beforeEach(() => {
    container = document.createElement("table");
    container = document.createElement("tbody");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ("renders the component", () => {
    const onclick = jest.fn();
    const peli = {"idTmdb" : 466272};

    act(() => {
        render(<ListaNegra elemento = {peli} tipo = "1" deleteFromListaNegra={onclick}/>, container);
    });

    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining("466272"));
})

it ("send event if button is clicked", () => {
    const onclick = jest.fn();
    const peli = {"idTmdb" : 466272};

    act(() => {
        render(<ListaNegra elemento = {peli} tipo = "1" deleteFromListaNegra={onclick}/>, container);
    });

    const button = document.querySelector("[data-testid = clicked]"); // con el id que le ponemos al button en el componente Aleter accedemos al boton

    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true} ));
    });

    expect(onclick).toHaveBeenCalledTimes(1);

})
