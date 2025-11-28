import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type Token = {
    userId: string;
    roles: Array<string>;
    iat: number;
}

/**
 * Return JWT token from the Authorization Header
 * @param request 
 * @returns 
 */
export const getJwtToken = (request: NextRequest) => {
    const header = request.headers.get('Authorization')
    if (header) {
        return header?.split(' ')[1] 
    }
}

/**
 * Return user's roles
 * @param token 
 */
export const getRoles = (token: string) => {
    const decryptedToken = jwt.decode(token) as Token
    return decryptedToken.roles
}

/**
 * Check if user can access this ressources
 * @param uri 
 * @param roles 
 * @param httpMethod 
 */
export const canAccess = (uri: string, roles: Array<string>, httpMethod: string) => {
    if(uri.startsWith('/api/')){
        if (httpMethod === "POST") {
            if (roles.includes('REDACTEUR') || roles.includes('ADMIN')) {
                return true
            }
            else {
                return false
            }
        }
        if (httpMethod === "GET"){
            return true
        }
    }
}