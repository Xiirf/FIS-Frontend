import { handleResponse } from '../_helpers/handle-response';

export const reviewService = {
    createImpression,
    getReviews
};

function getReviews(limit, skip) {
    const requestOptions = { method: 'GET' };
    return fetch(`http://localhost:3000/v1/reviews?limit=${limit}&skip=${skip}`, requestOptions).then(handleResponse);
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