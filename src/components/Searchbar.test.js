import React from 'react';
import SearchBar from './SearchBar';
import { render, unmountComponentAtNode} from 'react-dom';
import { act,Simulate } from 'react-dom/test-utils';

let container = document.createElement("div");
beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render search bar",()=>{
    act(()=>{
        render(<SearchBar></SearchBar>,container);
    });
    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining(""));
});
