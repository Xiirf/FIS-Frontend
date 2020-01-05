import { authenticationService } from '../_services/authentication.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentToken = authenticationService.currentTokenValue;
    if (currentToken && currentToken.token) {
        return { Authorization: `Bearer ${currentToken.token}` };
    } else {
        return {};
    }
}