import { Expose, plainToInstance, Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class KnygolandResponseDto {
  query: string;
  total: number;
  @Type(() => KnygolandBookDto)
  results: {
    items: KnygolandBookDto[];
  };

  public static arrayToInstance(data: KnygolandBookDto[]): KnygolandBookDto[] {
    return plainToInstance(KnygolandBookDto, data);
  }
}

export class KnygolandBookDto {
  @Expose({ name: 'url' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose({ name: 'is_presence' })
  @IsBoolean()
  @IsNotEmpty()
  available: boolean;

  @Expose({ name: 'oldprice' })
  @IsString()
  @IsNotEmpty()
  oldPrice: string;

  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  price: string;

  @Expose({ name: 'brand' })
  @IsString()
  @IsNotEmpty()
  publisher: string;
}
