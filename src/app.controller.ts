import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get('/health')
  healthCheck(@Res() res: Response) {
    res.sendStatus(200);
  }
}
