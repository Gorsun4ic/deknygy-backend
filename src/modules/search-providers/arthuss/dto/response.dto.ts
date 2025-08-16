import { IsString, IsOptional } from 'class-validator';
import { Expose, plainToInstance, Type } from 'class-transformer';
export class ArthussFieldsDto {
  @Expose()
  @IsOptional()
  name?: {
    name: string;
  };

  @Expose()
  @IsOptional()
  price?: {
    price: string;
    special?: string;
  };

  @Expose()
  @IsOptional()
  manufacturer?: {
    manufacturer: string;
  };

  @Expose()
  @IsOptional()
  image?: {
    image: string;
  };

  @Expose()
  @IsOptional()
  model?: {
    model: string;
  };

  @Expose()
  @IsOptional()
  @IsString()
  isbn?: string;

  @Expose()
  @IsOptional()
  no_results?: any; // Add this field
}
export class ArthussResponseDto {
  @Expose()
  @IsOptional()
  type?: string;

  @Expose()
  @IsOptional()
  href?: string;

  @Type(() => ArthussFieldsDto)
  fields: ArthussFieldsDto;

  public static arrayToInstance(data: any[]) {
    return plainToInstance(ArthussResponseDto, data);
  }
}
