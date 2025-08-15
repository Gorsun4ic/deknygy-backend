import { Module } from '@nestjs/common';
import { KSDService } from './ksd.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [KSDService],
  exports: [KSDService],
})
export class KSDModule {}
