import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { Expose, plainToInstance, Type } from 'class-transformer';

export class KSDResponseDto {
  query: string;
  total: number;

  @Type(() => KSDBookDto)
  results: {
    items: KSDBookDto[];
  };

  public static arrayToInstance(data: KSDBookDto[]) {
    return plainToInstance(KSDBookDto, data);
  }
}

export class KSDBookDto {
  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose({ name: 'url' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose({ name: 'price' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Expose({ name: 'is_presence' })
  @IsBoolean()
  @IsNotEmpty()
  available: boolean;
}
