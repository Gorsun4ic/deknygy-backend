import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// 1. Define VivatCategoryDto first (no dependencies)
@Exclude()
export class VivatCategoryDto {
  @Expose()
  @IsString()
  url: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsNumber()
  count: number;
}

// 2. Define VivatBookDto (uses VivatCategoryDto)
@Exclude()
export class VivatBookDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  id: string;

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
  picture: string;

  @Expose()
  is_presence: boolean;

  @Expose()
  @IsString()
  presence: string;

  @Expose()
  @IsString()
  label: string;

  public static fromPlainArray(rawData: any[]): VivatBookDto[] {
    return plainToInstance(VivatBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

// 3. Define VivatItemGroupDto (uses both above)
@Exclude()
export class VivatItemGroupDto {
  @Expose()
  category: VivatCategoryDto;

  @Expose()
  @IsArray()
  items: VivatBookDto[];
}

// 4. Define VivatResultsDto (uses VivatItemGroupDto and VivatCategoryDto)
@Exclude()
export class VivatResultsDto {
  @Expose()
  @IsArray()
  item_groups: VivatItemGroupDto[];

  @Expose()
  @IsArray()
  categories: VivatCategoryDto[];
}

// 5. Define VivatResponseDto (uses VivatResultsDto)
@Exclude()
export class VivatResponseDto {
  @Expose()
  @IsString()
  query: string;

  @Expose()
  @IsNumber()
  total: number;

  @Expose()
  @IsArray()
  results: VivatResultsDto;

  public static fromPlainArray(rawData: any[]): VivatResponseDto[] {
    return plainToInstance(VivatResponseDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

// 6. Define VivatDetailedBookDto (no dependencies on other classes)
@Exclude()
export class VivatDetailedBookDto {
  @Expose()
  @IsNumber()
  status: number;

  @Expose()
  @IsString()
  statusCode: string;

  @Expose()
  @IsString()
  eBook: string;

  @Expose()
  relatedProductsCodeW: string | null;

  @Expose()
  preOrder: string | null;

  @Expose()
  price: {
    retail: number;
    promotion: number;
    priceRebate: number;
    priceWithOutDiscount: number;
  };

  @Expose()
  @IsString()
  image: string;

  @Expose()
  slideShow: Array<{
    id: number;
    value: string;
    type: number;
  }>;

  @Expose()
  slideBookFragment: Array<{
    id: number;
    index: number;
    title: string;
    value: string;
    type: number;
  }>;

  @Expose()
  allCharacteristics: Array<{
    code: string;
    value: Array<{
      text: string;
    }>;
  }>;

  @Expose()
  bookType: {
    currentItem: {
      bookType: string;
      bookTypeText: string | null;
      name: string;
      price: string;
    };
  };

  public static fromPlain(rawData: any): VivatDetailedBookDto {
    return plainToInstance(VivatDetailedBookDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}

// 7. Define VivatDetailedResponseDto (uses VivatDetailedBookDto)
@Exclude()
export class VivatDetailedResponseDto {
  @Expose()
  pageProps: {
    product: VivatDetailedBookDto;
  };

  public static fromPlain(rawData: any): VivatDetailedResponseDto {
    return plainToInstance(VivatDetailedResponseDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
