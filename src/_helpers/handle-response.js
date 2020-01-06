import { authenticationService } from '../_services/authentication.service';

export function handleResponse(response) {
    return response.text().then(text => {
        
        if (!text.startsWith("{") && !text.startsWith("[")) {
            text = `{"msg":"${text}"}`;
        }
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                window.location.reload(true);
            }

            console.log(data)

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}