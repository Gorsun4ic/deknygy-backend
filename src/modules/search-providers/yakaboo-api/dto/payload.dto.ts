import {
  IsString,
  IsNumber,
  IsArray,
  IsBoolean,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

// --- DTO for boost object inside match_phrase ---
class QueryBoostDto {
  @IsString()
  query: string;

  @IsNumber()
  boost: number;
}

// --- DTO for "match_phrase" object ---
class MatchPhraseDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => QueryBoostDto)
  sku?: QueryBoostDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => QueryBoostDto)
  ['configurable_children.sku']?: QueryBoostDto;
}

// --- DTO for "terms" object inside the should array's bool query ---
class ConfigurableTermsDto {
  @IsArray()
  @IsString({ each: true })
  ['configurable_children.sku']: string[];
}

// --- DTO for an item in the nested "should" array (inside multi_match) ---
class NestedBoolShouldItemDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => ConfigurableTermsDto)
  terms?: ConfigurableTermsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => MatchPhraseDto)
  match_phrase?: MatchPhraseDto;
}

// --- DTO for the nested "bool" object inside "function_score" -> "query" -> "should" ---
class NestedBoolDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NestedBoolShouldItemDto)
  should: NestedBoolShouldItemDto[];
}

// --- DTO for the object inside the "should" array (main part) ---
class BoolShouldDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => MultiMatchDto)
  multi_match?: MultiMatchDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => NestedBoolDto)
  bool?: NestedBoolDto; // For the inner bool query
}

// --- DTO for the "multi_match" object ---
class MultiMatchDto {
  @IsArray()
  @IsString({ each: true })
  fields: string[];

  @IsString()
  query: string;

  @IsNumber()
  fuzziness: number;

  @IsString()
  minimum_should_match: string;

  @IsString()
  operator: string;

  @IsNumber()
  cutoff_frequency: number;

  @IsNumber()
  max_expansions: number;

  @IsNumber()
  prefix_length: number;

  @IsNumber()
  tie_breaker: string;
}

// --- DTO for the nested "bool" object inside "function_score" -> "query" ---
class FunctionScoreQueryBoolDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BoolShouldDto)
  should: BoolShouldDto[];
}

// --- DTO for the "query" object inside "function_score" ---
class FunctionScoreQueryDto {
  @ValidateNested()
  @Type(() => FunctionScoreQueryBoolDto)
  bool: FunctionScoreQueryBoolDto;
}

// --- DTO for the "match" object inside "filter" in "functions" array ---
class MatchDto {
  @IsOptional()
  @IsString()
  attribute_code?: string;

  @IsOptional()
  @IsString()
  ['stock.is_in_stock']?: string;
}

// --- DTO for the "filter" object inside "functions" array ---
class FunctionFilterDto {
  @ValidateNested()
  @Type(() => MatchDto)
  match: MatchDto;
}

// --- DTO for the "params" object inside "script" (FIXED THE PARSING ERROR HERE) ---
class ScriptParamsDto {
  @IsArray()
  @IsString({ each: true })
  sortArray: string[];
}

// --- DTO for the "script" object inside "script_score" ---
class ScriptDto {
  @ValidateNested()
  @Type(() => ScriptParamsDto) // Use the new DTO for params
  params: ScriptParamsDto;

  @IsString()
  source: string;
}

// --- DTO for the "script_score" object ---
class ScriptScoreDto {
  @ValidateNested()
  @Type(() => ScriptDto)
  script: ScriptDto;
}

// --- DTO for the "field_value_factor" object ---
class FieldValueFactorDto {
  @IsString()
  field: string;

  @IsString()
  modifier: string;

  @IsNumber()
  missing: number;
}

// --- DTO for an item in the "functions" array (Handles all three types) ---
class FunctionScoreFunctionDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => FunctionFilterDto)
  filter?: FunctionFilterDto;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ScriptScoreDto)
  script_score?: ScriptScoreDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => FieldValueFactorDto)
  field_value_factor?: FieldValueFactorDto;
}

// --- DTO for the "function_score" object ---
class FunctionScoreDto {
  @ValidateNested()
  @Type(() => FunctionScoreQueryDto)
  query: FunctionScoreQueryDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FunctionScoreFunctionDto)
  functions: FunctionScoreFunctionDto[];

  @IsString()
  boost_mode: string;

  @IsString()
  score_mode: string;
}

// --- DTO for the "terms" object inside the "filter" array (FIXED ISNUMBER) ---
class TermsDto {
  @IsArray()
  @IsNumber({}, { each: true }) // Corrected IsNumber array usage
  visibility?: number[];

  @IsArray()
  @IsNumber({}, { each: true }) // Corrected IsNumber array usage
  status?: number[];
}

// --- DTO for an item in the "filter" -> "bool" -> "must" array ---
class FilterMustDto {
  @ValidateNested()
  @Type(() => TermsDto)
  terms: TermsDto;
}

// --- DTO for the "bool" object inside "filter" ---
class FilterBoolDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterMustDto)
  must: FilterMustDto[];
}

// --- DTO for the "bool" object that contains "must" and "filter" ---
class QueryBoolDto {
  @ValidateNested()
  @Type(() => FunctionScoreDto)
  must: { function_score: FunctionScoreDto };

  @ValidateNested()
  @Type(() => FilterBoolDto)
  filter: { bool: FilterBoolDto };
}

// --- DTO for the top-level "query" object ---
class QueryDto {
  @ValidateNested()
  @Type(() => QueryBoolDto)
  bool: QueryBoolDto;
}

// --- The final, top-level DTO for the entire payload ---
export class YakabooSearchPayloadDto {
  @ValidateNested()
  @Type(() => QueryDto)
  query: QueryDto;

  @IsBoolean()
  track_total_hits: boolean;

  @IsNumber()
  min_score: number;
}
