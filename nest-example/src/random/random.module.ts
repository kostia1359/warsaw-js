import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { RandomService } from './random.service';
import { RandomController } from './random.controller';

@Module({
    imports: [
        HttpModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    providers: [
        RandomService,
        {
            provide: 'RANDOM_ORG_API_URL',
            useValue: 'https://api.random.org/json-rpc/4/invoke',
        },
    ],
    controllers: [RandomController],
})
export class RandomModule {}
