import {Body, Controller, Get, Post} from '@nestjs/common';
import {DecodedToken} from "../utils/jwt/jwt_token";
import {CommentsService} from "./comments.service";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {
    }

    @Post('create-comment')
    async createComment(@Body() userData: {
        token: string,
        text: string,
        reply_id: string | null,
        image_url: string | null,
        file_url: string | null,
    }) {
        try {
            const {token, text, reply_id, image_url, file_url} = userData;
            const user_id = DecodedToken(token)

            return this.commentsService.createComment(user_id, text, reply_id, image_url, file_url)
        } catch (e) {
            return {error: e.message};
        }
    }

    @Get('list-comment')
    async listComment() {
        try {
            return this.commentsService.listComments()
        } catch (e) {
            return {error: e.message};
        }
    }
}
