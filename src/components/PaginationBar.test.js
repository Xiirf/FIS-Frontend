import React from 'react';
import PaginationBar from './PaginationBar';
import { render, unmountComponentAtNode} from 'react-dom';
import { act,Simulate } from 'react-dom/test-utils';

let container = document.createElement("div");
let pagination = {
    currentPage: 1,
    totalShow: 10,
    query: "Test"
}
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
        render(<PaginationBar pagination={pagination} totalPages={10}></PaginationBar>,container);
    });
    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining(""));
});

it("Number of pages",()=>{
    act(()=>{
        render(<PaginationBar pagination={pagination} totalPages={6}></PaginationBar>,container);
    });
    expect(container.textContent).toEqual(expect.stringContaining("123456"));
});
