import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('test-end-point')
    async test() {

        return {"message": "Hello" }
    }

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
        const { username, password} = userData;
        try {
            const id = await this.authService.login(username, password)

            const body = {id: id}
            const token = jwt.sign(body, 'TEST_KEY', { //TODO CREATE OTHER FILE FOR CREATE TOKEN
                expiresIn: '12h'
            });
            return {access_token: token}
        } catch (e) {
            return { error: e };
        }

    }
}
