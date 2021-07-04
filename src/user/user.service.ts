import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user/user.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class UserService {

    async getUserByUsername(username: string) {
        return await getRepository(User).findOne(username);
    }

}
