import { NextFunction, Request, Response } from "express";
import CustomErro from "../../../../errors/CustomError";
import { JWTToken } from "../../token/JWTToken";


export const ensureAuthenticate = (request: Request, response: Response, next: NextFunction) => {
    const headerAuth = request.headers.authorization;

    if (!headerAuth) {
        return response.status(401).json({
            error: 'Token is missing!'
        });
    }

    const [, token] = headerAuth.split(" ");

    if (!token) {
       return response.status(401).json({
        error: 'Token is missing!'
       });
    }

    const verifyToken = new JWTToken().validate(token);

    if (verifyToken) {
        return next();
    }

    return response.status(401).json({
        error: 'Token invalid!'
    });
}