
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Format
 * 
 */
export type Format = $Result.DefaultSelection<Prisma.$FormatPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model FeedbackCategory
 * 
 */
export type FeedbackCategory = $Result.DefaultSelection<Prisma.$FeedbackCategoryPayload>
/**
 * Model SearchLog
 * 
 */
export type SearchLog = $Result.DefaultSelection<Prisma.$SearchLogPayload>
/**
 * Model SentMessage
 * 
 */
export type SentMessage = $Result.DefaultSelection<Prisma.$SentMessagePayload>
/**
 * Model StoreStatistic
 * 
 */
export type StoreStatistic = $Result.DefaultSelection<Prisma.$StoreStatisticPayload>
/**
 * Model UnsuccessfulSearch
 * 
 */
export type UnsuccessfulSearch = $Result.DefaultSelection<Prisma.$UnsuccessfulSearchPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Query
 * 
 */
export type Query = $Result.DefaultSelection<Prisma.$QueryPayload>
/**
 * Model WeeklyBroadcast
 * 
 */
export type WeeklyBroadcast = $Result.DefaultSelection<Prisma.$WeeklyBroadcastPayload>
/**
 * Model BookPrice
 * 
 */
export type BookPrice = $Result.DefaultSelection<Prisma.$BookPricePayload>
/**
 * Model CacheLog
 * 
 */
export type CacheLog = $Result.DefaultSelection<Prisma.$CacheLogPayload>
/**
 * Model ViewedBook
 * 
 */
export type ViewedBook = $Result.DefaultSelection<Prisma.$ViewedBookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FeedbackType: {
  CUSTOM: 'CUSTOM',
  STRUCTURED: 'STRUCTURED'
};

export type FeedbackType = (typeof FeedbackType)[keyof typeof FeedbackType]

}

export type FeedbackType = $Enums.FeedbackType

