import {authenticationService} from '../_services/authentication.service';

class MoviesApi {
    static API_BASE_URL = "api/v1";

    static requestHeaders() {
        return { 
            'Content-Type': 'application/json',
            'authorization': authenticationService.currentTokenValue.token
        }
    }

    static getMovieStatusById(id) {
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + MoviesApi.API_BASE_URL + "/movies_status/" + id, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getMovieStatusByUserAndMovie(id_user, id_movie){
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + MoviesApi.API_BASE_URL + "/movies_status/" + id_user + "/" + id_movie, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static postMovieStatus(body){
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + MoviesApi.API_BASE_URL + "/movies_status", {
            method: 'POST',
            headers: headers,
            body:JSON.stringify(body)
        });

        return fetch(request).then(response => {
            return response;
        });
    }

    static putMovieStatus(id,body){
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + MoviesApi.API_BASE_URL + "/movies_status/" + id, {
            method: 'PUT',
            headers: headers,
            body:JSON.stringify(body)
        });

        return fetch(request).then(response => {
            return response;
        });
    }

    static deleteMovieStatus(id){
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + MoviesApi.API_BASE_URL + "/movies_status/" + id,{
            method: 'DELETE',
            headers:  headers
        })
        return fetch(request).then(response => {
            return response;
        });
    }
}

export default MoviesApi;