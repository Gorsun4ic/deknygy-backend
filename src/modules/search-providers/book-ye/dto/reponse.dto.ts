import { Expose, plainToInstance, Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class BookYeResponseDto {
  query: string;
  total: number;
  @Type(() => BookYeItemDto)
  results: {
    item_groups: BookYeItemDto[];
  };

  public static arrayToInstance(data: BookYeBookDto[]): BookYeBookDto[] {
    return plainToInstance(BookYeBookDto, data);
  }
}

export class BookYeItemDto {
  @Type(() => BookYeBookDto)
  items: BookYeBookDto[];
}

export class BookYeBookDto {
  @Expose({ name: 'url' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose({ name: 'is_presence' })
  @IsBoolean()
  @IsNotEmpty()
  available: boolean;

  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  price: number;

  @Expose({ name: 'brand' })
  @IsString()
  @IsNotEmpty()
  publisher: string;
}
