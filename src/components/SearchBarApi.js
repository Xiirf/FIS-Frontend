class SearchBarApi {
    static API_BASE_URL = "api/v1/search_api";

    static requestHeaders() {
        return {}
    }

    static getMovies(query, page) {
        const headers = this.requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + SearchBarApi.API_BASE_URL + "?query=" + query + "&page=" + page, {
            method: 'GET',
            headers: headers
        });

        console.log(request);
        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getMovieByID(id){
        const headers = this. requestHeaders();
        const request = new Request("https://fis-ms-movies.herokuapp.com/" + SearchBarApi.API_BASE_URL + "/" + id, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default SearchBarApi;