export const FeedbackType: typeof $Enums.FeedbackType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.format`: Exposes CRUD operations for the **Format** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formats
    * const formats = await prisma.format.findMany()
    * ```
    */
  get format(): Prisma.FormatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackCategory`: Exposes CRUD operations for the **FeedbackCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackCategories
    * const feedbackCategories = await prisma.feedbackCategory.findMany()
    * ```
    */
  get feedbackCategory(): Prisma.FeedbackCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchLog`: Exposes CRUD operations for the **SearchLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchLogs
    * const searchLogs = await prisma.searchLog.findMany()
    * ```
    */
  get searchLog(): Prisma.SearchLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentMessage`: Exposes CRUD operations for the **SentMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentMessages
    * const sentMessages = await prisma.sentMessage.findMany()
    * ```
    */
  get sentMessage(): Prisma.SentMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeStatistic`: Exposes CRUD operations for the **StoreStatistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreStatistics
    * const storeStatistics = await prisma.storeStatistic.findMany()
    * ```
    */
  get storeStatistic(): Prisma.StoreStatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unsuccessfulSearch`: Exposes CRUD operations for the **UnsuccessfulSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnsuccessfulSearches
    * const unsuccessfulSearches = await prisma.unsuccessfulSearch.findMany()
    * ```
    */
  get unsuccessfulSearch(): Prisma.UnsuccessfulSearchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.query`: Exposes CRUD operations for the **Query** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queries
    * const queries = await prisma.query.findMany()
    * ```
    */
  get query(): Prisma.QueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyBroadcast`: Exposes CRUD operations for the **WeeklyBroadcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyBroadcasts
    * const weeklyBroadcasts = await prisma.weeklyBroadcast.findMany()
    * ```
    */
  get weeklyBroadcast(): Prisma.WeeklyBroadcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookPrice`: Exposes CRUD operations for the **BookPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookPrices
    * const bookPrices = await prisma.bookPrice.findMany()
    * ```
    */
  get bookPrice(): Prisma.BookPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cacheLog`: Exposes CRUD operations for the **CacheLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CacheLogs
    * const cacheLogs = await prisma.cacheLog.findMany()
    * ```
    */
  get cacheLog(): Prisma.CacheLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewedBook`: Exposes CRUD operations for the **ViewedBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewedBooks
    * const viewedBooks = await prisma.viewedBook.findMany()
    * ```
    */
  get viewedBook(): Prisma.ViewedBookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Book: 'Book',
    Format: 'Format',
    Store: 'Store',
    Feedback: 'Feedback',
    FeedbackCategory: 'FeedbackCategory',
    SearchLog: 'SearchLog',
    SentMessage: 'SentMessage',
    StoreStatistic: 'StoreStatistic',
    UnsuccessfulSearch: 'UnsuccessfulSearch',
    User: 'User',
    Query: 'Query',
    WeeklyBroadcast: 'WeeklyBroadcast',
    BookPrice: 'BookPrice',
    CacheLog: 'CacheLog',
    ViewedBook: 'ViewedBook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "book" | "format" | "store" | "feedback" | "feedbackCategory" | "searchLog" | "sentMessage" | "storeStatistic" | "unsuccessfulSearch" | "user" | "query" | "weeklyBroadcast" | "bookPrice" | "cacheLog" | "viewedBook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Format: {
        payload: Prisma.$FormatPayload<ExtArgs>
        fields: Prisma.FormatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          findFirst: {
            args: Prisma.FormatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          findMany: {
            args: Prisma.FormatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          create: {
            args: Prisma.FormatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          createMany: {
            args: Prisma.FormatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          delete: {
            args: Prisma.FormatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          update: {
            args: Prisma.FormatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          deleteMany: {
            args: Prisma.FormatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>[]
          }
          upsert: {
            args: Prisma.FormatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormatPayload>
          }
          aggregate: {
            args: Prisma.FormatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormat>
          }
          groupBy: {
            args: Prisma.FormatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormatCountArgs<ExtArgs>
            result: $Utils.Optional<FormatCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      FeedbackCategory: {
        payload: Prisma.$FeedbackCategoryPayload<ExtArgs>
        fields: Prisma.FeedbackCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          findFirst: {
            args: Prisma.FeedbackCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          findMany: {
            args: Prisma.FeedbackCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>[]
          }
          create: {
            args: Prisma.FeedbackCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          createMany: {
            args: Prisma.FeedbackCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>[]
          }
          delete: {
            args: Prisma.FeedbackCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          update: {
            args: Prisma.FeedbackCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackCategoryPayload>
          }
          aggregate: {
            args: Prisma.FeedbackCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackCategory>
          }
          groupBy: {
            args: Prisma.FeedbackCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCategoryCountAggregateOutputType> | number
          }
        }
      }
      SearchLog: {
        payload: Prisma.$SearchLogPayload<ExtArgs>
        fields: Prisma.SearchLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          findFirst: {
            args: Prisma.SearchLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          findMany: {
            args: Prisma.SearchLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>[]
          }
          create: {
            args: Prisma.SearchLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          createMany: {
            args: Prisma.SearchLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>[]
          }
          delete: {
            args: Prisma.SearchLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          update: {
            args: Prisma.SearchLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          deleteMany: {
            args: Prisma.SearchLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>[]
          }
          upsert: {
            args: Prisma.SearchLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchLogPayload>
          }
          aggregate: {
            args: Prisma.SearchLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchLog>
          }
          groupBy: {
            args: Prisma.SearchLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchLogCountArgs<ExtArgs>
            result: $Utils.Optional<SearchLogCountAggregateOutputType> | number
          }
        }
      }
      SentMessage: {
        payload: Prisma.$SentMessagePayload<ExtArgs>
        fields: Prisma.SentMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          findFirst: {
            args: Prisma.SentMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          findMany: {
            args: Prisma.SentMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>[]
          }
          create: {
            args: Prisma.SentMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          createMany: {
            args: Prisma.SentMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>[]
          }
          delete: {
            args: Prisma.SentMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          update: {
            args: Prisma.SentMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          deleteMany: {
            args: Prisma.SentMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>[]
          }
          upsert: {
            args: Prisma.SentMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentMessagePayload>
          }
          aggregate: {
            args: Prisma.SentMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentMessage>
          }
          groupBy: {
            args: Prisma.SentMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SentMessageCountAggregateOutputType> | number
          }
        }
      }
      StoreStatistic: {
        payload: Prisma.$StoreStatisticPayload<ExtArgs>
        fields: Prisma.StoreStatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreStatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreStatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          findFirst: {
            args: Prisma.StoreStatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreStatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          findMany: {
            args: Prisma.StoreStatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>[]
          }
          create: {
            args: Prisma.StoreStatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          createMany: {
            args: Prisma.StoreStatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreStatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>[]
          }
          delete: {
            args: Prisma.StoreStatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          update: {
            args: Prisma.StoreStatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          deleteMany: {
            args: Prisma.StoreStatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreStatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreStatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>[]
          }
          upsert: {
            args: Prisma.StoreStatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatisticPayload>
          }
          aggregate: {
            args: Prisma.StoreStatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreStatistic>
          }
          groupBy: {
            args: Prisma.StoreStatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreStatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreStatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StoreStatisticCountAggregateOutputType> | number
          }
        }
      }
      UnsuccessfulSearch: {
        payload: Prisma.$UnsuccessfulSearchPayload<ExtArgs>
        fields: Prisma.UnsuccessfulSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnsuccessfulSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnsuccessfulSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          findFirst: {
            args: Prisma.UnsuccessfulSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnsuccessfulSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          findMany: {
            args: Prisma.UnsuccessfulSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>[]
          }
          create: {
            args: Prisma.UnsuccessfulSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          createMany: {
            args: Prisma.UnsuccessfulSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnsuccessfulSearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>[]
          }
          delete: {
            args: Prisma.UnsuccessfulSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          update: {
            args: Prisma.UnsuccessfulSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          deleteMany: {
            args: Prisma.UnsuccessfulSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnsuccessfulSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnsuccessfulSearchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>[]
          }
          upsert: {
            args: Prisma.UnsuccessfulSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnsuccessfulSearchPayload>
          }
          aggregate: {
            args: Prisma.UnsuccessfulSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnsuccessfulSearch>
          }
          groupBy: {
            args: Prisma.UnsuccessfulSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnsuccessfulSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnsuccessfulSearchCountArgs<ExtArgs>
            result: $Utils.Optional<UnsuccessfulSearchCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Query: {
        payload: Prisma.$QueryPayload<ExtArgs>
        fields: Prisma.QueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findFirst: {
            args: Prisma.QueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findMany: {
            args: Prisma.QueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          create: {
            args: Prisma.QueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          createMany: {
            args: Prisma.QueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          delete: {
            args: Prisma.QueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          update: {
            args: Prisma.QueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          deleteMany: {
            args: Prisma.QueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          upsert: {
            args: Prisma.QueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          aggregate: {
            args: Prisma.QueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuery>
          }
          groupBy: {
            args: Prisma.QueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryCountAggregateOutputType> | number
          }
        }
      }
      WeeklyBroadcast: {
        payload: Prisma.$WeeklyBroadcastPayload<ExtArgs>
        fields: Prisma.WeeklyBroadcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyBroadcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyBroadcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          findFirst: {
            args: Prisma.WeeklyBroadcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyBroadcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          findMany: {
            args: Prisma.WeeklyBroadcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>[]
          }
          create: {
            args: Prisma.WeeklyBroadcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          createMany: {
            args: Prisma.WeeklyBroadcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyBroadcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>[]
          }
          delete: {
            args: Prisma.WeeklyBroadcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          update: {
            args: Prisma.WeeklyBroadcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyBroadcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyBroadcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyBroadcastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyBroadcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBroadcastPayload>
          }
          aggregate: {
            args: Prisma.WeeklyBroadcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyBroadcast>
          }
          groupBy: {
            args: Prisma.WeeklyBroadcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyBroadcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyBroadcastCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyBroadcastCountAggregateOutputType> | number
          }
        }
      }
      BookPrice: {
        payload: Prisma.$BookPricePayload<ExtArgs>
        fields: Prisma.BookPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          findFirst: {
            args: Prisma.BookPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          findMany: {
            args: Prisma.BookPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>[]
          }
          create: {
            args: Prisma.BookPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          createMany: {
            args: Prisma.BookPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>[]
          }
          delete: {
            args: Prisma.BookPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          update: {
            args: Prisma.BookPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          deleteMany: {
            args: Prisma.BookPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>[]
          }
          upsert: {
            args: Prisma.BookPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPricePayload>
          }
          aggregate: {
            args: Prisma.BookPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookPrice>
          }
          groupBy: {
            args: Prisma.BookPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookPriceCountArgs<ExtArgs>
            result: $Utils.Optional<BookPriceCountAggregateOutputType> | number
          }
        }
      }
      CacheLog: {
        payload: Prisma.$CacheLogPayload<ExtArgs>
        fields: Prisma.CacheLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CacheLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CacheLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          findFirst: {
            args: Prisma.CacheLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CacheLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          findMany: {
            args: Prisma.CacheLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>[]
          }
          create: {
            args: Prisma.CacheLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          createMany: {
            args: Prisma.CacheLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CacheLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>[]
          }
          delete: {
            args: Prisma.CacheLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          update: {
            args: Prisma.CacheLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          deleteMany: {
            args: Prisma.CacheLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CacheLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CacheLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>[]
          }
          upsert: {
            args: Prisma.CacheLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CacheLogPayload>
          }
          aggregate: {
            args: Prisma.CacheLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCacheLog>
          }
          groupBy: {
            args: Prisma.CacheLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CacheLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CacheLogCountArgs<ExtArgs>
            result: $Utils.Optional<CacheLogCountAggregateOutputType> | number
          }
        }
      }
      ViewedBook: {
        payload: Prisma.$ViewedBookPayload<ExtArgs>
        fields: Prisma.ViewedBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewedBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewedBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          findFirst: {
            args: Prisma.ViewedBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewedBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          findMany: {
            args: Prisma.ViewedBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>[]
          }
          create: {
            args: Prisma.ViewedBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          createMany: {
            args: Prisma.ViewedBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewedBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>[]
          }
          delete: {
            args: Prisma.ViewedBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          update: {
            args: Prisma.ViewedBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          deleteMany: {
            args: Prisma.ViewedBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewedBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewedBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>[]
          }
          upsert: {
            args: Prisma.ViewedBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedBookPayload>
          }
          aggregate: {
            args: Prisma.ViewedBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewedBook>
          }
          groupBy: {
            args: Prisma.ViewedBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewedBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewedBookCountArgs<ExtArgs>
            result: $Utils.Optional<ViewedBookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    book?: BookOmit
    format?: FormatOmit
    store?: StoreOmit
    feedback?: FeedbackOmit
    feedbackCategory?: FeedbackCategoryOmit
    searchLog?: SearchLogOmit
    sentMessage?: SentMessageOmit
    storeStatistic?: StoreStatisticOmit
    unsuccessfulSearch?: UnsuccessfulSearchOmit
    user?: UserOmit
    query?: QueryOmit
    weeklyBroadcast?: WeeklyBroadcastOmit
    bookPrice?: BookPriceOmit
    cacheLog?: CacheLogOmit
    viewedBook?: ViewedBookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    prices: number
    cacheLogs: number
    viewedBooks: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | BookCountOutputTypeCountPricesArgs
    cacheLogs?: boolean | BookCountOutputTypeCountCacheLogsArgs
    viewedBooks?: boolean | BookCountOutputTypeCountViewedBooksArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookPriceWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCacheLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CacheLogWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountViewedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedBookWhereInput
  }


  /**
   * Count Type FormatCountOutputType
   */

  export type FormatCountOutputType = {
    books: number
  }

  export type FormatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | FormatCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * FormatCountOutputType without action
   */
  export type FormatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormatCountOutputType
     */
    select?: FormatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormatCountOutputType without action
   */
  export type FormatCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    books: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | StoreCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type FeedbackCategoryCountOutputType
   */

  export type FeedbackCategoryCountOutputType = {
    feedbacks: number
  }

  export type FeedbackCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | FeedbackCategoryCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * FeedbackCategoryCountOutputType without action
   */
  export type FeedbackCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategoryCountOutputType
     */
    select?: FeedbackCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackCategoryCountOutputType without action
   */
  export type FeedbackCategoryCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type SearchLogCountOutputType
   */

  export type SearchLogCountOutputType = {
    viewedBooks: number
  }

  export type SearchLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viewedBooks?: boolean | SearchLogCountOutputTypeCountViewedBooksArgs
  }

  // Custom InputTypes
  /**
   * SearchLogCountOutputType without action
   */
  export type SearchLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLogCountOutputType
     */
    select?: SearchLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SearchLogCountOutputType without action
   */
  export type SearchLogCountOutputTypeCountViewedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedBookWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    feedbacks: number
    searchLogs: number
    sentMessages: number
    weeklyBroadcasts: number
    unsuccessfulSearches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
    searchLogs?: boolean | UserCountOutputTypeCountSearchLogsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    weeklyBroadcasts?: boolean | UserCountOutputTypeCountWeeklyBroadcastsArgs
    unsuccessfulSearches?: boolean | UserCountOutputTypeCountUnsuccessfulSearchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyBroadcastWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUnsuccessfulSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnsuccessfulSearchWhereInput
  }


  /**
   * Count Type QueryCountOutputType
   */

  export type QueryCountOutputType = {
    books: number
    searchLogs: number
    unsuccessfulSearches: number
    cacheLogs: number
  }

  export type QueryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | QueryCountOutputTypeCountBooksArgs
    searchLogs?: boolean | QueryCountOutputTypeCountSearchLogsArgs
    unsuccessfulSearches?: boolean | QueryCountOutputTypeCountUnsuccessfulSearchesArgs
    cacheLogs?: boolean | QueryCountOutputTypeCountCacheLogsArgs
  }

  // Custom InputTypes
  /**
   * QueryCountOutputType without action
   */
  export type QueryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryCountOutputType
     */
    select?: QueryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QueryCountOutputType without action
   */
  export type QueryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * QueryCountOutputType without action
   */
  export type QueryCountOutputTypeCountSearchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchLogWhereInput
  }

  /**
   * QueryCountOutputType without action
   */
  export type QueryCountOutputTypeCountUnsuccessfulSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnsuccessfulSearchWhereInput
  }

  /**
   * QueryCountOutputType without action
   */
  export type QueryCountOutputTypeCountCacheLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CacheLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    queryId: number | null
    storeId: number | null
    formatId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    queryId: number | null
    storeId: number | null
    formatId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    available: boolean | null
    queryId: number | null
    storeId: number | null
    formatId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    available: boolean | null
    queryId: number | null
    storeId: number | null
    formatId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    link: number
    available: number
    queryId: number
    storeId: number
    formatId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    queryId?: true
    storeId?: true
    formatId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    queryId?: true
    storeId?: true
    formatId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    available?: true
    queryId?: true
    storeId?: true
    formatId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    available?: true
    queryId?: true
    storeId?: true
    formatId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    available?: true
    queryId?: true
    storeId?: true
    formatId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    link: string
    available: boolean
    queryId: number | null
    storeId: number
    formatId: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    available?: boolean
    queryId?: boolean
    storeId?: boolean
    formatId?: boolean
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
    prices?: boolean | Book$pricesArgs<ExtArgs>
    cacheLogs?: boolean | Book$cacheLogsArgs<ExtArgs>
    viewedBooks?: boolean | Book$viewedBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    available?: boolean
    queryId?: boolean
    storeId?: boolean
    formatId?: boolean
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    available?: boolean
    queryId?: boolean
    storeId?: boolean
    formatId?: boolean
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    available?: boolean
    queryId?: boolean
    storeId?: boolean
    formatId?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "link" | "available" | "queryId" | "storeId" | "formatId", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
    prices?: boolean | Book$pricesArgs<ExtArgs>
    cacheLogs?: boolean | Book$cacheLogsArgs<ExtArgs>
    viewedBooks?: boolean | Book$viewedBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | Book$queryArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    format?: boolean | FormatDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      query: Prisma.$QueryPayload<ExtArgs> | null
      store: Prisma.$StorePayload<ExtArgs>
      format: Prisma.$FormatPayload<ExtArgs>
      prices: Prisma.$BookPricePayload<ExtArgs>[]
      cacheLogs: Prisma.$CacheLogPayload<ExtArgs>[]
      viewedBooks: Prisma.$ViewedBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      link: string
      available: boolean
      queryId: number | null
      storeId: number
      formatId: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    query<T extends Book$queryArgs<ExtArgs> = {}>(args?: Subset<T, Book$queryArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    format<T extends FormatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormatDefaultArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prices<T extends Book$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Book$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cacheLogs<T extends Book$cacheLogsArgs<ExtArgs> = {}>(args?: Subset<T, Book$cacheLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedBooks<T extends Book$viewedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$viewedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly link: FieldRef<"Book", 'String'>
    readonly available: FieldRef<"Book", 'Boolean'>
    readonly queryId: FieldRef<"Book", 'Int'>
    readonly storeId: FieldRef<"Book", 'Int'>
    readonly formatId: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.query
   */
  export type Book$queryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    where?: QueryWhereInput
  }

  /**
   * Book.prices
   */
  export type Book$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    where?: BookPriceWhereInput
    orderBy?: BookPriceOrderByWithRelationInput | BookPriceOrderByWithRelationInput[]
    cursor?: BookPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookPriceScalarFieldEnum | BookPriceScalarFieldEnum[]
  }

  /**
   * Book.cacheLogs
   */
  export type Book$cacheLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    where?: CacheLogWhereInput
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    cursor?: CacheLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CacheLogScalarFieldEnum | CacheLogScalarFieldEnum[]
  }

  /**
   * Book.viewedBooks
   */
  export type Book$viewedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    where?: ViewedBookWhereInput
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    cursor?: ViewedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewedBookScalarFieldEnum | ViewedBookScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Format
   */

  export type AggregateFormat = {
    _count: FormatCountAggregateOutputType | null
    _avg: FormatAvgAggregateOutputType | null
    _sum: FormatSumAggregateOutputType | null
    _min: FormatMinAggregateOutputType | null
    _max: FormatMaxAggregateOutputType | null
  }

  export type FormatAvgAggregateOutputType = {
    id: number | null
  }

  export type FormatSumAggregateOutputType = {
    id: number | null
  }

  export type FormatMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type FormatMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type FormatCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type FormatAvgAggregateInputType = {
    id?: true
  }

  export type FormatSumAggregateInputType = {
    id?: true
  }

  export type FormatMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type FormatMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type FormatCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type FormatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Format to aggregate.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formats
    **/
    _count?: true | FormatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormatMaxAggregateInputType
  }

  export type GetFormatAggregateType<T extends FormatAggregateArgs> = {
        [P in keyof T & keyof AggregateFormat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormat[P]>
      : GetScalarType<T[P], AggregateFormat[P]>
  }




  export type FormatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormatWhereInput
    orderBy?: FormatOrderByWithAggregationInput | FormatOrderByWithAggregationInput[]
    by: FormatScalarFieldEnum[] | FormatScalarFieldEnum
    having?: FormatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormatCountAggregateInputType | true
    _avg?: FormatAvgAggregateInputType
    _sum?: FormatSumAggregateInputType
    _min?: FormatMinAggregateInputType
    _max?: FormatMaxAggregateInputType
  }

  export type FormatGroupByOutputType = {
    id: number
    title: string
    _count: FormatCountAggregateOutputType | null
    _avg: FormatAvgAggregateOutputType | null
    _sum: FormatSumAggregateOutputType | null
    _min: FormatMinAggregateOutputType | null
    _max: FormatMaxAggregateOutputType | null
  }

  type GetFormatGroupByPayload<T extends FormatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormatGroupByOutputType[P]>
            : GetScalarType<T[P], FormatGroupByOutputType[P]>
        }
      >
    >


  export type FormatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    books?: boolean | Format$booksArgs<ExtArgs>
    _count?: boolean | FormatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["format"]>

  export type FormatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["format"]>

  export type FormatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["format"]>

  export type FormatSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type FormatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["format"]>
  export type FormatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Format$booksArgs<ExtArgs>
    _count?: boolean | FormatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Format"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["format"]>
    composites: {}
  }

  type FormatGetPayload<S extends boolean | null | undefined | FormatDefaultArgs> = $Result.GetResult<Prisma.$FormatPayload, S>

  type FormatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormatCountAggregateInputType | true
    }

  export interface FormatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Format'], meta: { name: 'Format' } }
    /**
     * Find zero or one Format that matches the filter.
     * @param {FormatFindUniqueArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormatFindUniqueArgs>(args: SelectSubset<T, FormatFindUniqueArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Format that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormatFindUniqueOrThrowArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormatFindUniqueOrThrowArgs>(args: SelectSubset<T, FormatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Format that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindFirstArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormatFindFirstArgs>(args?: SelectSubset<T, FormatFindFirstArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Format that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindFirstOrThrowArgs} args - Arguments to find a Format
     * @example
     * // Get one Format
     * const format = await prisma.format.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormatFindFirstOrThrowArgs>(args?: SelectSubset<T, FormatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formats
     * const formats = await prisma.format.findMany()
     * 
     * // Get first 10 Formats
     * const formats = await prisma.format.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formatWithIdOnly = await prisma.format.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormatFindManyArgs>(args?: SelectSubset<T, FormatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Format.
     * @param {FormatCreateArgs} args - Arguments to create a Format.
     * @example
     * // Create one Format
     * const Format = await prisma.format.create({
     *   data: {
     *     // ... data to create a Format
     *   }
     * })
     * 
     */
    create<T extends FormatCreateArgs>(args: SelectSubset<T, FormatCreateArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formats.
     * @param {FormatCreateManyArgs} args - Arguments to create many Formats.
     * @example
     * // Create many Formats
     * const format = await prisma.format.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormatCreateManyArgs>(args?: SelectSubset<T, FormatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formats and returns the data saved in the database.
     * @param {FormatCreateManyAndReturnArgs} args - Arguments to create many Formats.
     * @example
     * // Create many Formats
     * const format = await prisma.format.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formats and only return the `id`
     * const formatWithIdOnly = await prisma.format.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormatCreateManyAndReturnArgs>(args?: SelectSubset<T, FormatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Format.
     * @param {FormatDeleteArgs} args - Arguments to delete one Format.
     * @example
     * // Delete one Format
     * const Format = await prisma.format.delete({
     *   where: {
     *     // ... filter to delete one Format
     *   }
     * })
     * 
     */
    delete<T extends FormatDeleteArgs>(args: SelectSubset<T, FormatDeleteArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Format.
     * @param {FormatUpdateArgs} args - Arguments to update one Format.
     * @example
     * // Update one Format
     * const format = await prisma.format.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormatUpdateArgs>(args: SelectSubset<T, FormatUpdateArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formats.
     * @param {FormatDeleteManyArgs} args - Arguments to filter Formats to delete.
     * @example
     * // Delete a few Formats
     * const { count } = await prisma.format.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormatDeleteManyArgs>(args?: SelectSubset<T, FormatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formats
     * const format = await prisma.format.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormatUpdateManyArgs>(args: SelectSubset<T, FormatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formats and returns the data updated in the database.
     * @param {FormatUpdateManyAndReturnArgs} args - Arguments to update many Formats.
     * @example
     * // Update many Formats
     * const format = await prisma.format.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formats and only return the `id`
     * const formatWithIdOnly = await prisma.format.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormatUpdateManyAndReturnArgs>(args: SelectSubset<T, FormatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Format.
     * @param {FormatUpsertArgs} args - Arguments to update or create a Format.
     * @example
     * // Update or create a Format
     * const format = await prisma.format.upsert({
     *   create: {
     *     // ... data to create a Format
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Format we want to update
     *   }
     * })
     */
    upsert<T extends FormatUpsertArgs>(args: SelectSubset<T, FormatUpsertArgs<ExtArgs>>): Prisma__FormatClient<$Result.GetResult<Prisma.$FormatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatCountArgs} args - Arguments to filter Formats to count.
     * @example
     * // Count the number of Formats
     * const count = await prisma.format.count({
     *   where: {
     *     // ... the filter for the Formats we want to count
     *   }
     * })
    **/
    count<T extends FormatCountArgs>(
      args?: Subset<T, FormatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormatAggregateArgs>(args: Subset<T, FormatAggregateArgs>): Prisma.PrismaPromise<GetFormatAggregateType<T>>

    /**
     * Group by Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormatGroupByArgs['orderBy'] }
        : { orderBy?: FormatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Format model
   */
  readonly fields: FormatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Format.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Format$booksArgs<ExtArgs> = {}>(args?: Subset<T, Format$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Format model
   */
  interface FormatFieldRefs {
    readonly id: FieldRef<"Format", 'Int'>
    readonly title: FieldRef<"Format", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Format findUnique
   */
  export type FormatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format findUniqueOrThrow
   */
  export type FormatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format findFirst
   */
  export type FormatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format findFirstOrThrow
   */
  export type FormatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Format to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format findMany
   */
  export type FormatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter, which Formats to fetch.
     */
    where?: FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: FormatOrderByWithRelationInput | FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formats.
     */
    cursor?: FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    distinct?: FormatScalarFieldEnum | FormatScalarFieldEnum[]
  }

  /**
   * Format create
   */
  export type FormatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The data needed to create a Format.
     */
    data: XOR<FormatCreateInput, FormatUncheckedCreateInput>
  }

  /**
   * Format createMany
   */
  export type FormatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formats.
     */
    data: FormatCreateManyInput | FormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Format createManyAndReturn
   */
  export type FormatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * The data used to create many Formats.
     */
    data: FormatCreateManyInput | FormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Format update
   */
  export type FormatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The data needed to update a Format.
     */
    data: XOR<FormatUpdateInput, FormatUncheckedUpdateInput>
    /**
     * Choose, which Format to update.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format updateMany
   */
  export type FormatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formats.
     */
    data: XOR<FormatUpdateManyMutationInput, FormatUncheckedUpdateManyInput>
    /**
     * Filter which Formats to update
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to update.
     */
    limit?: number
  }

  /**
   * Format updateManyAndReturn
   */
  export type FormatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * The data used to update Formats.
     */
    data: XOR<FormatUpdateManyMutationInput, FormatUncheckedUpdateManyInput>
    /**
     * Filter which Formats to update
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to update.
     */
    limit?: number
  }

  /**
   * Format upsert
   */
  export type FormatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * The filter to search for the Format to update in case it exists.
     */
    where: FormatWhereUniqueInput
    /**
     * In case the Format found by the `where` argument doesn't exist, create a new Format with this data.
     */
    create: XOR<FormatCreateInput, FormatUncheckedCreateInput>
    /**
     * In case the Format was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormatUpdateInput, FormatUncheckedUpdateInput>
  }

  /**
   * Format delete
   */
  export type FormatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
    /**
     * Filter which Format to delete.
     */
    where: FormatWhereUniqueInput
  }

  /**
   * Format deleteMany
   */
  export type FormatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formats to delete
     */
    where?: FormatWhereInput
    /**
     * Limit how many Formats to delete.
     */
    limit?: number
  }

  /**
   * Format.books
   */
  export type Format$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Format without action
   */
  export type FormatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Format
     */
    select?: FormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Format
     */
    omit?: FormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormatInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    title: string
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    books?: boolean | Store$booksArgs<ExtArgs>
    statistics?: boolean | Store$statisticsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Store$booksArgs<ExtArgs>
    statistics?: boolean | Store$statisticsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      statistics: Prisma.$StoreStatisticPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Store$booksArgs<ExtArgs> = {}>(args?: Subset<T, Store$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statistics<T extends Store$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, Store$statisticsArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly title: FieldRef<"Store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.books
   */
  export type Store$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Store.statistics
   */
  export type Store$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    where?: StoreStatisticWhereInput
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    userId: bigint | null
    categoryId: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    type: $Enums.FeedbackType | null
    message: string | null
    categoryId: number | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    type: $Enums.FeedbackType | null
    message: string | null
    categoryId: number | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    categoryId?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    categoryId?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    userId: bigint
    type: $Enums.FeedbackType
    message: string | null
    categoryId: number | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    categoryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    categoryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    categoryId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "categoryId" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Feedback$categoryArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$FeedbackCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      type: $Enums.FeedbackType
      message: string | null
      categoryId: number | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Feedback$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$categoryArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly userId: FieldRef<"Feedback", 'BigInt'>
    readonly type: FieldRef<"Feedback", 'FeedbackType'>
    readonly message: FieldRef<"Feedback", 'String'>
    readonly categoryId: FieldRef<"Feedback", 'Int'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback.category
   */
  export type Feedback$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    where?: FeedbackCategoryWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model FeedbackCategory
   */

  export type AggregateFeedbackCategory = {
    _count: FeedbackCategoryCountAggregateOutputType | null
    _avg: FeedbackCategoryAvgAggregateOutputType | null
    _sum: FeedbackCategorySumAggregateOutputType | null
    _min: FeedbackCategoryMinAggregateOutputType | null
    _max: FeedbackCategoryMaxAggregateOutputType | null
  }

  export type FeedbackCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackCategoryMinAggregateOutputType = {
    id: number | null
    key: string | null
    description: string | null
  }

  export type FeedbackCategoryMaxAggregateOutputType = {
    id: number | null
    key: string | null
    description: string | null
  }

  export type FeedbackCategoryCountAggregateOutputType = {
    id: number
    key: number
    description: number
    _all: number
  }


  export type FeedbackCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackCategorySumAggregateInputType = {
    id?: true
  }

  export type FeedbackCategoryMinAggregateInputType = {
    id?: true
    key?: true
    description?: true
  }

  export type FeedbackCategoryMaxAggregateInputType = {
    id?: true
    key?: true
    description?: true
  }

  export type FeedbackCategoryCountAggregateInputType = {
    id?: true
    key?: true
    description?: true
    _all?: true
  }

  export type FeedbackCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackCategory to aggregate.
     */
    where?: FeedbackCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackCategories to fetch.
     */
    orderBy?: FeedbackCategoryOrderByWithRelationInput | FeedbackCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackCategories
    **/
    _count?: true | FeedbackCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackCategoryMaxAggregateInputType
  }

  export type GetFeedbackCategoryAggregateType<T extends FeedbackCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackCategory[P]>
      : GetScalarType<T[P], AggregateFeedbackCategory[P]>
  }




  export type FeedbackCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackCategoryWhereInput
    orderBy?: FeedbackCategoryOrderByWithAggregationInput | FeedbackCategoryOrderByWithAggregationInput[]
    by: FeedbackCategoryScalarFieldEnum[] | FeedbackCategoryScalarFieldEnum
    having?: FeedbackCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCategoryCountAggregateInputType | true
    _avg?: FeedbackCategoryAvgAggregateInputType
    _sum?: FeedbackCategorySumAggregateInputType
    _min?: FeedbackCategoryMinAggregateInputType
    _max?: FeedbackCategoryMaxAggregateInputType
  }

  export type FeedbackCategoryGroupByOutputType = {
    id: number
    key: string
    description: string
    _count: FeedbackCategoryCountAggregateOutputType | null
    _avg: FeedbackCategoryAvgAggregateOutputType | null
    _sum: FeedbackCategorySumAggregateOutputType | null
    _min: FeedbackCategoryMinAggregateOutputType | null
    _max: FeedbackCategoryMaxAggregateOutputType | null
  }

  type GetFeedbackCategoryGroupByPayload<T extends FeedbackCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
    feedbacks?: boolean | FeedbackCategory$feedbacksArgs<ExtArgs>
    _count?: boolean | FeedbackCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackCategory"]>

  export type FeedbackCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
  }, ExtArgs["result"]["feedbackCategory"]>

  export type FeedbackCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    description?: boolean
  }, ExtArgs["result"]["feedbackCategory"]>

  export type FeedbackCategorySelectScalar = {
    id?: boolean
    key?: boolean
    description?: boolean
  }

  export type FeedbackCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "description", ExtArgs["result"]["feedbackCategory"]>
  export type FeedbackCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | FeedbackCategory$feedbacksArgs<ExtArgs>
    _count?: boolean | FeedbackCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedbackCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeedbackCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeedbackCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackCategory"
    objects: {
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      description: string
    }, ExtArgs["result"]["feedbackCategory"]>
    composites: {}
  }

  type FeedbackCategoryGetPayload<S extends boolean | null | undefined | FeedbackCategoryDefaultArgs> = $Result.GetResult<Prisma.$FeedbackCategoryPayload, S>

  type FeedbackCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCategoryCountAggregateInputType | true
    }

  export interface FeedbackCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackCategory'], meta: { name: 'FeedbackCategory' } }
    /**
     * Find zero or one FeedbackCategory that matches the filter.
     * @param {FeedbackCategoryFindUniqueArgs} args - Arguments to find a FeedbackCategory
     * @example
     * // Get one FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackCategoryFindUniqueArgs>(args: SelectSubset<T, FeedbackCategoryFindUniqueArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackCategoryFindUniqueOrThrowArgs} args - Arguments to find a FeedbackCategory
     * @example
     * // Get one FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryFindFirstArgs} args - Arguments to find a FeedbackCategory
     * @example
     * // Get one FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackCategoryFindFirstArgs>(args?: SelectSubset<T, FeedbackCategoryFindFirstArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryFindFirstOrThrowArgs} args - Arguments to find a FeedbackCategory
     * @example
     * // Get one FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackCategories
     * const feedbackCategories = await prisma.feedbackCategory.findMany()
     * 
     * // Get first 10 FeedbackCategories
     * const feedbackCategories = await prisma.feedbackCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackCategoryWithIdOnly = await prisma.feedbackCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackCategoryFindManyArgs>(args?: SelectSubset<T, FeedbackCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackCategory.
     * @param {FeedbackCategoryCreateArgs} args - Arguments to create a FeedbackCategory.
     * @example
     * // Create one FeedbackCategory
     * const FeedbackCategory = await prisma.feedbackCategory.create({
     *   data: {
     *     // ... data to create a FeedbackCategory
     *   }
     * })
     * 
     */
    create<T extends FeedbackCategoryCreateArgs>(args: SelectSubset<T, FeedbackCategoryCreateArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackCategories.
     * @param {FeedbackCategoryCreateManyArgs} args - Arguments to create many FeedbackCategories.
     * @example
     * // Create many FeedbackCategories
     * const feedbackCategory = await prisma.feedbackCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCategoryCreateManyArgs>(args?: SelectSubset<T, FeedbackCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackCategories and returns the data saved in the database.
     * @param {FeedbackCategoryCreateManyAndReturnArgs} args - Arguments to create many FeedbackCategories.
     * @example
     * // Create many FeedbackCategories
     * const feedbackCategory = await prisma.feedbackCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackCategories and only return the `id`
     * const feedbackCategoryWithIdOnly = await prisma.feedbackCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackCategory.
     * @param {FeedbackCategoryDeleteArgs} args - Arguments to delete one FeedbackCategory.
     * @example
     * // Delete one FeedbackCategory
     * const FeedbackCategory = await prisma.feedbackCategory.delete({
     *   where: {
     *     // ... filter to delete one FeedbackCategory
     *   }
     * })
     * 
     */
    delete<T extends FeedbackCategoryDeleteArgs>(args: SelectSubset<T, FeedbackCategoryDeleteArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackCategory.
     * @param {FeedbackCategoryUpdateArgs} args - Arguments to update one FeedbackCategory.
     * @example
     * // Update one FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackCategoryUpdateArgs>(args: SelectSubset<T, FeedbackCategoryUpdateArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackCategories.
     * @param {FeedbackCategoryDeleteManyArgs} args - Arguments to filter FeedbackCategories to delete.
     * @example
     * // Delete a few FeedbackCategories
     * const { count } = await prisma.feedbackCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackCategoryDeleteManyArgs>(args?: SelectSubset<T, FeedbackCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackCategories
     * const feedbackCategory = await prisma.feedbackCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackCategoryUpdateManyArgs>(args: SelectSubset<T, FeedbackCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackCategories and returns the data updated in the database.
     * @param {FeedbackCategoryUpdateManyAndReturnArgs} args - Arguments to update many FeedbackCategories.
     * @example
     * // Update many FeedbackCategories
     * const feedbackCategory = await prisma.feedbackCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackCategories and only return the `id`
     * const feedbackCategoryWithIdOnly = await prisma.feedbackCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackCategory.
     * @param {FeedbackCategoryUpsertArgs} args - Arguments to update or create a FeedbackCategory.
     * @example
     * // Update or create a FeedbackCategory
     * const feedbackCategory = await prisma.feedbackCategory.upsert({
     *   create: {
     *     // ... data to create a FeedbackCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackCategory we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackCategoryUpsertArgs>(args: SelectSubset<T, FeedbackCategoryUpsertArgs<ExtArgs>>): Prisma__FeedbackCategoryClient<$Result.GetResult<Prisma.$FeedbackCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryCountArgs} args - Arguments to filter FeedbackCategories to count.
     * @example
     * // Count the number of FeedbackCategories
     * const count = await prisma.feedbackCategory.count({
     *   where: {
     *     // ... the filter for the FeedbackCategories we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCategoryCountArgs>(
      args?: Subset<T, FeedbackCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackCategoryAggregateArgs>(args: Subset<T, FeedbackCategoryAggregateArgs>): Prisma.PrismaPromise<GetFeedbackCategoryAggregateType<T>>

    /**
     * Group by FeedbackCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackCategory model
   */
  readonly fields: FeedbackCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedbacks<T extends FeedbackCategory$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackCategory$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackCategory model
   */
  interface FeedbackCategoryFieldRefs {
    readonly id: FieldRef<"FeedbackCategory", 'Int'>
    readonly key: FieldRef<"FeedbackCategory", 'String'>
    readonly description: FieldRef<"FeedbackCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackCategory findUnique
   */
  export type FeedbackCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackCategory to fetch.
     */
    where: FeedbackCategoryWhereUniqueInput
  }

  /**
   * FeedbackCategory findUniqueOrThrow
   */
  export type FeedbackCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackCategory to fetch.
     */
    where: FeedbackCategoryWhereUniqueInput
  }

  /**
   * FeedbackCategory findFirst
   */
  export type FeedbackCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackCategory to fetch.
     */
    where?: FeedbackCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackCategories to fetch.
     */
    orderBy?: FeedbackCategoryOrderByWithRelationInput | FeedbackCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackCategories.
     */
    cursor?: FeedbackCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackCategories.
     */
    distinct?: FeedbackCategoryScalarFieldEnum | FeedbackCategoryScalarFieldEnum[]
  }

  /**
   * FeedbackCategory findFirstOrThrow
   */
  export type FeedbackCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackCategory to fetch.
     */
    where?: FeedbackCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackCategories to fetch.
     */
    orderBy?: FeedbackCategoryOrderByWithRelationInput | FeedbackCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackCategories.
     */
    cursor?: FeedbackCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackCategories.
     */
    distinct?: FeedbackCategoryScalarFieldEnum | FeedbackCategoryScalarFieldEnum[]
  }

  /**
   * FeedbackCategory findMany
   */
  export type FeedbackCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackCategories to fetch.
     */
    where?: FeedbackCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackCategories to fetch.
     */
    orderBy?: FeedbackCategoryOrderByWithRelationInput | FeedbackCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackCategories.
     */
    cursor?: FeedbackCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackCategories.
     */
    skip?: number
    distinct?: FeedbackCategoryScalarFieldEnum | FeedbackCategoryScalarFieldEnum[]
  }

  /**
   * FeedbackCategory create
   */
  export type FeedbackCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackCategory.
     */
    data: XOR<FeedbackCategoryCreateInput, FeedbackCategoryUncheckedCreateInput>
  }

  /**
   * FeedbackCategory createMany
   */
  export type FeedbackCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackCategories.
     */
    data: FeedbackCategoryCreateManyInput | FeedbackCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedbackCategory createManyAndReturn
   */
  export type FeedbackCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackCategories.
     */
    data: FeedbackCategoryCreateManyInput | FeedbackCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedbackCategory update
   */
  export type FeedbackCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackCategory.
     */
    data: XOR<FeedbackCategoryUpdateInput, FeedbackCategoryUncheckedUpdateInput>
    /**
     * Choose, which FeedbackCategory to update.
     */
    where: FeedbackCategoryWhereUniqueInput
  }

  /**
   * FeedbackCategory updateMany
   */
  export type FeedbackCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackCategories.
     */
    data: XOR<FeedbackCategoryUpdateManyMutationInput, FeedbackCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackCategories to update
     */
    where?: FeedbackCategoryWhereInput
    /**
     * Limit how many FeedbackCategories to update.
     */
    limit?: number
  }

  /**
   * FeedbackCategory updateManyAndReturn
   */
  export type FeedbackCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackCategories.
     */
    data: XOR<FeedbackCategoryUpdateManyMutationInput, FeedbackCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackCategories to update
     */
    where?: FeedbackCategoryWhereInput
    /**
     * Limit how many FeedbackCategories to update.
     */
    limit?: number
  }

  /**
   * FeedbackCategory upsert
   */
  export type FeedbackCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackCategory to update in case it exists.
     */
    where: FeedbackCategoryWhereUniqueInput
    /**
     * In case the FeedbackCategory found by the `where` argument doesn't exist, create a new FeedbackCategory with this data.
     */
    create: XOR<FeedbackCategoryCreateInput, FeedbackCategoryUncheckedCreateInput>
    /**
     * In case the FeedbackCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackCategoryUpdateInput, FeedbackCategoryUncheckedUpdateInput>
  }

  /**
   * FeedbackCategory delete
   */
  export type FeedbackCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
    /**
     * Filter which FeedbackCategory to delete.
     */
    where: FeedbackCategoryWhereUniqueInput
  }

  /**
   * FeedbackCategory deleteMany
   */
  export type FeedbackCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackCategories to delete
     */
    where?: FeedbackCategoryWhereInput
    /**
     * Limit how many FeedbackCategories to delete.
     */
    limit?: number
  }

  /**
   * FeedbackCategory.feedbacks
   */
  export type FeedbackCategory$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * FeedbackCategory without action
   */
  export type FeedbackCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackCategory
     */
    select?: FeedbackCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackCategory
     */
    omit?: FeedbackCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SearchLog
   */

  export type AggregateSearchLog = {
    _count: SearchLogCountAggregateOutputType | null
    _avg: SearchLogAvgAggregateOutputType | null
    _sum: SearchLogSumAggregateOutputType | null
    _min: SearchLogMinAggregateOutputType | null
    _max: SearchLogMaxAggregateOutputType | null
  }

  export type SearchLogAvgAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: number | null
  }

  export type SearchLogSumAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
  }

  export type SearchLogMinAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
    searchedAt: Date | null
  }

  export type SearchLogMaxAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
    searchedAt: Date | null
  }

  export type SearchLogCountAggregateOutputType = {
    id: number
    queryId: number
    userId: number
    searchedAt: number
    groupedResults: number
    _all: number
  }


  export type SearchLogAvgAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
  }

  export type SearchLogSumAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
  }

  export type SearchLogMinAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
  }

  export type SearchLogMaxAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
  }

  export type SearchLogCountAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
    groupedResults?: true
    _all?: true
  }

  export type SearchLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchLog to aggregate.
     */
    where?: SearchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchLogs to fetch.
     */
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchLogs
    **/
    _count?: true | SearchLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchLogMaxAggregateInputType
  }

  export type GetSearchLogAggregateType<T extends SearchLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchLog[P]>
      : GetScalarType<T[P], AggregateSearchLog[P]>
  }




  export type SearchLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchLogWhereInput
    orderBy?: SearchLogOrderByWithAggregationInput | SearchLogOrderByWithAggregationInput[]
    by: SearchLogScalarFieldEnum[] | SearchLogScalarFieldEnum
    having?: SearchLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchLogCountAggregateInputType | true
    _avg?: SearchLogAvgAggregateInputType
    _sum?: SearchLogSumAggregateInputType
    _min?: SearchLogMinAggregateInputType
    _max?: SearchLogMaxAggregateInputType
  }

  export type SearchLogGroupByOutputType = {
    id: number
    queryId: number
    userId: bigint
    searchedAt: Date
    groupedResults: JsonValue | null
    _count: SearchLogCountAggregateOutputType | null
    _avg: SearchLogAvgAggregateOutputType | null
    _sum: SearchLogSumAggregateOutputType | null
    _min: SearchLogMinAggregateOutputType | null
    _max: SearchLogMaxAggregateOutputType | null
  }

  type GetSearchLogGroupByPayload<T extends SearchLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchLogGroupByOutputType[P]>
            : GetScalarType<T[P], SearchLogGroupByOutputType[P]>
        }
      >
    >


  export type SearchLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    groupedResults?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    viewedBooks?: boolean | SearchLog$viewedBooksArgs<ExtArgs>
    _count?: boolean | SearchLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchLog"]>

  export type SearchLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    groupedResults?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchLog"]>

  export type SearchLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    groupedResults?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchLog"]>

  export type SearchLogSelectScalar = {
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    groupedResults?: boolean
  }

  export type SearchLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryId" | "userId" | "searchedAt" | "groupedResults", ExtArgs["result"]["searchLog"]>
  export type SearchLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    viewedBooks?: boolean | SearchLog$viewedBooksArgs<ExtArgs>
    _count?: boolean | SearchLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SearchLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SearchLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SearchLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchLog"
    objects: {
      query: Prisma.$QueryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      viewedBooks: Prisma.$ViewedBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      queryId: number
      userId: bigint
      searchedAt: Date
      groupedResults: Prisma.JsonValue | null
    }, ExtArgs["result"]["searchLog"]>
    composites: {}
  }

  type SearchLogGetPayload<S extends boolean | null | undefined | SearchLogDefaultArgs> = $Result.GetResult<Prisma.$SearchLogPayload, S>

  type SearchLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchLogCountAggregateInputType | true
    }

  export interface SearchLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchLog'], meta: { name: 'SearchLog' } }
    /**
     * Find zero or one SearchLog that matches the filter.
     * @param {SearchLogFindUniqueArgs} args - Arguments to find a SearchLog
     * @example
     * // Get one SearchLog
     * const searchLog = await prisma.searchLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchLogFindUniqueArgs>(args: SelectSubset<T, SearchLogFindUniqueArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchLogFindUniqueOrThrowArgs} args - Arguments to find a SearchLog
     * @example
     * // Get one SearchLog
     * const searchLog = await prisma.searchLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogFindFirstArgs} args - Arguments to find a SearchLog
     * @example
     * // Get one SearchLog
     * const searchLog = await prisma.searchLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchLogFindFirstArgs>(args?: SelectSubset<T, SearchLogFindFirstArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogFindFirstOrThrowArgs} args - Arguments to find a SearchLog
     * @example
     * // Get one SearchLog
     * const searchLog = await prisma.searchLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchLogs
     * const searchLogs = await prisma.searchLog.findMany()
     * 
     * // Get first 10 SearchLogs
     * const searchLogs = await prisma.searchLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchLogWithIdOnly = await prisma.searchLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchLogFindManyArgs>(args?: SelectSubset<T, SearchLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchLog.
     * @param {SearchLogCreateArgs} args - Arguments to create a SearchLog.
     * @example
     * // Create one SearchLog
     * const SearchLog = await prisma.searchLog.create({
     *   data: {
     *     // ... data to create a SearchLog
     *   }
     * })
     * 
     */
    create<T extends SearchLogCreateArgs>(args: SelectSubset<T, SearchLogCreateArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchLogs.
     * @param {SearchLogCreateManyArgs} args - Arguments to create many SearchLogs.
     * @example
     * // Create many SearchLogs
     * const searchLog = await prisma.searchLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchLogCreateManyArgs>(args?: SelectSubset<T, SearchLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchLogs and returns the data saved in the database.
     * @param {SearchLogCreateManyAndReturnArgs} args - Arguments to create many SearchLogs.
     * @example
     * // Create many SearchLogs
     * const searchLog = await prisma.searchLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchLogs and only return the `id`
     * const searchLogWithIdOnly = await prisma.searchLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchLog.
     * @param {SearchLogDeleteArgs} args - Arguments to delete one SearchLog.
     * @example
     * // Delete one SearchLog
     * const SearchLog = await prisma.searchLog.delete({
     *   where: {
     *     // ... filter to delete one SearchLog
     *   }
     * })
     * 
     */
    delete<T extends SearchLogDeleteArgs>(args: SelectSubset<T, SearchLogDeleteArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchLog.
     * @param {SearchLogUpdateArgs} args - Arguments to update one SearchLog.
     * @example
     * // Update one SearchLog
     * const searchLog = await prisma.searchLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchLogUpdateArgs>(args: SelectSubset<T, SearchLogUpdateArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchLogs.
     * @param {SearchLogDeleteManyArgs} args - Arguments to filter SearchLogs to delete.
     * @example
     * // Delete a few SearchLogs
     * const { count } = await prisma.searchLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchLogDeleteManyArgs>(args?: SelectSubset<T, SearchLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchLogs
     * const searchLog = await prisma.searchLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchLogUpdateManyArgs>(args: SelectSubset<T, SearchLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchLogs and returns the data updated in the database.
     * @param {SearchLogUpdateManyAndReturnArgs} args - Arguments to update many SearchLogs.
     * @example
     * // Update many SearchLogs
     * const searchLog = await prisma.searchLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchLogs and only return the `id`
     * const searchLogWithIdOnly = await prisma.searchLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchLog.
     * @param {SearchLogUpsertArgs} args - Arguments to update or create a SearchLog.
     * @example
     * // Update or create a SearchLog
     * const searchLog = await prisma.searchLog.upsert({
     *   create: {
     *     // ... data to create a SearchLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchLog we want to update
     *   }
     * })
     */
    upsert<T extends SearchLogUpsertArgs>(args: SelectSubset<T, SearchLogUpsertArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogCountArgs} args - Arguments to filter SearchLogs to count.
     * @example
     * // Count the number of SearchLogs
     * const count = await prisma.searchLog.count({
     *   where: {
     *     // ... the filter for the SearchLogs we want to count
     *   }
     * })
    **/
    count<T extends SearchLogCountArgs>(
      args?: Subset<T, SearchLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchLogAggregateArgs>(args: Subset<T, SearchLogAggregateArgs>): Prisma.PrismaPromise<GetSearchLogAggregateType<T>>

    /**
     * Group by SearchLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchLogGroupByArgs['orderBy'] }
        : { orderBy?: SearchLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchLog model
   */
  readonly fields: SearchLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    query<T extends QueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QueryDefaultArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viewedBooks<T extends SearchLog$viewedBooksArgs<ExtArgs> = {}>(args?: Subset<T, SearchLog$viewedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchLog model
   */
  interface SearchLogFieldRefs {
    readonly id: FieldRef<"SearchLog", 'Int'>
    readonly queryId: FieldRef<"SearchLog", 'Int'>
    readonly userId: FieldRef<"SearchLog", 'BigInt'>
    readonly searchedAt: FieldRef<"SearchLog", 'DateTime'>
    readonly groupedResults: FieldRef<"SearchLog", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SearchLog findUnique
   */
  export type SearchLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter, which SearchLog to fetch.
     */
    where: SearchLogWhereUniqueInput
  }

  /**
   * SearchLog findUniqueOrThrow
   */
  export type SearchLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter, which SearchLog to fetch.
     */
    where: SearchLogWhereUniqueInput
  }

  /**
   * SearchLog findFirst
   */
  export type SearchLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter, which SearchLog to fetch.
     */
    where?: SearchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchLogs to fetch.
     */
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchLogs.
     */
    cursor?: SearchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchLogs.
     */
    distinct?: SearchLogScalarFieldEnum | SearchLogScalarFieldEnum[]
  }

  /**
   * SearchLog findFirstOrThrow
   */
  export type SearchLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter, which SearchLog to fetch.
     */
    where?: SearchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchLogs to fetch.
     */
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchLogs.
     */
    cursor?: SearchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchLogs.
     */
    distinct?: SearchLogScalarFieldEnum | SearchLogScalarFieldEnum[]
  }

  /**
   * SearchLog findMany
   */
  export type SearchLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter, which SearchLogs to fetch.
     */
    where?: SearchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchLogs to fetch.
     */
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchLogs.
     */
    cursor?: SearchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchLogs.
     */
    skip?: number
    distinct?: SearchLogScalarFieldEnum | SearchLogScalarFieldEnum[]
  }

  /**
   * SearchLog create
   */
  export type SearchLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchLog.
     */
    data: XOR<SearchLogCreateInput, SearchLogUncheckedCreateInput>
  }

  /**
   * SearchLog createMany
   */
  export type SearchLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchLogs.
     */
    data: SearchLogCreateManyInput | SearchLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchLog createManyAndReturn
   */
  export type SearchLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * The data used to create many SearchLogs.
     */
    data: SearchLogCreateManyInput | SearchLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchLog update
   */
  export type SearchLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchLog.
     */
    data: XOR<SearchLogUpdateInput, SearchLogUncheckedUpdateInput>
    /**
     * Choose, which SearchLog to update.
     */
    where: SearchLogWhereUniqueInput
  }

  /**
   * SearchLog updateMany
   */
  export type SearchLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchLogs.
     */
    data: XOR<SearchLogUpdateManyMutationInput, SearchLogUncheckedUpdateManyInput>
    /**
     * Filter which SearchLogs to update
     */
    where?: SearchLogWhereInput
    /**
     * Limit how many SearchLogs to update.
     */
    limit?: number
  }

  /**
   * SearchLog updateManyAndReturn
   */
  export type SearchLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * The data used to update SearchLogs.
     */
    data: XOR<SearchLogUpdateManyMutationInput, SearchLogUncheckedUpdateManyInput>
    /**
     * Filter which SearchLogs to update
     */
    where?: SearchLogWhereInput
    /**
     * Limit how many SearchLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchLog upsert
   */
  export type SearchLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchLog to update in case it exists.
     */
    where: SearchLogWhereUniqueInput
    /**
     * In case the SearchLog found by the `where` argument doesn't exist, create a new SearchLog with this data.
     */
    create: XOR<SearchLogCreateInput, SearchLogUncheckedCreateInput>
    /**
     * In case the SearchLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchLogUpdateInput, SearchLogUncheckedUpdateInput>
  }

  /**
   * SearchLog delete
   */
  export type SearchLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    /**
     * Filter which SearchLog to delete.
     */
    where: SearchLogWhereUniqueInput
  }

  /**
   * SearchLog deleteMany
   */
  export type SearchLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchLogs to delete
     */
    where?: SearchLogWhereInput
    /**
     * Limit how many SearchLogs to delete.
     */
    limit?: number
  }

  /**
   * SearchLog.viewedBooks
   */
  export type SearchLog$viewedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    where?: ViewedBookWhereInput
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    cursor?: ViewedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewedBookScalarFieldEnum | ViewedBookScalarFieldEnum[]
  }

  /**
   * SearchLog without action
   */
  export type SearchLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
  }


  /**
   * Model SentMessage
   */

  export type AggregateSentMessage = {
    _count: SentMessageCountAggregateOutputType | null
    _avg: SentMessageAvgAggregateOutputType | null
    _sum: SentMessageSumAggregateOutputType | null
    _min: SentMessageMinAggregateOutputType | null
    _max: SentMessageMaxAggregateOutputType | null
  }

  export type SentMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SentMessageSumAggregateOutputType = {
    id: number | null
    userId: bigint | null
  }

  export type SentMessageMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    sentAt: Date | null
    groupId: string | null
  }

  export type SentMessageMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    sentAt: Date | null
    groupId: string | null
  }

  export type SentMessageCountAggregateOutputType = {
    id: number
    userId: number
    sentAt: number
    groupId: number
    _all: number
  }


  export type SentMessageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SentMessageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SentMessageMinAggregateInputType = {
    id?: true
    userId?: true
    sentAt?: true
    groupId?: true
  }

  export type SentMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    sentAt?: true
    groupId?: true
  }

  export type SentMessageCountAggregateInputType = {
    id?: true
    userId?: true
    sentAt?: true
    groupId?: true
    _all?: true
  }

  export type SentMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentMessage to aggregate.
     */
    where?: SentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentMessages to fetch.
     */
    orderBy?: SentMessageOrderByWithRelationInput | SentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentMessages
    **/
    _count?: true | SentMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentMessageMaxAggregateInputType
  }

  export type GetSentMessageAggregateType<T extends SentMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSentMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentMessage[P]>
      : GetScalarType<T[P], AggregateSentMessage[P]>
  }




  export type SentMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentMessageWhereInput
    orderBy?: SentMessageOrderByWithAggregationInput | SentMessageOrderByWithAggregationInput[]
    by: SentMessageScalarFieldEnum[] | SentMessageScalarFieldEnum
    having?: SentMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentMessageCountAggregateInputType | true
    _avg?: SentMessageAvgAggregateInputType
    _sum?: SentMessageSumAggregateInputType
    _min?: SentMessageMinAggregateInputType
    _max?: SentMessageMaxAggregateInputType
  }

  export type SentMessageGroupByOutputType = {
    id: number
    userId: bigint
    sentAt: Date
    groupId: string
    _count: SentMessageCountAggregateOutputType | null
    _avg: SentMessageAvgAggregateOutputType | null
    _sum: SentMessageSumAggregateOutputType | null
    _min: SentMessageMinAggregateOutputType | null
    _max: SentMessageMaxAggregateOutputType | null
  }

  type GetSentMessageGroupByPayload<T extends SentMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SentMessageGroupByOutputType[P]>
        }
      >
    >


  export type SentMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sentAt?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentMessage"]>

  export type SentMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sentAt?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentMessage"]>

  export type SentMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sentAt?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentMessage"]>

  export type SentMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    sentAt?: boolean
    groupId?: boolean
  }

  export type SentMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sentAt" | "groupId", ExtArgs["result"]["sentMessage"]>
  export type SentMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SentMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SentMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SentMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      sentAt: Date
      groupId: string
    }, ExtArgs["result"]["sentMessage"]>
    composites: {}
  }

  type SentMessageGetPayload<S extends boolean | null | undefined | SentMessageDefaultArgs> = $Result.GetResult<Prisma.$SentMessagePayload, S>

  type SentMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentMessageCountAggregateInputType | true
    }

  export interface SentMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentMessage'], meta: { name: 'SentMessage' } }
    /**
     * Find zero or one SentMessage that matches the filter.
     * @param {SentMessageFindUniqueArgs} args - Arguments to find a SentMessage
     * @example
     * // Get one SentMessage
     * const sentMessage = await prisma.sentMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentMessageFindUniqueArgs>(args: SelectSubset<T, SentMessageFindUniqueArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SentMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentMessageFindUniqueOrThrowArgs} args - Arguments to find a SentMessage
     * @example
     * // Get one SentMessage
     * const sentMessage = await prisma.sentMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SentMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageFindFirstArgs} args - Arguments to find a SentMessage
     * @example
     * // Get one SentMessage
     * const sentMessage = await prisma.sentMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentMessageFindFirstArgs>(args?: SelectSubset<T, SentMessageFindFirstArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageFindFirstOrThrowArgs} args - Arguments to find a SentMessage
     * @example
     * // Get one SentMessage
     * const sentMessage = await prisma.sentMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SentMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SentMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentMessages
     * const sentMessages = await prisma.sentMessage.findMany()
     * 
     * // Get first 10 SentMessages
     * const sentMessages = await prisma.sentMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentMessageWithIdOnly = await prisma.sentMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentMessageFindManyArgs>(args?: SelectSubset<T, SentMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SentMessage.
     * @param {SentMessageCreateArgs} args - Arguments to create a SentMessage.
     * @example
     * // Create one SentMessage
     * const SentMessage = await prisma.sentMessage.create({
     *   data: {
     *     // ... data to create a SentMessage
     *   }
     * })
     * 
     */
    create<T extends SentMessageCreateArgs>(args: SelectSubset<T, SentMessageCreateArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SentMessages.
     * @param {SentMessageCreateManyArgs} args - Arguments to create many SentMessages.
     * @example
     * // Create many SentMessages
     * const sentMessage = await prisma.sentMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentMessageCreateManyArgs>(args?: SelectSubset<T, SentMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentMessages and returns the data saved in the database.
     * @param {SentMessageCreateManyAndReturnArgs} args - Arguments to create many SentMessages.
     * @example
     * // Create many SentMessages
     * const sentMessage = await prisma.sentMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentMessages and only return the `id`
     * const sentMessageWithIdOnly = await prisma.sentMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SentMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SentMessage.
     * @param {SentMessageDeleteArgs} args - Arguments to delete one SentMessage.
     * @example
     * // Delete one SentMessage
     * const SentMessage = await prisma.sentMessage.delete({
     *   where: {
     *     // ... filter to delete one SentMessage
     *   }
     * })
     * 
     */
    delete<T extends SentMessageDeleteArgs>(args: SelectSubset<T, SentMessageDeleteArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SentMessage.
     * @param {SentMessageUpdateArgs} args - Arguments to update one SentMessage.
     * @example
     * // Update one SentMessage
     * const sentMessage = await prisma.sentMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentMessageUpdateArgs>(args: SelectSubset<T, SentMessageUpdateArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SentMessages.
     * @param {SentMessageDeleteManyArgs} args - Arguments to filter SentMessages to delete.
     * @example
     * // Delete a few SentMessages
     * const { count } = await prisma.sentMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentMessageDeleteManyArgs>(args?: SelectSubset<T, SentMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentMessages
     * const sentMessage = await prisma.sentMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentMessageUpdateManyArgs>(args: SelectSubset<T, SentMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentMessages and returns the data updated in the database.
     * @param {SentMessageUpdateManyAndReturnArgs} args - Arguments to update many SentMessages.
     * @example
     * // Update many SentMessages
     * const sentMessage = await prisma.sentMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SentMessages and only return the `id`
     * const sentMessageWithIdOnly = await prisma.sentMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SentMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SentMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SentMessage.
     * @param {SentMessageUpsertArgs} args - Arguments to update or create a SentMessage.
     * @example
     * // Update or create a SentMessage
     * const sentMessage = await prisma.sentMessage.upsert({
     *   create: {
     *     // ... data to create a SentMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentMessage we want to update
     *   }
     * })
     */
    upsert<T extends SentMessageUpsertArgs>(args: SelectSubset<T, SentMessageUpsertArgs<ExtArgs>>): Prisma__SentMessageClient<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageCountArgs} args - Arguments to filter SentMessages to count.
     * @example
     * // Count the number of SentMessages
     * const count = await prisma.sentMessage.count({
     *   where: {
     *     // ... the filter for the SentMessages we want to count
     *   }
     * })
    **/
    count<T extends SentMessageCountArgs>(
      args?: Subset<T, SentMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SentMessageAggregateArgs>(args: Subset<T, SentMessageAggregateArgs>): Prisma.PrismaPromise<GetSentMessageAggregateType<T>>

    /**
     * Group by SentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SentMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentMessageGroupByArgs['orderBy'] }
        : { orderBy?: SentMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentMessage model
   */
  readonly fields: SentMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SentMessage model
   */
  interface SentMessageFieldRefs {
    readonly id: FieldRef<"SentMessage", 'Int'>
    readonly userId: FieldRef<"SentMessage", 'BigInt'>
    readonly sentAt: FieldRef<"SentMessage", 'DateTime'>
    readonly groupId: FieldRef<"SentMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SentMessage findUnique
   */
  export type SentMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter, which SentMessage to fetch.
     */
    where: SentMessageWhereUniqueInput
  }

  /**
   * SentMessage findUniqueOrThrow
   */
  export type SentMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter, which SentMessage to fetch.
     */
    where: SentMessageWhereUniqueInput
  }

  /**
   * SentMessage findFirst
   */
  export type SentMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter, which SentMessage to fetch.
     */
    where?: SentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentMessages to fetch.
     */
    orderBy?: SentMessageOrderByWithRelationInput | SentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentMessages.
     */
    cursor?: SentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentMessages.
     */
    distinct?: SentMessageScalarFieldEnum | SentMessageScalarFieldEnum[]
  }

  /**
   * SentMessage findFirstOrThrow
   */
  export type SentMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter, which SentMessage to fetch.
     */
    where?: SentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentMessages to fetch.
     */
    orderBy?: SentMessageOrderByWithRelationInput | SentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentMessages.
     */
    cursor?: SentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentMessages.
     */
    distinct?: SentMessageScalarFieldEnum | SentMessageScalarFieldEnum[]
  }

  /**
   * SentMessage findMany
   */
  export type SentMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter, which SentMessages to fetch.
     */
    where?: SentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentMessages to fetch.
     */
    orderBy?: SentMessageOrderByWithRelationInput | SentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentMessages.
     */
    cursor?: SentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentMessages.
     */
    skip?: number
    distinct?: SentMessageScalarFieldEnum | SentMessageScalarFieldEnum[]
  }

  /**
   * SentMessage create
   */
  export type SentMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SentMessage.
     */
    data: XOR<SentMessageCreateInput, SentMessageUncheckedCreateInput>
  }

  /**
   * SentMessage createMany
   */
  export type SentMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentMessages.
     */
    data: SentMessageCreateManyInput | SentMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentMessage createManyAndReturn
   */
  export type SentMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SentMessages.
     */
    data: SentMessageCreateManyInput | SentMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentMessage update
   */
  export type SentMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SentMessage.
     */
    data: XOR<SentMessageUpdateInput, SentMessageUncheckedUpdateInput>
    /**
     * Choose, which SentMessage to update.
     */
    where: SentMessageWhereUniqueInput
  }

  /**
   * SentMessage updateMany
   */
  export type SentMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentMessages.
     */
    data: XOR<SentMessageUpdateManyMutationInput, SentMessageUncheckedUpdateManyInput>
    /**
     * Filter which SentMessages to update
     */
    where?: SentMessageWhereInput
    /**
     * Limit how many SentMessages to update.
     */
    limit?: number
  }

  /**
   * SentMessage updateManyAndReturn
   */
  export type SentMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * The data used to update SentMessages.
     */
    data: XOR<SentMessageUpdateManyMutationInput, SentMessageUncheckedUpdateManyInput>
    /**
     * Filter which SentMessages to update
     */
    where?: SentMessageWhereInput
    /**
     * Limit how many SentMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentMessage upsert
   */
  export type SentMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SentMessage to update in case it exists.
     */
    where: SentMessageWhereUniqueInput
    /**
     * In case the SentMessage found by the `where` argument doesn't exist, create a new SentMessage with this data.
     */
    create: XOR<SentMessageCreateInput, SentMessageUncheckedCreateInput>
    /**
     * In case the SentMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentMessageUpdateInput, SentMessageUncheckedUpdateInput>
  }

  /**
   * SentMessage delete
   */
  export type SentMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    /**
     * Filter which SentMessage to delete.
     */
    where: SentMessageWhereUniqueInput
  }

  /**
   * SentMessage deleteMany
   */
  export type SentMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentMessages to delete
     */
    where?: SentMessageWhereInput
    /**
     * Limit how many SentMessages to delete.
     */
    limit?: number
  }

  /**
   * SentMessage without action
   */
  export type SentMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
  }


  /**
   * Model StoreStatistic
   */

  export type AggregateStoreStatistic = {
    _count: StoreStatisticCountAggregateOutputType | null
    _avg: StoreStatisticAvgAggregateOutputType | null
    _sum: StoreStatisticSumAggregateOutputType | null
    _min: StoreStatisticMinAggregateOutputType | null
    _max: StoreStatisticMaxAggregateOutputType | null
  }

  export type StoreStatisticAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    booksFound: number | null
  }

  export type StoreStatisticSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    booksFound: number | null
  }

  export type StoreStatisticMinAggregateOutputType = {
    id: number | null
    storeId: number | null
    booksFound: number | null
    lastScrapedAt: Date | null
  }

  export type StoreStatisticMaxAggregateOutputType = {
    id: number | null
    storeId: number | null
    booksFound: number | null
    lastScrapedAt: Date | null
  }

  export type StoreStatisticCountAggregateOutputType = {
    id: number
    storeId: number
    booksFound: number
    lastScrapedAt: number
    _all: number
  }


  export type StoreStatisticAvgAggregateInputType = {
    id?: true
    storeId?: true
    booksFound?: true
  }

  export type StoreStatisticSumAggregateInputType = {
    id?: true
    storeId?: true
    booksFound?: true
  }

  export type StoreStatisticMinAggregateInputType = {
    id?: true
    storeId?: true
    booksFound?: true
    lastScrapedAt?: true
  }

  export type StoreStatisticMaxAggregateInputType = {
    id?: true
    storeId?: true
    booksFound?: true
    lastScrapedAt?: true
  }

  export type StoreStatisticCountAggregateInputType = {
    id?: true
    storeId?: true
    booksFound?: true
    lastScrapedAt?: true
    _all?: true
  }

  export type StoreStatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreStatistic to aggregate.
     */
    where?: StoreStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatistics to fetch.
     */
    orderBy?: StoreStatisticOrderByWithRelationInput | StoreStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreStatistics
    **/
    _count?: true | StoreStatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreStatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreStatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreStatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreStatisticMaxAggregateInputType
  }

  export type GetStoreStatisticAggregateType<T extends StoreStatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreStatistic[P]>
      : GetScalarType<T[P], AggregateStoreStatistic[P]>
  }




  export type StoreStatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreStatisticWhereInput
    orderBy?: StoreStatisticOrderByWithAggregationInput | StoreStatisticOrderByWithAggregationInput[]
    by: StoreStatisticScalarFieldEnum[] | StoreStatisticScalarFieldEnum
    having?: StoreStatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreStatisticCountAggregateInputType | true
    _avg?: StoreStatisticAvgAggregateInputType
    _sum?: StoreStatisticSumAggregateInputType
    _min?: StoreStatisticMinAggregateInputType
    _max?: StoreStatisticMaxAggregateInputType
  }

  export type StoreStatisticGroupByOutputType = {
    id: number
    storeId: number
    booksFound: number
    lastScrapedAt: Date
    _count: StoreStatisticCountAggregateOutputType | null
    _avg: StoreStatisticAvgAggregateOutputType | null
    _sum: StoreStatisticSumAggregateOutputType | null
    _min: StoreStatisticMinAggregateOutputType | null
    _max: StoreStatisticMaxAggregateOutputType | null
  }

  type GetStoreStatisticGroupByPayload<T extends StoreStatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreStatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreStatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreStatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StoreStatisticGroupByOutputType[P]>
        }
      >
    >


  export type StoreStatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    booksFound?: boolean
    lastScrapedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeStatistic"]>

  export type StoreStatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    booksFound?: boolean
    lastScrapedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeStatistic"]>

  export type StoreStatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    booksFound?: boolean
    lastScrapedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeStatistic"]>

  export type StoreStatisticSelectScalar = {
    id?: boolean
    storeId?: boolean
    booksFound?: boolean
    lastScrapedAt?: boolean
  }

  export type StoreStatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "booksFound" | "lastScrapedAt", ExtArgs["result"]["storeStatistic"]>
  export type StoreStatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreStatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type StoreStatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreStatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreStatistic"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeId: number
      booksFound: number
      lastScrapedAt: Date
    }, ExtArgs["result"]["storeStatistic"]>
    composites: {}
  }

  type StoreStatisticGetPayload<S extends boolean | null | undefined | StoreStatisticDefaultArgs> = $Result.GetResult<Prisma.$StoreStatisticPayload, S>

  type StoreStatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreStatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreStatisticCountAggregateInputType | true
    }

  export interface StoreStatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreStatistic'], meta: { name: 'StoreStatistic' } }
    /**
     * Find zero or one StoreStatistic that matches the filter.
     * @param {StoreStatisticFindUniqueArgs} args - Arguments to find a StoreStatistic
     * @example
     * // Get one StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreStatisticFindUniqueArgs>(args: SelectSubset<T, StoreStatisticFindUniqueArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreStatistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreStatisticFindUniqueOrThrowArgs} args - Arguments to find a StoreStatistic
     * @example
     * // Get one StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreStatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreStatistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticFindFirstArgs} args - Arguments to find a StoreStatistic
     * @example
     * // Get one StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreStatisticFindFirstArgs>(args?: SelectSubset<T, StoreStatisticFindFirstArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreStatistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticFindFirstOrThrowArgs} args - Arguments to find a StoreStatistic
     * @example
     * // Get one StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreStatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreStatistics
     * const storeStatistics = await prisma.storeStatistic.findMany()
     * 
     * // Get first 10 StoreStatistics
     * const storeStatistics = await prisma.storeStatistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeStatisticWithIdOnly = await prisma.storeStatistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreStatisticFindManyArgs>(args?: SelectSubset<T, StoreStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreStatistic.
     * @param {StoreStatisticCreateArgs} args - Arguments to create a StoreStatistic.
     * @example
     * // Create one StoreStatistic
     * const StoreStatistic = await prisma.storeStatistic.create({
     *   data: {
     *     // ... data to create a StoreStatistic
     *   }
     * })
     * 
     */
    create<T extends StoreStatisticCreateArgs>(args: SelectSubset<T, StoreStatisticCreateArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreStatistics.
     * @param {StoreStatisticCreateManyArgs} args - Arguments to create many StoreStatistics.
     * @example
     * // Create many StoreStatistics
     * const storeStatistic = await prisma.storeStatistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreStatisticCreateManyArgs>(args?: SelectSubset<T, StoreStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreStatistics and returns the data saved in the database.
     * @param {StoreStatisticCreateManyAndReturnArgs} args - Arguments to create many StoreStatistics.
     * @example
     * // Create many StoreStatistics
     * const storeStatistic = await prisma.storeStatistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreStatistics and only return the `id`
     * const storeStatisticWithIdOnly = await prisma.storeStatistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreStatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreStatistic.
     * @param {StoreStatisticDeleteArgs} args - Arguments to delete one StoreStatistic.
     * @example
     * // Delete one StoreStatistic
     * const StoreStatistic = await prisma.storeStatistic.delete({
     *   where: {
     *     // ... filter to delete one StoreStatistic
     *   }
     * })
     * 
     */
    delete<T extends StoreStatisticDeleteArgs>(args: SelectSubset<T, StoreStatisticDeleteArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreStatistic.
     * @param {StoreStatisticUpdateArgs} args - Arguments to update one StoreStatistic.
     * @example
     * // Update one StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreStatisticUpdateArgs>(args: SelectSubset<T, StoreStatisticUpdateArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreStatistics.
     * @param {StoreStatisticDeleteManyArgs} args - Arguments to filter StoreStatistics to delete.
     * @example
     * // Delete a few StoreStatistics
     * const { count } = await prisma.storeStatistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreStatisticDeleteManyArgs>(args?: SelectSubset<T, StoreStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreStatistics
     * const storeStatistic = await prisma.storeStatistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreStatisticUpdateManyArgs>(args: SelectSubset<T, StoreStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreStatistics and returns the data updated in the database.
     * @param {StoreStatisticUpdateManyAndReturnArgs} args - Arguments to update many StoreStatistics.
     * @example
     * // Update many StoreStatistics
     * const storeStatistic = await prisma.storeStatistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreStatistics and only return the `id`
     * const storeStatisticWithIdOnly = await prisma.storeStatistic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreStatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreStatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreStatistic.
     * @param {StoreStatisticUpsertArgs} args - Arguments to update or create a StoreStatistic.
     * @example
     * // Update or create a StoreStatistic
     * const storeStatistic = await prisma.storeStatistic.upsert({
     *   create: {
     *     // ... data to create a StoreStatistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreStatistic we want to update
     *   }
     * })
     */
    upsert<T extends StoreStatisticUpsertArgs>(args: SelectSubset<T, StoreStatisticUpsertArgs<ExtArgs>>): Prisma__StoreStatisticClient<$Result.GetResult<Prisma.$StoreStatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticCountArgs} args - Arguments to filter StoreStatistics to count.
     * @example
     * // Count the number of StoreStatistics
     * const count = await prisma.storeStatistic.count({
     *   where: {
     *     // ... the filter for the StoreStatistics we want to count
     *   }
     * })
    **/
    count<T extends StoreStatisticCountArgs>(
      args?: Subset<T, StoreStatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreStatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreStatisticAggregateArgs>(args: Subset<T, StoreStatisticAggregateArgs>): Prisma.PrismaPromise<GetStoreStatisticAggregateType<T>>

    /**
     * Group by StoreStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreStatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreStatisticGroupByArgs['orderBy'] }
        : { orderBy?: StoreStatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreStatistic model
   */
  readonly fields: StoreStatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreStatistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreStatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreStatistic model
   */
  interface StoreStatisticFieldRefs {
    readonly id: FieldRef<"StoreStatistic", 'Int'>
    readonly storeId: FieldRef<"StoreStatistic", 'Int'>
    readonly booksFound: FieldRef<"StoreStatistic", 'Int'>
    readonly lastScrapedAt: FieldRef<"StoreStatistic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreStatistic findUnique
   */
  export type StoreStatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatistic to fetch.
     */
    where: StoreStatisticWhereUniqueInput
  }

  /**
   * StoreStatistic findUniqueOrThrow
   */
  export type StoreStatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatistic to fetch.
     */
    where: StoreStatisticWhereUniqueInput
  }

  /**
   * StoreStatistic findFirst
   */
  export type StoreStatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatistic to fetch.
     */
    where?: StoreStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatistics to fetch.
     */
    orderBy?: StoreStatisticOrderByWithRelationInput | StoreStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreStatistics.
     */
    cursor?: StoreStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreStatistics.
     */
    distinct?: StoreStatisticScalarFieldEnum | StoreStatisticScalarFieldEnum[]
  }

  /**
   * StoreStatistic findFirstOrThrow
   */
  export type StoreStatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatistic to fetch.
     */
    where?: StoreStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatistics to fetch.
     */
    orderBy?: StoreStatisticOrderByWithRelationInput | StoreStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreStatistics.
     */
    cursor?: StoreStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreStatistics.
     */
    distinct?: StoreStatisticScalarFieldEnum | StoreStatisticScalarFieldEnum[]
  }

  /**
   * StoreStatistic findMany
   */
  export type StoreStatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatistics to fetch.
     */
    where?: StoreStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatistics to fetch.
     */
    orderBy?: StoreStatisticOrderByWithRelationInput | StoreStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreStatistics.
     */
    cursor?: StoreStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatistics.
     */
    skip?: number
    distinct?: StoreStatisticScalarFieldEnum | StoreStatisticScalarFieldEnum[]
  }

  /**
   * StoreStatistic create
   */
  export type StoreStatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreStatistic.
     */
    data: XOR<StoreStatisticCreateInput, StoreStatisticUncheckedCreateInput>
  }

  /**
   * StoreStatistic createMany
   */
  export type StoreStatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreStatistics.
     */
    data: StoreStatisticCreateManyInput | StoreStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreStatistic createManyAndReturn
   */
  export type StoreStatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * The data used to create many StoreStatistics.
     */
    data: StoreStatisticCreateManyInput | StoreStatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreStatistic update
   */
  export type StoreStatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreStatistic.
     */
    data: XOR<StoreStatisticUpdateInput, StoreStatisticUncheckedUpdateInput>
    /**
     * Choose, which StoreStatistic to update.
     */
    where: StoreStatisticWhereUniqueInput
  }

  /**
   * StoreStatistic updateMany
   */
  export type StoreStatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreStatistics.
     */
    data: XOR<StoreStatisticUpdateManyMutationInput, StoreStatisticUncheckedUpdateManyInput>
    /**
     * Filter which StoreStatistics to update
     */
    where?: StoreStatisticWhereInput
    /**
     * Limit how many StoreStatistics to update.
     */
    limit?: number
  }

  /**
   * StoreStatistic updateManyAndReturn
   */
  export type StoreStatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * The data used to update StoreStatistics.
     */
    data: XOR<StoreStatisticUpdateManyMutationInput, StoreStatisticUncheckedUpdateManyInput>
    /**
     * Filter which StoreStatistics to update
     */
    where?: StoreStatisticWhereInput
    /**
     * Limit how many StoreStatistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreStatistic upsert
   */
  export type StoreStatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreStatistic to update in case it exists.
     */
    where: StoreStatisticWhereUniqueInput
    /**
     * In case the StoreStatistic found by the `where` argument doesn't exist, create a new StoreStatistic with this data.
     */
    create: XOR<StoreStatisticCreateInput, StoreStatisticUncheckedCreateInput>
    /**
     * In case the StoreStatistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreStatisticUpdateInput, StoreStatisticUncheckedUpdateInput>
  }

  /**
   * StoreStatistic delete
   */
  export type StoreStatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
    /**
     * Filter which StoreStatistic to delete.
     */
    where: StoreStatisticWhereUniqueInput
  }

  /**
   * StoreStatistic deleteMany
   */
  export type StoreStatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreStatistics to delete
     */
    where?: StoreStatisticWhereInput
    /**
     * Limit how many StoreStatistics to delete.
     */
    limit?: number
  }

  /**
   * StoreStatistic without action
   */
  export type StoreStatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatistic
     */
    select?: StoreStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatistic
     */
    omit?: StoreStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatisticInclude<ExtArgs> | null
  }


  /**
   * Model UnsuccessfulSearch
   */

  export type AggregateUnsuccessfulSearch = {
    _count: UnsuccessfulSearchCountAggregateOutputType | null
    _avg: UnsuccessfulSearchAvgAggregateOutputType | null
    _sum: UnsuccessfulSearchSumAggregateOutputType | null
    _min: UnsuccessfulSearchMinAggregateOutputType | null
    _max: UnsuccessfulSearchMaxAggregateOutputType | null
  }

  export type UnsuccessfulSearchAvgAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: number | null
  }

  export type UnsuccessfulSearchSumAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
  }

  export type UnsuccessfulSearchMinAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
    searchedAt: Date | null
  }

  export type UnsuccessfulSearchMaxAggregateOutputType = {
    id: number | null
    queryId: number | null
    userId: bigint | null
    searchedAt: Date | null
  }

  export type UnsuccessfulSearchCountAggregateOutputType = {
    id: number
    queryId: number
    userId: number
    searchedAt: number
    _all: number
  }


  export type UnsuccessfulSearchAvgAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
  }

  export type UnsuccessfulSearchSumAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
  }

  export type UnsuccessfulSearchMinAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
  }

  export type UnsuccessfulSearchMaxAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
  }

  export type UnsuccessfulSearchCountAggregateInputType = {
    id?: true
    queryId?: true
    userId?: true
    searchedAt?: true
    _all?: true
  }

  export type UnsuccessfulSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnsuccessfulSearch to aggregate.
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsuccessfulSearches to fetch.
     */
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnsuccessfulSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsuccessfulSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsuccessfulSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnsuccessfulSearches
    **/
    _count?: true | UnsuccessfulSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnsuccessfulSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnsuccessfulSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnsuccessfulSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnsuccessfulSearchMaxAggregateInputType
  }

  export type GetUnsuccessfulSearchAggregateType<T extends UnsuccessfulSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateUnsuccessfulSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnsuccessfulSearch[P]>
      : GetScalarType<T[P], AggregateUnsuccessfulSearch[P]>
  }




  export type UnsuccessfulSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnsuccessfulSearchWhereInput
    orderBy?: UnsuccessfulSearchOrderByWithAggregationInput | UnsuccessfulSearchOrderByWithAggregationInput[]
    by: UnsuccessfulSearchScalarFieldEnum[] | UnsuccessfulSearchScalarFieldEnum
    having?: UnsuccessfulSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnsuccessfulSearchCountAggregateInputType | true
    _avg?: UnsuccessfulSearchAvgAggregateInputType
    _sum?: UnsuccessfulSearchSumAggregateInputType
    _min?: UnsuccessfulSearchMinAggregateInputType
    _max?: UnsuccessfulSearchMaxAggregateInputType
  }

  export type UnsuccessfulSearchGroupByOutputType = {
    id: number
    queryId: number
    userId: bigint
    searchedAt: Date
    _count: UnsuccessfulSearchCountAggregateOutputType | null
    _avg: UnsuccessfulSearchAvgAggregateOutputType | null
    _sum: UnsuccessfulSearchSumAggregateOutputType | null
    _min: UnsuccessfulSearchMinAggregateOutputType | null
    _max: UnsuccessfulSearchMaxAggregateOutputType | null
  }

  type GetUnsuccessfulSearchGroupByPayload<T extends UnsuccessfulSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnsuccessfulSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnsuccessfulSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnsuccessfulSearchGroupByOutputType[P]>
            : GetScalarType<T[P], UnsuccessfulSearchGroupByOutputType[P]>
        }
      >
    >


  export type UnsuccessfulSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unsuccessfulSearch"]>

  export type UnsuccessfulSearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unsuccessfulSearch"]>

  export type UnsuccessfulSearchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unsuccessfulSearch"]>

  export type UnsuccessfulSearchSelectScalar = {
    id?: boolean
    queryId?: boolean
    userId?: boolean
    searchedAt?: boolean
  }

  export type UnsuccessfulSearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryId" | "userId" | "searchedAt", ExtArgs["result"]["unsuccessfulSearch"]>
  export type UnsuccessfulSearchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnsuccessfulSearchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnsuccessfulSearchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnsuccessfulSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnsuccessfulSearch"
    objects: {
      query: Prisma.$QueryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      queryId: number
      userId: bigint
      searchedAt: Date
    }, ExtArgs["result"]["unsuccessfulSearch"]>
    composites: {}
  }

  type UnsuccessfulSearchGetPayload<S extends boolean | null | undefined | UnsuccessfulSearchDefaultArgs> = $Result.GetResult<Prisma.$UnsuccessfulSearchPayload, S>

  type UnsuccessfulSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnsuccessfulSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnsuccessfulSearchCountAggregateInputType | true
    }

  export interface UnsuccessfulSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnsuccessfulSearch'], meta: { name: 'UnsuccessfulSearch' } }
    /**
     * Find zero or one UnsuccessfulSearch that matches the filter.
     * @param {UnsuccessfulSearchFindUniqueArgs} args - Arguments to find a UnsuccessfulSearch
     * @example
     * // Get one UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnsuccessfulSearchFindUniqueArgs>(args: SelectSubset<T, UnsuccessfulSearchFindUniqueArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnsuccessfulSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnsuccessfulSearchFindUniqueOrThrowArgs} args - Arguments to find a UnsuccessfulSearch
     * @example
     * // Get one UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnsuccessfulSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, UnsuccessfulSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnsuccessfulSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchFindFirstArgs} args - Arguments to find a UnsuccessfulSearch
     * @example
     * // Get one UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnsuccessfulSearchFindFirstArgs>(args?: SelectSubset<T, UnsuccessfulSearchFindFirstArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnsuccessfulSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchFindFirstOrThrowArgs} args - Arguments to find a UnsuccessfulSearch
     * @example
     * // Get one UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnsuccessfulSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, UnsuccessfulSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnsuccessfulSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnsuccessfulSearches
     * const unsuccessfulSearches = await prisma.unsuccessfulSearch.findMany()
     * 
     * // Get first 10 UnsuccessfulSearches
     * const unsuccessfulSearches = await prisma.unsuccessfulSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unsuccessfulSearchWithIdOnly = await prisma.unsuccessfulSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnsuccessfulSearchFindManyArgs>(args?: SelectSubset<T, UnsuccessfulSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnsuccessfulSearch.
     * @param {UnsuccessfulSearchCreateArgs} args - Arguments to create a UnsuccessfulSearch.
     * @example
     * // Create one UnsuccessfulSearch
     * const UnsuccessfulSearch = await prisma.unsuccessfulSearch.create({
     *   data: {
     *     // ... data to create a UnsuccessfulSearch
     *   }
     * })
     * 
     */
    create<T extends UnsuccessfulSearchCreateArgs>(args: SelectSubset<T, UnsuccessfulSearchCreateArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnsuccessfulSearches.
     * @param {UnsuccessfulSearchCreateManyArgs} args - Arguments to create many UnsuccessfulSearches.
     * @example
     * // Create many UnsuccessfulSearches
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnsuccessfulSearchCreateManyArgs>(args?: SelectSubset<T, UnsuccessfulSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnsuccessfulSearches and returns the data saved in the database.
     * @param {UnsuccessfulSearchCreateManyAndReturnArgs} args - Arguments to create many UnsuccessfulSearches.
     * @example
     * // Create many UnsuccessfulSearches
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnsuccessfulSearches and only return the `id`
     * const unsuccessfulSearchWithIdOnly = await prisma.unsuccessfulSearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnsuccessfulSearchCreateManyAndReturnArgs>(args?: SelectSubset<T, UnsuccessfulSearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnsuccessfulSearch.
     * @param {UnsuccessfulSearchDeleteArgs} args - Arguments to delete one UnsuccessfulSearch.
     * @example
     * // Delete one UnsuccessfulSearch
     * const UnsuccessfulSearch = await prisma.unsuccessfulSearch.delete({
     *   where: {
     *     // ... filter to delete one UnsuccessfulSearch
     *   }
     * })
     * 
     */
    delete<T extends UnsuccessfulSearchDeleteArgs>(args: SelectSubset<T, UnsuccessfulSearchDeleteArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnsuccessfulSearch.
     * @param {UnsuccessfulSearchUpdateArgs} args - Arguments to update one UnsuccessfulSearch.
     * @example
     * // Update one UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnsuccessfulSearchUpdateArgs>(args: SelectSubset<T, UnsuccessfulSearchUpdateArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnsuccessfulSearches.
     * @param {UnsuccessfulSearchDeleteManyArgs} args - Arguments to filter UnsuccessfulSearches to delete.
     * @example
     * // Delete a few UnsuccessfulSearches
     * const { count } = await prisma.unsuccessfulSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnsuccessfulSearchDeleteManyArgs>(args?: SelectSubset<T, UnsuccessfulSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnsuccessfulSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnsuccessfulSearches
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnsuccessfulSearchUpdateManyArgs>(args: SelectSubset<T, UnsuccessfulSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnsuccessfulSearches and returns the data updated in the database.
     * @param {UnsuccessfulSearchUpdateManyAndReturnArgs} args - Arguments to update many UnsuccessfulSearches.
     * @example
     * // Update many UnsuccessfulSearches
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnsuccessfulSearches and only return the `id`
     * const unsuccessfulSearchWithIdOnly = await prisma.unsuccessfulSearch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnsuccessfulSearchUpdateManyAndReturnArgs>(args: SelectSubset<T, UnsuccessfulSearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnsuccessfulSearch.
     * @param {UnsuccessfulSearchUpsertArgs} args - Arguments to update or create a UnsuccessfulSearch.
     * @example
     * // Update or create a UnsuccessfulSearch
     * const unsuccessfulSearch = await prisma.unsuccessfulSearch.upsert({
     *   create: {
     *     // ... data to create a UnsuccessfulSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnsuccessfulSearch we want to update
     *   }
     * })
     */
    upsert<T extends UnsuccessfulSearchUpsertArgs>(args: SelectSubset<T, UnsuccessfulSearchUpsertArgs<ExtArgs>>): Prisma__UnsuccessfulSearchClient<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnsuccessfulSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchCountArgs} args - Arguments to filter UnsuccessfulSearches to count.
     * @example
     * // Count the number of UnsuccessfulSearches
     * const count = await prisma.unsuccessfulSearch.count({
     *   where: {
     *     // ... the filter for the UnsuccessfulSearches we want to count
     *   }
     * })
    **/
    count<T extends UnsuccessfulSearchCountArgs>(
      args?: Subset<T, UnsuccessfulSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnsuccessfulSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnsuccessfulSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnsuccessfulSearchAggregateArgs>(args: Subset<T, UnsuccessfulSearchAggregateArgs>): Prisma.PrismaPromise<GetUnsuccessfulSearchAggregateType<T>>

    /**
     * Group by UnsuccessfulSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnsuccessfulSearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnsuccessfulSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnsuccessfulSearchGroupByArgs['orderBy'] }
        : { orderBy?: UnsuccessfulSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnsuccessfulSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnsuccessfulSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnsuccessfulSearch model
   */
  readonly fields: UnsuccessfulSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnsuccessfulSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnsuccessfulSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    query<T extends QueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QueryDefaultArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnsuccessfulSearch model
   */
  interface UnsuccessfulSearchFieldRefs {
    readonly id: FieldRef<"UnsuccessfulSearch", 'Int'>
    readonly queryId: FieldRef<"UnsuccessfulSearch", 'Int'>
    readonly userId: FieldRef<"UnsuccessfulSearch", 'BigInt'>
    readonly searchedAt: FieldRef<"UnsuccessfulSearch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnsuccessfulSearch findUnique
   */
  export type UnsuccessfulSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter, which UnsuccessfulSearch to fetch.
     */
    where: UnsuccessfulSearchWhereUniqueInput
  }

  /**
   * UnsuccessfulSearch findUniqueOrThrow
   */
  export type UnsuccessfulSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter, which UnsuccessfulSearch to fetch.
     */
    where: UnsuccessfulSearchWhereUniqueInput
  }

  /**
   * UnsuccessfulSearch findFirst
   */
  export type UnsuccessfulSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter, which UnsuccessfulSearch to fetch.
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsuccessfulSearches to fetch.
     */
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnsuccessfulSearches.
     */
    cursor?: UnsuccessfulSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsuccessfulSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsuccessfulSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnsuccessfulSearches.
     */
    distinct?: UnsuccessfulSearchScalarFieldEnum | UnsuccessfulSearchScalarFieldEnum[]
  }

  /**
   * UnsuccessfulSearch findFirstOrThrow
   */
  export type UnsuccessfulSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter, which UnsuccessfulSearch to fetch.
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsuccessfulSearches to fetch.
     */
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnsuccessfulSearches.
     */
    cursor?: UnsuccessfulSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsuccessfulSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsuccessfulSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnsuccessfulSearches.
     */
    distinct?: UnsuccessfulSearchScalarFieldEnum | UnsuccessfulSearchScalarFieldEnum[]
  }

  /**
   * UnsuccessfulSearch findMany
   */
  export type UnsuccessfulSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter, which UnsuccessfulSearches to fetch.
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnsuccessfulSearches to fetch.
     */
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnsuccessfulSearches.
     */
    cursor?: UnsuccessfulSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnsuccessfulSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnsuccessfulSearches.
     */
    skip?: number
    distinct?: UnsuccessfulSearchScalarFieldEnum | UnsuccessfulSearchScalarFieldEnum[]
  }

  /**
   * UnsuccessfulSearch create
   */
  export type UnsuccessfulSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * The data needed to create a UnsuccessfulSearch.
     */
    data: XOR<UnsuccessfulSearchCreateInput, UnsuccessfulSearchUncheckedCreateInput>
  }

  /**
   * UnsuccessfulSearch createMany
   */
  export type UnsuccessfulSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnsuccessfulSearches.
     */
    data: UnsuccessfulSearchCreateManyInput | UnsuccessfulSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnsuccessfulSearch createManyAndReturn
   */
  export type UnsuccessfulSearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * The data used to create many UnsuccessfulSearches.
     */
    data: UnsuccessfulSearchCreateManyInput | UnsuccessfulSearchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnsuccessfulSearch update
   */
  export type UnsuccessfulSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * The data needed to update a UnsuccessfulSearch.
     */
    data: XOR<UnsuccessfulSearchUpdateInput, UnsuccessfulSearchUncheckedUpdateInput>
    /**
     * Choose, which UnsuccessfulSearch to update.
     */
    where: UnsuccessfulSearchWhereUniqueInput
  }

  /**
   * UnsuccessfulSearch updateMany
   */
  export type UnsuccessfulSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnsuccessfulSearches.
     */
    data: XOR<UnsuccessfulSearchUpdateManyMutationInput, UnsuccessfulSearchUncheckedUpdateManyInput>
    /**
     * Filter which UnsuccessfulSearches to update
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * Limit how many UnsuccessfulSearches to update.
     */
    limit?: number
  }

  /**
   * UnsuccessfulSearch updateManyAndReturn
   */
  export type UnsuccessfulSearchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * The data used to update UnsuccessfulSearches.
     */
    data: XOR<UnsuccessfulSearchUpdateManyMutationInput, UnsuccessfulSearchUncheckedUpdateManyInput>
    /**
     * Filter which UnsuccessfulSearches to update
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * Limit how many UnsuccessfulSearches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnsuccessfulSearch upsert
   */
  export type UnsuccessfulSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * The filter to search for the UnsuccessfulSearch to update in case it exists.
     */
    where: UnsuccessfulSearchWhereUniqueInput
    /**
     * In case the UnsuccessfulSearch found by the `where` argument doesn't exist, create a new UnsuccessfulSearch with this data.
     */
    create: XOR<UnsuccessfulSearchCreateInput, UnsuccessfulSearchUncheckedCreateInput>
    /**
     * In case the UnsuccessfulSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnsuccessfulSearchUpdateInput, UnsuccessfulSearchUncheckedUpdateInput>
  }

  /**
   * UnsuccessfulSearch delete
   */
  export type UnsuccessfulSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    /**
     * Filter which UnsuccessfulSearch to delete.
     */
    where: UnsuccessfulSearchWhereUniqueInput
  }

  /**
   * UnsuccessfulSearch deleteMany
   */
  export type UnsuccessfulSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnsuccessfulSearches to delete
     */
    where?: UnsuccessfulSearchWhereInput
    /**
     * Limit how many UnsuccessfulSearches to delete.
     */
    limit?: number
  }

  /**
   * UnsuccessfulSearch without action
   */
  export type UnsuccessfulSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    telegramId: number | null
    sessionCount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    telegramId: bigint | null
    sessionCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    telegramId: bigint | null
    username: string | null
    firstSeen: Date | null
    lastActive: Date | null
    sessionCount: number | null
    lastWeeklyTop: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    telegramId: bigint | null
    username: string | null
    firstSeen: Date | null
    lastActive: Date | null
    sessionCount: number | null
    lastWeeklyTop: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegramId: number
    username: number
    firstSeen: number
    lastActive: number
    sessionCount: number
    lastWeeklyTop: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    telegramId?: true
    sessionCount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    telegramId?: true
    sessionCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstSeen?: true
    lastActive?: true
    sessionCount?: true
    lastWeeklyTop?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstSeen?: true
    lastActive?: true
    sessionCount?: true
    lastWeeklyTop?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    firstSeen?: true
    lastActive?: true
    sessionCount?: true
    lastWeeklyTop?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    telegramId: bigint
    username: string | null
    firstSeen: Date
    lastActive: Date
    sessionCount: number
    lastWeeklyTop: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstSeen?: boolean
    lastActive?: boolean
    sessionCount?: boolean
    lastWeeklyTop?: boolean
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    searchLogs?: boolean | User$searchLogsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    weeklyBroadcasts?: boolean | User$weeklyBroadcastsArgs<ExtArgs>
    unsuccessfulSearches?: boolean | User$unsuccessfulSearchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstSeen?: boolean
    lastActive?: boolean
    sessionCount?: boolean
    lastWeeklyTop?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstSeen?: boolean
    lastActive?: boolean
    sessionCount?: boolean
    lastWeeklyTop?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    username?: boolean
    firstSeen?: boolean
    lastActive?: boolean
    sessionCount?: boolean
    lastWeeklyTop?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "username" | "firstSeen" | "lastActive" | "sessionCount" | "lastWeeklyTop", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    searchLogs?: boolean | User$searchLogsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    weeklyBroadcasts?: boolean | User$weeklyBroadcastsArgs<ExtArgs>
    unsuccessfulSearches?: boolean | User$unsuccessfulSearchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      searchLogs: Prisma.$SearchLogPayload<ExtArgs>[]
      sentMessages: Prisma.$SentMessagePayload<ExtArgs>[]
      weeklyBroadcasts: Prisma.$WeeklyBroadcastPayload<ExtArgs>[]
      unsuccessfulSearches: Prisma.$UnsuccessfulSearchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      telegramId: bigint
      username: string | null
      firstSeen: Date
      lastActive: Date
      sessionCount: number
      lastWeeklyTop: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedbacks<T extends User$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchLogs<T extends User$searchLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$searchLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyBroadcasts<T extends User$weeklyBroadcastsArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyBroadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unsuccessfulSearches<T extends User$unsuccessfulSearchesArgs<ExtArgs> = {}>(args?: Subset<T, User$unsuccessfulSearchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly telegramId: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstSeen: FieldRef<"User", 'DateTime'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly sessionCount: FieldRef<"User", 'Int'>
    readonly lastWeeklyTop: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.feedbacks
   */
  export type User$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.searchLogs
   */
  export type User$searchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    where?: SearchLogWhereInput
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    cursor?: SearchLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchLogScalarFieldEnum | SearchLogScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentMessage
     */
    select?: SentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentMessage
     */
    omit?: SentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentMessageInclude<ExtArgs> | null
    where?: SentMessageWhereInput
    orderBy?: SentMessageOrderByWithRelationInput | SentMessageOrderByWithRelationInput[]
    cursor?: SentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentMessageScalarFieldEnum | SentMessageScalarFieldEnum[]
  }

  /**
   * User.weeklyBroadcasts
   */
  export type User$weeklyBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    where?: WeeklyBroadcastWhereInput
    orderBy?: WeeklyBroadcastOrderByWithRelationInput | WeeklyBroadcastOrderByWithRelationInput[]
    cursor?: WeeklyBroadcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyBroadcastScalarFieldEnum | WeeklyBroadcastScalarFieldEnum[]
  }

  /**
   * User.unsuccessfulSearches
   */
  export type User$unsuccessfulSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    where?: UnsuccessfulSearchWhereInput
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    cursor?: UnsuccessfulSearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnsuccessfulSearchScalarFieldEnum | UnsuccessfulSearchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Query
   */

  export type AggregateQuery = {
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  export type QueryAvgAggregateOutputType = {
    id: number | null
  }

  export type QuerySumAggregateOutputType = {
    id: number | null
  }

  export type QueryMinAggregateOutputType = {
    id: number | null
    query: string | null
    firstSeen: Date | null
  }

  export type QueryMaxAggregateOutputType = {
    id: number | null
    query: string | null
    firstSeen: Date | null
  }

  export type QueryCountAggregateOutputType = {
    id: number
    query: number
    firstSeen: number
    _all: number
  }


  export type QueryAvgAggregateInputType = {
    id?: true
  }

  export type QuerySumAggregateInputType = {
    id?: true
  }

  export type QueryMinAggregateInputType = {
    id?: true
    query?: true
    firstSeen?: true
  }

  export type QueryMaxAggregateInputType = {
    id?: true
    query?: true
    firstSeen?: true
  }

  export type QueryCountAggregateInputType = {
    id?: true
    query?: true
    firstSeen?: true
    _all?: true
  }

  export type QueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Query to aggregate.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queries
    **/
    _count?: true | QueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryMaxAggregateInputType
  }

  export type GetQueryAggregateType<T extends QueryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuery[P]>
      : GetScalarType<T[P], AggregateQuery[P]>
  }




  export type QueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithAggregationInput | QueryOrderByWithAggregationInput[]
    by: QueryScalarFieldEnum[] | QueryScalarFieldEnum
    having?: QueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryCountAggregateInputType | true
    _avg?: QueryAvgAggregateInputType
    _sum?: QuerySumAggregateInputType
    _min?: QueryMinAggregateInputType
    _max?: QueryMaxAggregateInputType
  }

  export type QueryGroupByOutputType = {
    id: number
    query: string
    firstSeen: Date
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  type GetQueryGroupByPayload<T extends QueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryGroupByOutputType[P]>
        }
      >
    >


  export type QuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    firstSeen?: boolean
    books?: boolean | Query$booksArgs<ExtArgs>
    searchLogs?: boolean | Query$searchLogsArgs<ExtArgs>
    unsuccessfulSearches?: boolean | Query$unsuccessfulSearchesArgs<ExtArgs>
    cacheLogs?: boolean | Query$cacheLogsArgs<ExtArgs>
    _count?: boolean | QueryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["query"]>

  export type QuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    firstSeen?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query?: boolean
    firstSeen?: boolean
  }, ExtArgs["result"]["query"]>

  export type QuerySelectScalar = {
    id?: boolean
    query?: boolean
    firstSeen?: boolean
  }

  export type QueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "query" | "firstSeen", ExtArgs["result"]["query"]>
  export type QueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Query$booksArgs<ExtArgs>
    searchLogs?: boolean | Query$searchLogsArgs<ExtArgs>
    unsuccessfulSearches?: boolean | Query$unsuccessfulSearchesArgs<ExtArgs>
    cacheLogs?: boolean | Query$cacheLogsArgs<ExtArgs>
    _count?: boolean | QueryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Query"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      searchLogs: Prisma.$SearchLogPayload<ExtArgs>[]
      unsuccessfulSearches: Prisma.$UnsuccessfulSearchPayload<ExtArgs>[]
      cacheLogs: Prisma.$CacheLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      query: string
      firstSeen: Date
    }, ExtArgs["result"]["query"]>
    composites: {}
  }

  type QueryGetPayload<S extends boolean | null | undefined | QueryDefaultArgs> = $Result.GetResult<Prisma.$QueryPayload, S>

  type QueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryCountAggregateInputType | true
    }

  export interface QueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Query'], meta: { name: 'Query' } }
    /**
     * Find zero or one Query that matches the filter.
     * @param {QueryFindUniqueArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryFindUniqueArgs>(args: SelectSubset<T, QueryFindUniqueArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Query that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryFindUniqueOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryFindFirstArgs>(args?: SelectSubset<T, QueryFindFirstArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queries
     * const queries = await prisma.query.findMany()
     * 
     * // Get first 10 Queries
     * const queries = await prisma.query.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryWithIdOnly = await prisma.query.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryFindManyArgs>(args?: SelectSubset<T, QueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Query.
     * @param {QueryCreateArgs} args - Arguments to create a Query.
     * @example
     * // Create one Query
     * const Query = await prisma.query.create({
     *   data: {
     *     // ... data to create a Query
     *   }
     * })
     * 
     */
    create<T extends QueryCreateArgs>(args: SelectSubset<T, QueryCreateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queries.
     * @param {QueryCreateManyArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryCreateManyArgs>(args?: SelectSubset<T, QueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queries and returns the data saved in the database.
     * @param {QueryCreateManyAndReturnArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Query.
     * @param {QueryDeleteArgs} args - Arguments to delete one Query.
     * @example
     * // Delete one Query
     * const Query = await prisma.query.delete({
     *   where: {
     *     // ... filter to delete one Query
     *   }
     * })
     * 
     */
    delete<T extends QueryDeleteArgs>(args: SelectSubset<T, QueryDeleteArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Query.
     * @param {QueryUpdateArgs} args - Arguments to update one Query.
     * @example
     * // Update one Query
     * const query = await prisma.query.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryUpdateArgs>(args: SelectSubset<T, QueryUpdateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queries.
     * @param {QueryDeleteManyArgs} args - Arguments to filter Queries to delete.
     * @example
     * // Delete a few Queries
     * const { count } = await prisma.query.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryDeleteManyArgs>(args?: SelectSubset<T, QueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryUpdateManyArgs>(args: SelectSubset<T, QueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries and returns the data updated in the database.
     * @param {QueryUpdateManyAndReturnArgs} args - Arguments to update many Queries.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QueryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Query.
     * @param {QueryUpsertArgs} args - Arguments to update or create a Query.
     * @example
     * // Update or create a Query
     * const query = await prisma.query.upsert({
     *   create: {
     *     // ... data to create a Query
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Query we want to update
     *   }
     * })
     */
    upsert<T extends QueryUpsertArgs>(args: SelectSubset<T, QueryUpsertArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryCountArgs} args - Arguments to filter Queries to count.
     * @example
     * // Count the number of Queries
     * const count = await prisma.query.count({
     *   where: {
     *     // ... the filter for the Queries we want to count
     *   }
     * })
    **/
    count<T extends QueryCountArgs>(
      args?: Subset<T, QueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueryAggregateArgs>(args: Subset<T, QueryAggregateArgs>): Prisma.PrismaPromise<GetQueryAggregateType<T>>

    /**
     * Group by Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryGroupByArgs['orderBy'] }
        : { orderBy?: QueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Query model
   */
  readonly fields: QueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Query.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Query$booksArgs<ExtArgs> = {}>(args?: Subset<T, Query$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchLogs<T extends Query$searchLogsArgs<ExtArgs> = {}>(args?: Subset<T, Query$searchLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unsuccessfulSearches<T extends Query$unsuccessfulSearchesArgs<ExtArgs> = {}>(args?: Subset<T, Query$unsuccessfulSearchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnsuccessfulSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cacheLogs<T extends Query$cacheLogsArgs<ExtArgs> = {}>(args?: Subset<T, Query$cacheLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Query model
   */
  interface QueryFieldRefs {
    readonly id: FieldRef<"Query", 'Int'>
    readonly query: FieldRef<"Query", 'String'>
    readonly firstSeen: FieldRef<"Query", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Query findUnique
   */
  export type QueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findUniqueOrThrow
   */
  export type QueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findFirst
   */
  export type QueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findFirstOrThrow
   */
  export type QueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findMany
   */
  export type QueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Queries to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query create
   */
  export type QueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The data needed to create a Query.
     */
    data: XOR<QueryCreateInput, QueryUncheckedCreateInput>
  }

  /**
   * Query createMany
   */
  export type QueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query createManyAndReturn
   */
  export type QueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query update
   */
  export type QueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The data needed to update a Query.
     */
    data: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
    /**
     * Choose, which Query to update.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query updateMany
   */
  export type QueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query updateManyAndReturn
   */
  export type QueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query upsert
   */
  export type QueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The filter to search for the Query to update in case it exists.
     */
    where: QueryWhereUniqueInput
    /**
     * In case the Query found by the `where` argument doesn't exist, create a new Query with this data.
     */
    create: XOR<QueryCreateInput, QueryUncheckedCreateInput>
    /**
     * In case the Query was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
  }

  /**
   * Query delete
   */
  export type QueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter which Query to delete.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query deleteMany
   */
  export type QueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queries to delete
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to delete.
     */
    limit?: number
  }

  /**
   * Query.books
   */
  export type Query$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Query.searchLogs
   */
  export type Query$searchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchLog
     */
    select?: SearchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchLog
     */
    omit?: SearchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchLogInclude<ExtArgs> | null
    where?: SearchLogWhereInput
    orderBy?: SearchLogOrderByWithRelationInput | SearchLogOrderByWithRelationInput[]
    cursor?: SearchLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchLogScalarFieldEnum | SearchLogScalarFieldEnum[]
  }

  /**
   * Query.unsuccessfulSearches
   */
  export type Query$unsuccessfulSearchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnsuccessfulSearch
     */
    select?: UnsuccessfulSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnsuccessfulSearch
     */
    omit?: UnsuccessfulSearchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnsuccessfulSearchInclude<ExtArgs> | null
    where?: UnsuccessfulSearchWhereInput
    orderBy?: UnsuccessfulSearchOrderByWithRelationInput | UnsuccessfulSearchOrderByWithRelationInput[]
    cursor?: UnsuccessfulSearchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnsuccessfulSearchScalarFieldEnum | UnsuccessfulSearchScalarFieldEnum[]
  }

  /**
   * Query.cacheLogs
   */
  export type Query$cacheLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    where?: CacheLogWhereInput
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    cursor?: CacheLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CacheLogScalarFieldEnum | CacheLogScalarFieldEnum[]
  }

  /**
   * Query without action
   */
  export type QueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyBroadcast
   */

  export type AggregateWeeklyBroadcast = {
    _count: WeeklyBroadcastCountAggregateOutputType | null
    _avg: WeeklyBroadcastAvgAggregateOutputType | null
    _sum: WeeklyBroadcastSumAggregateOutputType | null
    _min: WeeklyBroadcastMinAggregateOutputType | null
    _max: WeeklyBroadcastMaxAggregateOutputType | null
  }

  export type WeeklyBroadcastAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WeeklyBroadcastSumAggregateOutputType = {
    id: number | null
    userId: bigint | null
  }

  export type WeeklyBroadcastMinAggregateOutputType = {
    id: number | null
    userId: bigint | null
    groupName: string | null
    sentAt: Date | null
  }

  export type WeeklyBroadcastMaxAggregateOutputType = {
    id: number | null
    userId: bigint | null
    groupName: string | null
    sentAt: Date | null
  }

  export type WeeklyBroadcastCountAggregateOutputType = {
    id: number
    userId: number
    groupName: number
    sentAt: number
    _all: number
  }


  export type WeeklyBroadcastAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WeeklyBroadcastSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WeeklyBroadcastMinAggregateInputType = {
    id?: true
    userId?: true
    groupName?: true
    sentAt?: true
  }

  export type WeeklyBroadcastMaxAggregateInputType = {
    id?: true
    userId?: true
    groupName?: true
    sentAt?: true
  }

  export type WeeklyBroadcastCountAggregateInputType = {
    id?: true
    userId?: true
    groupName?: true
    sentAt?: true
    _all?: true
  }

  export type WeeklyBroadcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyBroadcast to aggregate.
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBroadcasts to fetch.
     */
    orderBy?: WeeklyBroadcastOrderByWithRelationInput | WeeklyBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyBroadcasts
    **/
    _count?: true | WeeklyBroadcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyBroadcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyBroadcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyBroadcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyBroadcastMaxAggregateInputType
  }

  export type GetWeeklyBroadcastAggregateType<T extends WeeklyBroadcastAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyBroadcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyBroadcast[P]>
      : GetScalarType<T[P], AggregateWeeklyBroadcast[P]>
  }




  export type WeeklyBroadcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyBroadcastWhereInput
    orderBy?: WeeklyBroadcastOrderByWithAggregationInput | WeeklyBroadcastOrderByWithAggregationInput[]
    by: WeeklyBroadcastScalarFieldEnum[] | WeeklyBroadcastScalarFieldEnum
    having?: WeeklyBroadcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyBroadcastCountAggregateInputType | true
    _avg?: WeeklyBroadcastAvgAggregateInputType
    _sum?: WeeklyBroadcastSumAggregateInputType
    _min?: WeeklyBroadcastMinAggregateInputType
    _max?: WeeklyBroadcastMaxAggregateInputType
  }

  export type WeeklyBroadcastGroupByOutputType = {
    id: number
    userId: bigint
    groupName: string
    sentAt: Date
    _count: WeeklyBroadcastCountAggregateOutputType | null
    _avg: WeeklyBroadcastAvgAggregateOutputType | null
    _sum: WeeklyBroadcastSumAggregateOutputType | null
    _min: WeeklyBroadcastMinAggregateOutputType | null
    _max: WeeklyBroadcastMaxAggregateOutputType | null
  }

  type GetWeeklyBroadcastGroupByPayload<T extends WeeklyBroadcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyBroadcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyBroadcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyBroadcastGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyBroadcastGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyBroadcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupName?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBroadcast"]>

  export type WeeklyBroadcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupName?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBroadcast"]>

  export type WeeklyBroadcastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupName?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBroadcast"]>

  export type WeeklyBroadcastSelectScalar = {
    id?: boolean
    userId?: boolean
    groupName?: boolean
    sentAt?: boolean
  }

  export type WeeklyBroadcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupName" | "sentAt", ExtArgs["result"]["weeklyBroadcast"]>
  export type WeeklyBroadcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyBroadcastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyBroadcastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyBroadcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyBroadcast"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: bigint
      groupName: string
      sentAt: Date
    }, ExtArgs["result"]["weeklyBroadcast"]>
    composites: {}
  }

  type WeeklyBroadcastGetPayload<S extends boolean | null | undefined | WeeklyBroadcastDefaultArgs> = $Result.GetResult<Prisma.$WeeklyBroadcastPayload, S>

  type WeeklyBroadcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyBroadcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyBroadcastCountAggregateInputType | true
    }

  export interface WeeklyBroadcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyBroadcast'], meta: { name: 'WeeklyBroadcast' } }
    /**
     * Find zero or one WeeklyBroadcast that matches the filter.
     * @param {WeeklyBroadcastFindUniqueArgs} args - Arguments to find a WeeklyBroadcast
     * @example
     * // Get one WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyBroadcastFindUniqueArgs>(args: SelectSubset<T, WeeklyBroadcastFindUniqueArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyBroadcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyBroadcastFindUniqueOrThrowArgs} args - Arguments to find a WeeklyBroadcast
     * @example
     * // Get one WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyBroadcastFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyBroadcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyBroadcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastFindFirstArgs} args - Arguments to find a WeeklyBroadcast
     * @example
     * // Get one WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyBroadcastFindFirstArgs>(args?: SelectSubset<T, WeeklyBroadcastFindFirstArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyBroadcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastFindFirstOrThrowArgs} args - Arguments to find a WeeklyBroadcast
     * @example
     * // Get one WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyBroadcastFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyBroadcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyBroadcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyBroadcasts
     * const weeklyBroadcasts = await prisma.weeklyBroadcast.findMany()
     * 
     * // Get first 10 WeeklyBroadcasts
     * const weeklyBroadcasts = await prisma.weeklyBroadcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyBroadcastWithIdOnly = await prisma.weeklyBroadcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyBroadcastFindManyArgs>(args?: SelectSubset<T, WeeklyBroadcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyBroadcast.
     * @param {WeeklyBroadcastCreateArgs} args - Arguments to create a WeeklyBroadcast.
     * @example
     * // Create one WeeklyBroadcast
     * const WeeklyBroadcast = await prisma.weeklyBroadcast.create({
     *   data: {
     *     // ... data to create a WeeklyBroadcast
     *   }
     * })
     * 
     */
    create<T extends WeeklyBroadcastCreateArgs>(args: SelectSubset<T, WeeklyBroadcastCreateArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyBroadcasts.
     * @param {WeeklyBroadcastCreateManyArgs} args - Arguments to create many WeeklyBroadcasts.
     * @example
     * // Create many WeeklyBroadcasts
     * const weeklyBroadcast = await prisma.weeklyBroadcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyBroadcastCreateManyArgs>(args?: SelectSubset<T, WeeklyBroadcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyBroadcasts and returns the data saved in the database.
     * @param {WeeklyBroadcastCreateManyAndReturnArgs} args - Arguments to create many WeeklyBroadcasts.
     * @example
     * // Create many WeeklyBroadcasts
     * const weeklyBroadcast = await prisma.weeklyBroadcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyBroadcasts and only return the `id`
     * const weeklyBroadcastWithIdOnly = await prisma.weeklyBroadcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyBroadcastCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyBroadcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyBroadcast.
     * @param {WeeklyBroadcastDeleteArgs} args - Arguments to delete one WeeklyBroadcast.
     * @example
     * // Delete one WeeklyBroadcast
     * const WeeklyBroadcast = await prisma.weeklyBroadcast.delete({
     *   where: {
     *     // ... filter to delete one WeeklyBroadcast
     *   }
     * })
     * 
     */
    delete<T extends WeeklyBroadcastDeleteArgs>(args: SelectSubset<T, WeeklyBroadcastDeleteArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyBroadcast.
     * @param {WeeklyBroadcastUpdateArgs} args - Arguments to update one WeeklyBroadcast.
     * @example
     * // Update one WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyBroadcastUpdateArgs>(args: SelectSubset<T, WeeklyBroadcastUpdateArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyBroadcasts.
     * @param {WeeklyBroadcastDeleteManyArgs} args - Arguments to filter WeeklyBroadcasts to delete.
     * @example
     * // Delete a few WeeklyBroadcasts
     * const { count } = await prisma.weeklyBroadcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyBroadcastDeleteManyArgs>(args?: SelectSubset<T, WeeklyBroadcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyBroadcasts
     * const weeklyBroadcast = await prisma.weeklyBroadcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyBroadcastUpdateManyArgs>(args: SelectSubset<T, WeeklyBroadcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyBroadcasts and returns the data updated in the database.
     * @param {WeeklyBroadcastUpdateManyAndReturnArgs} args - Arguments to update many WeeklyBroadcasts.
     * @example
     * // Update many WeeklyBroadcasts
     * const weeklyBroadcast = await prisma.weeklyBroadcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyBroadcasts and only return the `id`
     * const weeklyBroadcastWithIdOnly = await prisma.weeklyBroadcast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklyBroadcastUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyBroadcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyBroadcast.
     * @param {WeeklyBroadcastUpsertArgs} args - Arguments to update or create a WeeklyBroadcast.
     * @example
     * // Update or create a WeeklyBroadcast
     * const weeklyBroadcast = await prisma.weeklyBroadcast.upsert({
     *   create: {
     *     // ... data to create a WeeklyBroadcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyBroadcast we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyBroadcastUpsertArgs>(args: SelectSubset<T, WeeklyBroadcastUpsertArgs<ExtArgs>>): Prisma__WeeklyBroadcastClient<$Result.GetResult<Prisma.$WeeklyBroadcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastCountArgs} args - Arguments to filter WeeklyBroadcasts to count.
     * @example
     * // Count the number of WeeklyBroadcasts
     * const count = await prisma.weeklyBroadcast.count({
     *   where: {
     *     // ... the filter for the WeeklyBroadcasts we want to count
     *   }
     * })
    **/
    count<T extends WeeklyBroadcastCountArgs>(
      args?: Subset<T, WeeklyBroadcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyBroadcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklyBroadcastAggregateArgs>(args: Subset<T, WeeklyBroadcastAggregateArgs>): Prisma.PrismaPromise<GetWeeklyBroadcastAggregateType<T>>

    /**
     * Group by WeeklyBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBroadcastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklyBroadcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyBroadcastGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyBroadcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklyBroadcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyBroadcast model
   */
  readonly fields: WeeklyBroadcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyBroadcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyBroadcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklyBroadcast model
   */
  interface WeeklyBroadcastFieldRefs {
    readonly id: FieldRef<"WeeklyBroadcast", 'Int'>
    readonly userId: FieldRef<"WeeklyBroadcast", 'BigInt'>
    readonly groupName: FieldRef<"WeeklyBroadcast", 'String'>
    readonly sentAt: FieldRef<"WeeklyBroadcast", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyBroadcast findUnique
   */
  export type WeeklyBroadcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBroadcast to fetch.
     */
    where: WeeklyBroadcastWhereUniqueInput
  }

  /**
   * WeeklyBroadcast findUniqueOrThrow
   */
  export type WeeklyBroadcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBroadcast to fetch.
     */
    where: WeeklyBroadcastWhereUniqueInput
  }

  /**
   * WeeklyBroadcast findFirst
   */
  export type WeeklyBroadcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBroadcast to fetch.
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBroadcasts to fetch.
     */
    orderBy?: WeeklyBroadcastOrderByWithRelationInput | WeeklyBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyBroadcasts.
     */
    cursor?: WeeklyBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyBroadcasts.
     */
    distinct?: WeeklyBroadcastScalarFieldEnum | WeeklyBroadcastScalarFieldEnum[]
  }

  /**
   * WeeklyBroadcast findFirstOrThrow
   */
  export type WeeklyBroadcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBroadcast to fetch.
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBroadcasts to fetch.
     */
    orderBy?: WeeklyBroadcastOrderByWithRelationInput | WeeklyBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyBroadcasts.
     */
    cursor?: WeeklyBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyBroadcasts.
     */
    distinct?: WeeklyBroadcastScalarFieldEnum | WeeklyBroadcastScalarFieldEnum[]
  }

  /**
   * WeeklyBroadcast findMany
   */
  export type WeeklyBroadcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBroadcasts to fetch.
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBroadcasts to fetch.
     */
    orderBy?: WeeklyBroadcastOrderByWithRelationInput | WeeklyBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyBroadcasts.
     */
    cursor?: WeeklyBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBroadcasts.
     */
    skip?: number
    distinct?: WeeklyBroadcastScalarFieldEnum | WeeklyBroadcastScalarFieldEnum[]
  }

  /**
   * WeeklyBroadcast create
   */
  export type WeeklyBroadcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyBroadcast.
     */
    data: XOR<WeeklyBroadcastCreateInput, WeeklyBroadcastUncheckedCreateInput>
  }

  /**
   * WeeklyBroadcast createMany
   */
  export type WeeklyBroadcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyBroadcasts.
     */
    data: WeeklyBroadcastCreateManyInput | WeeklyBroadcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyBroadcast createManyAndReturn
   */
  export type WeeklyBroadcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyBroadcasts.
     */
    data: WeeklyBroadcastCreateManyInput | WeeklyBroadcastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyBroadcast update
   */
  export type WeeklyBroadcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyBroadcast.
     */
    data: XOR<WeeklyBroadcastUpdateInput, WeeklyBroadcastUncheckedUpdateInput>
    /**
     * Choose, which WeeklyBroadcast to update.
     */
    where: WeeklyBroadcastWhereUniqueInput
  }

  /**
   * WeeklyBroadcast updateMany
   */
  export type WeeklyBroadcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyBroadcasts.
     */
    data: XOR<WeeklyBroadcastUpdateManyMutationInput, WeeklyBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyBroadcasts to update
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * Limit how many WeeklyBroadcasts to update.
     */
    limit?: number
  }

  /**
   * WeeklyBroadcast updateManyAndReturn
   */
  export type WeeklyBroadcastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyBroadcasts.
     */
    data: XOR<WeeklyBroadcastUpdateManyMutationInput, WeeklyBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyBroadcasts to update
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * Limit how many WeeklyBroadcasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyBroadcast upsert
   */
  export type WeeklyBroadcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyBroadcast to update in case it exists.
     */
    where: WeeklyBroadcastWhereUniqueInput
    /**
     * In case the WeeklyBroadcast found by the `where` argument doesn't exist, create a new WeeklyBroadcast with this data.
     */
    create: XOR<WeeklyBroadcastCreateInput, WeeklyBroadcastUncheckedCreateInput>
    /**
     * In case the WeeklyBroadcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyBroadcastUpdateInput, WeeklyBroadcastUncheckedUpdateInput>
  }

  /**
   * WeeklyBroadcast delete
   */
  export type WeeklyBroadcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
    /**
     * Filter which WeeklyBroadcast to delete.
     */
    where: WeeklyBroadcastWhereUniqueInput
  }

  /**
   * WeeklyBroadcast deleteMany
   */
  export type WeeklyBroadcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyBroadcasts to delete
     */
    where?: WeeklyBroadcastWhereInput
    /**
     * Limit how many WeeklyBroadcasts to delete.
     */
    limit?: number
  }

  /**
   * WeeklyBroadcast without action
   */
  export type WeeklyBroadcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBroadcast
     */
    select?: WeeklyBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBroadcast
     */
    omit?: WeeklyBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBroadcastInclude<ExtArgs> | null
  }


  /**
   * Model BookPrice
   */

  export type AggregateBookPrice = {
    _count: BookPriceCountAggregateOutputType | null
    _avg: BookPriceAvgAggregateOutputType | null
    _sum: BookPriceSumAggregateOutputType | null
    _min: BookPriceMinAggregateOutputType | null
    _max: BookPriceMaxAggregateOutputType | null
  }

  export type BookPriceAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    price: number | null
  }

  export type BookPriceSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    price: number | null
  }

  export type BookPriceMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    price: number | null
    recordedAt: Date | null
  }

  export type BookPriceMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    price: number | null
    recordedAt: Date | null
  }

  export type BookPriceCountAggregateOutputType = {
    id: number
    bookId: number
    price: number
    recordedAt: number
    _all: number
  }


  export type BookPriceAvgAggregateInputType = {
    id?: true
    bookId?: true
    price?: true
  }

  export type BookPriceSumAggregateInputType = {
    id?: true
    bookId?: true
    price?: true
  }

  export type BookPriceMinAggregateInputType = {
    id?: true
    bookId?: true
    price?: true
    recordedAt?: true
  }

  export type BookPriceMaxAggregateInputType = {
    id?: true
    bookId?: true
    price?: true
    recordedAt?: true
  }

  export type BookPriceCountAggregateInputType = {
    id?: true
    bookId?: true
    price?: true
    recordedAt?: true
    _all?: true
  }

  export type BookPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookPrice to aggregate.
     */
    where?: BookPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPrices to fetch.
     */
    orderBy?: BookPriceOrderByWithRelationInput | BookPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookPrices
    **/
    _count?: true | BookPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookPriceMaxAggregateInputType
  }

  export type GetBookPriceAggregateType<T extends BookPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateBookPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookPrice[P]>
      : GetScalarType<T[P], AggregateBookPrice[P]>
  }




  export type BookPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookPriceWhereInput
    orderBy?: BookPriceOrderByWithAggregationInput | BookPriceOrderByWithAggregationInput[]
    by: BookPriceScalarFieldEnum[] | BookPriceScalarFieldEnum
    having?: BookPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookPriceCountAggregateInputType | true
    _avg?: BookPriceAvgAggregateInputType
    _sum?: BookPriceSumAggregateInputType
    _min?: BookPriceMinAggregateInputType
    _max?: BookPriceMaxAggregateInputType
  }

  export type BookPriceGroupByOutputType = {
    id: number
    bookId: number
    price: number
    recordedAt: Date
    _count: BookPriceCountAggregateOutputType | null
    _avg: BookPriceAvgAggregateOutputType | null
    _sum: BookPriceSumAggregateOutputType | null
    _min: BookPriceMinAggregateOutputType | null
    _max: BookPriceMaxAggregateOutputType | null
  }

  type GetBookPriceGroupByPayload<T extends BookPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookPriceGroupByOutputType[P]>
            : GetScalarType<T[P], BookPriceGroupByOutputType[P]>
        }
      >
    >


  export type BookPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    price?: boolean
    recordedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPrice"]>

  export type BookPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    price?: boolean
    recordedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPrice"]>

  export type BookPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    price?: boolean
    recordedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPrice"]>

  export type BookPriceSelectScalar = {
    id?: boolean
    bookId?: boolean
    price?: boolean
    recordedAt?: boolean
  }

  export type BookPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "price" | "recordedAt", ExtArgs["result"]["bookPrice"]>
  export type BookPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookPrice"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      price: number
      recordedAt: Date
    }, ExtArgs["result"]["bookPrice"]>
    composites: {}
  }

  type BookPriceGetPayload<S extends boolean | null | undefined | BookPriceDefaultArgs> = $Result.GetResult<Prisma.$BookPricePayload, S>

  type BookPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookPriceCountAggregateInputType | true
    }

  export interface BookPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookPrice'], meta: { name: 'BookPrice' } }
    /**
     * Find zero or one BookPrice that matches the filter.
     * @param {BookPriceFindUniqueArgs} args - Arguments to find a BookPrice
     * @example
     * // Get one BookPrice
     * const bookPrice = await prisma.bookPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookPriceFindUniqueArgs>(args: SelectSubset<T, BookPriceFindUniqueArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookPriceFindUniqueOrThrowArgs} args - Arguments to find a BookPrice
     * @example
     * // Get one BookPrice
     * const bookPrice = await prisma.bookPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, BookPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceFindFirstArgs} args - Arguments to find a BookPrice
     * @example
     * // Get one BookPrice
     * const bookPrice = await prisma.bookPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookPriceFindFirstArgs>(args?: SelectSubset<T, BookPriceFindFirstArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceFindFirstOrThrowArgs} args - Arguments to find a BookPrice
     * @example
     * // Get one BookPrice
     * const bookPrice = await prisma.bookPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, BookPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookPrices
     * const bookPrices = await prisma.bookPrice.findMany()
     * 
     * // Get first 10 BookPrices
     * const bookPrices = await prisma.bookPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookPriceWithIdOnly = await prisma.bookPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookPriceFindManyArgs>(args?: SelectSubset<T, BookPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookPrice.
     * @param {BookPriceCreateArgs} args - Arguments to create a BookPrice.
     * @example
     * // Create one BookPrice
     * const BookPrice = await prisma.bookPrice.create({
     *   data: {
     *     // ... data to create a BookPrice
     *   }
     * })
     * 
     */
    create<T extends BookPriceCreateArgs>(args: SelectSubset<T, BookPriceCreateArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookPrices.
     * @param {BookPriceCreateManyArgs} args - Arguments to create many BookPrices.
     * @example
     * // Create many BookPrices
     * const bookPrice = await prisma.bookPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookPriceCreateManyArgs>(args?: SelectSubset<T, BookPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookPrices and returns the data saved in the database.
     * @param {BookPriceCreateManyAndReturnArgs} args - Arguments to create many BookPrices.
     * @example
     * // Create many BookPrices
     * const bookPrice = await prisma.bookPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookPrices and only return the `id`
     * const bookPriceWithIdOnly = await prisma.bookPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, BookPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookPrice.
     * @param {BookPriceDeleteArgs} args - Arguments to delete one BookPrice.
     * @example
     * // Delete one BookPrice
     * const BookPrice = await prisma.bookPrice.delete({
     *   where: {
     *     // ... filter to delete one BookPrice
     *   }
     * })
     * 
     */
    delete<T extends BookPriceDeleteArgs>(args: SelectSubset<T, BookPriceDeleteArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookPrice.
     * @param {BookPriceUpdateArgs} args - Arguments to update one BookPrice.
     * @example
     * // Update one BookPrice
     * const bookPrice = await prisma.bookPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookPriceUpdateArgs>(args: SelectSubset<T, BookPriceUpdateArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookPrices.
     * @param {BookPriceDeleteManyArgs} args - Arguments to filter BookPrices to delete.
     * @example
     * // Delete a few BookPrices
     * const { count } = await prisma.bookPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookPriceDeleteManyArgs>(args?: SelectSubset<T, BookPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookPrices
     * const bookPrice = await prisma.bookPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookPriceUpdateManyArgs>(args: SelectSubset<T, BookPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookPrices and returns the data updated in the database.
     * @param {BookPriceUpdateManyAndReturnArgs} args - Arguments to update many BookPrices.
     * @example
     * // Update many BookPrices
     * const bookPrice = await prisma.bookPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookPrices and only return the `id`
     * const bookPriceWithIdOnly = await prisma.bookPrice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, BookPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookPrice.
     * @param {BookPriceUpsertArgs} args - Arguments to update or create a BookPrice.
     * @example
     * // Update or create a BookPrice
     * const bookPrice = await prisma.bookPrice.upsert({
     *   create: {
     *     // ... data to create a BookPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookPrice we want to update
     *   }
     * })
     */
    upsert<T extends BookPriceUpsertArgs>(args: SelectSubset<T, BookPriceUpsertArgs<ExtArgs>>): Prisma__BookPriceClient<$Result.GetResult<Prisma.$BookPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceCountArgs} args - Arguments to filter BookPrices to count.
     * @example
     * // Count the number of BookPrices
     * const count = await prisma.bookPrice.count({
     *   where: {
     *     // ... the filter for the BookPrices we want to count
     *   }
     * })
    **/
    count<T extends BookPriceCountArgs>(
      args?: Subset<T, BookPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookPriceAggregateArgs>(args: Subset<T, BookPriceAggregateArgs>): Prisma.PrismaPromise<GetBookPriceAggregateType<T>>

    /**
     * Group by BookPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookPriceGroupByArgs['orderBy'] }
        : { orderBy?: BookPriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookPrice model
   */
  readonly fields: BookPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookPrice model
   */
  interface BookPriceFieldRefs {
    readonly id: FieldRef<"BookPrice", 'Int'>
    readonly bookId: FieldRef<"BookPrice", 'Int'>
    readonly price: FieldRef<"BookPrice", 'Float'>
    readonly recordedAt: FieldRef<"BookPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookPrice findUnique
   */
  export type BookPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter, which BookPrice to fetch.
     */
    where: BookPriceWhereUniqueInput
  }

  /**
   * BookPrice findUniqueOrThrow
   */
  export type BookPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter, which BookPrice to fetch.
     */
    where: BookPriceWhereUniqueInput
  }

  /**
   * BookPrice findFirst
   */
  export type BookPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter, which BookPrice to fetch.
     */
    where?: BookPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPrices to fetch.
     */
    orderBy?: BookPriceOrderByWithRelationInput | BookPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookPrices.
     */
    cursor?: BookPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookPrices.
     */
    distinct?: BookPriceScalarFieldEnum | BookPriceScalarFieldEnum[]
  }

  /**
   * BookPrice findFirstOrThrow
   */
  export type BookPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter, which BookPrice to fetch.
     */
    where?: BookPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPrices to fetch.
     */
    orderBy?: BookPriceOrderByWithRelationInput | BookPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookPrices.
     */
    cursor?: BookPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookPrices.
     */
    distinct?: BookPriceScalarFieldEnum | BookPriceScalarFieldEnum[]
  }

  /**
   * BookPrice findMany
   */
  export type BookPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter, which BookPrices to fetch.
     */
    where?: BookPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPrices to fetch.
     */
    orderBy?: BookPriceOrderByWithRelationInput | BookPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookPrices.
     */
    cursor?: BookPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPrices.
     */
    skip?: number
    distinct?: BookPriceScalarFieldEnum | BookPriceScalarFieldEnum[]
  }

  /**
   * BookPrice create
   */
  export type BookPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a BookPrice.
     */
    data: XOR<BookPriceCreateInput, BookPriceUncheckedCreateInput>
  }

  /**
   * BookPrice createMany
   */
  export type BookPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookPrices.
     */
    data: BookPriceCreateManyInput | BookPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookPrice createManyAndReturn
   */
  export type BookPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * The data used to create many BookPrices.
     */
    data: BookPriceCreateManyInput | BookPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookPrice update
   */
  export type BookPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a BookPrice.
     */
    data: XOR<BookPriceUpdateInput, BookPriceUncheckedUpdateInput>
    /**
     * Choose, which BookPrice to update.
     */
    where: BookPriceWhereUniqueInput
  }

  /**
   * BookPrice updateMany
   */
  export type BookPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookPrices.
     */
    data: XOR<BookPriceUpdateManyMutationInput, BookPriceUncheckedUpdateManyInput>
    /**
     * Filter which BookPrices to update
     */
    where?: BookPriceWhereInput
    /**
     * Limit how many BookPrices to update.
     */
    limit?: number
  }

  /**
   * BookPrice updateManyAndReturn
   */
  export type BookPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * The data used to update BookPrices.
     */
    data: XOR<BookPriceUpdateManyMutationInput, BookPriceUncheckedUpdateManyInput>
    /**
     * Filter which BookPrices to update
     */
    where?: BookPriceWhereInput
    /**
     * Limit how many BookPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookPrice upsert
   */
  export type BookPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the BookPrice to update in case it exists.
     */
    where: BookPriceWhereUniqueInput
    /**
     * In case the BookPrice found by the `where` argument doesn't exist, create a new BookPrice with this data.
     */
    create: XOR<BookPriceCreateInput, BookPriceUncheckedCreateInput>
    /**
     * In case the BookPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookPriceUpdateInput, BookPriceUncheckedUpdateInput>
  }

  /**
   * BookPrice delete
   */
  export type BookPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
    /**
     * Filter which BookPrice to delete.
     */
    where: BookPriceWhereUniqueInput
  }

  /**
   * BookPrice deleteMany
   */
  export type BookPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookPrices to delete
     */
    where?: BookPriceWhereInput
    /**
     * Limit how many BookPrices to delete.
     */
    limit?: number
  }

  /**
   * BookPrice without action
   */
  export type BookPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPrice
     */
    select?: BookPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPrice
     */
    omit?: BookPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPriceInclude<ExtArgs> | null
  }


  /**
   * Model CacheLog
   */

  export type AggregateCacheLog = {
    _count: CacheLogCountAggregateOutputType | null
    _avg: CacheLogAvgAggregateOutputType | null
    _sum: CacheLogSumAggregateOutputType | null
    _min: CacheLogMinAggregateOutputType | null
    _max: CacheLogMaxAggregateOutputType | null
  }

  export type CacheLogAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    queryId: number | null
  }

  export type CacheLogSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    queryId: number | null
  }

  export type CacheLogMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    queryId: number | null
    createdAt: Date | null
  }

  export type CacheLogMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    queryId: number | null
    createdAt: Date | null
  }

  export type CacheLogCountAggregateOutputType = {
    id: number
    bookId: number
    queryId: number
    createdAt: number
    _all: number
  }


  export type CacheLogAvgAggregateInputType = {
    id?: true
    bookId?: true
    queryId?: true
  }

  export type CacheLogSumAggregateInputType = {
    id?: true
    bookId?: true
    queryId?: true
  }

  export type CacheLogMinAggregateInputType = {
    id?: true
    bookId?: true
    queryId?: true
    createdAt?: true
  }

  export type CacheLogMaxAggregateInputType = {
    id?: true
    bookId?: true
    queryId?: true
    createdAt?: true
  }

  export type CacheLogCountAggregateInputType = {
    id?: true
    bookId?: true
    queryId?: true
    createdAt?: true
    _all?: true
  }

  export type CacheLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CacheLog to aggregate.
     */
    where?: CacheLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CacheLogs to fetch.
     */
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CacheLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CacheLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CacheLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CacheLogs
    **/
    _count?: true | CacheLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CacheLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CacheLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CacheLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CacheLogMaxAggregateInputType
  }

  export type GetCacheLogAggregateType<T extends CacheLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCacheLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCacheLog[P]>
      : GetScalarType<T[P], AggregateCacheLog[P]>
  }




  export type CacheLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CacheLogWhereInput
    orderBy?: CacheLogOrderByWithAggregationInput | CacheLogOrderByWithAggregationInput[]
    by: CacheLogScalarFieldEnum[] | CacheLogScalarFieldEnum
    having?: CacheLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CacheLogCountAggregateInputType | true
    _avg?: CacheLogAvgAggregateInputType
    _sum?: CacheLogSumAggregateInputType
    _min?: CacheLogMinAggregateInputType
    _max?: CacheLogMaxAggregateInputType
  }

  export type CacheLogGroupByOutputType = {
    id: number
    bookId: number | null
    queryId: number
    createdAt: Date
    _count: CacheLogCountAggregateOutputType | null
    _avg: CacheLogAvgAggregateOutputType | null
    _sum: CacheLogSumAggregateOutputType | null
    _min: CacheLogMinAggregateOutputType | null
    _max: CacheLogMaxAggregateOutputType | null
  }

  type GetCacheLogGroupByPayload<T extends CacheLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CacheLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CacheLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CacheLogGroupByOutputType[P]>
            : GetScalarType<T[P], CacheLogGroupByOutputType[P]>
        }
      >
    >


  export type CacheLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    queryId?: boolean
    createdAt?: boolean
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }, ExtArgs["result"]["cacheLog"]>

  export type CacheLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    queryId?: boolean
    createdAt?: boolean
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }, ExtArgs["result"]["cacheLog"]>

  export type CacheLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    queryId?: boolean
    createdAt?: boolean
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }, ExtArgs["result"]["cacheLog"]>

  export type CacheLogSelectScalar = {
    id?: boolean
    bookId?: boolean
    queryId?: boolean
    createdAt?: boolean
  }

  export type CacheLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "queryId" | "createdAt", ExtArgs["result"]["cacheLog"]>
  export type CacheLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }
  export type CacheLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }
  export type CacheLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | CacheLog$bookArgs<ExtArgs>
    query?: boolean | CacheLog$queryArgs<ExtArgs>
  }

  export type $CacheLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CacheLog"
    objects: {
      book: Prisma.$BookPayload<ExtArgs> | null
      query: Prisma.$QueryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number | null
      queryId: number
      createdAt: Date
    }, ExtArgs["result"]["cacheLog"]>
    composites: {}
  }

  type CacheLogGetPayload<S extends boolean | null | undefined | CacheLogDefaultArgs> = $Result.GetResult<Prisma.$CacheLogPayload, S>

  type CacheLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CacheLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CacheLogCountAggregateInputType | true
    }

  export interface CacheLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CacheLog'], meta: { name: 'CacheLog' } }
    /**
     * Find zero or one CacheLog that matches the filter.
     * @param {CacheLogFindUniqueArgs} args - Arguments to find a CacheLog
     * @example
     * // Get one CacheLog
     * const cacheLog = await prisma.cacheLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CacheLogFindUniqueArgs>(args: SelectSubset<T, CacheLogFindUniqueArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CacheLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CacheLogFindUniqueOrThrowArgs} args - Arguments to find a CacheLog
     * @example
     * // Get one CacheLog
     * const cacheLog = await prisma.cacheLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CacheLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CacheLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CacheLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogFindFirstArgs} args - Arguments to find a CacheLog
     * @example
     * // Get one CacheLog
     * const cacheLog = await prisma.cacheLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CacheLogFindFirstArgs>(args?: SelectSubset<T, CacheLogFindFirstArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CacheLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogFindFirstOrThrowArgs} args - Arguments to find a CacheLog
     * @example
     * // Get one CacheLog
     * const cacheLog = await prisma.cacheLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CacheLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CacheLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CacheLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CacheLogs
     * const cacheLogs = await prisma.cacheLog.findMany()
     * 
     * // Get first 10 CacheLogs
     * const cacheLogs = await prisma.cacheLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cacheLogWithIdOnly = await prisma.cacheLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CacheLogFindManyArgs>(args?: SelectSubset<T, CacheLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CacheLog.
     * @param {CacheLogCreateArgs} args - Arguments to create a CacheLog.
     * @example
     * // Create one CacheLog
     * const CacheLog = await prisma.cacheLog.create({
     *   data: {
     *     // ... data to create a CacheLog
     *   }
     * })
     * 
     */
    create<T extends CacheLogCreateArgs>(args: SelectSubset<T, CacheLogCreateArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CacheLogs.
     * @param {CacheLogCreateManyArgs} args - Arguments to create many CacheLogs.
     * @example
     * // Create many CacheLogs
     * const cacheLog = await prisma.cacheLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CacheLogCreateManyArgs>(args?: SelectSubset<T, CacheLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CacheLogs and returns the data saved in the database.
     * @param {CacheLogCreateManyAndReturnArgs} args - Arguments to create many CacheLogs.
     * @example
     * // Create many CacheLogs
     * const cacheLog = await prisma.cacheLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CacheLogs and only return the `id`
     * const cacheLogWithIdOnly = await prisma.cacheLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CacheLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CacheLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CacheLog.
     * @param {CacheLogDeleteArgs} args - Arguments to delete one CacheLog.
     * @example
     * // Delete one CacheLog
     * const CacheLog = await prisma.cacheLog.delete({
     *   where: {
     *     // ... filter to delete one CacheLog
     *   }
     * })
     * 
     */
    delete<T extends CacheLogDeleteArgs>(args: SelectSubset<T, CacheLogDeleteArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CacheLog.
     * @param {CacheLogUpdateArgs} args - Arguments to update one CacheLog.
     * @example
     * // Update one CacheLog
     * const cacheLog = await prisma.cacheLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CacheLogUpdateArgs>(args: SelectSubset<T, CacheLogUpdateArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CacheLogs.
     * @param {CacheLogDeleteManyArgs} args - Arguments to filter CacheLogs to delete.
     * @example
     * // Delete a few CacheLogs
     * const { count } = await prisma.cacheLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CacheLogDeleteManyArgs>(args?: SelectSubset<T, CacheLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CacheLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CacheLogs
     * const cacheLog = await prisma.cacheLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CacheLogUpdateManyArgs>(args: SelectSubset<T, CacheLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CacheLogs and returns the data updated in the database.
     * @param {CacheLogUpdateManyAndReturnArgs} args - Arguments to update many CacheLogs.
     * @example
     * // Update many CacheLogs
     * const cacheLog = await prisma.cacheLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CacheLogs and only return the `id`
     * const cacheLogWithIdOnly = await prisma.cacheLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CacheLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CacheLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CacheLog.
     * @param {CacheLogUpsertArgs} args - Arguments to update or create a CacheLog.
     * @example
     * // Update or create a CacheLog
     * const cacheLog = await prisma.cacheLog.upsert({
     *   create: {
     *     // ... data to create a CacheLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CacheLog we want to update
     *   }
     * })
     */
    upsert<T extends CacheLogUpsertArgs>(args: SelectSubset<T, CacheLogUpsertArgs<ExtArgs>>): Prisma__CacheLogClient<$Result.GetResult<Prisma.$CacheLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CacheLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogCountArgs} args - Arguments to filter CacheLogs to count.
     * @example
     * // Count the number of CacheLogs
     * const count = await prisma.cacheLog.count({
     *   where: {
     *     // ... the filter for the CacheLogs we want to count
     *   }
     * })
    **/
    count<T extends CacheLogCountArgs>(
      args?: Subset<T, CacheLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CacheLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CacheLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CacheLogAggregateArgs>(args: Subset<T, CacheLogAggregateArgs>): Prisma.PrismaPromise<GetCacheLogAggregateType<T>>

    /**
     * Group by CacheLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CacheLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CacheLogGroupByArgs['orderBy'] }
        : { orderBy?: CacheLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CacheLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCacheLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CacheLog model
   */
  readonly fields: CacheLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CacheLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CacheLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends CacheLog$bookArgs<ExtArgs> = {}>(args?: Subset<T, CacheLog$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    query<T extends CacheLog$queryArgs<ExtArgs> = {}>(args?: Subset<T, CacheLog$queryArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CacheLog model
   */
  interface CacheLogFieldRefs {
    readonly id: FieldRef<"CacheLog", 'Int'>
    readonly bookId: FieldRef<"CacheLog", 'Int'>
    readonly queryId: FieldRef<"CacheLog", 'Int'>
    readonly createdAt: FieldRef<"CacheLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CacheLog findUnique
   */
  export type CacheLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter, which CacheLog to fetch.
     */
    where: CacheLogWhereUniqueInput
  }

  /**
   * CacheLog findUniqueOrThrow
   */
  export type CacheLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter, which CacheLog to fetch.
     */
    where: CacheLogWhereUniqueInput
  }

  /**
   * CacheLog findFirst
   */
  export type CacheLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter, which CacheLog to fetch.
     */
    where?: CacheLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CacheLogs to fetch.
     */
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CacheLogs.
     */
    cursor?: CacheLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CacheLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CacheLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CacheLogs.
     */
    distinct?: CacheLogScalarFieldEnum | CacheLogScalarFieldEnum[]
  }

  /**
   * CacheLog findFirstOrThrow
   */
  export type CacheLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter, which CacheLog to fetch.
     */
    where?: CacheLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CacheLogs to fetch.
     */
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CacheLogs.
     */
    cursor?: CacheLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CacheLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CacheLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CacheLogs.
     */
    distinct?: CacheLogScalarFieldEnum | CacheLogScalarFieldEnum[]
  }

  /**
   * CacheLog findMany
   */
  export type CacheLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter, which CacheLogs to fetch.
     */
    where?: CacheLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CacheLogs to fetch.
     */
    orderBy?: CacheLogOrderByWithRelationInput | CacheLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CacheLogs.
     */
    cursor?: CacheLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CacheLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CacheLogs.
     */
    skip?: number
    distinct?: CacheLogScalarFieldEnum | CacheLogScalarFieldEnum[]
  }

  /**
   * CacheLog create
   */
  export type CacheLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CacheLog.
     */
    data: XOR<CacheLogCreateInput, CacheLogUncheckedCreateInput>
  }

  /**
   * CacheLog createMany
   */
  export type CacheLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CacheLogs.
     */
    data: CacheLogCreateManyInput | CacheLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CacheLog createManyAndReturn
   */
  export type CacheLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * The data used to create many CacheLogs.
     */
    data: CacheLogCreateManyInput | CacheLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CacheLog update
   */
  export type CacheLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CacheLog.
     */
    data: XOR<CacheLogUpdateInput, CacheLogUncheckedUpdateInput>
    /**
     * Choose, which CacheLog to update.
     */
    where: CacheLogWhereUniqueInput
  }

  /**
   * CacheLog updateMany
   */
  export type CacheLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CacheLogs.
     */
    data: XOR<CacheLogUpdateManyMutationInput, CacheLogUncheckedUpdateManyInput>
    /**
     * Filter which CacheLogs to update
     */
    where?: CacheLogWhereInput
    /**
     * Limit how many CacheLogs to update.
     */
    limit?: number
  }

  /**
   * CacheLog updateManyAndReturn
   */
  export type CacheLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * The data used to update CacheLogs.
     */
    data: XOR<CacheLogUpdateManyMutationInput, CacheLogUncheckedUpdateManyInput>
    /**
     * Filter which CacheLogs to update
     */
    where?: CacheLogWhereInput
    /**
     * Limit how many CacheLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CacheLog upsert
   */
  export type CacheLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CacheLog to update in case it exists.
     */
    where: CacheLogWhereUniqueInput
    /**
     * In case the CacheLog found by the `where` argument doesn't exist, create a new CacheLog with this data.
     */
    create: XOR<CacheLogCreateInput, CacheLogUncheckedCreateInput>
    /**
     * In case the CacheLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CacheLogUpdateInput, CacheLogUncheckedUpdateInput>
  }

  /**
   * CacheLog delete
   */
  export type CacheLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
    /**
     * Filter which CacheLog to delete.
     */
    where: CacheLogWhereUniqueInput
  }

  /**
   * CacheLog deleteMany
   */
  export type CacheLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CacheLogs to delete
     */
    where?: CacheLogWhereInput
    /**
     * Limit how many CacheLogs to delete.
     */
    limit?: number
  }

  /**
   * CacheLog.book
   */
  export type CacheLog$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * CacheLog.query
   */
  export type CacheLog$queryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    where?: QueryWhereInput
  }

  /**
   * CacheLog without action
   */
  export type CacheLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CacheLog
     */
    select?: CacheLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CacheLog
     */
    omit?: CacheLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CacheLogInclude<ExtArgs> | null
  }


  /**
   * Model ViewedBook
   */

  export type AggregateViewedBook = {
    _count: ViewedBookCountAggregateOutputType | null
    _avg: ViewedBookAvgAggregateOutputType | null
    _sum: ViewedBookSumAggregateOutputType | null
    _min: ViewedBookMinAggregateOutputType | null
    _max: ViewedBookMaxAggregateOutputType | null
  }

  export type ViewedBookAvgAggregateOutputType = {
    id: number | null
    searchLogId: number | null
    bookId: number | null
    similarity: number | null
  }

  export type ViewedBookSumAggregateOutputType = {
    id: number | null
    searchLogId: number | null
    bookId: number | null
    similarity: number | null
  }

  export type ViewedBookMinAggregateOutputType = {
    id: number | null
    searchLogId: number | null
    bookId: number | null
    bookLink: string | null
    viewedAt: Date | null
    similarity: number | null
  }

  export type ViewedBookMaxAggregateOutputType = {
    id: number | null
    searchLogId: number | null
    bookId: number | null
    bookLink: string | null
    viewedAt: Date | null
    similarity: number | null
  }

  export type ViewedBookCountAggregateOutputType = {
    id: number
    searchLogId: number
    bookId: number
    bookLink: number
    viewedAt: number
    similarity: number
    _all: number
  }


  export type ViewedBookAvgAggregateInputType = {
    id?: true
    searchLogId?: true
    bookId?: true
    similarity?: true
  }

  export type ViewedBookSumAggregateInputType = {
    id?: true
    searchLogId?: true
    bookId?: true
    similarity?: true
  }

  export type ViewedBookMinAggregateInputType = {
    id?: true
    searchLogId?: true
    bookId?: true
    bookLink?: true
    viewedAt?: true
    similarity?: true
  }

  export type ViewedBookMaxAggregateInputType = {
    id?: true
    searchLogId?: true
    bookId?: true
    bookLink?: true
    viewedAt?: true
    similarity?: true
  }

  export type ViewedBookCountAggregateInputType = {
    id?: true
    searchLogId?: true
    bookId?: true
    bookLink?: true
    viewedAt?: true
    similarity?: true
    _all?: true
  }

  export type ViewedBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewedBook to aggregate.
     */
    where?: ViewedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedBooks to fetch.
     */
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewedBooks
    **/
    _count?: true | ViewedBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewedBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewedBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewedBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewedBookMaxAggregateInputType
  }

  export type GetViewedBookAggregateType<T extends ViewedBookAggregateArgs> = {
        [P in keyof T & keyof AggregateViewedBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewedBook[P]>
      : GetScalarType<T[P], AggregateViewedBook[P]>
  }




  export type ViewedBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedBookWhereInput
    orderBy?: ViewedBookOrderByWithAggregationInput | ViewedBookOrderByWithAggregationInput[]
    by: ViewedBookScalarFieldEnum[] | ViewedBookScalarFieldEnum
    having?: ViewedBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewedBookCountAggregateInputType | true
    _avg?: ViewedBookAvgAggregateInputType
    _sum?: ViewedBookSumAggregateInputType
    _min?: ViewedBookMinAggregateInputType
    _max?: ViewedBookMaxAggregateInputType
  }

  export type ViewedBookGroupByOutputType = {
    id: number
    searchLogId: number
    bookId: number | null
    bookLink: string
    viewedAt: Date
    similarity: number
    _count: ViewedBookCountAggregateOutputType | null
    _avg: ViewedBookAvgAggregateOutputType | null
    _sum: ViewedBookSumAggregateOutputType | null
    _min: ViewedBookMinAggregateOutputType | null
    _max: ViewedBookMaxAggregateOutputType | null
  }

  type GetViewedBookGroupByPayload<T extends ViewedBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewedBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewedBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewedBookGroupByOutputType[P]>
            : GetScalarType<T[P], ViewedBookGroupByOutputType[P]>
        }
      >
    >


  export type ViewedBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchLogId?: boolean
    bookId?: boolean
    bookLink?: boolean
    viewedAt?: boolean
    similarity?: boolean
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }, ExtArgs["result"]["viewedBook"]>

  export type ViewedBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchLogId?: boolean
    bookId?: boolean
    bookLink?: boolean
    viewedAt?: boolean
    similarity?: boolean
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }, ExtArgs["result"]["viewedBook"]>

  export type ViewedBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchLogId?: boolean
    bookId?: boolean
    bookLink?: boolean
    viewedAt?: boolean
    similarity?: boolean
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }, ExtArgs["result"]["viewedBook"]>

  export type ViewedBookSelectScalar = {
    id?: boolean
    searchLogId?: boolean
    bookId?: boolean
    bookLink?: boolean
    viewedAt?: boolean
    similarity?: boolean
  }

  export type ViewedBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "searchLogId" | "bookId" | "bookLink" | "viewedAt" | "similarity", ExtArgs["result"]["viewedBook"]>
  export type ViewedBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }
  export type ViewedBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }
  export type ViewedBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchLog?: boolean | SearchLogDefaultArgs<ExtArgs>
    book?: boolean | ViewedBook$bookArgs<ExtArgs>
  }

  export type $ViewedBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewedBook"
    objects: {
      searchLog: Prisma.$SearchLogPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      searchLogId: number
      bookId: number | null
      bookLink: string
      viewedAt: Date
      similarity: number
    }, ExtArgs["result"]["viewedBook"]>
    composites: {}
  }

  type ViewedBookGetPayload<S extends boolean | null | undefined | ViewedBookDefaultArgs> = $Result.GetResult<Prisma.$ViewedBookPayload, S>

  type ViewedBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewedBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewedBookCountAggregateInputType | true
    }

  export interface ViewedBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewedBook'], meta: { name: 'ViewedBook' } }
    /**
     * Find zero or one ViewedBook that matches the filter.
     * @param {ViewedBookFindUniqueArgs} args - Arguments to find a ViewedBook
     * @example
     * // Get one ViewedBook
     * const viewedBook = await prisma.viewedBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewedBookFindUniqueArgs>(args: SelectSubset<T, ViewedBookFindUniqueArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewedBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewedBookFindUniqueOrThrowArgs} args - Arguments to find a ViewedBook
     * @example
     * // Get one ViewedBook
     * const viewedBook = await prisma.viewedBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewedBookFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewedBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewedBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookFindFirstArgs} args - Arguments to find a ViewedBook
     * @example
     * // Get one ViewedBook
     * const viewedBook = await prisma.viewedBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewedBookFindFirstArgs>(args?: SelectSubset<T, ViewedBookFindFirstArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewedBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookFindFirstOrThrowArgs} args - Arguments to find a ViewedBook
     * @example
     * // Get one ViewedBook
     * const viewedBook = await prisma.viewedBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewedBookFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewedBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewedBooks
     * const viewedBooks = await prisma.viewedBook.findMany()
     * 
     * // Get first 10 ViewedBooks
     * const viewedBooks = await prisma.viewedBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewedBookWithIdOnly = await prisma.viewedBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewedBookFindManyArgs>(args?: SelectSubset<T, ViewedBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewedBook.
     * @param {ViewedBookCreateArgs} args - Arguments to create a ViewedBook.
     * @example
     * // Create one ViewedBook
     * const ViewedBook = await prisma.viewedBook.create({
     *   data: {
     *     // ... data to create a ViewedBook
     *   }
     * })
     * 
     */
    create<T extends ViewedBookCreateArgs>(args: SelectSubset<T, ViewedBookCreateArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewedBooks.
     * @param {ViewedBookCreateManyArgs} args - Arguments to create many ViewedBooks.
     * @example
     * // Create many ViewedBooks
     * const viewedBook = await prisma.viewedBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewedBookCreateManyArgs>(args?: SelectSubset<T, ViewedBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewedBooks and returns the data saved in the database.
     * @param {ViewedBookCreateManyAndReturnArgs} args - Arguments to create many ViewedBooks.
     * @example
     * // Create many ViewedBooks
     * const viewedBook = await prisma.viewedBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewedBooks and only return the `id`
     * const viewedBookWithIdOnly = await prisma.viewedBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewedBookCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewedBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewedBook.
     * @param {ViewedBookDeleteArgs} args - Arguments to delete one ViewedBook.
     * @example
     * // Delete one ViewedBook
     * const ViewedBook = await prisma.viewedBook.delete({
     *   where: {
     *     // ... filter to delete one ViewedBook
     *   }
     * })
     * 
     */
    delete<T extends ViewedBookDeleteArgs>(args: SelectSubset<T, ViewedBookDeleteArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewedBook.
     * @param {ViewedBookUpdateArgs} args - Arguments to update one ViewedBook.
     * @example
     * // Update one ViewedBook
     * const viewedBook = await prisma.viewedBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewedBookUpdateArgs>(args: SelectSubset<T, ViewedBookUpdateArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewedBooks.
     * @param {ViewedBookDeleteManyArgs} args - Arguments to filter ViewedBooks to delete.
     * @example
     * // Delete a few ViewedBooks
     * const { count } = await prisma.viewedBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewedBookDeleteManyArgs>(args?: SelectSubset<T, ViewedBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewedBooks
     * const viewedBook = await prisma.viewedBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewedBookUpdateManyArgs>(args: SelectSubset<T, ViewedBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewedBooks and returns the data updated in the database.
     * @param {ViewedBookUpdateManyAndReturnArgs} args - Arguments to update many ViewedBooks.
     * @example
     * // Update many ViewedBooks
     * const viewedBook = await prisma.viewedBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewedBooks and only return the `id`
     * const viewedBookWithIdOnly = await prisma.viewedBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewedBookUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewedBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewedBook.
     * @param {ViewedBookUpsertArgs} args - Arguments to update or create a ViewedBook.
     * @example
     * // Update or create a ViewedBook
     * const viewedBook = await prisma.viewedBook.upsert({
     *   create: {
     *     // ... data to create a ViewedBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewedBook we want to update
     *   }
     * })
     */
    upsert<T extends ViewedBookUpsertArgs>(args: SelectSubset<T, ViewedBookUpsertArgs<ExtArgs>>): Prisma__ViewedBookClient<$Result.GetResult<Prisma.$ViewedBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookCountArgs} args - Arguments to filter ViewedBooks to count.
     * @example
     * // Count the number of ViewedBooks
     * const count = await prisma.viewedBook.count({
     *   where: {
     *     // ... the filter for the ViewedBooks we want to count
     *   }
     * })
    **/
    count<T extends ViewedBookCountArgs>(
      args?: Subset<T, ViewedBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewedBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewedBookAggregateArgs>(args: Subset<T, ViewedBookAggregateArgs>): Prisma.PrismaPromise<GetViewedBookAggregateType<T>>

    /**
     * Group by ViewedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewedBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewedBookGroupByArgs['orderBy'] }
        : { orderBy?: ViewedBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewedBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewedBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewedBook model
   */
  readonly fields: ViewedBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewedBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewedBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    searchLog<T extends SearchLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SearchLogDefaultArgs<ExtArgs>>): Prisma__SearchLogClient<$Result.GetResult<Prisma.$SearchLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends ViewedBook$bookArgs<ExtArgs> = {}>(args?: Subset<T, ViewedBook$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewedBook model
   */
  interface ViewedBookFieldRefs {
    readonly id: FieldRef<"ViewedBook", 'Int'>
    readonly searchLogId: FieldRef<"ViewedBook", 'Int'>
    readonly bookId: FieldRef<"ViewedBook", 'Int'>
    readonly bookLink: FieldRef<"ViewedBook", 'String'>
    readonly viewedAt: FieldRef<"ViewedBook", 'DateTime'>
    readonly similarity: FieldRef<"ViewedBook", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ViewedBook findUnique
   */
  export type ViewedBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter, which ViewedBook to fetch.
     */
    where: ViewedBookWhereUniqueInput
  }

  /**
   * ViewedBook findUniqueOrThrow
   */
  export type ViewedBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter, which ViewedBook to fetch.
     */
    where: ViewedBookWhereUniqueInput
  }

  /**
   * ViewedBook findFirst
   */
  export type ViewedBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter, which ViewedBook to fetch.
     */
    where?: ViewedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedBooks to fetch.
     */
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewedBooks.
     */
    cursor?: ViewedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewedBooks.
     */
    distinct?: ViewedBookScalarFieldEnum | ViewedBookScalarFieldEnum[]
  }

  /**
   * ViewedBook findFirstOrThrow
   */
  export type ViewedBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter, which ViewedBook to fetch.
     */
    where?: ViewedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedBooks to fetch.
     */
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewedBooks.
     */
    cursor?: ViewedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewedBooks.
     */
    distinct?: ViewedBookScalarFieldEnum | ViewedBookScalarFieldEnum[]
  }

  /**
   * ViewedBook findMany
   */
  export type ViewedBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter, which ViewedBooks to fetch.
     */
    where?: ViewedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedBooks to fetch.
     */
    orderBy?: ViewedBookOrderByWithRelationInput | ViewedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewedBooks.
     */
    cursor?: ViewedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedBooks.
     */
    skip?: number
    distinct?: ViewedBookScalarFieldEnum | ViewedBookScalarFieldEnum[]
  }

  /**
   * ViewedBook create
   */
  export type ViewedBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewedBook.
     */
    data: XOR<ViewedBookCreateInput, ViewedBookUncheckedCreateInput>
  }

  /**
   * ViewedBook createMany
   */
  export type ViewedBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewedBooks.
     */
    data: ViewedBookCreateManyInput | ViewedBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewedBook createManyAndReturn
   */
  export type ViewedBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * The data used to create many ViewedBooks.
     */
    data: ViewedBookCreateManyInput | ViewedBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewedBook update
   */
  export type ViewedBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewedBook.
     */
    data: XOR<ViewedBookUpdateInput, ViewedBookUncheckedUpdateInput>
    /**
     * Choose, which ViewedBook to update.
     */
    where: ViewedBookWhereUniqueInput
  }

  /**
   * ViewedBook updateMany
   */
  export type ViewedBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewedBooks.
     */
    data: XOR<ViewedBookUpdateManyMutationInput, ViewedBookUncheckedUpdateManyInput>
    /**
     * Filter which ViewedBooks to update
     */
    where?: ViewedBookWhereInput
    /**
     * Limit how many ViewedBooks to update.
     */
    limit?: number
  }

  /**
   * ViewedBook updateManyAndReturn
   */
  export type ViewedBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * The data used to update ViewedBooks.
     */
    data: XOR<ViewedBookUpdateManyMutationInput, ViewedBookUncheckedUpdateManyInput>
    /**
     * Filter which ViewedBooks to update
     */
    where?: ViewedBookWhereInput
    /**
     * Limit how many ViewedBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewedBook upsert
   */
  export type ViewedBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewedBook to update in case it exists.
     */
    where: ViewedBookWhereUniqueInput
    /**
     * In case the ViewedBook found by the `where` argument doesn't exist, create a new ViewedBook with this data.
     */
    create: XOR<ViewedBookCreateInput, ViewedBookUncheckedCreateInput>
    /**
     * In case the ViewedBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewedBookUpdateInput, ViewedBookUncheckedUpdateInput>
  }

  /**
   * ViewedBook delete
   */
  export type ViewedBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
    /**
     * Filter which ViewedBook to delete.
     */
    where: ViewedBookWhereUniqueInput
  }

  /**
   * ViewedBook deleteMany
   */
  export type ViewedBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewedBooks to delete
     */
    where?: ViewedBookWhereInput
    /**
     * Limit how many ViewedBooks to delete.
     */
    limit?: number
  }

  /**
   * ViewedBook.book
   */
  export type ViewedBook$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * ViewedBook without action
   */
  export type ViewedBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedBook
     */
    select?: ViewedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedBook
     */
    omit?: ViewedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedBookInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    available: 'available',
    queryId: 'queryId',
    storeId: 'storeId',
    formatId: 'formatId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const FormatScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type FormatScalarFieldEnum = (typeof FormatScalarFieldEnum)[keyof typeof FormatScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const FeedbackCategoryScalarFieldEnum: {
    id: 'id',
    key: 'key',
    description: 'description'
  };

  export type FeedbackCategoryScalarFieldEnum = (typeof FeedbackCategoryScalarFieldEnum)[keyof typeof FeedbackCategoryScalarFieldEnum]


  export const SearchLogScalarFieldEnum: {
    id: 'id',
    queryId: 'queryId',
    userId: 'userId',
    searchedAt: 'searchedAt',
    groupedResults: 'groupedResults'
  };

  export type SearchLogScalarFieldEnum = (typeof SearchLogScalarFieldEnum)[keyof typeof SearchLogScalarFieldEnum]


  export const SentMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sentAt: 'sentAt',
    groupId: 'groupId'
  };

  export type SentMessageScalarFieldEnum = (typeof SentMessageScalarFieldEnum)[keyof typeof SentMessageScalarFieldEnum]


  export const StoreStatisticScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    booksFound: 'booksFound',
    lastScrapedAt: 'lastScrapedAt'
  };

  export type StoreStatisticScalarFieldEnum = (typeof StoreStatisticScalarFieldEnum)[keyof typeof StoreStatisticScalarFieldEnum]


  export const UnsuccessfulSearchScalarFieldEnum: {
    id: 'id',
    queryId: 'queryId',
    userId: 'userId',
    searchedAt: 'searchedAt'
  };

  export type UnsuccessfulSearchScalarFieldEnum = (typeof UnsuccessfulSearchScalarFieldEnum)[keyof typeof UnsuccessfulSearchScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    username: 'username',
    firstSeen: 'firstSeen',
    lastActive: 'lastActive',
    sessionCount: 'sessionCount',
    lastWeeklyTop: 'lastWeeklyTop'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QueryScalarFieldEnum: {
    id: 'id',
    query: 'query',
    firstSeen: 'firstSeen'
  };

  export type QueryScalarFieldEnum = (typeof QueryScalarFieldEnum)[keyof typeof QueryScalarFieldEnum]


  export const WeeklyBroadcastScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupName: 'groupName',
    sentAt: 'sentAt'
  };

  export type WeeklyBroadcastScalarFieldEnum = (typeof WeeklyBroadcastScalarFieldEnum)[keyof typeof WeeklyBroadcastScalarFieldEnum]


  export const BookPriceScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    price: 'price',
    recordedAt: 'recordedAt'
  };

  export type BookPriceScalarFieldEnum = (typeof BookPriceScalarFieldEnum)[keyof typeof BookPriceScalarFieldEnum]


  export const CacheLogScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    queryId: 'queryId',
    createdAt: 'createdAt'
  };

  export type CacheLogScalarFieldEnum = (typeof CacheLogScalarFieldEnum)[keyof typeof CacheLogScalarFieldEnum]


  export const ViewedBookScalarFieldEnum: {
    id: 'id',
    searchLogId: 'searchLogId',
    bookId: 'bookId',
    bookLink: 'bookLink',
    viewedAt: 'viewedAt',
    similarity: 'similarity'
  };

  export type ViewedBookScalarFieldEnum = (typeof ViewedBookScalarFieldEnum)[keyof typeof ViewedBookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'FeedbackType'
   */
  export type EnumFeedbackTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackType'>
    


  /**
   * Reference to a field of type 'FeedbackType[]'
   */
  export type ListEnumFeedbackTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    link?: StringFilter<"Book"> | string
    available?: BoolFilter<"Book"> | boolean
    queryId?: IntNullableFilter<"Book"> | number | null
    storeId?: IntFilter<"Book"> | number
    formatId?: IntFilter<"Book"> | number
    query?: XOR<QueryNullableScalarRelationFilter, QueryWhereInput> | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    format?: XOR<FormatScalarRelationFilter, FormatWhereInput>
    prices?: BookPriceListRelationFilter
    cacheLogs?: CacheLogListRelationFilter
    viewedBooks?: ViewedBookListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    available?: SortOrder
    queryId?: SortOrderInput | SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
    query?: QueryOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    format?: FormatOrderByWithRelationInput
    prices?: BookPriceOrderByRelationAggregateInput
    cacheLogs?: CacheLogOrderByRelationAggregateInput
    viewedBooks?: ViewedBookOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    link?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    available?: BoolFilter<"Book"> | boolean
    queryId?: IntNullableFilter<"Book"> | number | null
    storeId?: IntFilter<"Book"> | number
    formatId?: IntFilter<"Book"> | number
    query?: XOR<QueryNullableScalarRelationFilter, QueryWhereInput> | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    format?: XOR<FormatScalarRelationFilter, FormatWhereInput>
    prices?: BookPriceListRelationFilter
    cacheLogs?: CacheLogListRelationFilter
    viewedBooks?: ViewedBookListRelationFilter
  }, "id" | "link">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    available?: SortOrder
    queryId?: SortOrderInput | SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    link?: StringWithAggregatesFilter<"Book"> | string
    available?: BoolWithAggregatesFilter<"Book"> | boolean
    queryId?: IntNullableWithAggregatesFilter<"Book"> | number | null
    storeId?: IntWithAggregatesFilter<"Book"> | number
    formatId?: IntWithAggregatesFilter<"Book"> | number
  }

  export type FormatWhereInput = {
    AND?: FormatWhereInput | FormatWhereInput[]
    OR?: FormatWhereInput[]
    NOT?: FormatWhereInput | FormatWhereInput[]
    id?: IntFilter<"Format"> | number
    title?: StringFilter<"Format"> | string
    books?: BookListRelationFilter
  }

  export type FormatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type FormatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: FormatWhereInput | FormatWhereInput[]
    OR?: FormatWhereInput[]
    NOT?: FormatWhereInput | FormatWhereInput[]
    books?: BookListRelationFilter
  }, "id" | "title">

  export type FormatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: FormatCountOrderByAggregateInput
    _avg?: FormatAvgOrderByAggregateInput
    _max?: FormatMaxOrderByAggregateInput
    _min?: FormatMinOrderByAggregateInput
    _sum?: FormatSumOrderByAggregateInput
  }

  export type FormatScalarWhereWithAggregatesInput = {
    AND?: FormatScalarWhereWithAggregatesInput | FormatScalarWhereWithAggregatesInput[]
    OR?: FormatScalarWhereWithAggregatesInput[]
    NOT?: FormatScalarWhereWithAggregatesInput | FormatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Format"> | number
    title?: StringWithAggregatesFilter<"Format"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    title?: StringFilter<"Store"> | string
    books?: BookListRelationFilter
    statistics?: XOR<StoreStatisticNullableScalarRelationFilter, StoreStatisticWhereInput> | null
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    books?: BookOrderByRelationAggregateInput
    statistics?: StoreStatisticOrderByWithRelationInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    books?: BookListRelationFilter
    statistics?: XOR<StoreStatisticNullableScalarRelationFilter, StoreStatisticWhereInput> | null
  }, "id" | "title">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    title?: StringWithAggregatesFilter<"Store"> | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: BigIntFilter<"Feedback"> | bigint | number
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    message?: StringNullableFilter<"Feedback"> | string | null
    categoryId?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<FeedbackCategoryNullableScalarRelationFilter, FeedbackCategoryWhereInput> | null
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: FeedbackCategoryOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: BigIntFilter<"Feedback"> | bigint | number
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    message?: StringNullableFilter<"Feedback"> | string | null
    categoryId?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<FeedbackCategoryNullableScalarRelationFilter, FeedbackCategoryWhereInput> | null
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    userId?: BigIntWithAggregatesFilter<"Feedback"> | bigint | number
    type?: EnumFeedbackTypeWithAggregatesFilter<"Feedback"> | $Enums.FeedbackType
    message?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"Feedback"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type FeedbackCategoryWhereInput = {
    AND?: FeedbackCategoryWhereInput | FeedbackCategoryWhereInput[]
    OR?: FeedbackCategoryWhereInput[]
    NOT?: FeedbackCategoryWhereInput | FeedbackCategoryWhereInput[]
    id?: IntFilter<"FeedbackCategory"> | number
    key?: StringFilter<"FeedbackCategory"> | string
    description?: StringFilter<"FeedbackCategory"> | string
    feedbacks?: FeedbackListRelationFilter
  }

  export type FeedbackCategoryOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type FeedbackCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: FeedbackCategoryWhereInput | FeedbackCategoryWhereInput[]
    OR?: FeedbackCategoryWhereInput[]
    NOT?: FeedbackCategoryWhereInput | FeedbackCategoryWhereInput[]
    description?: StringFilter<"FeedbackCategory"> | string
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "key">

  export type FeedbackCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    _count?: FeedbackCategoryCountOrderByAggregateInput
    _avg?: FeedbackCategoryAvgOrderByAggregateInput
    _max?: FeedbackCategoryMaxOrderByAggregateInput
    _min?: FeedbackCategoryMinOrderByAggregateInput
    _sum?: FeedbackCategorySumOrderByAggregateInput
  }

  export type FeedbackCategoryScalarWhereWithAggregatesInput = {
    AND?: FeedbackCategoryScalarWhereWithAggregatesInput | FeedbackCategoryScalarWhereWithAggregatesInput[]
    OR?: FeedbackCategoryScalarWhereWithAggregatesInput[]
    NOT?: FeedbackCategoryScalarWhereWithAggregatesInput | FeedbackCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeedbackCategory"> | number
    key?: StringWithAggregatesFilter<"FeedbackCategory"> | string
    description?: StringWithAggregatesFilter<"FeedbackCategory"> | string
  }

  export type SearchLogWhereInput = {
    AND?: SearchLogWhereInput | SearchLogWhereInput[]
    OR?: SearchLogWhereInput[]
    NOT?: SearchLogWhereInput | SearchLogWhereInput[]
    id?: IntFilter<"SearchLog"> | number
    queryId?: IntFilter<"SearchLog"> | number
    userId?: BigIntFilter<"SearchLog"> | bigint | number
    searchedAt?: DateTimeFilter<"SearchLog"> | Date | string
    groupedResults?: JsonNullableFilter<"SearchLog">
    query?: XOR<QueryScalarRelationFilter, QueryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    viewedBooks?: ViewedBookListRelationFilter
  }

  export type SearchLogOrderByWithRelationInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
    groupedResults?: SortOrderInput | SortOrder
    query?: QueryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    viewedBooks?: ViewedBookOrderByRelationAggregateInput
  }

  export type SearchLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SearchLogWhereInput | SearchLogWhereInput[]
    OR?: SearchLogWhereInput[]
    NOT?: SearchLogWhereInput | SearchLogWhereInput[]
    queryId?: IntFilter<"SearchLog"> | number
    userId?: BigIntFilter<"SearchLog"> | bigint | number
    searchedAt?: DateTimeFilter<"SearchLog"> | Date | string
    groupedResults?: JsonNullableFilter<"SearchLog">
    query?: XOR<QueryScalarRelationFilter, QueryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    viewedBooks?: ViewedBookListRelationFilter
  }, "id">

  export type SearchLogOrderByWithAggregationInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
    groupedResults?: SortOrderInput | SortOrder
    _count?: SearchLogCountOrderByAggregateInput
    _avg?: SearchLogAvgOrderByAggregateInput
    _max?: SearchLogMaxOrderByAggregateInput
    _min?: SearchLogMinOrderByAggregateInput
    _sum?: SearchLogSumOrderByAggregateInput
  }

  export type SearchLogScalarWhereWithAggregatesInput = {
    AND?: SearchLogScalarWhereWithAggregatesInput | SearchLogScalarWhereWithAggregatesInput[]
    OR?: SearchLogScalarWhereWithAggregatesInput[]
    NOT?: SearchLogScalarWhereWithAggregatesInput | SearchLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SearchLog"> | number
    queryId?: IntWithAggregatesFilter<"SearchLog"> | number
    userId?: BigIntWithAggregatesFilter<"SearchLog"> | bigint | number
    searchedAt?: DateTimeWithAggregatesFilter<"SearchLog"> | Date | string
    groupedResults?: JsonNullableWithAggregatesFilter<"SearchLog">
  }

  export type SentMessageWhereInput = {
    AND?: SentMessageWhereInput | SentMessageWhereInput[]
    OR?: SentMessageWhereInput[]
    NOT?: SentMessageWhereInput | SentMessageWhereInput[]
    id?: IntFilter<"SentMessage"> | number
    userId?: BigIntFilter<"SentMessage"> | bigint | number
    sentAt?: DateTimeFilter<"SentMessage"> | Date | string
    groupId?: StringFilter<"SentMessage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SentMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    groupId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SentMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SentMessageWhereInput | SentMessageWhereInput[]
    OR?: SentMessageWhereInput[]
    NOT?: SentMessageWhereInput | SentMessageWhereInput[]
    userId?: BigIntFilter<"SentMessage"> | bigint | number
    sentAt?: DateTimeFilter<"SentMessage"> | Date | string
    groupId?: StringFilter<"SentMessage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SentMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    groupId?: SortOrder
    _count?: SentMessageCountOrderByAggregateInput
    _avg?: SentMessageAvgOrderByAggregateInput
    _max?: SentMessageMaxOrderByAggregateInput
    _min?: SentMessageMinOrderByAggregateInput
    _sum?: SentMessageSumOrderByAggregateInput
  }

  export type SentMessageScalarWhereWithAggregatesInput = {
    AND?: SentMessageScalarWhereWithAggregatesInput | SentMessageScalarWhereWithAggregatesInput[]
    OR?: SentMessageScalarWhereWithAggregatesInput[]
    NOT?: SentMessageScalarWhereWithAggregatesInput | SentMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SentMessage"> | number
    userId?: BigIntWithAggregatesFilter<"SentMessage"> | bigint | number
    sentAt?: DateTimeWithAggregatesFilter<"SentMessage"> | Date | string
    groupId?: StringWithAggregatesFilter<"SentMessage"> | string
  }

  export type StoreStatisticWhereInput = {
    AND?: StoreStatisticWhereInput | StoreStatisticWhereInput[]
    OR?: StoreStatisticWhereInput[]
    NOT?: StoreStatisticWhereInput | StoreStatisticWhereInput[]
    id?: IntFilter<"StoreStatistic"> | number
    storeId?: IntFilter<"StoreStatistic"> | number
    booksFound?: IntFilter<"StoreStatistic"> | number
    lastScrapedAt?: DateTimeFilter<"StoreStatistic"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreStatisticOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
    lastScrapedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type StoreStatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storeId?: number
    AND?: StoreStatisticWhereInput | StoreStatisticWhereInput[]
    OR?: StoreStatisticWhereInput[]
    NOT?: StoreStatisticWhereInput | StoreStatisticWhereInput[]
    booksFound?: IntFilter<"StoreStatistic"> | number
    lastScrapedAt?: DateTimeFilter<"StoreStatistic"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id" | "storeId">

  export type StoreStatisticOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
    lastScrapedAt?: SortOrder
    _count?: StoreStatisticCountOrderByAggregateInput
    _avg?: StoreStatisticAvgOrderByAggregateInput
    _max?: StoreStatisticMaxOrderByAggregateInput
    _min?: StoreStatisticMinOrderByAggregateInput
    _sum?: StoreStatisticSumOrderByAggregateInput
  }

  export type StoreStatisticScalarWhereWithAggregatesInput = {
    AND?: StoreStatisticScalarWhereWithAggregatesInput | StoreStatisticScalarWhereWithAggregatesInput[]
    OR?: StoreStatisticScalarWhereWithAggregatesInput[]
    NOT?: StoreStatisticScalarWhereWithAggregatesInput | StoreStatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreStatistic"> | number
    storeId?: IntWithAggregatesFilter<"StoreStatistic"> | number
    booksFound?: IntWithAggregatesFilter<"StoreStatistic"> | number
    lastScrapedAt?: DateTimeWithAggregatesFilter<"StoreStatistic"> | Date | string
  }

  export type UnsuccessfulSearchWhereInput = {
    AND?: UnsuccessfulSearchWhereInput | UnsuccessfulSearchWhereInput[]
    OR?: UnsuccessfulSearchWhereInput[]
    NOT?: UnsuccessfulSearchWhereInput | UnsuccessfulSearchWhereInput[]
    id?: IntFilter<"UnsuccessfulSearch"> | number
    queryId?: IntFilter<"UnsuccessfulSearch"> | number
    userId?: BigIntFilter<"UnsuccessfulSearch"> | bigint | number
    searchedAt?: DateTimeFilter<"UnsuccessfulSearch"> | Date | string
    query?: XOR<QueryScalarRelationFilter, QueryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UnsuccessfulSearchOrderByWithRelationInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
    query?: QueryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UnsuccessfulSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnsuccessfulSearchWhereInput | UnsuccessfulSearchWhereInput[]
    OR?: UnsuccessfulSearchWhereInput[]
    NOT?: UnsuccessfulSearchWhereInput | UnsuccessfulSearchWhereInput[]
    queryId?: IntFilter<"UnsuccessfulSearch"> | number
    userId?: BigIntFilter<"UnsuccessfulSearch"> | bigint | number
    searchedAt?: DateTimeFilter<"UnsuccessfulSearch"> | Date | string
    query?: XOR<QueryScalarRelationFilter, QueryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UnsuccessfulSearchOrderByWithAggregationInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
    _count?: UnsuccessfulSearchCountOrderByAggregateInput
    _avg?: UnsuccessfulSearchAvgOrderByAggregateInput
    _max?: UnsuccessfulSearchMaxOrderByAggregateInput
    _min?: UnsuccessfulSearchMinOrderByAggregateInput
    _sum?: UnsuccessfulSearchSumOrderByAggregateInput
  }

  export type UnsuccessfulSearchScalarWhereWithAggregatesInput = {
    AND?: UnsuccessfulSearchScalarWhereWithAggregatesInput | UnsuccessfulSearchScalarWhereWithAggregatesInput[]
    OR?: UnsuccessfulSearchScalarWhereWithAggregatesInput[]
    NOT?: UnsuccessfulSearchScalarWhereWithAggregatesInput | UnsuccessfulSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnsuccessfulSearch"> | number
    queryId?: IntWithAggregatesFilter<"UnsuccessfulSearch"> | number
    userId?: BigIntWithAggregatesFilter<"UnsuccessfulSearch"> | bigint | number
    searchedAt?: DateTimeWithAggregatesFilter<"UnsuccessfulSearch"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    telegramId?: BigIntFilter<"User"> | bigint | number
    username?: StringNullableFilter<"User"> | string | null
    firstSeen?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    sessionCount?: IntFilter<"User"> | number
    lastWeeklyTop?: DateTimeNullableFilter<"User"> | Date | string | null
    feedbacks?: FeedbackListRelationFilter
    searchLogs?: SearchLogListRelationFilter
    sentMessages?: SentMessageListRelationFilter
    weeklyBroadcasts?: WeeklyBroadcastListRelationFilter
    unsuccessfulSearches?: UnsuccessfulSearchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstSeen?: SortOrder
    lastActive?: SortOrder
    sessionCount?: SortOrder
    lastWeeklyTop?: SortOrderInput | SortOrder
    feedbacks?: FeedbackOrderByRelationAggregateInput
    searchLogs?: SearchLogOrderByRelationAggregateInput
    sentMessages?: SentMessageOrderByRelationAggregateInput
    weeklyBroadcasts?: WeeklyBroadcastOrderByRelationAggregateInput
    unsuccessfulSearches?: UnsuccessfulSearchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    telegramId?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    firstSeen?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    sessionCount?: IntFilter<"User"> | number
    lastWeeklyTop?: DateTimeNullableFilter<"User"> | Date | string | null
    feedbacks?: FeedbackListRelationFilter
    searchLogs?: SearchLogListRelationFilter
    sentMessages?: SentMessageListRelationFilter
    weeklyBroadcasts?: WeeklyBroadcastListRelationFilter
    unsuccessfulSearches?: UnsuccessfulSearchListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    firstSeen?: SortOrder
    lastActive?: SortOrder
    sessionCount?: SortOrder
    lastWeeklyTop?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    telegramId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstSeen?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"User"> | Date | string
    sessionCount?: IntWithAggregatesFilter<"User"> | number
    lastWeeklyTop?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type QueryWhereInput = {
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    id?: IntFilter<"Query"> | number
    query?: StringFilter<"Query"> | string
    firstSeen?: DateTimeFilter<"Query"> | Date | string
    books?: BookListRelationFilter
    searchLogs?: SearchLogListRelationFilter
    unsuccessfulSearches?: UnsuccessfulSearchListRelationFilter
    cacheLogs?: CacheLogListRelationFilter
  }

  export type QueryOrderByWithRelationInput = {
    id?: SortOrder
    query?: SortOrder
    firstSeen?: SortOrder
    books?: BookOrderByRelationAggregateInput
    searchLogs?: SearchLogOrderByRelationAggregateInput
    unsuccessfulSearches?: UnsuccessfulSearchOrderByRelationAggregateInput
    cacheLogs?: CacheLogOrderByRelationAggregateInput
  }

  export type QueryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    query?: string
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    firstSeen?: DateTimeFilter<"Query"> | Date | string
    books?: BookListRelationFilter
    searchLogs?: SearchLogListRelationFilter
    unsuccessfulSearches?: UnsuccessfulSearchListRelationFilter
    cacheLogs?: CacheLogListRelationFilter
  }, "id" | "query">

  export type QueryOrderByWithAggregationInput = {
    id?: SortOrder
    query?: SortOrder
    firstSeen?: SortOrder
    _count?: QueryCountOrderByAggregateInput
    _avg?: QueryAvgOrderByAggregateInput
    _max?: QueryMaxOrderByAggregateInput
    _min?: QueryMinOrderByAggregateInput
    _sum?: QuerySumOrderByAggregateInput
  }

  export type QueryScalarWhereWithAggregatesInput = {
    AND?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    OR?: QueryScalarWhereWithAggregatesInput[]
    NOT?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Query"> | number
    query?: StringWithAggregatesFilter<"Query"> | string
    firstSeen?: DateTimeWithAggregatesFilter<"Query"> | Date | string
  }

  export type WeeklyBroadcastWhereInput = {
    AND?: WeeklyBroadcastWhereInput | WeeklyBroadcastWhereInput[]
    OR?: WeeklyBroadcastWhereInput[]
    NOT?: WeeklyBroadcastWhereInput | WeeklyBroadcastWhereInput[]
    id?: IntFilter<"WeeklyBroadcast"> | number
    userId?: BigIntFilter<"WeeklyBroadcast"> | bigint | number
    groupName?: StringFilter<"WeeklyBroadcast"> | string
    sentAt?: DateTimeFilter<"WeeklyBroadcast"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklyBroadcastOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupName?: SortOrder
    sentAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyBroadcastWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_groupName?: WeeklyBroadcastUserIdGroupNameCompoundUniqueInput
    AND?: WeeklyBroadcastWhereInput | WeeklyBroadcastWhereInput[]
    OR?: WeeklyBroadcastWhereInput[]
    NOT?: WeeklyBroadcastWhereInput | WeeklyBroadcastWhereInput[]
    userId?: BigIntFilter<"WeeklyBroadcast"> | bigint | number
    groupName?: StringFilter<"WeeklyBroadcast"> | string
    sentAt?: DateTimeFilter<"WeeklyBroadcast"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_groupName">

  export type WeeklyBroadcastOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupName?: SortOrder
    sentAt?: SortOrder
    _count?: WeeklyBroadcastCountOrderByAggregateInput
    _avg?: WeeklyBroadcastAvgOrderByAggregateInput
    _max?: WeeklyBroadcastMaxOrderByAggregateInput
    _min?: WeeklyBroadcastMinOrderByAggregateInput
    _sum?: WeeklyBroadcastSumOrderByAggregateInput
  }

  export type WeeklyBroadcastScalarWhereWithAggregatesInput = {
    AND?: WeeklyBroadcastScalarWhereWithAggregatesInput | WeeklyBroadcastScalarWhereWithAggregatesInput[]
    OR?: WeeklyBroadcastScalarWhereWithAggregatesInput[]
    NOT?: WeeklyBroadcastScalarWhereWithAggregatesInput | WeeklyBroadcastScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyBroadcast"> | number
    userId?: BigIntWithAggregatesFilter<"WeeklyBroadcast"> | bigint | number
    groupName?: StringWithAggregatesFilter<"WeeklyBroadcast"> | string
    sentAt?: DateTimeWithAggregatesFilter<"WeeklyBroadcast"> | Date | string
  }

  export type BookPriceWhereInput = {
    AND?: BookPriceWhereInput | BookPriceWhereInput[]
    OR?: BookPriceWhereInput[]
    NOT?: BookPriceWhereInput | BookPriceWhereInput[]
    id?: IntFilter<"BookPrice"> | number
    bookId?: IntFilter<"BookPrice"> | number
    price?: FloatFilter<"BookPrice"> | number
    recordedAt?: DateTimeFilter<"BookPrice"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookPriceOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
    recordedAt?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookPriceWhereInput | BookPriceWhereInput[]
    OR?: BookPriceWhereInput[]
    NOT?: BookPriceWhereInput | BookPriceWhereInput[]
    bookId?: IntFilter<"BookPrice"> | number
    price?: FloatFilter<"BookPrice"> | number
    recordedAt?: DateTimeFilter<"BookPrice"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookPriceOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
    recordedAt?: SortOrder
    _count?: BookPriceCountOrderByAggregateInput
    _avg?: BookPriceAvgOrderByAggregateInput
    _max?: BookPriceMaxOrderByAggregateInput
    _min?: BookPriceMinOrderByAggregateInput
    _sum?: BookPriceSumOrderByAggregateInput
  }

  export type BookPriceScalarWhereWithAggregatesInput = {
    AND?: BookPriceScalarWhereWithAggregatesInput | BookPriceScalarWhereWithAggregatesInput[]
    OR?: BookPriceScalarWhereWithAggregatesInput[]
    NOT?: BookPriceScalarWhereWithAggregatesInput | BookPriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookPrice"> | number
    bookId?: IntWithAggregatesFilter<"BookPrice"> | number
    price?: FloatWithAggregatesFilter<"BookPrice"> | number
    recordedAt?: DateTimeWithAggregatesFilter<"BookPrice"> | Date | string
  }

  export type CacheLogWhereInput = {
    AND?: CacheLogWhereInput | CacheLogWhereInput[]
    OR?: CacheLogWhereInput[]
    NOT?: CacheLogWhereInput | CacheLogWhereInput[]
    id?: IntFilter<"CacheLog"> | number
    bookId?: IntNullableFilter<"CacheLog"> | number | null
    queryId?: IntFilter<"CacheLog"> | number
    createdAt?: DateTimeFilter<"CacheLog"> | Date | string
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    query?: XOR<QueryNullableScalarRelationFilter, QueryWhereInput> | null
  }

  export type CacheLogOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrderInput | SortOrder
    queryId?: SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
    query?: QueryOrderByWithRelationInput
  }

  export type CacheLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId_queryId?: CacheLogBookIdQueryIdCompoundUniqueInput
    AND?: CacheLogWhereInput | CacheLogWhereInput[]
    OR?: CacheLogWhereInput[]
    NOT?: CacheLogWhereInput | CacheLogWhereInput[]
    bookId?: IntNullableFilter<"CacheLog"> | number | null
    queryId?: IntFilter<"CacheLog"> | number
    createdAt?: DateTimeFilter<"CacheLog"> | Date | string
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    query?: XOR<QueryNullableScalarRelationFilter, QueryWhereInput> | null
  }, "id" | "bookId_queryId">

  export type CacheLogOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrderInput | SortOrder
    queryId?: SortOrder
    createdAt?: SortOrder
    _count?: CacheLogCountOrderByAggregateInput
    _avg?: CacheLogAvgOrderByAggregateInput
    _max?: CacheLogMaxOrderByAggregateInput
    _min?: CacheLogMinOrderByAggregateInput
    _sum?: CacheLogSumOrderByAggregateInput
  }

  export type CacheLogScalarWhereWithAggregatesInput = {
    AND?: CacheLogScalarWhereWithAggregatesInput | CacheLogScalarWhereWithAggregatesInput[]
    OR?: CacheLogScalarWhereWithAggregatesInput[]
    NOT?: CacheLogScalarWhereWithAggregatesInput | CacheLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CacheLog"> | number
    bookId?: IntNullableWithAggregatesFilter<"CacheLog"> | number | null
    queryId?: IntWithAggregatesFilter<"CacheLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CacheLog"> | Date | string
  }

  export type ViewedBookWhereInput = {
    AND?: ViewedBookWhereInput | ViewedBookWhereInput[]
    OR?: ViewedBookWhereInput[]
    NOT?: ViewedBookWhereInput | ViewedBookWhereInput[]
    id?: IntFilter<"ViewedBook"> | number
    searchLogId?: IntFilter<"ViewedBook"> | number
    bookId?: IntNullableFilter<"ViewedBook"> | number | null
    bookLink?: StringFilter<"ViewedBook"> | string
    viewedAt?: DateTimeFilter<"ViewedBook"> | Date | string
    similarity?: FloatFilter<"ViewedBook"> | number
    searchLog?: XOR<SearchLogScalarRelationFilter, SearchLogWhereInput>
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }

  export type ViewedBookOrderByWithRelationInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    bookLink?: SortOrder
    viewedAt?: SortOrder
    similarity?: SortOrder
    searchLog?: SearchLogOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type ViewedBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViewedBookWhereInput | ViewedBookWhereInput[]
    OR?: ViewedBookWhereInput[]
    NOT?: ViewedBookWhereInput | ViewedBookWhereInput[]
    searchLogId?: IntFilter<"ViewedBook"> | number
    bookId?: IntNullableFilter<"ViewedBook"> | number | null
    bookLink?: StringFilter<"ViewedBook"> | string
    viewedAt?: DateTimeFilter<"ViewedBook"> | Date | string
    similarity?: FloatFilter<"ViewedBook"> | number
    searchLog?: XOR<SearchLogScalarRelationFilter, SearchLogWhereInput>
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
  }, "id">

  export type ViewedBookOrderByWithAggregationInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrderInput | SortOrder
    bookLink?: SortOrder
    viewedAt?: SortOrder
    similarity?: SortOrder
    _count?: ViewedBookCountOrderByAggregateInput
    _avg?: ViewedBookAvgOrderByAggregateInput
    _max?: ViewedBookMaxOrderByAggregateInput
    _min?: ViewedBookMinOrderByAggregateInput
    _sum?: ViewedBookSumOrderByAggregateInput
  }

  export type ViewedBookScalarWhereWithAggregatesInput = {
    AND?: ViewedBookScalarWhereWithAggregatesInput | ViewedBookScalarWhereWithAggregatesInput[]
    OR?: ViewedBookScalarWhereWithAggregatesInput[]
    NOT?: ViewedBookScalarWhereWithAggregatesInput | ViewedBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViewedBook"> | number
    searchLogId?: IntWithAggregatesFilter<"ViewedBook"> | number
    bookId?: IntNullableWithAggregatesFilter<"ViewedBook"> | number | null
    bookLink?: StringWithAggregatesFilter<"ViewedBook"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"ViewedBook"> | Date | string
    similarity?: FloatWithAggregatesFilter<"ViewedBook"> | number
  }

  export type BookCreateInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    store: StoreCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    formatId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    formatId: number
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
  }

  export type FormatCreateInput = {
    title: string
    books?: BookCreateNestedManyWithoutFormatInput
  }

  export type FormatUncheckedCreateInput = {
    id?: number
    title: string
    books?: BookUncheckedCreateNestedManyWithoutFormatInput
  }

  export type FormatUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutFormatNestedInput
  }

  export type FormatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutFormatNestedInput
  }

  export type FormatCreateManyInput = {
    id?: number
    title: string
  }

  export type FormatUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FormatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    title: string
    books?: BookCreateNestedManyWithoutStoreInput
    statistics?: StoreStatisticCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    title: string
    books?: BookUncheckedCreateNestedManyWithoutStoreInput
    statistics?: StoreStatisticUncheckedCreateNestedOneWithoutStoreInput
  }

  export type StoreUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutStoreNestedInput
    statistics?: StoreStatisticUpdateOneWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutStoreNestedInput
    statistics?: StoreStatisticUncheckedUpdateOneWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    title: string
  }

  export type StoreUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateInput = {
    type?: $Enums.FeedbackType
    message?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    category?: FeedbackCategoryCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    type?: $Enums.FeedbackType
    message?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    category?: FeedbackCategoryUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    userId: bigint | number
    type?: $Enums.FeedbackType
    message?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCategoryCreateInput = {
    key: string
    description: string
    feedbacks?: FeedbackCreateNestedManyWithoutCategoryInput
  }

  export type FeedbackCategoryUncheckedCreateInput = {
    id?: number
    key: string
    description: string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type FeedbackCategoryUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUpdateManyWithoutCategoryNestedInput
  }

  export type FeedbackCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FeedbackCategoryCreateManyInput = {
    id?: number
    key: string
    description: string
  }

  export type FeedbackCategoryUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SearchLogCreateInput = {
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query: QueryCreateNestedOneWithoutSearchLogsInput
    user: UserCreateNestedOneWithoutSearchLogsInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogUncheckedCreateInput = {
    id?: number
    queryId: number
    userId: bigint | number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogUpdateInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query?: QueryUpdateOneRequiredWithoutSearchLogsNestedInput
    user?: UserUpdateOneRequiredWithoutSearchLogsNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogCreateManyInput = {
    id?: number
    queryId: number
    userId: bigint | number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SearchLogUpdateManyMutationInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SearchLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SentMessageCreateInput = {
    sentAt?: Date | string
    groupId: string
    user: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type SentMessageUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    sentAt?: Date | string
    groupId: string
  }

  export type SentMessageUpdateInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type SentMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type SentMessageCreateManyInput = {
    id?: number
    userId: bigint | number
    sentAt?: Date | string
    groupId: string
  }

  export type SentMessageUpdateManyMutationInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type SentMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreStatisticCreateInput = {
    booksFound?: number
    lastScrapedAt?: Date | string
    store: StoreCreateNestedOneWithoutStatisticsInput
  }

  export type StoreStatisticUncheckedCreateInput = {
    id?: number
    storeId: number
    booksFound?: number
    lastScrapedAt?: Date | string
  }

  export type StoreStatisticUpdateInput = {
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StoreStatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreStatisticCreateManyInput = {
    id?: number
    storeId: number
    booksFound?: number
    lastScrapedAt?: Date | string
  }

  export type StoreStatisticUpdateManyMutationInput = {
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreStatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchCreateInput = {
    searchedAt?: Date | string
    query: QueryCreateNestedOneWithoutUnsuccessfulSearchesInput
    user: UserCreateNestedOneWithoutUnsuccessfulSearchesInput
  }

  export type UnsuccessfulSearchUncheckedCreateInput = {
    id?: number
    queryId: number
    userId: bigint | number
    searchedAt?: Date | string
  }

  export type UnsuccessfulSearchUpdateInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: QueryUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput
    user?: UserUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput
  }

  export type UnsuccessfulSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchCreateManyInput = {
    id?: number
    queryId: number
    userId: bigint | number
    searchedAt?: Date | string
  }

  export type UnsuccessfulSearchUpdateManyMutationInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageUncheckedCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUncheckedUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QueryCreateInput = {
    query: string
    firstSeen?: Date | string
    books?: BookCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogCreateNestedManyWithoutQueryInput
  }

  export type QueryUncheckedCreateInput = {
    id?: number
    query: string
    firstSeen?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutQueryInput
  }

  export type QueryUpdateInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutQueryNestedInput
  }

  export type QueryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutQueryNestedInput
  }

  export type QueryCreateManyInput = {
    id?: number
    query: string
    firstSeen?: Date | string
  }

  export type QueryUpdateManyMutationInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBroadcastCreateInput = {
    groupName: string
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutWeeklyBroadcastsInput
  }

  export type WeeklyBroadcastUncheckedCreateInput = {
    id?: number
    userId: bigint | number
    groupName: string
    sentAt?: Date | string
  }

  export type WeeklyBroadcastUpdateInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeeklyBroadcastsNestedInput
  }

  export type WeeklyBroadcastUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBroadcastCreateManyInput = {
    id?: number
    userId: bigint | number
    groupName: string
    sentAt?: Date | string
  }

  export type WeeklyBroadcastUpdateManyMutationInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBroadcastUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPriceCreateInput = {
    price: number
    recordedAt?: Date | string
    book: BookCreateNestedOneWithoutPricesInput
  }

  export type BookPriceUncheckedCreateInput = {
    id?: number
    bookId: number
    price: number
    recordedAt?: Date | string
  }

  export type BookPriceUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutPricesNestedInput
  }

  export type BookPriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPriceCreateManyInput = {
    id?: number
    bookId: number
    price: number
    recordedAt?: Date | string
  }

  export type BookPriceUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogCreateInput = {
    createdAt?: Date | string
    book?: BookCreateNestedOneWithoutCacheLogsInput
    query?: QueryCreateNestedOneWithoutCacheLogsInput
  }

  export type CacheLogUncheckedCreateInput = {
    id?: number
    bookId?: number | null
    queryId: number
    createdAt?: Date | string
  }

  export type CacheLogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneWithoutCacheLogsNestedInput
    query?: QueryUpdateOneWithoutCacheLogsNestedInput
  }

  export type CacheLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    queryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogCreateManyInput = {
    id?: number
    bookId?: number | null
    queryId: number
    createdAt?: Date | string
  }

  export type CacheLogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    queryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewedBookCreateInput = {
    bookLink: string
    viewedAt?: Date | string
    similarity: number
    searchLog: SearchLogCreateNestedOneWithoutViewedBooksInput
    book?: BookCreateNestedOneWithoutViewedBooksInput
  }

  export type ViewedBookUncheckedCreateInput = {
    id?: number
    searchLogId: number
    bookId?: number | null
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type ViewedBookUpdateInput = {
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
    searchLog?: SearchLogUpdateOneRequiredWithoutViewedBooksNestedInput
    book?: BookUpdateOneWithoutViewedBooksNestedInput
  }

  export type ViewedBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchLogId?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type ViewedBookCreateManyInput = {
    id?: number
    searchLogId: number
    bookId?: number | null
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type ViewedBookUpdateManyMutationInput = {
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type ViewedBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchLogId?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QueryNullableScalarRelationFilter = {
    is?: QueryWhereInput | null
    isNot?: QueryWhereInput | null
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type FormatScalarRelationFilter = {
    is?: FormatWhereInput
    isNot?: FormatWhereInput
  }

  export type BookPriceListRelationFilter = {
    every?: BookPriceWhereInput
    some?: BookPriceWhereInput
    none?: BookPriceWhereInput
  }

  export type CacheLogListRelationFilter = {
    every?: CacheLogWhereInput
    some?: CacheLogWhereInput
    none?: CacheLogWhereInput
  }

  export type ViewedBookListRelationFilter = {
    every?: ViewedBookWhereInput
    some?: ViewedBookWhereInput
    none?: ViewedBookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CacheLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewedBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    available?: SortOrder
    queryId?: SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    available?: SortOrder
    queryId?: SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    available?: SortOrder
    queryId?: SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    storeId?: SortOrder
    formatId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FormatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FormatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type FormatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreStatisticNullableScalarRelationFilter = {
    is?: StoreStatisticWhereInput | null
    isNot?: StoreStatisticWhereInput | null
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumFeedbackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeFilter<$PrismaModel> | $Enums.FeedbackType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FeedbackCategoryNullableScalarRelationFilter = {
    is?: FeedbackCategoryWhereInput | null
    isNot?: FeedbackCategoryWhereInput | null
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumFeedbackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedbackTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
  }

  export type FeedbackCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeedbackCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
  }

  export type FeedbackCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
  }

  export type FeedbackCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QueryScalarRelationFilter = {
    is?: QueryWhereInput
    isNot?: QueryWhereInput
  }

  export type SearchLogCountOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
    groupedResults?: SortOrder
  }

  export type SearchLogAvgOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
  }

  export type SearchLogMaxOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchLogMinOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
  }

  export type SearchLogSumOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SentMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    groupId?: SortOrder
  }

  export type SentMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SentMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    groupId?: SortOrder
  }

  export type SentMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    groupId?: SortOrder
  }

  export type SentMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StoreStatisticCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
    lastScrapedAt?: SortOrder
  }

  export type StoreStatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
  }

  export type StoreStatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
    lastScrapedAt?: SortOrder
  }

  export type StoreStatisticMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
    lastScrapedAt?: SortOrder
  }

  export type StoreStatisticSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    booksFound?: SortOrder
  }

  export type UnsuccessfulSearchCountOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
  }

  export type UnsuccessfulSearchAvgOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
  }

  export type UnsuccessfulSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
  }

  export type UnsuccessfulSearchMinOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
    searchedAt?: SortOrder
  }

  export type UnsuccessfulSearchSumOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SearchLogListRelationFilter = {
    every?: SearchLogWhereInput
    some?: SearchLogWhereInput
    none?: SearchLogWhereInput
  }

  export type SentMessageListRelationFilter = {
    every?: SentMessageWhereInput
    some?: SentMessageWhereInput
    none?: SentMessageWhereInput
  }

  export type WeeklyBroadcastListRelationFilter = {
    every?: WeeklyBroadcastWhereInput
    some?: WeeklyBroadcastWhereInput
    none?: WeeklyBroadcastWhereInput
  }

  export type UnsuccessfulSearchListRelationFilter = {
    every?: UnsuccessfulSearchWhereInput
    some?: UnsuccessfulSearchWhereInput
    none?: UnsuccessfulSearchWhereInput
  }

  export type SearchLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SentMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyBroadcastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnsuccessfulSearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstSeen?: SortOrder
    lastActive?: SortOrder
    sessionCount?: SortOrder
    lastWeeklyTop?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    sessionCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstSeen?: SortOrder
    lastActive?: SortOrder
    sessionCount?: SortOrder
    lastWeeklyTop?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    firstSeen?: SortOrder
    lastActive?: SortOrder
    sessionCount?: SortOrder
    lastWeeklyTop?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    sessionCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type QueryCountOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    firstSeen?: SortOrder
  }

  export type QueryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QueryMaxOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    firstSeen?: SortOrder
  }

  export type QueryMinOrderByAggregateInput = {
    id?: SortOrder
    query?: SortOrder
    firstSeen?: SortOrder
  }

  export type QuerySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeeklyBroadcastUserIdGroupNameCompoundUniqueInput = {
    userId: bigint | number
    groupName: string
  }

  export type WeeklyBroadcastCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupName?: SortOrder
    sentAt?: SortOrder
  }

  export type WeeklyBroadcastAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WeeklyBroadcastMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupName?: SortOrder
    sentAt?: SortOrder
  }

  export type WeeklyBroadcastMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupName?: SortOrder
    sentAt?: SortOrder
  }

  export type WeeklyBroadcastSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookPriceCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
    recordedAt?: SortOrder
  }

  export type BookPriceAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
  }

  export type BookPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
    recordedAt?: SortOrder
  }

  export type BookPriceMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
    recordedAt?: SortOrder
  }

  export type BookPriceSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BookNullableScalarRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type CacheLogBookIdQueryIdCompoundUniqueInput = {
    bookId: number
    queryId: number
  }

  export type CacheLogCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    queryId?: SortOrder
    createdAt?: SortOrder
  }

  export type CacheLogAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    queryId?: SortOrder
  }

  export type CacheLogMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    queryId?: SortOrder
    createdAt?: SortOrder
  }

  export type CacheLogMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    queryId?: SortOrder
    createdAt?: SortOrder
  }

  export type CacheLogSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    queryId?: SortOrder
  }

  export type SearchLogScalarRelationFilter = {
    is?: SearchLogWhereInput
    isNot?: SearchLogWhereInput
  }

  export type ViewedBookCountOrderByAggregateInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrder
    bookLink?: SortOrder
    viewedAt?: SortOrder
    similarity?: SortOrder
  }

  export type ViewedBookAvgOrderByAggregateInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrder
    similarity?: SortOrder
  }

  export type ViewedBookMaxOrderByAggregateInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrder
    bookLink?: SortOrder
    viewedAt?: SortOrder
    similarity?: SortOrder
  }

  export type ViewedBookMinOrderByAggregateInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrder
    bookLink?: SortOrder
    viewedAt?: SortOrder
    similarity?: SortOrder
  }

  export type ViewedBookSumOrderByAggregateInput = {
    id?: SortOrder
    searchLogId?: SortOrder
    bookId?: SortOrder
    similarity?: SortOrder
  }

  export type QueryCreateNestedOneWithoutBooksInput = {
    create?: XOR<QueryCreateWithoutBooksInput, QueryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: QueryCreateOrConnectWithoutBooksInput
    connect?: QueryWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutBooksInput = {
    create?: XOR<StoreCreateWithoutBooksInput, StoreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBooksInput
    connect?: StoreWhereUniqueInput
  }

  export type FormatCreateNestedOneWithoutBooksInput = {
    create?: XOR<FormatCreateWithoutBooksInput, FormatUncheckedCreateWithoutBooksInput>
    connectOrCreate?: FormatCreateOrConnectWithoutBooksInput
    connect?: FormatWhereUniqueInput
  }

  export type BookPriceCreateNestedManyWithoutBookInput = {
    create?: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput> | BookPriceCreateWithoutBookInput[] | BookPriceUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPriceCreateOrConnectWithoutBookInput | BookPriceCreateOrConnectWithoutBookInput[]
    createMany?: BookPriceCreateManyBookInputEnvelope
    connect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
  }

  export type CacheLogCreateNestedManyWithoutBookInput = {
    create?: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput> | CacheLogCreateWithoutBookInput[] | CacheLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutBookInput | CacheLogCreateOrConnectWithoutBookInput[]
    createMany?: CacheLogCreateManyBookInputEnvelope
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
  }

  export type ViewedBookCreateNestedManyWithoutBookInput = {
    create?: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput> | ViewedBookCreateWithoutBookInput[] | ViewedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutBookInput | ViewedBookCreateOrConnectWithoutBookInput[]
    createMany?: ViewedBookCreateManyBookInputEnvelope
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
  }

  export type BookPriceUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput> | BookPriceCreateWithoutBookInput[] | BookPriceUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPriceCreateOrConnectWithoutBookInput | BookPriceCreateOrConnectWithoutBookInput[]
    createMany?: BookPriceCreateManyBookInputEnvelope
    connect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
  }

  export type CacheLogUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput> | CacheLogCreateWithoutBookInput[] | CacheLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutBookInput | CacheLogCreateOrConnectWithoutBookInput[]
    createMany?: CacheLogCreateManyBookInputEnvelope
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
  }

  export type ViewedBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput> | ViewedBookCreateWithoutBookInput[] | ViewedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutBookInput | ViewedBookCreateOrConnectWithoutBookInput[]
    createMany?: ViewedBookCreateManyBookInputEnvelope
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QueryUpdateOneWithoutBooksNestedInput = {
    create?: XOR<QueryCreateWithoutBooksInput, QueryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: QueryCreateOrConnectWithoutBooksInput
    upsert?: QueryUpsertWithoutBooksInput
    disconnect?: QueryWhereInput | boolean
    delete?: QueryWhereInput | boolean
    connect?: QueryWhereUniqueInput
    update?: XOR<XOR<QueryUpdateToOneWithWhereWithoutBooksInput, QueryUpdateWithoutBooksInput>, QueryUncheckedUpdateWithoutBooksInput>
  }

  export type StoreUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<StoreCreateWithoutBooksInput, StoreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBooksInput
    upsert?: StoreUpsertWithoutBooksInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutBooksInput, StoreUpdateWithoutBooksInput>, StoreUncheckedUpdateWithoutBooksInput>
  }

  export type FormatUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<FormatCreateWithoutBooksInput, FormatUncheckedCreateWithoutBooksInput>
    connectOrCreate?: FormatCreateOrConnectWithoutBooksInput
    upsert?: FormatUpsertWithoutBooksInput
    connect?: FormatWhereUniqueInput
    update?: XOR<XOR<FormatUpdateToOneWithWhereWithoutBooksInput, FormatUpdateWithoutBooksInput>, FormatUncheckedUpdateWithoutBooksInput>
  }

  export type BookPriceUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput> | BookPriceCreateWithoutBookInput[] | BookPriceUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPriceCreateOrConnectWithoutBookInput | BookPriceCreateOrConnectWithoutBookInput[]
    upsert?: BookPriceUpsertWithWhereUniqueWithoutBookInput | BookPriceUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookPriceCreateManyBookInputEnvelope
    set?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    disconnect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    delete?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    connect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    update?: BookPriceUpdateWithWhereUniqueWithoutBookInput | BookPriceUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookPriceUpdateManyWithWhereWithoutBookInput | BookPriceUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookPriceScalarWhereInput | BookPriceScalarWhereInput[]
  }

  export type CacheLogUpdateManyWithoutBookNestedInput = {
    create?: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput> | CacheLogCreateWithoutBookInput[] | CacheLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutBookInput | CacheLogCreateOrConnectWithoutBookInput[]
    upsert?: CacheLogUpsertWithWhereUniqueWithoutBookInput | CacheLogUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CacheLogCreateManyBookInputEnvelope
    set?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    disconnect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    delete?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    update?: CacheLogUpdateWithWhereUniqueWithoutBookInput | CacheLogUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CacheLogUpdateManyWithWhereWithoutBookInput | CacheLogUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
  }

  export type ViewedBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput> | ViewedBookCreateWithoutBookInput[] | ViewedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutBookInput | ViewedBookCreateOrConnectWithoutBookInput[]
    upsert?: ViewedBookUpsertWithWhereUniqueWithoutBookInput | ViewedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ViewedBookCreateManyBookInputEnvelope
    set?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    disconnect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    delete?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    update?: ViewedBookUpdateWithWhereUniqueWithoutBookInput | ViewedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ViewedBookUpdateManyWithWhereWithoutBookInput | ViewedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookPriceUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput> | BookPriceCreateWithoutBookInput[] | BookPriceUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPriceCreateOrConnectWithoutBookInput | BookPriceCreateOrConnectWithoutBookInput[]
    upsert?: BookPriceUpsertWithWhereUniqueWithoutBookInput | BookPriceUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookPriceCreateManyBookInputEnvelope
    set?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    disconnect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    delete?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    connect?: BookPriceWhereUniqueInput | BookPriceWhereUniqueInput[]
    update?: BookPriceUpdateWithWhereUniqueWithoutBookInput | BookPriceUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookPriceUpdateManyWithWhereWithoutBookInput | BookPriceUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookPriceScalarWhereInput | BookPriceScalarWhereInput[]
  }

  export type CacheLogUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput> | CacheLogCreateWithoutBookInput[] | CacheLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutBookInput | CacheLogCreateOrConnectWithoutBookInput[]
    upsert?: CacheLogUpsertWithWhereUniqueWithoutBookInput | CacheLogUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CacheLogCreateManyBookInputEnvelope
    set?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    disconnect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    delete?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    update?: CacheLogUpdateWithWhereUniqueWithoutBookInput | CacheLogUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CacheLogUpdateManyWithWhereWithoutBookInput | CacheLogUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
  }

  export type ViewedBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput> | ViewedBookCreateWithoutBookInput[] | ViewedBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutBookInput | ViewedBookCreateOrConnectWithoutBookInput[]
    upsert?: ViewedBookUpsertWithWhereUniqueWithoutBookInput | ViewedBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ViewedBookCreateManyBookInputEnvelope
    set?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    disconnect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    delete?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    update?: ViewedBookUpdateWithWhereUniqueWithoutBookInput | ViewedBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ViewedBookUpdateManyWithWhereWithoutBookInput | ViewedBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutFormatInput = {
    create?: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput> | BookCreateWithoutFormatInput[] | BookUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: BookCreateOrConnectWithoutFormatInput | BookCreateOrConnectWithoutFormatInput[]
    createMany?: BookCreateManyFormatInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutFormatInput = {
    create?: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput> | BookCreateWithoutFormatInput[] | BookUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: BookCreateOrConnectWithoutFormatInput | BookCreateOrConnectWithoutFormatInput[]
    createMany?: BookCreateManyFormatInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutFormatNestedInput = {
    create?: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput> | BookCreateWithoutFormatInput[] | BookUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: BookCreateOrConnectWithoutFormatInput | BookCreateOrConnectWithoutFormatInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutFormatInput | BookUpsertWithWhereUniqueWithoutFormatInput[]
    createMany?: BookCreateManyFormatInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutFormatInput | BookUpdateWithWhereUniqueWithoutFormatInput[]
    updateMany?: BookUpdateManyWithWhereWithoutFormatInput | BookUpdateManyWithWhereWithoutFormatInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutFormatNestedInput = {
    create?: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput> | BookCreateWithoutFormatInput[] | BookUncheckedCreateWithoutFormatInput[]
    connectOrCreate?: BookCreateOrConnectWithoutFormatInput | BookCreateOrConnectWithoutFormatInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutFormatInput | BookUpsertWithWhereUniqueWithoutFormatInput[]
    createMany?: BookCreateManyFormatInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutFormatInput | BookUpdateWithWhereUniqueWithoutFormatInput[]
    updateMany?: BookUpdateManyWithWhereWithoutFormatInput | BookUpdateManyWithWhereWithoutFormatInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutStoreInput = {
    create?: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput> | BookCreateWithoutStoreInput[] | BookUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BookCreateOrConnectWithoutStoreInput | BookCreateOrConnectWithoutStoreInput[]
    createMany?: BookCreateManyStoreInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StoreStatisticCreateNestedOneWithoutStoreInput = {
    create?: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
    connectOrCreate?: StoreStatisticCreateOrConnectWithoutStoreInput
    connect?: StoreStatisticWhereUniqueInput
  }

  export type BookUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput> | BookCreateWithoutStoreInput[] | BookUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BookCreateOrConnectWithoutStoreInput | BookCreateOrConnectWithoutStoreInput[]
    createMany?: BookCreateManyStoreInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StoreStatisticUncheckedCreateNestedOneWithoutStoreInput = {
    create?: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
    connectOrCreate?: StoreStatisticCreateOrConnectWithoutStoreInput
    connect?: StoreStatisticWhereUniqueInput
  }

  export type BookUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput> | BookCreateWithoutStoreInput[] | BookUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BookCreateOrConnectWithoutStoreInput | BookCreateOrConnectWithoutStoreInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutStoreInput | BookUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BookCreateManyStoreInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutStoreInput | BookUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BookUpdateManyWithWhereWithoutStoreInput | BookUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type StoreStatisticUpdateOneWithoutStoreNestedInput = {
    create?: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
    connectOrCreate?: StoreStatisticCreateOrConnectWithoutStoreInput
    upsert?: StoreStatisticUpsertWithoutStoreInput
    disconnect?: StoreStatisticWhereInput | boolean
    delete?: StoreStatisticWhereInput | boolean
    connect?: StoreStatisticWhereUniqueInput
    update?: XOR<XOR<StoreStatisticUpdateToOneWithWhereWithoutStoreInput, StoreStatisticUpdateWithoutStoreInput>, StoreStatisticUncheckedUpdateWithoutStoreInput>
  }

  export type BookUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput> | BookCreateWithoutStoreInput[] | BookUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BookCreateOrConnectWithoutStoreInput | BookCreateOrConnectWithoutStoreInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutStoreInput | BookUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BookCreateManyStoreInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutStoreInput | BookUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BookUpdateManyWithWhereWithoutStoreInput | BookUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type StoreStatisticUncheckedUpdateOneWithoutStoreNestedInput = {
    create?: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
    connectOrCreate?: StoreStatisticCreateOrConnectWithoutStoreInput
    upsert?: StoreStatisticUpsertWithoutStoreInput
    disconnect?: StoreStatisticWhereInput | boolean
    delete?: StoreStatisticWhereInput | boolean
    connect?: StoreStatisticWhereUniqueInput
    update?: XOR<XOR<StoreStatisticUpdateToOneWithWhereWithoutStoreInput, StoreStatisticUpdateWithoutStoreInput>, StoreStatisticUncheckedUpdateWithoutStoreInput>
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCategoryCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<FeedbackCategoryCreateWithoutFeedbacksInput, FeedbackCategoryUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: FeedbackCategoryCreateOrConnectWithoutFeedbacksInput
    connect?: FeedbackCategoryWhereUniqueInput
  }

  export type EnumFeedbackTypeFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type FeedbackCategoryUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<FeedbackCategoryCreateWithoutFeedbacksInput, FeedbackCategoryUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: FeedbackCategoryCreateOrConnectWithoutFeedbacksInput
    upsert?: FeedbackCategoryUpsertWithoutFeedbacksInput
    disconnect?: FeedbackCategoryWhereInput | boolean
    delete?: FeedbackCategoryWhereInput | boolean
    connect?: FeedbackCategoryWhereUniqueInput
    update?: XOR<XOR<FeedbackCategoryUpdateToOneWithWhereWithoutFeedbacksInput, FeedbackCategoryUpdateWithoutFeedbacksInput>, FeedbackCategoryUncheckedUpdateWithoutFeedbacksInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FeedbackCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput> | FeedbackCreateWithoutCategoryInput[] | FeedbackUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutCategoryInput | FeedbackCreateOrConnectWithoutCategoryInput[]
    createMany?: FeedbackCreateManyCategoryInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput> | FeedbackCreateWithoutCategoryInput[] | FeedbackUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutCategoryInput | FeedbackCreateOrConnectWithoutCategoryInput[]
    createMany?: FeedbackCreateManyCategoryInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput> | FeedbackCreateWithoutCategoryInput[] | FeedbackUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutCategoryInput | FeedbackCreateOrConnectWithoutCategoryInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutCategoryInput | FeedbackUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FeedbackCreateManyCategoryInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutCategoryInput | FeedbackUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutCategoryInput | FeedbackUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput> | FeedbackCreateWithoutCategoryInput[] | FeedbackUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutCategoryInput | FeedbackCreateOrConnectWithoutCategoryInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutCategoryInput | FeedbackUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FeedbackCreateManyCategoryInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutCategoryInput | FeedbackUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutCategoryInput | FeedbackUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type QueryCreateNestedOneWithoutSearchLogsInput = {
    create?: XOR<QueryCreateWithoutSearchLogsInput, QueryUncheckedCreateWithoutSearchLogsInput>
    connectOrCreate?: QueryCreateOrConnectWithoutSearchLogsInput
    connect?: QueryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSearchLogsInput = {
    create?: XOR<UserCreateWithoutSearchLogsInput, UserUncheckedCreateWithoutSearchLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ViewedBookCreateNestedManyWithoutSearchLogInput = {
    create?: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput> | ViewedBookCreateWithoutSearchLogInput[] | ViewedBookUncheckedCreateWithoutSearchLogInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutSearchLogInput | ViewedBookCreateOrConnectWithoutSearchLogInput[]
    createMany?: ViewedBookCreateManySearchLogInputEnvelope
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
  }

  export type ViewedBookUncheckedCreateNestedManyWithoutSearchLogInput = {
    create?: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput> | ViewedBookCreateWithoutSearchLogInput[] | ViewedBookUncheckedCreateWithoutSearchLogInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutSearchLogInput | ViewedBookCreateOrConnectWithoutSearchLogInput[]
    createMany?: ViewedBookCreateManySearchLogInputEnvelope
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
  }

  export type QueryUpdateOneRequiredWithoutSearchLogsNestedInput = {
    create?: XOR<QueryCreateWithoutSearchLogsInput, QueryUncheckedCreateWithoutSearchLogsInput>
    connectOrCreate?: QueryCreateOrConnectWithoutSearchLogsInput
    upsert?: QueryUpsertWithoutSearchLogsInput
    connect?: QueryWhereUniqueInput
    update?: XOR<XOR<QueryUpdateToOneWithWhereWithoutSearchLogsInput, QueryUpdateWithoutSearchLogsInput>, QueryUncheckedUpdateWithoutSearchLogsInput>
  }

  export type UserUpdateOneRequiredWithoutSearchLogsNestedInput = {
    create?: XOR<UserCreateWithoutSearchLogsInput, UserUncheckedCreateWithoutSearchLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchLogsInput
    upsert?: UserUpsertWithoutSearchLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchLogsInput, UserUpdateWithoutSearchLogsInput>, UserUncheckedUpdateWithoutSearchLogsInput>
  }

  export type ViewedBookUpdateManyWithoutSearchLogNestedInput = {
    create?: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput> | ViewedBookCreateWithoutSearchLogInput[] | ViewedBookUncheckedCreateWithoutSearchLogInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutSearchLogInput | ViewedBookCreateOrConnectWithoutSearchLogInput[]
    upsert?: ViewedBookUpsertWithWhereUniqueWithoutSearchLogInput | ViewedBookUpsertWithWhereUniqueWithoutSearchLogInput[]
    createMany?: ViewedBookCreateManySearchLogInputEnvelope
    set?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    disconnect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    delete?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    update?: ViewedBookUpdateWithWhereUniqueWithoutSearchLogInput | ViewedBookUpdateWithWhereUniqueWithoutSearchLogInput[]
    updateMany?: ViewedBookUpdateManyWithWhereWithoutSearchLogInput | ViewedBookUpdateManyWithWhereWithoutSearchLogInput[]
    deleteMany?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
  }

  export type ViewedBookUncheckedUpdateManyWithoutSearchLogNestedInput = {
    create?: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput> | ViewedBookCreateWithoutSearchLogInput[] | ViewedBookUncheckedCreateWithoutSearchLogInput[]
    connectOrCreate?: ViewedBookCreateOrConnectWithoutSearchLogInput | ViewedBookCreateOrConnectWithoutSearchLogInput[]
    upsert?: ViewedBookUpsertWithWhereUniqueWithoutSearchLogInput | ViewedBookUpsertWithWhereUniqueWithoutSearchLogInput[]
    createMany?: ViewedBookCreateManySearchLogInputEnvelope
    set?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    disconnect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    delete?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    connect?: ViewedBookWhereUniqueInput | ViewedBookWhereUniqueInput[]
    update?: ViewedBookUpdateWithWhereUniqueWithoutSearchLogInput | ViewedBookUpdateWithWhereUniqueWithoutSearchLogInput[]
    updateMany?: ViewedBookUpdateManyWithWhereWithoutSearchLogInput | ViewedBookUpdateManyWithWhereWithoutSearchLogInput[]
    deleteMany?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type StoreCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<StoreCreateWithoutStatisticsInput, StoreUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStatisticsInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<StoreCreateWithoutStatisticsInput, StoreUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStatisticsInput
    upsert?: StoreUpsertWithoutStatisticsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStatisticsInput, StoreUpdateWithoutStatisticsInput>, StoreUncheckedUpdateWithoutStatisticsInput>
  }

  export type QueryCreateNestedOneWithoutUnsuccessfulSearchesInput = {
    create?: XOR<QueryCreateWithoutUnsuccessfulSearchesInput, QueryUncheckedCreateWithoutUnsuccessfulSearchesInput>
    connectOrCreate?: QueryCreateOrConnectWithoutUnsuccessfulSearchesInput
    connect?: QueryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUnsuccessfulSearchesInput = {
    create?: XOR<UserCreateWithoutUnsuccessfulSearchesInput, UserUncheckedCreateWithoutUnsuccessfulSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnsuccessfulSearchesInput
    connect?: UserWhereUniqueInput
  }

  export type QueryUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput = {
    create?: XOR<QueryCreateWithoutUnsuccessfulSearchesInput, QueryUncheckedCreateWithoutUnsuccessfulSearchesInput>
    connectOrCreate?: QueryCreateOrConnectWithoutUnsuccessfulSearchesInput
    upsert?: QueryUpsertWithoutUnsuccessfulSearchesInput
    connect?: QueryWhereUniqueInput
    update?: XOR<XOR<QueryUpdateToOneWithWhereWithoutUnsuccessfulSearchesInput, QueryUpdateWithoutUnsuccessfulSearchesInput>, QueryUncheckedUpdateWithoutUnsuccessfulSearchesInput>
  }

  export type UserUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput = {
    create?: XOR<UserCreateWithoutUnsuccessfulSearchesInput, UserUncheckedCreateWithoutUnsuccessfulSearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnsuccessfulSearchesInput
    upsert?: UserUpsertWithoutUnsuccessfulSearchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUnsuccessfulSearchesInput, UserUpdateWithoutUnsuccessfulSearchesInput>, UserUncheckedUpdateWithoutUnsuccessfulSearchesInput>
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type SearchLogCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput> | SearchLogCreateWithoutUserInput[] | SearchLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutUserInput | SearchLogCreateOrConnectWithoutUserInput[]
    createMany?: SearchLogCreateManyUserInputEnvelope
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
  }

  export type SentMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput> | SentMessageCreateWithoutUserInput[] | SentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentMessageCreateOrConnectWithoutUserInput | SentMessageCreateOrConnectWithoutUserInput[]
    createMany?: SentMessageCreateManyUserInputEnvelope
    connect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
  }

  export type WeeklyBroadcastCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput> | WeeklyBroadcastCreateWithoutUserInput[] | WeeklyBroadcastUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyBroadcastCreateOrConnectWithoutUserInput | WeeklyBroadcastCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyBroadcastCreateManyUserInputEnvelope
    connect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
  }

  export type UnsuccessfulSearchCreateNestedManyWithoutUserInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput> | UnsuccessfulSearchCreateWithoutUserInput[] | UnsuccessfulSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutUserInput | UnsuccessfulSearchCreateOrConnectWithoutUserInput[]
    createMany?: UnsuccessfulSearchCreateManyUserInputEnvelope
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type SearchLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput> | SearchLogCreateWithoutUserInput[] | SearchLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutUserInput | SearchLogCreateOrConnectWithoutUserInput[]
    createMany?: SearchLogCreateManyUserInputEnvelope
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
  }

  export type SentMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput> | SentMessageCreateWithoutUserInput[] | SentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentMessageCreateOrConnectWithoutUserInput | SentMessageCreateOrConnectWithoutUserInput[]
    createMany?: SentMessageCreateManyUserInputEnvelope
    connect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
  }

  export type WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput> | WeeklyBroadcastCreateWithoutUserInput[] | WeeklyBroadcastUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyBroadcastCreateOrConnectWithoutUserInput | WeeklyBroadcastCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyBroadcastCreateManyUserInputEnvelope
    connect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
  }

  export type UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput> | UnsuccessfulSearchCreateWithoutUserInput[] | UnsuccessfulSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutUserInput | UnsuccessfulSearchCreateOrConnectWithoutUserInput[]
    createMany?: UnsuccessfulSearchCreateManyUserInputEnvelope
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type SearchLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput> | SearchLogCreateWithoutUserInput[] | SearchLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutUserInput | SearchLogCreateOrConnectWithoutUserInput[]
    upsert?: SearchLogUpsertWithWhereUniqueWithoutUserInput | SearchLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchLogCreateManyUserInputEnvelope
    set?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    disconnect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    delete?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    update?: SearchLogUpdateWithWhereUniqueWithoutUserInput | SearchLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchLogUpdateManyWithWhereWithoutUserInput | SearchLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
  }

  export type SentMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput> | SentMessageCreateWithoutUserInput[] | SentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentMessageCreateOrConnectWithoutUserInput | SentMessageCreateOrConnectWithoutUserInput[]
    upsert?: SentMessageUpsertWithWhereUniqueWithoutUserInput | SentMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentMessageCreateManyUserInputEnvelope
    set?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    disconnect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    delete?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    connect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    update?: SentMessageUpdateWithWhereUniqueWithoutUserInput | SentMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentMessageUpdateManyWithWhereWithoutUserInput | SentMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentMessageScalarWhereInput | SentMessageScalarWhereInput[]
  }

  export type WeeklyBroadcastUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput> | WeeklyBroadcastCreateWithoutUserInput[] | WeeklyBroadcastUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyBroadcastCreateOrConnectWithoutUserInput | WeeklyBroadcastCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyBroadcastUpsertWithWhereUniqueWithoutUserInput | WeeklyBroadcastUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyBroadcastCreateManyUserInputEnvelope
    set?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    disconnect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    delete?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    connect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    update?: WeeklyBroadcastUpdateWithWhereUniqueWithoutUserInput | WeeklyBroadcastUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyBroadcastUpdateManyWithWhereWithoutUserInput | WeeklyBroadcastUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyBroadcastScalarWhereInput | WeeklyBroadcastScalarWhereInput[]
  }

  export type UnsuccessfulSearchUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput> | UnsuccessfulSearchCreateWithoutUserInput[] | UnsuccessfulSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutUserInput | UnsuccessfulSearchCreateOrConnectWithoutUserInput[]
    upsert?: UnsuccessfulSearchUpsertWithWhereUniqueWithoutUserInput | UnsuccessfulSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnsuccessfulSearchCreateManyUserInputEnvelope
    set?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    disconnect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    delete?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    update?: UnsuccessfulSearchUpdateWithWhereUniqueWithoutUserInput | UnsuccessfulSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnsuccessfulSearchUpdateManyWithWhereWithoutUserInput | UnsuccessfulSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type SearchLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput> | SearchLogCreateWithoutUserInput[] | SearchLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutUserInput | SearchLogCreateOrConnectWithoutUserInput[]
    upsert?: SearchLogUpsertWithWhereUniqueWithoutUserInput | SearchLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchLogCreateManyUserInputEnvelope
    set?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    disconnect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    delete?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    update?: SearchLogUpdateWithWhereUniqueWithoutUserInput | SearchLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchLogUpdateManyWithWhereWithoutUserInput | SearchLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
  }

  export type SentMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput> | SentMessageCreateWithoutUserInput[] | SentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentMessageCreateOrConnectWithoutUserInput | SentMessageCreateOrConnectWithoutUserInput[]
    upsert?: SentMessageUpsertWithWhereUniqueWithoutUserInput | SentMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentMessageCreateManyUserInputEnvelope
    set?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    disconnect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    delete?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    connect?: SentMessageWhereUniqueInput | SentMessageWhereUniqueInput[]
    update?: SentMessageUpdateWithWhereUniqueWithoutUserInput | SentMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentMessageUpdateManyWithWhereWithoutUserInput | SentMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentMessageScalarWhereInput | SentMessageScalarWhereInput[]
  }

  export type WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput> | WeeklyBroadcastCreateWithoutUserInput[] | WeeklyBroadcastUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyBroadcastCreateOrConnectWithoutUserInput | WeeklyBroadcastCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyBroadcastUpsertWithWhereUniqueWithoutUserInput | WeeklyBroadcastUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyBroadcastCreateManyUserInputEnvelope
    set?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    disconnect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    delete?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    connect?: WeeklyBroadcastWhereUniqueInput | WeeklyBroadcastWhereUniqueInput[]
    update?: WeeklyBroadcastUpdateWithWhereUniqueWithoutUserInput | WeeklyBroadcastUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyBroadcastUpdateManyWithWhereWithoutUserInput | WeeklyBroadcastUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyBroadcastScalarWhereInput | WeeklyBroadcastScalarWhereInput[]
  }

  export type UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput> | UnsuccessfulSearchCreateWithoutUserInput[] | UnsuccessfulSearchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutUserInput | UnsuccessfulSearchCreateOrConnectWithoutUserInput[]
    upsert?: UnsuccessfulSearchUpsertWithWhereUniqueWithoutUserInput | UnsuccessfulSearchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnsuccessfulSearchCreateManyUserInputEnvelope
    set?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    disconnect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    delete?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    update?: UnsuccessfulSearchUpdateWithWhereUniqueWithoutUserInput | UnsuccessfulSearchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnsuccessfulSearchUpdateManyWithWhereWithoutUserInput | UnsuccessfulSearchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutQueryInput = {
    create?: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput> | BookCreateWithoutQueryInput[] | BookUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutQueryInput | BookCreateOrConnectWithoutQueryInput[]
    createMany?: BookCreateManyQueryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SearchLogCreateNestedManyWithoutQueryInput = {
    create?: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput> | SearchLogCreateWithoutQueryInput[] | SearchLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutQueryInput | SearchLogCreateOrConnectWithoutQueryInput[]
    createMany?: SearchLogCreateManyQueryInputEnvelope
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
  }

  export type UnsuccessfulSearchCreateNestedManyWithoutQueryInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput> | UnsuccessfulSearchCreateWithoutQueryInput[] | UnsuccessfulSearchUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutQueryInput | UnsuccessfulSearchCreateOrConnectWithoutQueryInput[]
    createMany?: UnsuccessfulSearchCreateManyQueryInputEnvelope
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
  }

  export type CacheLogCreateNestedManyWithoutQueryInput = {
    create?: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput> | CacheLogCreateWithoutQueryInput[] | CacheLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutQueryInput | CacheLogCreateOrConnectWithoutQueryInput[]
    createMany?: CacheLogCreateManyQueryInputEnvelope
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutQueryInput = {
    create?: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput> | BookCreateWithoutQueryInput[] | BookUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutQueryInput | BookCreateOrConnectWithoutQueryInput[]
    createMany?: BookCreateManyQueryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SearchLogUncheckedCreateNestedManyWithoutQueryInput = {
    create?: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput> | SearchLogCreateWithoutQueryInput[] | SearchLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutQueryInput | SearchLogCreateOrConnectWithoutQueryInput[]
    createMany?: SearchLogCreateManyQueryInputEnvelope
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
  }

  export type UnsuccessfulSearchUncheckedCreateNestedManyWithoutQueryInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput> | UnsuccessfulSearchCreateWithoutQueryInput[] | UnsuccessfulSearchUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutQueryInput | UnsuccessfulSearchCreateOrConnectWithoutQueryInput[]
    createMany?: UnsuccessfulSearchCreateManyQueryInputEnvelope
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
  }

  export type CacheLogUncheckedCreateNestedManyWithoutQueryInput = {
    create?: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput> | CacheLogCreateWithoutQueryInput[] | CacheLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutQueryInput | CacheLogCreateOrConnectWithoutQueryInput[]
    createMany?: CacheLogCreateManyQueryInputEnvelope
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutQueryNestedInput = {
    create?: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput> | BookCreateWithoutQueryInput[] | BookUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutQueryInput | BookCreateOrConnectWithoutQueryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutQueryInput | BookUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: BookCreateManyQueryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutQueryInput | BookUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutQueryInput | BookUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SearchLogUpdateManyWithoutQueryNestedInput = {
    create?: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput> | SearchLogCreateWithoutQueryInput[] | SearchLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutQueryInput | SearchLogCreateOrConnectWithoutQueryInput[]
    upsert?: SearchLogUpsertWithWhereUniqueWithoutQueryInput | SearchLogUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: SearchLogCreateManyQueryInputEnvelope
    set?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    disconnect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    delete?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    update?: SearchLogUpdateWithWhereUniqueWithoutQueryInput | SearchLogUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: SearchLogUpdateManyWithWhereWithoutQueryInput | SearchLogUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
  }

  export type UnsuccessfulSearchUpdateManyWithoutQueryNestedInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput> | UnsuccessfulSearchCreateWithoutQueryInput[] | UnsuccessfulSearchUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutQueryInput | UnsuccessfulSearchCreateOrConnectWithoutQueryInput[]
    upsert?: UnsuccessfulSearchUpsertWithWhereUniqueWithoutQueryInput | UnsuccessfulSearchUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: UnsuccessfulSearchCreateManyQueryInputEnvelope
    set?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    disconnect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    delete?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    update?: UnsuccessfulSearchUpdateWithWhereUniqueWithoutQueryInput | UnsuccessfulSearchUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: UnsuccessfulSearchUpdateManyWithWhereWithoutQueryInput | UnsuccessfulSearchUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
  }

  export type CacheLogUpdateManyWithoutQueryNestedInput = {
    create?: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput> | CacheLogCreateWithoutQueryInput[] | CacheLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutQueryInput | CacheLogCreateOrConnectWithoutQueryInput[]
    upsert?: CacheLogUpsertWithWhereUniqueWithoutQueryInput | CacheLogUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: CacheLogCreateManyQueryInputEnvelope
    set?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    disconnect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    delete?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    update?: CacheLogUpdateWithWhereUniqueWithoutQueryInput | CacheLogUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: CacheLogUpdateManyWithWhereWithoutQueryInput | CacheLogUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutQueryNestedInput = {
    create?: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput> | BookCreateWithoutQueryInput[] | BookUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutQueryInput | BookCreateOrConnectWithoutQueryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutQueryInput | BookUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: BookCreateManyQueryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutQueryInput | BookUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutQueryInput | BookUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SearchLogUncheckedUpdateManyWithoutQueryNestedInput = {
    create?: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput> | SearchLogCreateWithoutQueryInput[] | SearchLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: SearchLogCreateOrConnectWithoutQueryInput | SearchLogCreateOrConnectWithoutQueryInput[]
    upsert?: SearchLogUpsertWithWhereUniqueWithoutQueryInput | SearchLogUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: SearchLogCreateManyQueryInputEnvelope
    set?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    disconnect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    delete?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    connect?: SearchLogWhereUniqueInput | SearchLogWhereUniqueInput[]
    update?: SearchLogUpdateWithWhereUniqueWithoutQueryInput | SearchLogUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: SearchLogUpdateManyWithWhereWithoutQueryInput | SearchLogUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
  }

  export type UnsuccessfulSearchUncheckedUpdateManyWithoutQueryNestedInput = {
    create?: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput> | UnsuccessfulSearchCreateWithoutQueryInput[] | UnsuccessfulSearchUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: UnsuccessfulSearchCreateOrConnectWithoutQueryInput | UnsuccessfulSearchCreateOrConnectWithoutQueryInput[]
    upsert?: UnsuccessfulSearchUpsertWithWhereUniqueWithoutQueryInput | UnsuccessfulSearchUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: UnsuccessfulSearchCreateManyQueryInputEnvelope
    set?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    disconnect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    delete?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    connect?: UnsuccessfulSearchWhereUniqueInput | UnsuccessfulSearchWhereUniqueInput[]
    update?: UnsuccessfulSearchUpdateWithWhereUniqueWithoutQueryInput | UnsuccessfulSearchUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: UnsuccessfulSearchUpdateManyWithWhereWithoutQueryInput | UnsuccessfulSearchUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
  }

  export type CacheLogUncheckedUpdateManyWithoutQueryNestedInput = {
    create?: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput> | CacheLogCreateWithoutQueryInput[] | CacheLogUncheckedCreateWithoutQueryInput[]
    connectOrCreate?: CacheLogCreateOrConnectWithoutQueryInput | CacheLogCreateOrConnectWithoutQueryInput[]
    upsert?: CacheLogUpsertWithWhereUniqueWithoutQueryInput | CacheLogUpsertWithWhereUniqueWithoutQueryInput[]
    createMany?: CacheLogCreateManyQueryInputEnvelope
    set?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    disconnect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    delete?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    connect?: CacheLogWhereUniqueInput | CacheLogWhereUniqueInput[]
    update?: CacheLogUpdateWithWhereUniqueWithoutQueryInput | CacheLogUpdateWithWhereUniqueWithoutQueryInput[]
    updateMany?: CacheLogUpdateManyWithWhereWithoutQueryInput | CacheLogUpdateManyWithWhereWithoutQueryInput[]
    deleteMany?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWeeklyBroadcastsInput = {
    create?: XOR<UserCreateWithoutWeeklyBroadcastsInput, UserUncheckedCreateWithoutWeeklyBroadcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyBroadcastsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeeklyBroadcastsNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyBroadcastsInput, UserUncheckedCreateWithoutWeeklyBroadcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyBroadcastsInput
    upsert?: UserUpsertWithoutWeeklyBroadcastsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyBroadcastsInput, UserUpdateWithoutWeeklyBroadcastsInput>, UserUncheckedUpdateWithoutWeeklyBroadcastsInput>
  }

  export type BookCreateNestedOneWithoutPricesInput = {
    create?: XOR<BookCreateWithoutPricesInput, BookUncheckedCreateWithoutPricesInput>
    connectOrCreate?: BookCreateOrConnectWithoutPricesInput
    connect?: BookWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<BookCreateWithoutPricesInput, BookUncheckedCreateWithoutPricesInput>
    connectOrCreate?: BookCreateOrConnectWithoutPricesInput
    upsert?: BookUpsertWithoutPricesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutPricesInput, BookUpdateWithoutPricesInput>, BookUncheckedUpdateWithoutPricesInput>
  }

  export type BookCreateNestedOneWithoutCacheLogsInput = {
    create?: XOR<BookCreateWithoutCacheLogsInput, BookUncheckedCreateWithoutCacheLogsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCacheLogsInput
    connect?: BookWhereUniqueInput
  }

  export type QueryCreateNestedOneWithoutCacheLogsInput = {
    create?: XOR<QueryCreateWithoutCacheLogsInput, QueryUncheckedCreateWithoutCacheLogsInput>
    connectOrCreate?: QueryCreateOrConnectWithoutCacheLogsInput
    connect?: QueryWhereUniqueInput
  }

  export type BookUpdateOneWithoutCacheLogsNestedInput = {
    create?: XOR<BookCreateWithoutCacheLogsInput, BookUncheckedCreateWithoutCacheLogsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCacheLogsInput
    upsert?: BookUpsertWithoutCacheLogsInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCacheLogsInput, BookUpdateWithoutCacheLogsInput>, BookUncheckedUpdateWithoutCacheLogsInput>
  }

  export type QueryUpdateOneWithoutCacheLogsNestedInput = {
    create?: XOR<QueryCreateWithoutCacheLogsInput, QueryUncheckedCreateWithoutCacheLogsInput>
    connectOrCreate?: QueryCreateOrConnectWithoutCacheLogsInput
    upsert?: QueryUpsertWithoutCacheLogsInput
    disconnect?: QueryWhereInput | boolean
    delete?: QueryWhereInput | boolean
    connect?: QueryWhereUniqueInput
    update?: XOR<XOR<QueryUpdateToOneWithWhereWithoutCacheLogsInput, QueryUpdateWithoutCacheLogsInput>, QueryUncheckedUpdateWithoutCacheLogsInput>
  }

  export type SearchLogCreateNestedOneWithoutViewedBooksInput = {
    create?: XOR<SearchLogCreateWithoutViewedBooksInput, SearchLogUncheckedCreateWithoutViewedBooksInput>
    connectOrCreate?: SearchLogCreateOrConnectWithoutViewedBooksInput
    connect?: SearchLogWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutViewedBooksInput = {
    create?: XOR<BookCreateWithoutViewedBooksInput, BookUncheckedCreateWithoutViewedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutViewedBooksInput
    connect?: BookWhereUniqueInput
  }

  export type SearchLogUpdateOneRequiredWithoutViewedBooksNestedInput = {
    create?: XOR<SearchLogCreateWithoutViewedBooksInput, SearchLogUncheckedCreateWithoutViewedBooksInput>
    connectOrCreate?: SearchLogCreateOrConnectWithoutViewedBooksInput
    upsert?: SearchLogUpsertWithoutViewedBooksInput
    connect?: SearchLogWhereUniqueInput
    update?: XOR<XOR<SearchLogUpdateToOneWithWhereWithoutViewedBooksInput, SearchLogUpdateWithoutViewedBooksInput>, SearchLogUncheckedUpdateWithoutViewedBooksInput>
  }

  export type BookUpdateOneWithoutViewedBooksNestedInput = {
    create?: XOR<BookCreateWithoutViewedBooksInput, BookUncheckedCreateWithoutViewedBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutViewedBooksInput
    upsert?: BookUpsertWithoutViewedBooksInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutViewedBooksInput, BookUpdateWithoutViewedBooksInput>, BookUncheckedUpdateWithoutViewedBooksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumFeedbackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeFilter<$PrismaModel> | $Enums.FeedbackType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedbackTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type QueryCreateWithoutBooksInput = {
    query: string
    firstSeen?: Date | string
    searchLogs?: SearchLogCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogCreateNestedManyWithoutQueryInput
  }

  export type QueryUncheckedCreateWithoutBooksInput = {
    id?: number
    query: string
    firstSeen?: Date | string
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutQueryInput
  }

  export type QueryCreateOrConnectWithoutBooksInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutBooksInput, QueryUncheckedCreateWithoutBooksInput>
  }

  export type StoreCreateWithoutBooksInput = {
    title: string
    statistics?: StoreStatisticCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutBooksInput = {
    id?: number
    title: string
    statistics?: StoreStatisticUncheckedCreateNestedOneWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutBooksInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBooksInput, StoreUncheckedCreateWithoutBooksInput>
  }

  export type FormatCreateWithoutBooksInput = {
    title: string
  }

  export type FormatUncheckedCreateWithoutBooksInput = {
    id?: number
    title: string
  }

  export type FormatCreateOrConnectWithoutBooksInput = {
    where: FormatWhereUniqueInput
    create: XOR<FormatCreateWithoutBooksInput, FormatUncheckedCreateWithoutBooksInput>
  }

  export type BookPriceCreateWithoutBookInput = {
    price: number
    recordedAt?: Date | string
  }

  export type BookPriceUncheckedCreateWithoutBookInput = {
    id?: number
    price: number
    recordedAt?: Date | string
  }

  export type BookPriceCreateOrConnectWithoutBookInput = {
    where: BookPriceWhereUniqueInput
    create: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput>
  }

  export type BookPriceCreateManyBookInputEnvelope = {
    data: BookPriceCreateManyBookInput | BookPriceCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CacheLogCreateWithoutBookInput = {
    createdAt?: Date | string
    query?: QueryCreateNestedOneWithoutCacheLogsInput
  }

  export type CacheLogUncheckedCreateWithoutBookInput = {
    id?: number
    queryId: number
    createdAt?: Date | string
  }

  export type CacheLogCreateOrConnectWithoutBookInput = {
    where: CacheLogWhereUniqueInput
    create: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput>
  }

  export type CacheLogCreateManyBookInputEnvelope = {
    data: CacheLogCreateManyBookInput | CacheLogCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ViewedBookCreateWithoutBookInput = {
    bookLink: string
    viewedAt?: Date | string
    similarity: number
    searchLog: SearchLogCreateNestedOneWithoutViewedBooksInput
  }

  export type ViewedBookUncheckedCreateWithoutBookInput = {
    id?: number
    searchLogId: number
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type ViewedBookCreateOrConnectWithoutBookInput = {
    where: ViewedBookWhereUniqueInput
    create: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput>
  }

  export type ViewedBookCreateManyBookInputEnvelope = {
    data: ViewedBookCreateManyBookInput | ViewedBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type QueryUpsertWithoutBooksInput = {
    update: XOR<QueryUpdateWithoutBooksInput, QueryUncheckedUpdateWithoutBooksInput>
    create: XOR<QueryCreateWithoutBooksInput, QueryUncheckedCreateWithoutBooksInput>
    where?: QueryWhereInput
  }

  export type QueryUpdateToOneWithWhereWithoutBooksInput = {
    where?: QueryWhereInput
    data: XOR<QueryUpdateWithoutBooksInput, QueryUncheckedUpdateWithoutBooksInput>
  }

  export type QueryUpdateWithoutBooksInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    searchLogs?: SearchLogUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutQueryNestedInput
  }

  export type QueryUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    searchLogs?: SearchLogUncheckedUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutQueryNestedInput
  }

  export type StoreUpsertWithoutBooksInput = {
    update: XOR<StoreUpdateWithoutBooksInput, StoreUncheckedUpdateWithoutBooksInput>
    create: XOR<StoreCreateWithoutBooksInput, StoreUncheckedCreateWithoutBooksInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutBooksInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutBooksInput, StoreUncheckedUpdateWithoutBooksInput>
  }

  export type StoreUpdateWithoutBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    statistics?: StoreStatisticUpdateOneWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    statistics?: StoreStatisticUncheckedUpdateOneWithoutStoreNestedInput
  }

  export type FormatUpsertWithoutBooksInput = {
    update: XOR<FormatUpdateWithoutBooksInput, FormatUncheckedUpdateWithoutBooksInput>
    create: XOR<FormatCreateWithoutBooksInput, FormatUncheckedCreateWithoutBooksInput>
    where?: FormatWhereInput
  }

  export type FormatUpdateToOneWithWhereWithoutBooksInput = {
    where?: FormatWhereInput
    data: XOR<FormatUpdateWithoutBooksInput, FormatUncheckedUpdateWithoutBooksInput>
  }

  export type FormatUpdateWithoutBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FormatUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BookPriceUpsertWithWhereUniqueWithoutBookInput = {
    where: BookPriceWhereUniqueInput
    update: XOR<BookPriceUpdateWithoutBookInput, BookPriceUncheckedUpdateWithoutBookInput>
    create: XOR<BookPriceCreateWithoutBookInput, BookPriceUncheckedCreateWithoutBookInput>
  }

  export type BookPriceUpdateWithWhereUniqueWithoutBookInput = {
    where: BookPriceWhereUniqueInput
    data: XOR<BookPriceUpdateWithoutBookInput, BookPriceUncheckedUpdateWithoutBookInput>
  }

  export type BookPriceUpdateManyWithWhereWithoutBookInput = {
    where: BookPriceScalarWhereInput
    data: XOR<BookPriceUpdateManyMutationInput, BookPriceUncheckedUpdateManyWithoutBookInput>
  }

  export type BookPriceScalarWhereInput = {
    AND?: BookPriceScalarWhereInput | BookPriceScalarWhereInput[]
    OR?: BookPriceScalarWhereInput[]
    NOT?: BookPriceScalarWhereInput | BookPriceScalarWhereInput[]
    id?: IntFilter<"BookPrice"> | number
    bookId?: IntFilter<"BookPrice"> | number
    price?: FloatFilter<"BookPrice"> | number
    recordedAt?: DateTimeFilter<"BookPrice"> | Date | string
  }

  export type CacheLogUpsertWithWhereUniqueWithoutBookInput = {
    where: CacheLogWhereUniqueInput
    update: XOR<CacheLogUpdateWithoutBookInput, CacheLogUncheckedUpdateWithoutBookInput>
    create: XOR<CacheLogCreateWithoutBookInput, CacheLogUncheckedCreateWithoutBookInput>
  }

  export type CacheLogUpdateWithWhereUniqueWithoutBookInput = {
    where: CacheLogWhereUniqueInput
    data: XOR<CacheLogUpdateWithoutBookInput, CacheLogUncheckedUpdateWithoutBookInput>
  }

  export type CacheLogUpdateManyWithWhereWithoutBookInput = {
    where: CacheLogScalarWhereInput
    data: XOR<CacheLogUpdateManyMutationInput, CacheLogUncheckedUpdateManyWithoutBookInput>
  }

  export type CacheLogScalarWhereInput = {
    AND?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
    OR?: CacheLogScalarWhereInput[]
    NOT?: CacheLogScalarWhereInput | CacheLogScalarWhereInput[]
    id?: IntFilter<"CacheLog"> | number
    bookId?: IntNullableFilter<"CacheLog"> | number | null
    queryId?: IntFilter<"CacheLog"> | number
    createdAt?: DateTimeFilter<"CacheLog"> | Date | string
  }

  export type ViewedBookUpsertWithWhereUniqueWithoutBookInput = {
    where: ViewedBookWhereUniqueInput
    update: XOR<ViewedBookUpdateWithoutBookInput, ViewedBookUncheckedUpdateWithoutBookInput>
    create: XOR<ViewedBookCreateWithoutBookInput, ViewedBookUncheckedCreateWithoutBookInput>
  }

  export type ViewedBookUpdateWithWhereUniqueWithoutBookInput = {
    where: ViewedBookWhereUniqueInput
    data: XOR<ViewedBookUpdateWithoutBookInput, ViewedBookUncheckedUpdateWithoutBookInput>
  }

  export type ViewedBookUpdateManyWithWhereWithoutBookInput = {
    where: ViewedBookScalarWhereInput
    data: XOR<ViewedBookUpdateManyMutationInput, ViewedBookUncheckedUpdateManyWithoutBookInput>
  }

  export type ViewedBookScalarWhereInput = {
    AND?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
    OR?: ViewedBookScalarWhereInput[]
    NOT?: ViewedBookScalarWhereInput | ViewedBookScalarWhereInput[]
    id?: IntFilter<"ViewedBook"> | number
    searchLogId?: IntFilter<"ViewedBook"> | number
    bookId?: IntNullableFilter<"ViewedBook"> | number | null
    bookLink?: StringFilter<"ViewedBook"> | string
    viewedAt?: DateTimeFilter<"ViewedBook"> | Date | string
    similarity?: FloatFilter<"ViewedBook"> | number
  }

  export type BookCreateWithoutFormatInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    store: StoreCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutFormatInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutFormatInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput>
  }

  export type BookCreateManyFormatInputEnvelope = {
    data: BookCreateManyFormatInput | BookCreateManyFormatInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutFormatInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutFormatInput, BookUncheckedUpdateWithoutFormatInput>
    create: XOR<BookCreateWithoutFormatInput, BookUncheckedCreateWithoutFormatInput>
  }

  export type BookUpdateWithWhereUniqueWithoutFormatInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutFormatInput, BookUncheckedUpdateWithoutFormatInput>
  }

  export type BookUpdateManyWithWhereWithoutFormatInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutFormatInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    link?: StringFilter<"Book"> | string
    available?: BoolFilter<"Book"> | boolean
    queryId?: IntNullableFilter<"Book"> | number | null
    storeId?: IntFilter<"Book"> | number
    formatId?: IntFilter<"Book"> | number
  }

  export type BookCreateWithoutStoreInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutStoreInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    formatId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutStoreInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput>
  }

  export type BookCreateManyStoreInputEnvelope = {
    data: BookCreateManyStoreInput | BookCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StoreStatisticCreateWithoutStoreInput = {
    booksFound?: number
    lastScrapedAt?: Date | string
  }

  export type StoreStatisticUncheckedCreateWithoutStoreInput = {
    id?: number
    booksFound?: number
    lastScrapedAt?: Date | string
  }

  export type StoreStatisticCreateOrConnectWithoutStoreInput = {
    where: StoreStatisticWhereUniqueInput
    create: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
  }

  export type BookUpsertWithWhereUniqueWithoutStoreInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutStoreInput, BookUncheckedUpdateWithoutStoreInput>
    create: XOR<BookCreateWithoutStoreInput, BookUncheckedCreateWithoutStoreInput>
  }

  export type BookUpdateWithWhereUniqueWithoutStoreInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutStoreInput, BookUncheckedUpdateWithoutStoreInput>
  }

  export type BookUpdateManyWithWhereWithoutStoreInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreStatisticUpsertWithoutStoreInput = {
    update: XOR<StoreStatisticUpdateWithoutStoreInput, StoreStatisticUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreStatisticCreateWithoutStoreInput, StoreStatisticUncheckedCreateWithoutStoreInput>
    where?: StoreStatisticWhereInput
  }

  export type StoreStatisticUpdateToOneWithWhereWithoutStoreInput = {
    where?: StoreStatisticWhereInput
    data: XOR<StoreStatisticUpdateWithoutStoreInput, StoreStatisticUncheckedUpdateWithoutStoreInput>
  }

  export type StoreStatisticUpdateWithoutStoreInput = {
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreStatisticUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    booksFound?: IntFieldUpdateOperationsInput | number
    lastScrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFeedbacksInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    searchLogs?: SearchLogCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageUncheckedCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type FeedbackCategoryCreateWithoutFeedbacksInput = {
    key: string
    description: string
  }

  export type FeedbackCategoryUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    key: string
    description: string
  }

  export type FeedbackCategoryCreateOrConnectWithoutFeedbacksInput = {
    where: FeedbackCategoryWhereUniqueInput
    create: XOR<FeedbackCategoryCreateWithoutFeedbacksInput, FeedbackCategoryUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    searchLogs?: SearchLogUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    searchLogs?: SearchLogUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUncheckedUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackCategoryUpsertWithoutFeedbacksInput = {
    update: XOR<FeedbackCategoryUpdateWithoutFeedbacksInput, FeedbackCategoryUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<FeedbackCategoryCreateWithoutFeedbacksInput, FeedbackCategoryUncheckedCreateWithoutFeedbacksInput>
    where?: FeedbackCategoryWhereInput
  }

  export type FeedbackCategoryUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: FeedbackCategoryWhereInput
    data: XOR<FeedbackCategoryUpdateWithoutFeedbacksInput, FeedbackCategoryUncheckedUpdateWithoutFeedbacksInput>
  }

  export type FeedbackCategoryUpdateWithoutFeedbacksInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCategoryUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateWithoutCategoryInput = {
    type?: $Enums.FeedbackType
    message?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: bigint | number
    type?: $Enums.FeedbackType
    message?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutCategoryInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput>
  }

  export type FeedbackCreateManyCategoryInputEnvelope = {
    data: FeedbackCreateManyCategoryInput | FeedbackCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutCategoryInput, FeedbackUncheckedUpdateWithoutCategoryInput>
    create: XOR<FeedbackCreateWithoutCategoryInput, FeedbackUncheckedCreateWithoutCategoryInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutCategoryInput, FeedbackUncheckedUpdateWithoutCategoryInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutCategoryInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: BigIntFilter<"Feedback"> | bigint | number
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    message?: StringNullableFilter<"Feedback"> | string | null
    categoryId?: IntNullableFilter<"Feedback"> | number | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type QueryCreateWithoutSearchLogsInput = {
    query: string
    firstSeen?: Date | string
    books?: BookCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogCreateNestedManyWithoutQueryInput
  }

  export type QueryUncheckedCreateWithoutSearchLogsInput = {
    id?: number
    query: string
    firstSeen?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutQueryInput
  }

  export type QueryCreateOrConnectWithoutSearchLogsInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutSearchLogsInput, QueryUncheckedCreateWithoutSearchLogsInput>
  }

  export type UserCreateWithoutSearchLogsInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchLogsInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageUncheckedCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchLogsInput, UserUncheckedCreateWithoutSearchLogsInput>
  }

  export type ViewedBookCreateWithoutSearchLogInput = {
    bookLink: string
    viewedAt?: Date | string
    similarity: number
    book?: BookCreateNestedOneWithoutViewedBooksInput
  }

  export type ViewedBookUncheckedCreateWithoutSearchLogInput = {
    id?: number
    bookId?: number | null
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type ViewedBookCreateOrConnectWithoutSearchLogInput = {
    where: ViewedBookWhereUniqueInput
    create: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput>
  }

  export type ViewedBookCreateManySearchLogInputEnvelope = {
    data: ViewedBookCreateManySearchLogInput | ViewedBookCreateManySearchLogInput[]
    skipDuplicates?: boolean
  }

  export type QueryUpsertWithoutSearchLogsInput = {
    update: XOR<QueryUpdateWithoutSearchLogsInput, QueryUncheckedUpdateWithoutSearchLogsInput>
    create: XOR<QueryCreateWithoutSearchLogsInput, QueryUncheckedCreateWithoutSearchLogsInput>
    where?: QueryWhereInput
  }

  export type QueryUpdateToOneWithWhereWithoutSearchLogsInput = {
    where?: QueryWhereInput
    data: XOR<QueryUpdateWithoutSearchLogsInput, QueryUncheckedUpdateWithoutSearchLogsInput>
  }

  export type QueryUpdateWithoutSearchLogsInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutQueryNestedInput
  }

  export type QueryUncheckedUpdateWithoutSearchLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutQueryNestedInput
  }

  export type UserUpsertWithoutSearchLogsInput = {
    update: XOR<UserUpdateWithoutSearchLogsInput, UserUncheckedUpdateWithoutSearchLogsInput>
    create: XOR<UserCreateWithoutSearchLogsInput, UserUncheckedCreateWithoutSearchLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchLogsInput, UserUncheckedUpdateWithoutSearchLogsInput>
  }

  export type UserUpdateWithoutSearchLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUncheckedUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewedBookUpsertWithWhereUniqueWithoutSearchLogInput = {
    where: ViewedBookWhereUniqueInput
    update: XOR<ViewedBookUpdateWithoutSearchLogInput, ViewedBookUncheckedUpdateWithoutSearchLogInput>
    create: XOR<ViewedBookCreateWithoutSearchLogInput, ViewedBookUncheckedCreateWithoutSearchLogInput>
  }

  export type ViewedBookUpdateWithWhereUniqueWithoutSearchLogInput = {
    where: ViewedBookWhereUniqueInput
    data: XOR<ViewedBookUpdateWithoutSearchLogInput, ViewedBookUncheckedUpdateWithoutSearchLogInput>
  }

  export type ViewedBookUpdateManyWithWhereWithoutSearchLogInput = {
    where: ViewedBookScalarWhereInput
    data: XOR<ViewedBookUpdateManyMutationInput, ViewedBookUncheckedUpdateManyWithoutSearchLogInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreCreateWithoutStatisticsInput = {
    title: string
    books?: BookCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutStatisticsInput = {
    id?: number
    title: string
    books?: BookUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStatisticsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStatisticsInput, StoreUncheckedCreateWithoutStatisticsInput>
  }

  export type StoreUpsertWithoutStatisticsInput = {
    update: XOR<StoreUpdateWithoutStatisticsInput, StoreUncheckedUpdateWithoutStatisticsInput>
    create: XOR<StoreCreateWithoutStatisticsInput, StoreUncheckedCreateWithoutStatisticsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStatisticsInput, StoreUncheckedUpdateWithoutStatisticsInput>
  }

  export type StoreUpdateWithoutStatisticsInput = {
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type QueryCreateWithoutUnsuccessfulSearchesInput = {
    query: string
    firstSeen?: Date | string
    books?: BookCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogCreateNestedManyWithoutQueryInput
  }

  export type QueryUncheckedCreateWithoutUnsuccessfulSearchesInput = {
    id?: number
    query: string
    firstSeen?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutQueryInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutQueryInput
  }

  export type QueryCreateOrConnectWithoutUnsuccessfulSearchesInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutUnsuccessfulSearchesInput, QueryUncheckedCreateWithoutUnsuccessfulSearchesInput>
  }

  export type UserCreateWithoutUnsuccessfulSearchesInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUnsuccessfulSearchesInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageUncheckedCreateNestedManyWithoutUserInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUnsuccessfulSearchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnsuccessfulSearchesInput, UserUncheckedCreateWithoutUnsuccessfulSearchesInput>
  }

  export type QueryUpsertWithoutUnsuccessfulSearchesInput = {
    update: XOR<QueryUpdateWithoutUnsuccessfulSearchesInput, QueryUncheckedUpdateWithoutUnsuccessfulSearchesInput>
    create: XOR<QueryCreateWithoutUnsuccessfulSearchesInput, QueryUncheckedCreateWithoutUnsuccessfulSearchesInput>
    where?: QueryWhereInput
  }

  export type QueryUpdateToOneWithWhereWithoutUnsuccessfulSearchesInput = {
    where?: QueryWhereInput
    data: XOR<QueryUpdateWithoutUnsuccessfulSearchesInput, QueryUncheckedUpdateWithoutUnsuccessfulSearchesInput>
  }

  export type QueryUpdateWithoutUnsuccessfulSearchesInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutQueryNestedInput
  }

  export type QueryUncheckedUpdateWithoutUnsuccessfulSearchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutQueryNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutQueryNestedInput
  }

  export type UserUpsertWithoutUnsuccessfulSearchesInput = {
    update: XOR<UserUpdateWithoutUnsuccessfulSearchesInput, UserUncheckedUpdateWithoutUnsuccessfulSearchesInput>
    create: XOR<UserCreateWithoutUnsuccessfulSearchesInput, UserUncheckedCreateWithoutUnsuccessfulSearchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUnsuccessfulSearchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUnsuccessfulSearchesInput, UserUncheckedUpdateWithoutUnsuccessfulSearchesInput>
  }

  export type UserUpdateWithoutUnsuccessfulSearchesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUnsuccessfulSearchesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUncheckedUpdateManyWithoutUserNestedInput
    weeklyBroadcasts?: WeeklyBroadcastUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackCreateWithoutUserInput = {
    type?: $Enums.FeedbackType
    message?: string | null
    createdAt?: Date | string
    category?: FeedbackCategoryCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: number
    type?: $Enums.FeedbackType
    message?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SearchLogCreateWithoutUserInput = {
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query: QueryCreateNestedOneWithoutSearchLogsInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogUncheckedCreateWithoutUserInput = {
    id?: number
    queryId: number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogCreateOrConnectWithoutUserInput = {
    where: SearchLogWhereUniqueInput
    create: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput>
  }

  export type SearchLogCreateManyUserInputEnvelope = {
    data: SearchLogCreateManyUserInput | SearchLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SentMessageCreateWithoutUserInput = {
    sentAt?: Date | string
    groupId: string
  }

  export type SentMessageUncheckedCreateWithoutUserInput = {
    id?: number
    sentAt?: Date | string
    groupId: string
  }

  export type SentMessageCreateOrConnectWithoutUserInput = {
    where: SentMessageWhereUniqueInput
    create: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput>
  }

  export type SentMessageCreateManyUserInputEnvelope = {
    data: SentMessageCreateManyUserInput | SentMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyBroadcastCreateWithoutUserInput = {
    groupName: string
    sentAt?: Date | string
  }

  export type WeeklyBroadcastUncheckedCreateWithoutUserInput = {
    id?: number
    groupName: string
    sentAt?: Date | string
  }

  export type WeeklyBroadcastCreateOrConnectWithoutUserInput = {
    where: WeeklyBroadcastWhereUniqueInput
    create: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput>
  }

  export type WeeklyBroadcastCreateManyUserInputEnvelope = {
    data: WeeklyBroadcastCreateManyUserInput | WeeklyBroadcastCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UnsuccessfulSearchCreateWithoutUserInput = {
    searchedAt?: Date | string
    query: QueryCreateNestedOneWithoutUnsuccessfulSearchesInput
  }

  export type UnsuccessfulSearchUncheckedCreateWithoutUserInput = {
    id?: number
    queryId: number
    searchedAt?: Date | string
  }

  export type UnsuccessfulSearchCreateOrConnectWithoutUserInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    create: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput>
  }

  export type UnsuccessfulSearchCreateManyUserInputEnvelope = {
    data: UnsuccessfulSearchCreateManyUserInput | UnsuccessfulSearchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchLogUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchLogWhereUniqueInput
    update: XOR<SearchLogUpdateWithoutUserInput, SearchLogUncheckedUpdateWithoutUserInput>
    create: XOR<SearchLogCreateWithoutUserInput, SearchLogUncheckedCreateWithoutUserInput>
  }

  export type SearchLogUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchLogWhereUniqueInput
    data: XOR<SearchLogUpdateWithoutUserInput, SearchLogUncheckedUpdateWithoutUserInput>
  }

  export type SearchLogUpdateManyWithWhereWithoutUserInput = {
    where: SearchLogScalarWhereInput
    data: XOR<SearchLogUpdateManyMutationInput, SearchLogUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchLogScalarWhereInput = {
    AND?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
    OR?: SearchLogScalarWhereInput[]
    NOT?: SearchLogScalarWhereInput | SearchLogScalarWhereInput[]
    id?: IntFilter<"SearchLog"> | number
    queryId?: IntFilter<"SearchLog"> | number
    userId?: BigIntFilter<"SearchLog"> | bigint | number
    searchedAt?: DateTimeFilter<"SearchLog"> | Date | string
    groupedResults?: JsonNullableFilter<"SearchLog">
  }

  export type SentMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: SentMessageWhereUniqueInput
    update: XOR<SentMessageUpdateWithoutUserInput, SentMessageUncheckedUpdateWithoutUserInput>
    create: XOR<SentMessageCreateWithoutUserInput, SentMessageUncheckedCreateWithoutUserInput>
  }

  export type SentMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: SentMessageWhereUniqueInput
    data: XOR<SentMessageUpdateWithoutUserInput, SentMessageUncheckedUpdateWithoutUserInput>
  }

  export type SentMessageUpdateManyWithWhereWithoutUserInput = {
    where: SentMessageScalarWhereInput
    data: XOR<SentMessageUpdateManyMutationInput, SentMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type SentMessageScalarWhereInput = {
    AND?: SentMessageScalarWhereInput | SentMessageScalarWhereInput[]
    OR?: SentMessageScalarWhereInput[]
    NOT?: SentMessageScalarWhereInput | SentMessageScalarWhereInput[]
    id?: IntFilter<"SentMessage"> | number
    userId?: BigIntFilter<"SentMessage"> | bigint | number
    sentAt?: DateTimeFilter<"SentMessage"> | Date | string
    groupId?: StringFilter<"SentMessage"> | string
  }

  export type WeeklyBroadcastUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyBroadcastWhereUniqueInput
    update: XOR<WeeklyBroadcastUpdateWithoutUserInput, WeeklyBroadcastUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyBroadcastCreateWithoutUserInput, WeeklyBroadcastUncheckedCreateWithoutUserInput>
  }

  export type WeeklyBroadcastUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyBroadcastWhereUniqueInput
    data: XOR<WeeklyBroadcastUpdateWithoutUserInput, WeeklyBroadcastUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyBroadcastUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyBroadcastScalarWhereInput
    data: XOR<WeeklyBroadcastUpdateManyMutationInput, WeeklyBroadcastUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyBroadcastScalarWhereInput = {
    AND?: WeeklyBroadcastScalarWhereInput | WeeklyBroadcastScalarWhereInput[]
    OR?: WeeklyBroadcastScalarWhereInput[]
    NOT?: WeeklyBroadcastScalarWhereInput | WeeklyBroadcastScalarWhereInput[]
    id?: IntFilter<"WeeklyBroadcast"> | number
    userId?: BigIntFilter<"WeeklyBroadcast"> | bigint | number
    groupName?: StringFilter<"WeeklyBroadcast"> | string
    sentAt?: DateTimeFilter<"WeeklyBroadcast"> | Date | string
  }

  export type UnsuccessfulSearchUpsertWithWhereUniqueWithoutUserInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    update: XOR<UnsuccessfulSearchUpdateWithoutUserInput, UnsuccessfulSearchUncheckedUpdateWithoutUserInput>
    create: XOR<UnsuccessfulSearchCreateWithoutUserInput, UnsuccessfulSearchUncheckedCreateWithoutUserInput>
  }

  export type UnsuccessfulSearchUpdateWithWhereUniqueWithoutUserInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    data: XOR<UnsuccessfulSearchUpdateWithoutUserInput, UnsuccessfulSearchUncheckedUpdateWithoutUserInput>
  }

  export type UnsuccessfulSearchUpdateManyWithWhereWithoutUserInput = {
    where: UnsuccessfulSearchScalarWhereInput
    data: XOR<UnsuccessfulSearchUpdateManyMutationInput, UnsuccessfulSearchUncheckedUpdateManyWithoutUserInput>
  }

  export type UnsuccessfulSearchScalarWhereInput = {
    AND?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
    OR?: UnsuccessfulSearchScalarWhereInput[]
    NOT?: UnsuccessfulSearchScalarWhereInput | UnsuccessfulSearchScalarWhereInput[]
    id?: IntFilter<"UnsuccessfulSearch"> | number
    queryId?: IntFilter<"UnsuccessfulSearch"> | number
    userId?: BigIntFilter<"UnsuccessfulSearch"> | bigint | number
    searchedAt?: DateTimeFilter<"UnsuccessfulSearch"> | Date | string
  }

  export type BookCreateWithoutQueryInput = {
    title: string
    link: string
    available?: boolean
    store: StoreCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutQueryInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    storeId: number
    formatId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutQueryInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput>
  }

  export type BookCreateManyQueryInputEnvelope = {
    data: BookCreateManyQueryInput | BookCreateManyQueryInput[]
    skipDuplicates?: boolean
  }

  export type SearchLogCreateWithoutQueryInput = {
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutSearchLogsInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogUncheckedCreateWithoutQueryInput = {
    id?: number
    userId: bigint | number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutSearchLogInput
  }

  export type SearchLogCreateOrConnectWithoutQueryInput = {
    where: SearchLogWhereUniqueInput
    create: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput>
  }

  export type SearchLogCreateManyQueryInputEnvelope = {
    data: SearchLogCreateManyQueryInput | SearchLogCreateManyQueryInput[]
    skipDuplicates?: boolean
  }

  export type UnsuccessfulSearchCreateWithoutQueryInput = {
    searchedAt?: Date | string
    user: UserCreateNestedOneWithoutUnsuccessfulSearchesInput
  }

  export type UnsuccessfulSearchUncheckedCreateWithoutQueryInput = {
    id?: number
    userId: bigint | number
    searchedAt?: Date | string
  }

  export type UnsuccessfulSearchCreateOrConnectWithoutQueryInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    create: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput>
  }

  export type UnsuccessfulSearchCreateManyQueryInputEnvelope = {
    data: UnsuccessfulSearchCreateManyQueryInput | UnsuccessfulSearchCreateManyQueryInput[]
    skipDuplicates?: boolean
  }

  export type CacheLogCreateWithoutQueryInput = {
    createdAt?: Date | string
    book?: BookCreateNestedOneWithoutCacheLogsInput
  }

  export type CacheLogUncheckedCreateWithoutQueryInput = {
    id?: number
    bookId?: number | null
    createdAt?: Date | string
  }

  export type CacheLogCreateOrConnectWithoutQueryInput = {
    where: CacheLogWhereUniqueInput
    create: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput>
  }

  export type CacheLogCreateManyQueryInputEnvelope = {
    data: CacheLogCreateManyQueryInput | CacheLogCreateManyQueryInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutQueryInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutQueryInput, BookUncheckedUpdateWithoutQueryInput>
    create: XOR<BookCreateWithoutQueryInput, BookUncheckedCreateWithoutQueryInput>
  }

  export type BookUpdateWithWhereUniqueWithoutQueryInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutQueryInput, BookUncheckedUpdateWithoutQueryInput>
  }

  export type BookUpdateManyWithWhereWithoutQueryInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutQueryInput>
  }

  export type SearchLogUpsertWithWhereUniqueWithoutQueryInput = {
    where: SearchLogWhereUniqueInput
    update: XOR<SearchLogUpdateWithoutQueryInput, SearchLogUncheckedUpdateWithoutQueryInput>
    create: XOR<SearchLogCreateWithoutQueryInput, SearchLogUncheckedCreateWithoutQueryInput>
  }

  export type SearchLogUpdateWithWhereUniqueWithoutQueryInput = {
    where: SearchLogWhereUniqueInput
    data: XOR<SearchLogUpdateWithoutQueryInput, SearchLogUncheckedUpdateWithoutQueryInput>
  }

  export type SearchLogUpdateManyWithWhereWithoutQueryInput = {
    where: SearchLogScalarWhereInput
    data: XOR<SearchLogUpdateManyMutationInput, SearchLogUncheckedUpdateManyWithoutQueryInput>
  }

  export type UnsuccessfulSearchUpsertWithWhereUniqueWithoutQueryInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    update: XOR<UnsuccessfulSearchUpdateWithoutQueryInput, UnsuccessfulSearchUncheckedUpdateWithoutQueryInput>
    create: XOR<UnsuccessfulSearchCreateWithoutQueryInput, UnsuccessfulSearchUncheckedCreateWithoutQueryInput>
  }

  export type UnsuccessfulSearchUpdateWithWhereUniqueWithoutQueryInput = {
    where: UnsuccessfulSearchWhereUniqueInput
    data: XOR<UnsuccessfulSearchUpdateWithoutQueryInput, UnsuccessfulSearchUncheckedUpdateWithoutQueryInput>
  }

  export type UnsuccessfulSearchUpdateManyWithWhereWithoutQueryInput = {
    where: UnsuccessfulSearchScalarWhereInput
    data: XOR<UnsuccessfulSearchUpdateManyMutationInput, UnsuccessfulSearchUncheckedUpdateManyWithoutQueryInput>
  }

  export type CacheLogUpsertWithWhereUniqueWithoutQueryInput = {
    where: CacheLogWhereUniqueInput
    update: XOR<CacheLogUpdateWithoutQueryInput, CacheLogUncheckedUpdateWithoutQueryInput>
    create: XOR<CacheLogCreateWithoutQueryInput, CacheLogUncheckedCreateWithoutQueryInput>
  }

  export type CacheLogUpdateWithWhereUniqueWithoutQueryInput = {
    where: CacheLogWhereUniqueInput
    data: XOR<CacheLogUpdateWithoutQueryInput, CacheLogUncheckedUpdateWithoutQueryInput>
  }

  export type CacheLogUpdateManyWithWhereWithoutQueryInput = {
    where: CacheLogScalarWhereInput
    data: XOR<CacheLogUpdateManyMutationInput, CacheLogUncheckedUpdateManyWithoutQueryInput>
  }

  export type UserCreateWithoutWeeklyBroadcastsInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklyBroadcastsInput = {
    id?: bigint | number
    telegramId: bigint | number
    username?: string | null
    firstSeen?: Date | string
    lastActive?: Date | string
    sessionCount?: number
    lastWeeklyTop?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: SentMessageUncheckedCreateNestedManyWithoutUserInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklyBroadcastsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyBroadcastsInput, UserUncheckedCreateWithoutWeeklyBroadcastsInput>
  }

  export type UserUpsertWithoutWeeklyBroadcastsInput = {
    update: XOR<UserUpdateWithoutWeeklyBroadcastsInput, UserUncheckedUpdateWithoutWeeklyBroadcastsInput>
    create: XOR<UserCreateWithoutWeeklyBroadcastsInput, UserUncheckedCreateWithoutWeeklyBroadcastsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyBroadcastsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyBroadcastsInput, UserUncheckedUpdateWithoutWeeklyBroadcastsInput>
  }

  export type UserUpdateWithoutWeeklyBroadcastsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyBroadcastsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionCount?: IntFieldUpdateOperationsInput | number
    lastWeeklyTop?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: SentMessageUncheckedUpdateManyWithoutUserNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutPricesInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    store: StoreCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPricesInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    formatId: number
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPricesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPricesInput, BookUncheckedCreateWithoutPricesInput>
  }

  export type BookUpsertWithoutPricesInput = {
    update: XOR<BookUpdateWithoutPricesInput, BookUncheckedUpdateWithoutPricesInput>
    create: XOR<BookCreateWithoutPricesInput, BookUncheckedCreateWithoutPricesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutPricesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutPricesInput, BookUncheckedUpdateWithoutPricesInput>
  }

  export type BookUpdateWithoutPricesInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutCacheLogsInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    store: StoreCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCacheLogsInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    formatId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    viewedBooks?: ViewedBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCacheLogsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCacheLogsInput, BookUncheckedCreateWithoutCacheLogsInput>
  }

  export type QueryCreateWithoutCacheLogsInput = {
    query: string
    firstSeen?: Date | string
    books?: BookCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchCreateNestedManyWithoutQueryInput
  }

  export type QueryUncheckedCreateWithoutCacheLogsInput = {
    id?: number
    query: string
    firstSeen?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutQueryInput
    searchLogs?: SearchLogUncheckedCreateNestedManyWithoutQueryInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedCreateNestedManyWithoutQueryInput
  }

  export type QueryCreateOrConnectWithoutCacheLogsInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutCacheLogsInput, QueryUncheckedCreateWithoutCacheLogsInput>
  }

  export type BookUpsertWithoutCacheLogsInput = {
    update: XOR<BookUpdateWithoutCacheLogsInput, BookUncheckedUpdateWithoutCacheLogsInput>
    create: XOR<BookCreateWithoutCacheLogsInput, BookUncheckedCreateWithoutCacheLogsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCacheLogsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCacheLogsInput, BookUncheckedUpdateWithoutCacheLogsInput>
  }

  export type BookUpdateWithoutCacheLogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCacheLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type QueryUpsertWithoutCacheLogsInput = {
    update: XOR<QueryUpdateWithoutCacheLogsInput, QueryUncheckedUpdateWithoutCacheLogsInput>
    create: XOR<QueryCreateWithoutCacheLogsInput, QueryUncheckedCreateWithoutCacheLogsInput>
    where?: QueryWhereInput
  }

  export type QueryUpdateToOneWithWhereWithoutCacheLogsInput = {
    where?: QueryWhereInput
    data: XOR<QueryUpdateWithoutCacheLogsInput, QueryUncheckedUpdateWithoutCacheLogsInput>
  }

  export type QueryUpdateWithoutCacheLogsInput = {
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUpdateManyWithoutQueryNestedInput
  }

  export type QueryUncheckedUpdateWithoutCacheLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    query?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutQueryNestedInput
    searchLogs?: SearchLogUncheckedUpdateManyWithoutQueryNestedInput
    unsuccessfulSearches?: UnsuccessfulSearchUncheckedUpdateManyWithoutQueryNestedInput
  }

  export type SearchLogCreateWithoutViewedBooksInput = {
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query: QueryCreateNestedOneWithoutSearchLogsInput
    user: UserCreateNestedOneWithoutSearchLogsInput
  }

  export type SearchLogUncheckedCreateWithoutViewedBooksInput = {
    id?: number
    queryId: number
    userId: bigint | number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SearchLogCreateOrConnectWithoutViewedBooksInput = {
    where: SearchLogWhereUniqueInput
    create: XOR<SearchLogCreateWithoutViewedBooksInput, SearchLogUncheckedCreateWithoutViewedBooksInput>
  }

  export type BookCreateWithoutViewedBooksInput = {
    title: string
    link: string
    available?: boolean
    query?: QueryCreateNestedOneWithoutBooksInput
    store: StoreCreateNestedOneWithoutBooksInput
    format: FormatCreateNestedOneWithoutBooksInput
    prices?: BookPriceCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutViewedBooksInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
    formatId: number
    prices?: BookPriceUncheckedCreateNestedManyWithoutBookInput
    cacheLogs?: CacheLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutViewedBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutViewedBooksInput, BookUncheckedCreateWithoutViewedBooksInput>
  }

  export type SearchLogUpsertWithoutViewedBooksInput = {
    update: XOR<SearchLogUpdateWithoutViewedBooksInput, SearchLogUncheckedUpdateWithoutViewedBooksInput>
    create: XOR<SearchLogCreateWithoutViewedBooksInput, SearchLogUncheckedCreateWithoutViewedBooksInput>
    where?: SearchLogWhereInput
  }

  export type SearchLogUpdateToOneWithWhereWithoutViewedBooksInput = {
    where?: SearchLogWhereInput
    data: XOR<SearchLogUpdateWithoutViewedBooksInput, SearchLogUncheckedUpdateWithoutViewedBooksInput>
  }

  export type SearchLogUpdateWithoutViewedBooksInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query?: QueryUpdateOneRequiredWithoutSearchLogsNestedInput
    user?: UserUpdateOneRequiredWithoutSearchLogsNestedInput
  }

  export type SearchLogUncheckedUpdateWithoutViewedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookUpsertWithoutViewedBooksInput = {
    update: XOR<BookUpdateWithoutViewedBooksInput, BookUncheckedUpdateWithoutViewedBooksInput>
    create: XOR<BookCreateWithoutViewedBooksInput, BookUncheckedCreateWithoutViewedBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutViewedBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutViewedBooksInput, BookUncheckedUpdateWithoutViewedBooksInput>
  }

  export type BookUpdateWithoutViewedBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutViewedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookPriceCreateManyBookInput = {
    id?: number
    price: number
    recordedAt?: Date | string
  }

  export type CacheLogCreateManyBookInput = {
    id?: number
    queryId: number
    createdAt?: Date | string
  }

  export type ViewedBookCreateManyBookInput = {
    id?: number
    searchLogId: number
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type BookPriceUpdateWithoutBookInput = {
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPriceUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPriceUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: QueryUpdateOneWithoutCacheLogsNestedInput
  }

  export type CacheLogUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewedBookUpdateWithoutBookInput = {
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
    searchLog?: SearchLogUpdateOneRequiredWithoutViewedBooksNestedInput
  }

  export type ViewedBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchLogId?: IntFieldUpdateOperationsInput | number
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type ViewedBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchLogId?: IntFieldUpdateOperationsInput | number
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type BookCreateManyFormatInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    storeId: number
  }

  export type BookUpdateWithoutFormatInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutFormatInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutFormatInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateManyStoreInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    queryId?: number | null
    formatId: number
  }

  export type BookUpdateWithoutStoreInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    query?: QueryUpdateOneWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    formatId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    queryId?: NullableIntFieldUpdateOperationsInput | number | null
    formatId?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackCreateManyCategoryInput = {
    id?: number
    userId: bigint | number
    type?: $Enums.FeedbackType
    message?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateWithoutCategoryInput = {
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewedBookCreateManySearchLogInput = {
    id?: number
    bookId?: number | null
    bookLink: string
    viewedAt?: Date | string
    similarity: number
  }

  export type ViewedBookUpdateWithoutSearchLogInput = {
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
    book?: BookUpdateOneWithoutViewedBooksNestedInput
  }

  export type ViewedBookUncheckedUpdateWithoutSearchLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type ViewedBookUncheckedUpdateManyWithoutSearchLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    bookLink?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    similarity?: FloatFieldUpdateOperationsInput | number
  }

  export type FeedbackCreateManyUserInput = {
    id?: number
    type?: $Enums.FeedbackType
    message?: string | null
    categoryId?: number | null
    createdAt?: Date | string
  }

  export type SearchLogCreateManyUserInput = {
    id?: number
    queryId: number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SentMessageCreateManyUserInput = {
    id?: number
    sentAt?: Date | string
    groupId: string
  }

  export type WeeklyBroadcastCreateManyUserInput = {
    id?: number
    groupName: string
    sentAt?: Date | string
  }

  export type UnsuccessfulSearchCreateManyUserInput = {
    id?: number
    queryId: number
    searchedAt?: Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: FeedbackCategoryUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchLogUpdateWithoutUserInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    query?: QueryUpdateOneRequiredWithoutSearchLogsNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SentMessageUpdateWithoutUserInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type SentMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type SentMessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyBroadcastUpdateWithoutUserInput = {
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBroadcastUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBroadcastUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupName?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchUpdateWithoutUserInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: QueryUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput
  }

  export type UnsuccessfulSearchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    queryId?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateManyQueryInput = {
    id?: number
    title: string
    link: string
    available?: boolean
    storeId: number
    formatId: number
  }

  export type SearchLogCreateManyQueryInput = {
    id?: number
    userId: bigint | number
    searchedAt?: Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UnsuccessfulSearchCreateManyQueryInput = {
    id?: number
    userId: bigint | number
    searchedAt?: Date | string
  }

  export type CacheLogCreateManyQueryInput = {
    id?: number
    bookId?: number | null
    createdAt?: Date | string
  }

  export type BookUpdateWithoutQueryInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    store?: StoreUpdateOneRequiredWithoutBooksNestedInput
    format?: FormatUpdateOneRequiredWithoutBooksNestedInput
    prices?: BookPriceUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
    prices?: BookPriceUncheckedUpdateManyWithoutBookNestedInput
    cacheLogs?: CacheLogUncheckedUpdateManyWithoutBookNestedInput
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    storeId?: IntFieldUpdateOperationsInput | number
    formatId?: IntFieldUpdateOperationsInput | number
  }

  export type SearchLogUpdateWithoutQueryInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutSearchLogsNestedInput
    viewedBooks?: ViewedBookUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogUncheckedUpdateWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
    viewedBooks?: ViewedBookUncheckedUpdateManyWithoutSearchLogNestedInput
  }

  export type SearchLogUncheckedUpdateManyWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedResults?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UnsuccessfulSearchUpdateWithoutQueryInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUnsuccessfulSearchesNestedInput
  }

  export type UnsuccessfulSearchUncheckedUpdateWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnsuccessfulSearchUncheckedUpdateManyWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogUpdateWithoutQueryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneWithoutCacheLogsNestedInput
  }

  export type CacheLogUncheckedUpdateWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CacheLogUncheckedUpdateManyWithoutQueryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}