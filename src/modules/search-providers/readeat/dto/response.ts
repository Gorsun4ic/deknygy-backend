import { Expose, plainToInstance } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ReadEatResponseDto {
  products: ReadEatBookDto[];

  public static arrayToInstance(data: ReadEatBookDto[]): ReadEatBookDto[] {
    return plainToInstance(ReadEatBookDto, data);
  }
}

export class ReadEatBookDto {
  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
