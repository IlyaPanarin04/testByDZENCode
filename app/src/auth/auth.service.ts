import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./auth.entity";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async registerUser(username: string, password: string, email: string) {
        try {
            const user = new User();
            user.username = username;
            user.password = password;
            user.email = email;

            return await this.userRepository.save(user);
        } catch (e) {
            return {error: e}
        }
    }

    async login(username: string, password: string) {
        const user = await this.userRepository.findOne({
            where: {
                username: username,
                password: password
            }
        })

        return user ? user.id : new Error("Data is not correct");
    }

}
