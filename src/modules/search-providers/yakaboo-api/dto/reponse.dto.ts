import { Exclude, Expose, Type, plainToInstance } from 'class-transformer';

// ---- DTOs for the raw API response (remain largely the same) ----
export class AuthorLabelDto {
  @Expose()
  label: string;
}

export class PublisherLabelDto {
  @Expose()
  label: string;
}

export class LangLabelDto {
  @Expose()
  label: string;
}

export class BindingLabelDto {
  @Expose()
  label: string;
}

export class PageCountLabelDto {
  @Expose()
  label: string;
}

export class YearLabelDto {
  @Expose()
  label: number;
}

export class BookIsbnLabelDto {
  @Expose()
  label: string;
}

export class PublicationLable {
  @Expose()
  label: string;

  @Expose()
  option_id: number;
}

export class OptionId {
  @Expose()
  option_id: number;
}

// DTO for the stock status, needed to determine availability
export class StockDto {
  @Expose({ name: 'is_in_stock' })
  isInStock: boolean;
}

@Exclude()
export class YakabooBookSourceDto {
  @Expose({ name: 'id' })
  bookId: number;

  @Expose()
  name: string;

  @Expose({ name: 'url_key' })
  slug: string;

  @Expose()
  @Type(() => AuthorLabelDto)
  author_label: AuthorLabelDto[];

  @Expose()
  @Type(() => PublisherLabelDto)
  book_publisher_label: PublisherLabelDto[];

  @Expose()
  @Type(() => LangLabelDto)
  book_lang_label: LangLabelDto[];

  @Expose()
  @Type(() => BindingLabelDto)
  book_binding_label: BindingLabelDto[];

  @Expose()
  @Type(() => PublicationLable)
  book_publication_label: PublicationLable[];

  @Expose()
  @Type(() => OptionId)
  book_option_id: OptionId[];

  @Expose()
  @Type(() => PageCountLabelDto)
  book_page_count_label: PageCountLabelDto[];

  @Expose({ name: 'book_year' })
  year: number;

  @Expose()
  description: string;

  @Expose()
  price: number;

  @Expose({ name: 'image' })
  imageUrl: string;

  @Expose()
  @Type(() => BookIsbnLabelDto)
  book_isbn_label: BookIsbnLabelDto[];

  @Expose()
  @Type(() => StockDto)
  stock: StockDto[];
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
    }) as YakabooResponseDto;
  }
}
