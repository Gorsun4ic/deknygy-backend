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
                      operator: 'or',
                      cutoff_frequency: 0.01,
                      max_expansions: 3,
                      prefix_length: 2,
                      tie_breaker: '1',
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

export function createYakabooAuthorSearchPayload(
  searchQuery: string,
  searchFuzziness: number,
  searchMinMatch: string,
): YakabooSearchPayloadDto {
  return {
    query: {
      bool: {
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
        must: {
          function_score: {
            functions: [
              {
                filter: {
                  match: {
                    attribute_code: 'attribute_value',
                  },
                },
                weight: 1,
              },
              {
                filter: {
                  match: {
                    'stock.is_in_stock': 'true',
                  },
                },
                weight: 2,
              },
              {
                script_score: {
                  script: {
                    params: {
                      sortArray: [
                        '1426098',
                        '1471090',
                        '1489403',
                        '1401533',
                        '1466246',
                        '1140056',
                        '940324',
                        '1245230',
                        '916756',
                        '1465173',
                        '1331409',
                        '747628',
                        '1502229',
                        '1401498',
                        '1396006',
                        '1289846',
                        '1262962',
                        '1494621',
                        '1497373',
                        '20500530',
                        '878160',
                        '1203240',
                      ],
                    },
                    source:
                      "def sortArray = params.sortArray; def fieldToSort = 'sku'; def value = doc[fieldToSort].value; return sortArray.contains(value) ? (sortArray.size() - sortArray.indexOf(value)) * _score : 1",
                  },
                },
              },
              {
                field_value_factor: {
                  field: 'statistics_visits',
                  modifier: 'log1p',
                  missing: 1,
                },
              },
            ],
            score_mode: 'sum',
            boost_mode: 'sum',
            query: {
              bool: {
                should: [
                  {
                    multi_match: {
                      fields: ['author_label.label^2'],
                      query: searchQuery,
                      operator: 'or',
                      fuzziness: searchFuzziness,
                      cutoff_frequency: 0.01,
                      max_expansions: 3,
                      prefix_length: 2,
                      minimum_should_match: searchMinMatch,
                      tie_breaker: '1',
                    },
                  },
                  {
                    bool: {
                      should: [
                        {
                          terms: {
                            'configurable_children.sku': [searchQuery],
                          },
                        },
                        {
                          match_phrase: {
                            sku: {
                              query: searchQuery,
                              boost: 1,
                            },
                          },
                        },
                        {
                          match_phrase: {
                            'configurable_children.sku': {
                              query: searchQuery,
                              boost: 1,
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    track_total_hits: true,
    min_score: 0.02,
  };
}

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

export function createYakabooIsbnSearchPayload(
  searchQuery: string,
  searchFuzziness: number,
  searchMinMatch: string,
): YakabooSearchPayloadDto {
  return {
    query: {
      bool: {
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
        must: {
          function_score: {
            functions: [
              {
                filter: {
                  match: {
                    attribute_code: 'attribute_value',
                  },
                },
                weight: 1,
              },
              {
                filter: {
                  match: {
                    'stock.is_in_stock': 'true',
                  },
                },
                weight: 2,
              },
              {
                script_score: {
                  script: {
                    params: {
                      sortArray: [
                        '1426098',
                        '1471090',
                        '1489403',
                        '1401533',
                        '1466246',
                        '1140056',
                        '940324',
                        '1245230',
                        '916756',
                        '1465173',
                        '1331409',
                        '747628',
                        '1502229',
                        '1401498',
                        '1396006',
                        '1289846',
                        '1262962',
                        '1494621',
                        '1497373',
                        '20500530',
                        '878160',
                        '1203240',
                      ],
                    },
                    source:
                      "def sortArray = params.sortArray; def fieldToSort = 'sku'; def value = doc[fieldToSort].value; return sortArray.contains(value) ? (sortArray.size() - sortArray.indexOf(value)) * _score : 1",
                  },
                },
              },
              {
                field_value_factor: {
                  field: 'statistics_visits',
                  modifier: 'log1p',
                  missing: 1,
                },
              },
            ],
            score_mode: 'sum',
            boost_mode: 'sum',
            query: {
              bool: {
                should: [
                  {
                    multi_match: {
                      fields: ['barcode^2'],
                      query: searchQuery,
                      operator: 'or',
                      fuzziness: searchFuzziness,
                      cutoff_frequency: 0.01,
                      max_expansions: 3,
                      prefix_length: 2,
                      minimum_should_match: searchMinMatch,
                      tie_breaker: '1',
                    },
                  },
                  {
                    bool: {
                      should: [
                        {
                          terms: {
                            'configurable_children.sku': [searchQuery],
                          },
                        },
                        {
                          match_phrase: {
                            sku: {
                              query: searchQuery,
                              boost: 1,
                            },
                          },
                        },
                        {
                          match_phrase: {
                            'configurable_children.sku': {
                              query: searchQuery,
                              boost: 1,
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    track_total_hits: true,
    min_score: 0.02,
  };
}
