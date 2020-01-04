class reviewsapi{
    static API_BASE_URL="/v1/reviews"

    static requestHeaders(){

        return{}
    }

    static requestBody(){
        return {body}
    }


    static getReviews(){

        const headers = this.requestHeaders();
        const body= this.requestBody()

        const request= new Request(reviewsapi.API_BASE_URL+"/",{
            method:'GET',
            headers:headers,
            body:{//aqui habría que ampliarlo para relacionarlo
                imdbId:imdbId||null,
                user:user||null,
                skyp:skyp||null,
                limit:limit||null
                //...
            }
        })

        return fetch(request).then( response =>{
            return response.json();
        });
    }

    static putReviews(){

        const headers= this.requestHeaders();

        const request= new Request(reviewsapi.API_BASE_URL+"/id",{
            method:'PUT',
            headers:headers,
            body:{
                //aqui habría que ampliarlo para relacionarlo, query?
                    id:reviewId
            }
        })

        return fetch(request).then(response =>{
            return response.sendStatus();
        })
    }

}