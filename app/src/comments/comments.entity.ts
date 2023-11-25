import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";


@Entity('comments')
export class Comments {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'user_id' })
    user_id: string;

    @Column({ name: 'text' })
    text: string;

    @Column({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'reply_comments_id' })
    reply_comments_id: string;

    @OneToMany(() => Comments, comment => comment.id)
    replies: Comments[];

    @Column({ name: 'image_url', nullable: true })
    imageUrl: string | null;

    @Column({ name: 'file_url', nullable: true })
    fileUrl: string | null;
}