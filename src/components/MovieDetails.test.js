import React from 'react';
import MovieDetails from './MovieDetails';
import { Router, Route, Link } from 'react-router-dom';
import { history } from '../_helpers/history';
import { render, unmountComponentAtNode} from 'react-dom';
import { act,Simulate } from 'react-dom/test-utils';

let container = document.createElement("div");
let token;

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
        render(<MovieDetails match={{params:{filter:11}}}></MovieDetails>,container);
    });
    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining(""));
});


/*
it("Change in query",()=>{
    const onChange = jest.fn()
    act(()=>{
        render(<SearchBar></SearchBar>,container);
        const input_query = document.getElementsByName("query")[0];
        input_query.value = 'Star Wars';
    });

    expect(container.textContent).toEqual(expect.stringContaining('Star Wars'));
})
*/