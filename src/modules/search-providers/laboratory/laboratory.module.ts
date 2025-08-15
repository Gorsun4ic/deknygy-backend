import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [LaboratoryService],
  exports: [LaboratoryService],
})
export class LaboratoryModule {}
