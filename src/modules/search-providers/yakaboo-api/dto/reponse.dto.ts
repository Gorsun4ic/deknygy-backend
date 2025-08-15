import { Exclude, Expose, Type, plainToInstance } from 'class-transformer';

@Exclude()
export class YakabooBookSourceDto {
  @Expose({ name: 'name' })
  title: string;

  @Expose({ name: 'url_key' })
  slug: string;

  @Expose()
  author_label: Array<{ label: string }>;

  @Expose()
  book_publisher_label: Array<{ label: string }>;

  @Expose()
  book_publication_label: Array<{ label: string; option_id: number }>;

  @Expose()
  book_option_id: number[];

  @Expose()
  price: number;

  @Expose()
  book_isbn_label: Array<{ label: string }>;

  @Expose()
  stock: Array<{ isInStock: boolean }>;
}

@Exclude()
export class YakabooHitDto {
  @Expose()
  _id: string;

  @Expose({ name: '_source' })
  @Type(() => YakabooBookSourceDto)
  source: YakabooBookSourceDto;
}

@Exclude()
export class YakabooHitsDto {
  @Expose()
  total: {
    value: number;
    relation: string;
  };
  @Expose()
  max_score: number;
  @Expose()
  @Type(() => YakabooHitDto)
  hits: YakabooHitDto[];
}

@Exclude()
export class YakabooResponseDto {
  @Expose()
  took: number;

  @Expose()
  timed_out: boolean;

  @Expose()
  @Type(() => YakabooHitsDto)
  hits: YakabooHitsDto;

  public static fromPlain(rawData: any): YakabooResponseDto {
    return plainToInstance(YakabooResponseDto, rawData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
  }
}
