import {Module} from "@nestjs/common";
import {AuthModule} from "./auth/auth.module";
import { CommentsModule } from './comments/comments.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'test',
            database: 'postgres',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false,
        }),
        AuthModule,
        CommentsModule,
    ],
    providers: [],
    controllers: []
})
export class AppModule {}
