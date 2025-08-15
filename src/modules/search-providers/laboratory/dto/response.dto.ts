import {
  IsArray,
  IsIn,
  IsString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { plainToInstance, Expose } from 'class-transformer';
import { ILaboratoryRawBook } from '../interfaces/response';

export class LaboratoryResponseDto {
  query: string;
  @IsArray()
  @ValidateNested({ each: true })
  suggestions: LaboratoryBookDto[];

  public static arrayToInstance(data: ILaboratoryRawBook[]) {
    return plainToInstance(LaboratoryBookDto, data);
  }
}

export class LaboratoryBookDto {
  @IsString()
  @IsIn(['product', 'post'])
  @IsNotEmpty()
  type: 'product' | 'post';

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  @Expose({ name: 'value' })
  title: string;

  data: {
    url: string;
    author: string;
  };
}
