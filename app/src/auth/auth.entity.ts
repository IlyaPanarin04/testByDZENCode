import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'username' })
    username: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'email' })
    email: string;
}