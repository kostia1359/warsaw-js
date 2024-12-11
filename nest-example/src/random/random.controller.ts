import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';

@Controller('random')
export class RandomController {
    constructor(private readonly randomService: RandomService) {}

    @Get('number')
    async getRandomNumber(): Promise<number> {
        const number = await this.randomService.generateRandomNumber();

        return number;
    }
}
