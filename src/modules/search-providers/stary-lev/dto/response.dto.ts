import { Expose, plainToInstance, Type, Exclude } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { IStaryLevResponse } from '../interfaces/response';

@Exclude()
export class StaryLevResponseDto {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  data: StaryLevBookDto[];

  public static fromPlainArray(
    rawData: IStaryLevResponse['data'],
  ): StaryLevBookDto[] {
    return plainToInstance(StaryLevBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

@Exclude()
export class StaryLevBookDto {
  @Expose({ name: 'slug' })
  @IsString()
  @IsNotEmpty()
  link: string;

  public static fromPlainArray(rawData: any[]): StaryLevBookDto[] {
    return plainToInstance(StaryLevBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
@Exclude()
export class StaryLevResourceDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  author: Array<{
    name: string;
  }>;

  @Expose()
  @IsNumber()
  price: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Expose()
  @IsNumber()
  qty: number;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  isbn: string;
}
export class StaryLevPagePropsDto {
  @IsString()
  @IsNotEmpty()
  pageType: string;

  @Type(() => StaryLevResourceDto)
  resource: StaryLevResourceDto;
}
@Exclude()
export class StaryLevSpecificResponseDto {
  @Type(() => StaryLevPagePropsDto)
  pageProps: StaryLevPagePropsDto;
}
