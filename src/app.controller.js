import { Controller, Dependencies, Get, Post, Req, Bind, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
@Dependencies(AppService, UserService)
export class AppController {
  constructor(appService, userService) {
    this.appService = appService;
    this.userService = userService
  }

  // Service Routes
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // User token routes
  @Post("/user")
  @Bind(Req())
  handleSaveUserData(req) {
    return this.userService.handleSaveUserData(req);
  }

  @Post("/user/token")
  @Bind(Req())
  handleFetchUserData(req) {
    return this.userService.handleFetchUserData(req)
  }

  @Get("/token/list")
  @Bind(Req())
  getAllTokens(req) {
    return this.userService.getAllTokens(req);
  }
}
