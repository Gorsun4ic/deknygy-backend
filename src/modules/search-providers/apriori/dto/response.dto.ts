import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class AprioriResponseDto {
  @Expose()
  @IsArray()
  result: AprioriBookDto[];

  public static fromPlainArray(rawData: any[]): AprioriResponseDto[] {
    return plainToInstance(AprioriResponseDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

@Exclude()
export class AprioriBookDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  id: string;

  @Expose({ name: 'authorName' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @Expose({ name: 'paperPriceReal' })
  @IsString()
  @IsNotEmpty()
  price: string;

  @Expose()
  @IsNumber()
  stock: number;

  public static fromPlainArray(rawData: any[]): AprioriBookDto[] {
    return plainToInstance(AprioriBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

@Exclude()
export class AprioriSpecificBookDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  isbnLocal: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  isbn: string;

  @Expose({ name: 'authorName' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @Expose({ name: 'paperPriceReal' })
  @IsString()
  @IsNotEmpty()
  price: string;

  @Expose()
  @IsNumber()
  stock: number;

  public static fromPlain(rawData: any): AprioriSpecificBookDto {
    return plainToInstance(AprioriSpecificBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
