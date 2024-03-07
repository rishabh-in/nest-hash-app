import { Injectable } from '@nestjs/common';
import { JwtService } from '../helper/generateToken';
import jwt from "jsonwebtoken";

@Injectable()
export class UserService {
  constructor() {
    this.userDetails = [];
    this.jwtService = new JwtService();
  }

  getUser() {
    return 'Hello User!';
  }

  handleSaveUserData(req) {
    try {
      const {username, number} = req.body 
      let token = this.jwtService.sign({username, number});
      if(this.userDetails.includes(token)) {
        return {message: "Token already exist"}
      }
      this.userDetails.push(token);
      return {message: "User added", token}
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  handleFetchUserData(req) {
    const {token} = req.body;
    let userData = this.jwtService.verify(token);
    if(userData && userData.username) {
      return {message: "User details retrieved successfully", userData: {username: userData.username, number: userData.number}};
    } else {
      return {message:"Token not found"}
    }
  }
  getAllTokens(req) {
    return {message: "Fetched all tokens", data: this.userData}
  }
}