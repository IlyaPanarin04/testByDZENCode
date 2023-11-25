import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import * as jwt from 'jsonwebtoken';
import {CreateToken} from "../utils/jwt/jwt_token";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() userData: {
        username: string,
        password: string,
        email: string
    }) {
        const { username, password, email } = userData;
        return this.authService.registerUser(
            username,
            password,
            email
        )
    }

    @Post('login')
    async login(@Body() userData: {
        username: string,
        password: string,
    }) {
        const { username, password } = userData;
        try {
            const id = await this.authService.login(username, password);
            const token = CreateToken(id);

            return { access_token: token };
        } catch (e) {
            return { error: e.message };
        }

    }
}
