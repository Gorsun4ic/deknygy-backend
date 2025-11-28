import {
  IsString,
  IsNumber,
  IsArray,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// --- DTO for the "multi_match" object ---
// Fixes: Corrected the `fields` decorator to use `{ each: true }`
// with @IsString(), not @ValidateNested(). Also fixed typo in property name.
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
}

// --- DTO for the object inside the "should" array ---
class BoolShouldDto {
  @ValidateNested()
  @Type(() => MultiMatchDto)
  multi_match: MultiMatchDto;
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

// --- DTO for the "field_value_factor" object ---
class FieldValueFactorDto {
  @IsString()
  field: string;

  @IsString()
  modifier: string;

  @IsNumber()
  missing: number;
}

// --- DTO for an item in the "functions" array ---
class FunctionScoreFunctionDto {
  @ValidateNested()
  @Type(() => FieldValueFactorDto)
  field_value_factor: FieldValueFactorDto;
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

// --- DTO for the "terms" object inside the "filter" array ---
// Fixes: Replaced `@ValidateNested({ each: true })` with the correct
// `@IsNumber({}, { each: true })` for arrays of numbers.
class TermsDto {
  @IsArray()
  @IsNumber({}, { each: true })
  visibility?: number[];

  @IsArray()
  @IsNumber({}, { each: true })
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
// Fixes: This class correctly separates "must" and "filter" into two distinct
// properties, matching the JSON structure.
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
  size: number;
}
