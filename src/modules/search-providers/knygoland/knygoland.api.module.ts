import { Module } from '@nestjs/common';
import { KnygolandApiService } from './knygoland.api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [KnygolandApiService],
  exports: [KnygolandApiService],
})
export class KnygolandApiModule {}
