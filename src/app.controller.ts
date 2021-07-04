import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  healthCheck(@Res() res: Response) {
    res.sendStatus(200);
  }
  
}
