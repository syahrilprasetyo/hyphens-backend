
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export function isSignIn(req: Request, res: Response, next: NextFunction) {
  const { Auth } = req.body;

  if (!Auth) {
    return res.status(401).send({
      result: false,
      resultCd: 500,
      message: `login required`
    });
  }

  try {
    const payload = jwt.verify(Auth, 'indomiegoreng2') as JwtPayload;

    // Check if the payload contains an expiration time
    if (payload && typeof payload.exp === 'number') {
      // Extend expiration time to 15 days if the token is not expired yet
      if (payload.exp * 1000 > Date.now()) {
        payload.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15; // Extend expiration to 15 days
        const newToken = jwt.sign(payload, 'indomiegoreng2');
        req.body['user'] = payload;
        req.body['newToken'] = newToken;
      }
    }

    next();
  } catch (error: any) {
    return res.status(401).send({
      result: false,
      resultCd: 500,
      message: error.message
    });
  }
}