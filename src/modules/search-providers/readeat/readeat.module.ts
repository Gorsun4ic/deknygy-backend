import { Module } from '@nestjs/common';
import { ReadEatService } from './readeat.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ReadEatService],
  exports: [ReadEatService],
})
export class ReadEatModule {}
