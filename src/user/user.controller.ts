import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/user/register-user-dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/:username')
    getUserByUsername(@Param('username') username: string) {
        return this.userService.getUserByUsername(username);
    }

    @Post()
    registerUser(@Body() registerUserDto: RegisterUserDto) {
        return this.userService.registerUser(registerUserDto);
    }

}
