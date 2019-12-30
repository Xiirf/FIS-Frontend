
class MoviesApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static getMovieStatusById(id) {
        const headers = this.requestHeaders();
        const request = new Request(MoviesApi.API_BASE_URL + "/movie_status/" + id, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default MoviesApi;