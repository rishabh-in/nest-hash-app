import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';


@Injectable()
export class JwtService {
  secretKey = "rishabh";

  sign(payload) {
    return jwt.sign(payload, this.secretKey, {
      expiresIn: "1d"
    })
  }

  verify(token) {
    return jwt.verify(token, this.secretKey);
  }
}