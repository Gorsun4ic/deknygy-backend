import { Exclude, Expose, Type, plainToInstance } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  Max,
} from 'class-validator';
import { NashformatItemTypes, INashformatBook } from '../interfaces/response';

@Exclude()
export class NashformatBookDataDto {
  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsString()
  author: string;

  @Expose()
  @IsString()
  price: string;

  @Expose({ name: 'url' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose({ name: 'stock' })
  @IsBoolean()
  available: boolean;

  @Expose({ name: 'type' })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(3)
  format: number;
}

@Exclude()
export class NashformatProductDto {
  @Expose()
  @Type(() => NashformatBookDataDto)
  data: NashformatBookDataDto;

  @Expose()
  @IsString()
  type: NashformatItemTypes;

  public static fromPlainArray(
    rawData: INashformatBook[],
  ): NashformatProductDto[] {
    return plainToInstance(NashformatProductDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
