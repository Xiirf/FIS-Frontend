import React from 'react';
import Movie from './Movie';
import { Router, Route, Link } from 'react-router-dom';
import { history } from '../_helpers/history';
import { render, unmountComponentAtNode} from 'react-dom';
import { act,Simulate } from 'react-dom/test-utils';

let container = document.createElement("div");
let movie = {
    "adult": false,
    "backdrop_path": "/nDS8rddEK74HfAwCC5CoT6Cwzlt.jpg",
    "belongs_to_collection": {
        "id": 403374,
        "name": "Jack Reacher - Colección",
        "poster_path": "/7baSUtFKi8PQ9SLo6ECYBfAW2K8.jpg",
        "backdrop_path": "/vViRXFnSyGJ2fzMbcc5sqTKswcd.jpg"
    },
    "budget": 60000000,
    "genres": [
        {
            "id": 28,
            "name": "Acción"
        },
        {
            "id": 53,
            "name": "Suspense"
        }
    ],
    "homepage": "http://www.jackreachermovie.com/",
    "id": 343611,
    "imdb_id": "tt3393786",
    "original_language": "en",
    "original_title": "Jack Reacher: Never Go Back",
    "overview": "La Mayor Susan Turner, líder de la antigua unidad militar de Reacher, es falsamente acusada de traición. Jack Reacher tendrá que sacarla de prisión y descubrir la verdad detrás de una conspiración gubernamental para limpiar sus nombres y salvar sus vidas. Durante el escape, Reacher descubrirá un secreto de su pasado que podría cambiar su vida para siempre. Secuela de \"Jack Reacher\" (2012).",
    "popularity": 12.887,
    "poster_path": "/eLzStFuergouErSQlfABthuQHCJ.jpg",
    "production_companies": [
        {
            "id": 21777,
            "logo_path": null,
            "name": "TC Productions",
            "origin_country": ""
        },
        {
            "id": 4,
            "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
            "name": "Paramount",
            "origin_country": "US"
        },
        {
            "id": 82819,
            "logo_path": "/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
            "name": "Skydance Media",
            "origin_country": "US"
        },
        {
            "id": 83645,
            "logo_path": null,
            "name": "Huahua Media",
            "origin_country": "CN"
        },
        {
            "id": 3407,
            "logo_path": "/iVMjKOFyRvm9PW45lW1wW6TSvnj.png",
            "name": "Shanghai Film Group",
            "origin_country": "CN"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "CN",
            "name": "China"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2016-10-19",
    "revenue": 162146076,
    "runtime": 118,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Nunca cedas. Nunca te des por vencido. Nunca vuelvas.",
    "title": "Jack Reacher: Nunca vuelvas atrás",
    "video": false,
    "vote_average": 5.6,
    "vote_count": 2989
};

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
        render(<Router history={history}><Movie movie={movie}></Movie></Router>,container);
    });
    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining("Jack Reacher"));
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