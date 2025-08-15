import { Expose, plainToInstance, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class RidnamovaResponseDto {
  @Expose({ name: 'products' })
  @Type(() => RidnamovaBookDto)
  @IsArray()
  @IsNotEmpty()
  products: RidnamovaBookDto[];

  public static arrayToInstance(data: RidnamovaBookDto[]): RidnamovaBookDto[] {
    return plainToInstance(RidnamovaBookDto, data);
  }
}

export class RidnamovaBookDto {
  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  price: string;

  @Expose({ name: 'url' })
  @IsString()
  @IsNotEmpty()
  link: string;

  @Expose({ name: 'author_name' })
  @IsString()
  @IsNotEmpty()
  author: string;
}
