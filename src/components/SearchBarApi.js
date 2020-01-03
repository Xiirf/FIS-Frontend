class SearchBarApi {
    static API_BASE_URL = "/api/v1/search_api";

    static requestHeaders() {
        return {}
    }

    static getMovies(query, page) {
        const headers = this.requestHeaders();
        const request = new Request(SearchBarApi.API_BASE_URL + "?query=" + query + "&page=" + page, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getMovieByID(id){
        const headers = this. requestHeaders();
        const request = new Request(SearchBarApi.API_BASE_URL + "/" + id, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default SearchBarApi;