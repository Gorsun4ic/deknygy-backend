import { Exclude, Expose, Type, plainToInstance } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  Max,
} from 'class-validator';

@Exclude()
export class NashformatBookDataDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Expose()
  @IsString()
  image: string;

  @Expose()
  @IsString()
  price: string;

  @Expose()
  @IsString()
  author: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(3)
  type: number;

  @Expose()
  @IsBoolean()
  stock: boolean;
}

@Exclude()
export class NashformatProductDto {
  @Expose()
  @IsString()
  price: string;

  @Expose()
  @IsString()
  value: string;

  @Expose()
  @Type(() => NashformatBookDataDto)
  data: NashformatBookDataDto;
  @Expose()
  @IsString()
  type: string;

  public static fromPlainArray(rawData: any[]): NashformatProductDto[] {
    return plainToInstance(NashformatProductDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
