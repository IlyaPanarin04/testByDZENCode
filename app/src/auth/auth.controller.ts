import {Controller, Get} from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get('test-end-point')
    async test() {

        return {"message": "Hello" }
    }

}
