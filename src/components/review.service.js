import { authHeader } from '../_helpers/auth-header';
import { handleResponse } from '../_helpers/handle-response';

export const reviewService = {
    createImpression,
    getReviews,
    createReview,
    deleteReview
};

const REVIEW_API_URL = 'https://fis-api-gateway.herokuapp.com/api/v1';

function getReviews(resource, limit, skip) {
    const requestOptions = { method: 'GET' };
    return fetch(`${REVIEW_API_URL}/reviews?limit=${limit}&skip=${skip}&imdbId=${resource}`, requestOptions).then(handleResponse);
}

function createReview(imdbId, rating, title, content) {

    const headers = authHeader();
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            imdbId: imdbId.toString(),
            rating: rating.toString(),
            title,
            content
        })
    };
    return fetch(`${REVIEW_API_URL}/reviews`, requestOptions).then(handleResponse);
}

function deleteReview(reviewId) {
    const headers = authHeader();
    headers['Content-Type'] = 'application/json';

    const requestOptions = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify({
            id: reviewId
        })
    };
    return fetch(`${REVIEW_API_URL}/reviews`, requestOptions).then(handleResponse);
}

function createImpression(reviewId, value) {
    let token = localStorage.getItem('token'); // Until authorization is well defined
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` },
        body: JSON.stringify({reviewId, value})
    };

    return fetch(`${process.env.REVIEW_API_URL}/v1/impressions`, requestOptions).then((res) => {
        console.log(res);
        return res;
    });
}