import React  from 'react';
import Recomendacion from './Recomendacion';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Recomendaciones from './Recomendaciones';

let container = document.createElement("div");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ("renders Slider with data and title", () => {
    const onclick = jest.fn();
    const recomendacionId = "154225";
    const pelicula = {
          "popularity": 468.811,
          "vote_count": 1139,
          "video": false,
          "poster_path": "/16G2wZAkmKqSGK3it2VPjco5oyn.jpg",
          "id": 181812,
          "adult": false,
          "backdrop_path": "/dCB7d4l0mfpsISZvr6aPE2z5QF6.jpg",
          "original_language": "en",
          "original_title": "Star Wars: The Rise of Skywalker",
          "genre_ids": [
              28,
              12,
              878
          ],
          "title": "Star Wars: El ascenso de Skywalker",
          "vote_average": 6.7,
          "overview": "",
          "release_date": "2019-12-18"
      };
    act(() => {
        render(<Recomendacion key = {recomendacionId} recomendacion = {pelicula} tipo = "1" clickAddListaNegra={onclick}/>, container);
    });

    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining("Star Wars"));
    expect(container).toEqual(expect.anything());

})

it ("send event if button is clicked", () => {
    const onclick = jest.fn();
    const recomendacionId = "154225";
    const pelicula = {
          "popularity": 468.811,
          "vote_count": 1139,
          "video": false,
          "poster_path": "/16G2wZAkmKqSGK3it2VPjco5oyn.jpg",
          "id": 181812,
          "adult": false,
          "backdrop_path": "/dCB7d4l0mfpsISZvr6aPE2z5QF6.jpg",
          "original_language": "en",
          "original_title": "Star Wars: The Rise of Skywalker",
          "genre_ids": [
              28,
              12,
              878
          ],
          "title": "Star Wars: El ascenso de Skywalker",
          "vote_average": 6.7,
          "overview": "",
          "release_date": "2019-12-18"
      };
    act(() => {
        render(<Recomendacion key = {recomendacionId} recomendacion = {pelicula} tipo = "1" clickAddListaNegra={onclick}/>, container);
    });

    const button = document.querySelector("[data-testid = clickedListaNegra]"); // con el id que le ponemos al button en el componente Aleter accedemos al boton

    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true} ));
    });

    expect(onclick).toHaveBeenCalledTimes(1);

})
