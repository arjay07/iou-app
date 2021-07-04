import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/user/register-user-dto';
import { User } from 'src/entity/user/user.entity';
import { getRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    async getUserByUsername(username: string) {
        return await getRepository(User).findOne(username);
    }

    async registerUser(registerUserDto: RegisterUserDto) {
        const saltRounds = 10;
        const hashed = await bcrypt.hash(registerUserDto.password, saltRounds)
        registerUserDto.password = hashed;
        return await getRepository(User).save(registerUserDto);
    }

}
