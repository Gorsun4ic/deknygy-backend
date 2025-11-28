import { YakabooSearchPayloadDto } from './dto/payload.dto';

/**
 * Creates and returns a new YakabooSearchPayloadDto object with dynamic parameters.
 * This function acts as a factory, centralizing the logic for building a complex query
 * specifically for the Yakaboo API.
 * @param searchQuery The main search term.
 * @param searchFuzziness The fuzziness level for the search.
 * @param searchMinMatch The minimum match percentage for the search.
 * @param searchSize The number of results to return.
 * @returns An instance of YakabooSearchPayloadDto.
 */

export function createYakabooSearchPayload(
  searchQuery: string,
  searchFuzziness: number,
  searchMinMatch: string,
  searchSize: number,
): YakabooSearchPayloadDto {
  // Validate inputs to ensure no null/undefined values
  if (!searchQuery) {
    throw new Error('searchQuery cannot be empty');
  }
  if (searchFuzziness == null || isNaN(searchFuzziness)) {
    throw new Error(
      `searchFuzziness must be a valid number, got: ${searchFuzziness}`,
    );
  }
  if (!searchMinMatch) {
    throw new Error('searchMinMatch cannot be empty');
  }
  if (searchSize == null || isNaN(searchSize)) {
    throw new Error(`searchSize must be a valid number, got: ${searchSize}`);
  }

  // Ensure fuzziness is a valid number (can be decimal like 1.5)
  const fuzziness =
    typeof searchFuzziness === 'number'
      ? searchFuzziness
      : Number(searchFuzziness);

  return {
    query: {
      bool: {
        must: {
          function_score: {
            query: {
              bool: {
                should: [
                  {
                    multi_match: {
                      fields: [
                        'name^4',
                        'sku^5',
                        'category.name^1',
                        'author_label.label^2',
                        'book_publisher_label.label^2',
                        'gift_brand_label.label^2',
                        'keywords^3',
                        'children_brand_label.label^2',
                      ],
                      query: searchQuery,
                      fuzziness: fuzziness,
                      minimum_should_match: searchMinMatch,
                    },
                  },
                ],
              },
            },
            functions: [
              {
                field_value_factor: {
                  field: 'statistics_visits',
                  modifier: 'log1p',
                  missing: 1,
                },
              },
            ],
            boost_mode: 'sum',
            score_mode: 'sum',
          },
        },
        filter: {
          bool: {
            must: [
              {
                terms: {
                  visibility: [2, 3, 4],
                },
              },
              {
                terms: {
                  status: [0, 1],
                },
              },
            ],
          },
        },
      },
    },
    track_total_hits: true,
    size: searchSize,
  };
}
