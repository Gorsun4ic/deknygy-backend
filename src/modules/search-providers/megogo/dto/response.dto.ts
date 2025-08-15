import { IsArray, IsString, ValidateNested, IsNotEmpty } from 'class-validator';
import { Expose, plainToInstance, Type } from 'class-transformer';
import { IMegogoBook } from '../interfaces/response';

export class MegogoResponseDto {
  status: string;
  code: number;
  @Type(() => MegogoDataDto)
  data: {
    items: MegogoDataDto;
  };

  static fromArrayToInstance(data: IMegogoBook[]): MegogoBookDto[] {
    return plainToInstance(MegogoBookDto, data);
  }
}

export class MegogoDataDto {
  @Type(() => MegogoBookDto)
  books: {
    items: Array<MegogoBookDto>;
  };
}

export class MegogoBookDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose({ name: 'slug' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  authors: Array<{
    first_name: string;
    last_name: string;
  }>;

  @Expose({ name: 'status' })
  @IsString()
  @IsNotEmpty()
  available: 'ready_for_order' | 'unavailable';

  @Expose()
  purchases: {
    price: number;
  };
}
