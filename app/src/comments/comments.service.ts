import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Comments} from "./comments.entity";


@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(Comments)
        private readonly commentsRepository: Repository<Comments>
    ) {
    }

    async createComment(user_id: string, text: string, reply_id: string, image_url: string, file_url: string) {
        const comment = new Comments()
        comment.user_id = user_id
        comment.text = text
        if (reply_id) {
            const comment_reply = await this.commentsRepository.findOne({
                where: {
                    id: reply_id
                }
            })
            comment_reply ? comment.reply_comments_id = reply_id : comment.reply_comments_id = null
        }
        image_url ? comment.imageUrl = image_url : comment.imageUrl = null
        file_url ? comment.fileUrl = file_url : comment.fileUrl = null

        return this.commentsRepository.save(comment)
    }

    async listComments() {
        const comments = await this.commentsRepository.find();

        const loadReplies = async (comment: Comments): Promise<void> => {
            const replies = await this.commentsRepository.find({
                where: {reply_comments_id: comment.id},
            });
            if (replies && replies.length > 0) {
                comment.replies = replies;
                await Promise.all(replies.map(loadReplies));
            }
        };

        const rootComments = comments.filter(comment => !comment.reply_comments_id);
        await Promise.all(rootComments.map(loadReplies));

        return rootComments;
    }
}