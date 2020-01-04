import React from 'react';
import SearchBar from '../components/SearchBar';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';

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

it("Change in query",()=>{
    const onChange = jest.fn()
    act(()=>{
        render(<SearchBar onChange={onChange}></SearchBar>,container);
    });

    const input_query = document.querySelector("[name=query]");

    act(()=>{
        input_query.dispatchEvent(new Event('change',{
                bubbles:true,
        }));
    })
    expect(onChange).toHaveBeenCalledTimes(1);
})