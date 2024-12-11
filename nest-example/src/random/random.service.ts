import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RandomService {
    private readonly apiKey: string;

    constructor(
        @Inject('RANDOM_ORG_API_URL') private readonly apiUrl: string,
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.apiKey = this.configService.get<string>('RANDOM_ORG_API_KEY')!;
    }

    async generateRandomNumber(): Promise<number> {
        const response = await lastValueFrom(
            this.httpService.post(this.apiUrl, {
                jsonrpc: '2.0',
                method: 'generateIntegers',
                params: {
                    apiKey: this.apiKey,
                    n: 1,
                    min: 0,
                    max: 100,
                },
                id: 1,
            }),
        );
        if(Array.isArray(response.data?.result?.random?.data) && response.data.result.random.data.length > 0) {
            return response.data.result.random.data[0];
        }
        
        throw new Error('Failed to generate random number');
    }
}
