import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomModule } from './random/random.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        RandomModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
