
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model EmailVerification
 * 
 */
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>
/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Santri
 * 
 */
export type Santri = $Result.DefaultSelection<Prisma.$SantriPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model auth_account
 * 
 */
export type auth_account = $Result.DefaultSelection<Prisma.$auth_accountPayload>
/**
 * Model password_reset
 * 
 */
export type password_reset = $Result.DefaultSelection<Prisma.$password_resetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoryType: {
  PEMASUKAN: 'PEMASUKAN',
  PENGELUARAN: 'PENGELUARAN'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const UserRole: {
  ADMIN: 'ADMIN',
  WALI_SANTRI: 'WALI_SANTRI'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerification`: Exposes CRUD operations for the **EmailVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerifications
    * const emailVerifications = await prisma.emailVerification.findMany()
    * ```
    */
  get emailVerification(): Prisma.EmailVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.santri`: Exposes CRUD operations for the **Santri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Santris
    * const santris = await prisma.santri.findMany()
    * ```
    */
  get santri(): Prisma.SantriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.auth_account`: Exposes CRUD operations for the **auth_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_accounts
    * const auth_accounts = await prisma.auth_account.findMany()
    * ```
    */
  get auth_account(): Prisma.auth_accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset`: Exposes CRUD operations for the **password_reset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_resets
    * const password_resets = await prisma.password_reset.findMany()
    * ```
    */
  get password_reset(): Prisma.password_resetDelegate<ExtArgs, ClientOptions>;
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
    Category: 'Category',
    EmailVerification: 'EmailVerification',
    Institution: 'Institution',
    Notification: 'Notification',
    Profile: 'Profile',
    Santri: 'Santri',
    Transaction: 'Transaction',
    User: 'User',
    auth_account: 'auth_account',
    password_reset: 'password_reset'
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
      modelProps: "category" | "emailVerification" | "institution" | "notification" | "profile" | "santri" | "transaction" | "user" | "auth_account" | "password_reset"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>
        fields: Prisma.EmailVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerification>
          }
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCountAggregateOutputType> | number
          }
        }
      }
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Santri: {
        payload: Prisma.$SantriPayload<ExtArgs>
        fields: Prisma.SantriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SantriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SantriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          findFirst: {
            args: Prisma.SantriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SantriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          findMany: {
            args: Prisma.SantriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          create: {
            args: Prisma.SantriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          createMany: {
            args: Prisma.SantriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SantriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          delete: {
            args: Prisma.SantriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          update: {
            args: Prisma.SantriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          deleteMany: {
            args: Prisma.SantriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SantriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SantriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>[]
          }
          upsert: {
            args: Prisma.SantriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriPayload>
          }
          aggregate: {
            args: Prisma.SantriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSantri>
          }
          groupBy: {
            args: Prisma.SantriGroupByArgs<ExtArgs>
            result: $Utils.Optional<SantriGroupByOutputType>[]
          }
          count: {
            args: Prisma.SantriCountArgs<ExtArgs>
            result: $Utils.Optional<SantriCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
      auth_account: {
        payload: Prisma.$auth_accountPayload<ExtArgs>
        fields: Prisma.auth_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          findFirst: {
            args: Prisma.auth_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          findMany: {
            args: Prisma.auth_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>[]
          }
          create: {
            args: Prisma.auth_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          createMany: {
            args: Prisma.auth_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>[]
          }
          delete: {
            args: Prisma.auth_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          update: {
            args: Prisma.auth_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          deleteMany: {
            args: Prisma.auth_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>[]
          }
          upsert: {
            args: Prisma.auth_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_accountPayload>
          }
          aggregate: {
            args: Prisma.Auth_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_account>
          }
          groupBy: {
            args: Prisma.auth_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_accountCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_accountCountAggregateOutputType> | number
          }
        }
      }
      password_reset: {
        payload: Prisma.$password_resetPayload<ExtArgs>
        fields: Prisma.password_resetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_resetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_resetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          findFirst: {
            args: Prisma.password_resetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_resetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          findMany: {
            args: Prisma.password_resetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>[]
          }
          create: {
            args: Prisma.password_resetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          createMany: {
            args: Prisma.password_resetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.password_resetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>[]
          }
          delete: {
            args: Prisma.password_resetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          update: {
            args: Prisma.password_resetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          deleteMany: {
            args: Prisma.password_resetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_resetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.password_resetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>[]
          }
          upsert: {
            args: Prisma.password_resetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_resetPayload>
          }
          aggregate: {
            args: Prisma.Password_resetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset>
          }
          groupBy: {
            args: Prisma.password_resetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_resetGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_resetCountArgs<ExtArgs>
            result: $Utils.Optional<Password_resetCountAggregateOutputType> | number
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
    category?: CategoryOmit
    emailVerification?: EmailVerificationOmit
    institution?: InstitutionOmit
    notification?: NotificationOmit
    profile?: ProfileOmit
    santri?: SantriOmit
    transaction?: TransactionOmit
    user?: UserOmit
    auth_account?: auth_accountOmit
    password_reset?: password_resetOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Transaction: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | CategoryCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    Category: number
    Santri: number
    User_User_institutionIdToInstitution: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | InstitutionCountOutputTypeCountCategoryArgs
    Santri?: boolean | InstitutionCountOutputTypeCountSantriArgs
    User_User_institutionIdToInstitution?: boolean | InstitutionCountOutputTypeCountUser_User_institutionIdToInstitutionArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUser_User_institutionIdToInstitutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SantriCountOutputType
   */

  export type SantriCountOutputType = {
    Transaction: number
    auth_account: number
  }

  export type SantriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | SantriCountOutputTypeCountTransactionArgs
    auth_account?: boolean | SantriCountOutputTypeCountAuth_accountArgs
  }

  // Custom InputTypes
  /**
   * SantriCountOutputType without action
   */
  export type SantriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriCountOutputType
     */
    select?: SantriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SantriCountOutputType without action
   */
  export type SantriCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * SantriCountOutputType without action
   */
  export type SantriCountOutputTypeCountAuth_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    EmailVerification: number
    Institution_Institution_createdByToUser: number
    Notification: number
    Santri: number
    Transaction: number
    auth_account: number
    password_reset: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmailVerification?: boolean | UserCountOutputTypeCountEmailVerificationArgs
    Institution_Institution_createdByToUser?: boolean | UserCountOutputTypeCountInstitution_Institution_createdByToUserArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    Santri?: boolean | UserCountOutputTypeCountSantriArgs
    Transaction?: boolean | UserCountOutputTypeCountTransactionArgs
    auth_account?: boolean | UserCountOutputTypeCountAuth_accountArgs
    password_reset?: boolean | UserCountOutputTypeCountPassword_resetArgs
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
  export type UserCountOutputTypeCountEmailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstitution_Institution_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuth_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPassword_resetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_resetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    institutionId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    institutionId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.CategoryType | null
    institutionId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.CategoryType | null
    institutionId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    institutionId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    institutionId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    institutionId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    institutionId?: true
    isActive?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    institutionId?: true
    isActive?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    institutionId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    type: $Enums.CategoryType
    institutionId: number
    isActive: boolean
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    Transaction?: boolean | Category$TransactionArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "institutionId" | "isActive" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    Transaction?: boolean | Category$TransactionArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Institution: Prisma.$InstitutionPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.CategoryType
      institutionId: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Category$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Category$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly institutionId: FieldRef<"Category", 'Int'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Transaction
   */
  export type Category$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerification
   */

  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null
    _avg: EmailVerificationAvgAggregateOutputType | null
    _sum: EmailVerificationSumAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  export type EmailVerificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type EmailVerificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type EmailVerificationCountAggregateOutputType = {
    id: number
    userId: number
    otpCode: number
    expiredAt: number
    isUsed: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationMinAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type EmailVerificationCountAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerification to aggregate.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerifications
    **/
    _count?: true | EmailVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type GetEmailVerificationAggregateType<T extends EmailVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>
  }




  export type EmailVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithAggregationInput | EmailVerificationOrderByWithAggregationInput[]
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum
    having?: EmailVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCountAggregateInputType | true
    _avg?: EmailVerificationAvgAggregateInputType
    _sum?: EmailVerificationSumAggregateInputType
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type EmailVerificationGroupByOutputType = {
    id: number
    userId: number
    otpCode: string
    expiredAt: Date
    isUsed: boolean
    createdAt: Date
    _count: EmailVerificationCountAggregateOutputType | null
    _avg: EmailVerificationAvgAggregateOutputType | null
    _sum: EmailVerificationSumAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  type GetEmailVerificationGroupByPayload<T extends EmailVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectScalar = {
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otpCode" | "expiredAt" | "isUsed" | "createdAt", ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otpCode: string
      expiredAt: Date
      isUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["emailVerification"]>
    composites: {}
  }

  type EmailVerificationGetPayload<S extends boolean | null | undefined | EmailVerificationDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationPayload, S>

  type EmailVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCountAggregateInputType | true
    }

  export interface EmailVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerification'], meta: { name: 'EmailVerification' } }
    /**
     * Find zero or one EmailVerification that matches the filter.
     * @param {EmailVerificationFindUniqueArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationFindUniqueArgs>(args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationFindUniqueOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationFindFirstArgs>(args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany()
     * 
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationFindManyArgs>(args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerification.
     * @param {EmailVerificationCreateArgs} args - Arguments to create a EmailVerification.
     * @example
     * // Create one EmailVerification
     * const EmailVerification = await prisma.emailVerification.create({
     *   data: {
     *     // ... data to create a EmailVerification
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationCreateArgs>(args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerification.
     * @param {EmailVerificationDeleteArgs} args - Arguments to delete one EmailVerification.
     * @example
     * // Delete one EmailVerification
     * const EmailVerification = await prisma.emailVerification.delete({
     *   where: {
     *     // ... filter to delete one EmailVerification
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationDeleteArgs>(args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerification.
     * @param {EmailVerificationUpdateArgs} args - Arguments to update one EmailVerification.
     * @example
     * // Update one EmailVerification
     * const emailVerification = await prisma.emailVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationUpdateArgs>(args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationUpdateManyArgs>(args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications and returns the data updated in the database.
     * @param {EmailVerificationUpdateManyAndReturnArgs} args - Arguments to update many EmailVerifications.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerification.
     * @param {EmailVerificationUpsertArgs} args - Arguments to update or create a EmailVerification.
     * @example
     * // Update or create a EmailVerification
     * const emailVerification = await prisma.emailVerification.upsert({
     *   create: {
     *     // ... data to create a EmailVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerification we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationUpsertArgs>(args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerification.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationAggregateArgs>(args: Subset<T, EmailVerificationAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>

    /**
     * Group by EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerification model
   */
  readonly fields: EmailVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailVerification model
   */
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", 'Int'>
    readonly userId: FieldRef<"EmailVerification", 'Int'>
    readonly otpCode: FieldRef<"EmailVerification", 'String'>
    readonly expiredAt: FieldRef<"EmailVerification", 'DateTime'>
    readonly isUsed: FieldRef<"EmailVerification", 'Boolean'>
    readonly createdAt: FieldRef<"EmailVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerification findUnique
   */
  export type EmailVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findUniqueOrThrow
   */
  export type EmailVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findFirst
   */
  export type EmailVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findFirstOrThrow
   */
  export type EmailVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findMany
   */
  export type EmailVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification create
   */
  export type EmailVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerification.
     */
    data: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
  }

  /**
   * EmailVerification createMany
   */
  export type EmailVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification createManyAndReturn
   */
  export type EmailVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerification update
   */
  export type EmailVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerification.
     */
    data: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
    /**
     * Choose, which EmailVerification to update.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification updateMany
   */
  export type EmailVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification updateManyAndReturn
   */
  export type EmailVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerification upsert
   */
  export type EmailVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerification to update in case it exists.
     */
    where: EmailVerificationWhereUniqueInput
    /**
     * In case the EmailVerification found by the `where` argument doesn't exist, create a new EmailVerification with this data.
     */
    create: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
    /**
     * In case the EmailVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
  }

  /**
   * EmailVerification delete
   */
  export type EmailVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter which EmailVerification to delete.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification deleteMany
   */
  export type EmailVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to delete.
     */
    limit?: number
  }

  /**
   * EmailVerification without action
   */
  export type EmailVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
  }


  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type InstitutionSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type InstitutionAvgAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type InstitutionSumAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type InstitutionMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstitutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstitutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _avg?: InstitutionAvgAggregateInputType
    _sum?: InstitutionSumAggregateInputType
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: number
    name: string
    createdBy: number
    isActive: boolean
    createdAt: Date
    _count: InstitutionCountAggregateOutputType | null
    _avg: InstitutionAvgAggregateOutputType | null
    _sum: InstitutionSumAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    Category?: boolean | Institution$CategoryArgs<ExtArgs>
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | Institution$SantriArgs<ExtArgs>
    User_User_institutionIdToInstitution?: boolean | Institution$User_User_institutionIdToInstitutionArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "isActive" | "createdAt", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Institution$CategoryArgs<ExtArgs>
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | Institution$SantriArgs<ExtArgs>
    User_User_institutionIdToInstitution?: boolean | Institution$User_User_institutionIdToInstitutionArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Institution_createdByToUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>[]
      User_Institution_createdByToUser: Prisma.$UserPayload<ExtArgs>
      Santri: Prisma.$SantriPayload<ExtArgs>[]
      User_User_institutionIdToInstitution: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdBy: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
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
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends Institution$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Institution$CategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User_Institution_createdByToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Santri<T extends Institution$SantriArgs<ExtArgs> = {}>(args?: Subset<T, Institution$SantriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User_User_institutionIdToInstitution<T extends Institution$User_User_institutionIdToInstitutionArgs<ExtArgs> = {}>(args?: Subset<T, Institution$User_User_institutionIdToInstitutionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'Int'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly createdBy: FieldRef<"Institution", 'Int'>
    readonly isActive: FieldRef<"Institution", 'Boolean'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.Category
   */
  export type Institution$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Institution.Santri
   */
  export type Institution$SantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    where?: SantriWhereInput
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    cursor?: SantriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Institution.User_User_institutionIdToInstitution
   */
  export type Institution$User_User_institutionIdToInstitutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    address: string | null
    profile_picture_url: string | null
    public_id: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    address: string | null
    profile_picture_url: string | null
    public_id: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    address: number
    profile_picture_url: number
    public_id: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    address?: true
    profile_picture_url?: true
    public_id?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    address?: true
    profile_picture_url?: true
    public_id?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    address?: true
    profile_picture_url?: true
    public_id?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    name: string
    gender: string
    address: string
    profile_picture_url: string | null
    public_id: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "address" | "profile_picture_url" | "public_id" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: string
      address: string
      profile_picture_url: string | null
      public_id: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly gender: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly profile_picture_url: FieldRef<"Profile", 'String'>
    readonly public_id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Santri
   */

  export type AggregateSantri = {
    _count: SantriCountAggregateOutputType | null
    _avg: SantriAvgAggregateOutputType | null
    _sum: SantriSumAggregateOutputType | null
    _min: SantriMinAggregateOutputType | null
    _max: SantriMaxAggregateOutputType | null
  }

  export type SantriAvgAggregateOutputType = {
    id: number | null
    waliId: number | null
    institutionId: number | null
  }

  export type SantriSumAggregateOutputType = {
    id: number | null
    waliId: number | null
    institutionId: number | null
  }

  export type SantriMinAggregateOutputType = {
    id: number | null
    nis: string | null
    fullname: string | null
    kelas: string | null
    gender: string | null
    waliId: number | null
    institutionId: number | null
    waliName: string | null
    institutionName: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SantriMaxAggregateOutputType = {
    id: number | null
    nis: string | null
    fullname: string | null
    kelas: string | null
    gender: string | null
    waliId: number | null
    institutionId: number | null
    waliName: string | null
    institutionName: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SantriCountAggregateOutputType = {
    id: number
    nis: number
    fullname: number
    kelas: number
    gender: number
    waliId: number
    institutionId: number
    waliName: number
    institutionName: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SantriAvgAggregateInputType = {
    id?: true
    waliId?: true
    institutionId?: true
  }

  export type SantriSumAggregateInputType = {
    id?: true
    waliId?: true
    institutionId?: true
  }

  export type SantriMinAggregateInputType = {
    id?: true
    nis?: true
    fullname?: true
    kelas?: true
    gender?: true
    waliId?: true
    institutionId?: true
    waliName?: true
    institutionName?: true
    isActive?: true
    createdAt?: true
  }

  export type SantriMaxAggregateInputType = {
    id?: true
    nis?: true
    fullname?: true
    kelas?: true
    gender?: true
    waliId?: true
    institutionId?: true
    waliName?: true
    institutionName?: true
    isActive?: true
    createdAt?: true
  }

  export type SantriCountAggregateInputType = {
    id?: true
    nis?: true
    fullname?: true
    kelas?: true
    gender?: true
    waliId?: true
    institutionId?: true
    waliName?: true
    institutionName?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SantriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Santri to aggregate.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Santris
    **/
    _count?: true | SantriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SantriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SantriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SantriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SantriMaxAggregateInputType
  }

  export type GetSantriAggregateType<T extends SantriAggregateArgs> = {
        [P in keyof T & keyof AggregateSantri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSantri[P]>
      : GetScalarType<T[P], AggregateSantri[P]>
  }




  export type SantriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriWhereInput
    orderBy?: SantriOrderByWithAggregationInput | SantriOrderByWithAggregationInput[]
    by: SantriScalarFieldEnum[] | SantriScalarFieldEnum
    having?: SantriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SantriCountAggregateInputType | true
    _avg?: SantriAvgAggregateInputType
    _sum?: SantriSumAggregateInputType
    _min?: SantriMinAggregateInputType
    _max?: SantriMaxAggregateInputType
  }

  export type SantriGroupByOutputType = {
    id: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    institutionId: number
    waliName: string | null
    institutionName: string | null
    isActive: boolean
    createdAt: Date
    _count: SantriCountAggregateOutputType | null
    _avg: SantriAvgAggregateOutputType | null
    _sum: SantriSumAggregateOutputType | null
    _min: SantriMinAggregateOutputType | null
    _max: SantriMaxAggregateOutputType | null
  }

  type GetSantriGroupByPayload<T extends SantriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SantriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SantriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SantriGroupByOutputType[P]>
            : GetScalarType<T[P], SantriGroupByOutputType[P]>
        }
      >
    >


  export type SantriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullname?: boolean
    kelas?: boolean
    gender?: boolean
    waliId?: boolean
    institutionId?: boolean
    waliName?: boolean
    institutionName?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Transaction?: boolean | Santri$TransactionArgs<ExtArgs>
    auth_account?: boolean | Santri$auth_accountArgs<ExtArgs>
    _count?: boolean | SantriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullname?: boolean
    kelas?: boolean
    gender?: boolean
    waliId?: boolean
    institutionId?: boolean
    waliName?: boolean
    institutionName?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullname?: boolean
    kelas?: boolean
    gender?: boolean
    waliId?: boolean
    institutionId?: boolean
    waliName?: boolean
    institutionName?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type SantriSelectScalar = {
    id?: boolean
    nis?: boolean
    fullname?: boolean
    kelas?: boolean
    gender?: boolean
    waliId?: boolean
    institutionId?: boolean
    waliName?: boolean
    institutionName?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SantriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "fullname" | "kelas" | "gender" | "waliId" | "institutionId" | "waliName" | "institutionName" | "isActive" | "createdAt", ExtArgs["result"]["santri"]>
  export type SantriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Transaction?: boolean | Santri$TransactionArgs<ExtArgs>
    auth_account?: boolean | Santri$auth_accountArgs<ExtArgs>
    _count?: boolean | SantriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SantriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SantriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SantriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Santri"
    objects: {
      Institution: Prisma.$InstitutionPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      auth_account: Prisma.$auth_accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nis: string
      fullname: string
      kelas: string
      gender: string
      waliId: number
      institutionId: number
      waliName: string | null
      institutionName: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["santri"]>
    composites: {}
  }

  type SantriGetPayload<S extends boolean | null | undefined | SantriDefaultArgs> = $Result.GetResult<Prisma.$SantriPayload, S>

  type SantriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SantriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SantriCountAggregateInputType | true
    }

  export interface SantriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Santri'], meta: { name: 'Santri' } }
    /**
     * Find zero or one Santri that matches the filter.
     * @param {SantriFindUniqueArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SantriFindUniqueArgs>(args: SelectSubset<T, SantriFindUniqueArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Santri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SantriFindUniqueOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SantriFindUniqueOrThrowArgs>(args: SelectSubset<T, SantriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindFirstArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SantriFindFirstArgs>(args?: SelectSubset<T, SantriFindFirstArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindFirstOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SantriFindFirstOrThrowArgs>(args?: SelectSubset<T, SantriFindFirstOrThrowArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Santris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Santris
     * const santris = await prisma.santri.findMany()
     * 
     * // Get first 10 Santris
     * const santris = await prisma.santri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const santriWithIdOnly = await prisma.santri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SantriFindManyArgs>(args?: SelectSubset<T, SantriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Santri.
     * @param {SantriCreateArgs} args - Arguments to create a Santri.
     * @example
     * // Create one Santri
     * const Santri = await prisma.santri.create({
     *   data: {
     *     // ... data to create a Santri
     *   }
     * })
     * 
     */
    create<T extends SantriCreateArgs>(args: SelectSubset<T, SantriCreateArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Santris.
     * @param {SantriCreateManyArgs} args - Arguments to create many Santris.
     * @example
     * // Create many Santris
     * const santri = await prisma.santri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SantriCreateManyArgs>(args?: SelectSubset<T, SantriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Santris and returns the data saved in the database.
     * @param {SantriCreateManyAndReturnArgs} args - Arguments to create many Santris.
     * @example
     * // Create many Santris
     * const santri = await prisma.santri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Santris and only return the `id`
     * const santriWithIdOnly = await prisma.santri.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SantriCreateManyAndReturnArgs>(args?: SelectSubset<T, SantriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Santri.
     * @param {SantriDeleteArgs} args - Arguments to delete one Santri.
     * @example
     * // Delete one Santri
     * const Santri = await prisma.santri.delete({
     *   where: {
     *     // ... filter to delete one Santri
     *   }
     * })
     * 
     */
    delete<T extends SantriDeleteArgs>(args: SelectSubset<T, SantriDeleteArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Santri.
     * @param {SantriUpdateArgs} args - Arguments to update one Santri.
     * @example
     * // Update one Santri
     * const santri = await prisma.santri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SantriUpdateArgs>(args: SelectSubset<T, SantriUpdateArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Santris.
     * @param {SantriDeleteManyArgs} args - Arguments to filter Santris to delete.
     * @example
     * // Delete a few Santris
     * const { count } = await prisma.santri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SantriDeleteManyArgs>(args?: SelectSubset<T, SantriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Santris
     * const santri = await prisma.santri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SantriUpdateManyArgs>(args: SelectSubset<T, SantriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris and returns the data updated in the database.
     * @param {SantriUpdateManyAndReturnArgs} args - Arguments to update many Santris.
     * @example
     * // Update many Santris
     * const santri = await prisma.santri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Santris and only return the `id`
     * const santriWithIdOnly = await prisma.santri.updateManyAndReturn({
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
    updateManyAndReturn<T extends SantriUpdateManyAndReturnArgs>(args: SelectSubset<T, SantriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Santri.
     * @param {SantriUpsertArgs} args - Arguments to update or create a Santri.
     * @example
     * // Update or create a Santri
     * const santri = await prisma.santri.upsert({
     *   create: {
     *     // ... data to create a Santri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Santri we want to update
     *   }
     * })
     */
    upsert<T extends SantriUpsertArgs>(args: SelectSubset<T, SantriUpsertArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriCountArgs} args - Arguments to filter Santris to count.
     * @example
     * // Count the number of Santris
     * const count = await prisma.santri.count({
     *   where: {
     *     // ... the filter for the Santris we want to count
     *   }
     * })
    **/
    count<T extends SantriCountArgs>(
      args?: Subset<T, SantriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SantriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Santri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SantriAggregateArgs>(args: Subset<T, SantriAggregateArgs>): Prisma.PrismaPromise<GetSantriAggregateType<T>>

    /**
     * Group by Santri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriGroupByArgs} args - Group by arguments.
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
      T extends SantriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SantriGroupByArgs['orderBy'] }
        : { orderBy?: SantriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SantriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSantriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Santri model
   */
  readonly fields: SantriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Santri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SantriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Santri$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Santri$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth_account<T extends Santri$auth_accountArgs<ExtArgs> = {}>(args?: Subset<T, Santri$auth_accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Santri model
   */
  interface SantriFieldRefs {
    readonly id: FieldRef<"Santri", 'Int'>
    readonly nis: FieldRef<"Santri", 'String'>
    readonly fullname: FieldRef<"Santri", 'String'>
    readonly kelas: FieldRef<"Santri", 'String'>
    readonly gender: FieldRef<"Santri", 'String'>
    readonly waliId: FieldRef<"Santri", 'Int'>
    readonly institutionId: FieldRef<"Santri", 'Int'>
    readonly waliName: FieldRef<"Santri", 'String'>
    readonly institutionName: FieldRef<"Santri", 'String'>
    readonly isActive: FieldRef<"Santri", 'Boolean'>
    readonly createdAt: FieldRef<"Santri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Santri findUnique
   */
  export type SantriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri findUniqueOrThrow
   */
  export type SantriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri findFirst
   */
  export type SantriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri findFirstOrThrow
   */
  export type SantriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santri to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri findMany
   */
  export type SantriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter, which Santris to fetch.
     */
    where?: SantriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Santris to fetch.
     */
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Santris.
     */
    cursor?: SantriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Santris.
     */
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * Santri create
   */
  export type SantriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The data needed to create a Santri.
     */
    data: XOR<SantriCreateInput, SantriUncheckedCreateInput>
  }

  /**
   * Santri createMany
   */
  export type SantriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Santris.
     */
    data: SantriCreateManyInput | SantriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Santri createManyAndReturn
   */
  export type SantriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * The data used to create many Santris.
     */
    data: SantriCreateManyInput | SantriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Santri update
   */
  export type SantriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The data needed to update a Santri.
     */
    data: XOR<SantriUpdateInput, SantriUncheckedUpdateInput>
    /**
     * Choose, which Santri to update.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri updateMany
   */
  export type SantriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Santris.
     */
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyInput>
    /**
     * Filter which Santris to update
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to update.
     */
    limit?: number
  }

  /**
   * Santri updateManyAndReturn
   */
  export type SantriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * The data used to update Santris.
     */
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyInput>
    /**
     * Filter which Santris to update
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Santri upsert
   */
  export type SantriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * The filter to search for the Santri to update in case it exists.
     */
    where: SantriWhereUniqueInput
    /**
     * In case the Santri found by the `where` argument doesn't exist, create a new Santri with this data.
     */
    create: XOR<SantriCreateInput, SantriUncheckedCreateInput>
    /**
     * In case the Santri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SantriUpdateInput, SantriUncheckedUpdateInput>
  }

  /**
   * Santri delete
   */
  export type SantriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    /**
     * Filter which Santri to delete.
     */
    where: SantriWhereUniqueInput
  }

  /**
   * Santri deleteMany
   */
  export type SantriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Santris to delete
     */
    where?: SantriWhereInput
    /**
     * Limit how many Santris to delete.
     */
    limit?: number
  }

  /**
   * Santri.Transaction
   */
  export type Santri$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Santri.auth_account
   */
  export type Santri$auth_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    where?: auth_accountWhereInput
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    cursor?: auth_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_accountScalarFieldEnum | Auth_accountScalarFieldEnum[]
  }

  /**
   * Santri without action
   */
  export type SantriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    santriId: number | null
    categoryId: number | null
    amount: Decimal | null
    createdBy: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    santriId: number | null
    categoryId: number | null
    amount: Decimal | null
    createdBy: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    santriId: number | null
    categoryId: number | null
    type: $Enums.CategoryType | null
    amount: Decimal | null
    description: string | null
    transactionDate: Date | null
    createdBy: number | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    santriId: number | null
    categoryId: number | null
    type: $Enums.CategoryType | null
    amount: Decimal | null
    description: string | null
    transactionDate: Date | null
    createdBy: number | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    santriId: number
    categoryId: number
    type: number
    amount: number
    description: number
    transactionDate: number
    createdBy: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    santriId?: true
    categoryId?: true
    amount?: true
    createdBy?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    santriId?: true
    categoryId?: true
    amount?: true
    createdBy?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    santriId?: true
    categoryId?: true
    type?: true
    amount?: true
    description?: true
    transactionDate?: true
    createdBy?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    santriId?: true
    categoryId?: true
    type?: true
    amount?: true
    description?: true
    transactionDate?: true
    createdBy?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    santriId?: true
    categoryId?: true
    type?: true
    amount?: true
    description?: true
    transactionDate?: true
    createdBy?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    santriId: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal
    description: string | null
    transactionDate: Date
    createdBy: number
    isDeleted: boolean
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    categoryId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    transactionDate?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    categoryId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    transactionDate?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    categoryId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    transactionDate?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    santriId?: boolean
    categoryId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    transactionDate?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "santriId" | "categoryId" | "type" | "amount" | "description" | "transactionDate" | "createdBy" | "isDeleted" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Santri?: boolean | SantriDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      Santri: Prisma.$SantriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      santriId: number
      categoryId: number
      type: $Enums.CategoryType
      amount: Prisma.Decimal
      description: string | null
      transactionDate: Date
      createdBy: number
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Santri<T extends SantriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SantriDefaultArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly santriId: FieldRef<"Transaction", 'Int'>
    readonly categoryId: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'CategoryType'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly transactionDate: FieldRef<"Transaction", 'DateTime'>
    readonly createdBy: FieldRef<"Transaction", 'Int'>
    readonly isDeleted: FieldRef<"Transaction", 'Boolean'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
    institutionId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    institutionId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    institutionId: number | null
    isEmailVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    institutionId: number | null
    isEmailVerified: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    institutionId: number
    isEmailVerified: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    institutionId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    institutionId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    institutionId?: true
    isEmailVerified?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    institutionId?: true
    isEmailVerified?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    institutionId?: true
    isEmailVerified?: true
    isActive?: true
    createdAt?: true
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
    id: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId: number | null
    isEmailVerified: boolean
    isActive: boolean
    createdAt: Date
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    EmailVerification?: boolean | User$EmailVerificationArgs<ExtArgs>
    Institution_Institution_createdByToUser?: boolean | User$Institution_Institution_createdByToUserArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    Santri?: boolean | User$SantriArgs<ExtArgs>
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
    auth_account?: boolean | User$auth_accountArgs<ExtArgs>
    password_reset?: boolean | User$password_resetArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "institutionId" | "isEmailVerified" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmailVerification?: boolean | User$EmailVerificationArgs<ExtArgs>
    Institution_Institution_createdByToUser?: boolean | User$Institution_Institution_createdByToUserArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Profile?: boolean | User$ProfileArgs<ExtArgs>
    Santri?: boolean | User$SantriArgs<ExtArgs>
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
    auth_account?: boolean | User$auth_accountArgs<ExtArgs>
    password_reset?: boolean | User$password_resetArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Institution_User_institutionIdToInstitution?: boolean | User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      EmailVerification: Prisma.$EmailVerificationPayload<ExtArgs>[]
      Institution_Institution_createdByToUser: Prisma.$InstitutionPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      Profile: Prisma.$ProfilePayload<ExtArgs> | null
      Santri: Prisma.$SantriPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      Institution_User_institutionIdToInstitution: Prisma.$InstitutionPayload<ExtArgs> | null
      auth_account: Prisma.$auth_accountPayload<ExtArgs>[]
      password_reset: Prisma.$password_resetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.UserRole
      institutionId: number | null
      isEmailVerified: boolean
      isActive: boolean
      createdAt: Date
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
    EmailVerification<T extends User$EmailVerificationArgs<ExtArgs> = {}>(args?: Subset<T, User$EmailVerificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Institution_Institution_createdByToUser<T extends User$Institution_Institution_createdByToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$Institution_Institution_createdByToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Profile<T extends User$ProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ProfileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Santri<T extends User$SantriArgs<ExtArgs> = {}>(args?: Subset<T, User$SantriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends User$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Institution_User_institutionIdToInstitution<T extends User$Institution_User_institutionIdToInstitutionArgs<ExtArgs> = {}>(args?: Subset<T, User$Institution_User_institutionIdToInstitutionArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auth_account<T extends User$auth_accountArgs<ExtArgs> = {}>(args?: Subset<T, User$auth_accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_reset<T extends User$password_resetArgs<ExtArgs> = {}>(args?: Subset<T, User$password_resetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly institutionId: FieldRef<"User", 'Int'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.EmailVerification
   */
  export type User$EmailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * User.Institution_Institution_createdByToUser
   */
  export type User$Institution_Institution_createdByToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    cursor?: InstitutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.Profile
   */
  export type User$ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.Santri
   */
  export type User$SantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    where?: SantriWhereInput
    orderBy?: SantriOrderByWithRelationInput | SantriOrderByWithRelationInput[]
    cursor?: SantriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * User.Transaction
   */
  export type User$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.Institution_User_institutionIdToInstitution
   */
  export type User$Institution_User_institutionIdToInstitutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    where?: InstitutionWhereInput
  }

  /**
   * User.auth_account
   */
  export type User$auth_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    where?: auth_accountWhereInput
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    cursor?: auth_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auth_accountScalarFieldEnum | Auth_accountScalarFieldEnum[]
  }

  /**
   * User.password_reset
   */
  export type User$password_resetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    where?: password_resetWhereInput
    orderBy?: password_resetOrderByWithRelationInput | password_resetOrderByWithRelationInput[]
    cursor?: password_resetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_resetScalarFieldEnum | Password_resetScalarFieldEnum[]
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
   * Model auth_account
   */

  export type AggregateAuth_account = {
    _count: Auth_accountCountAggregateOutputType | null
    _avg: Auth_accountAvgAggregateOutputType | null
    _sum: Auth_accountSumAggregateOutputType | null
    _min: Auth_accountMinAggregateOutputType | null
    _max: Auth_accountMaxAggregateOutputType | null
  }

  export type Auth_accountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    santriId: number | null
  }

  export type Auth_accountSumAggregateOutputType = {
    id: number | null
    userId: number | null
    santriId: number | null
  }

  export type Auth_accountMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    userId: number | null
    santriId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type Auth_accountMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    userId: number | null
    santriId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type Auth_accountCountAggregateOutputType = {
    id: number
    username: number
    password: number
    userId: number
    santriId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type Auth_accountAvgAggregateInputType = {
    id?: true
    userId?: true
    santriId?: true
  }

  export type Auth_accountSumAggregateInputType = {
    id?: true
    userId?: true
    santriId?: true
  }

  export type Auth_accountMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userId?: true
    santriId?: true
    isActive?: true
    createdAt?: true
  }

  export type Auth_accountMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userId?: true
    santriId?: true
    isActive?: true
    createdAt?: true
  }

  export type Auth_accountCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userId?: true
    santriId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type Auth_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_account to aggregate.
     */
    where?: auth_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_accounts
    **/
    _count?: true | Auth_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_accountMaxAggregateInputType
  }

  export type GetAuth_accountAggregateType<T extends Auth_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_account[P]>
      : GetScalarType<T[P], AggregateAuth_account[P]>
  }




  export type auth_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountWhereInput
    orderBy?: auth_accountOrderByWithAggregationInput | auth_accountOrderByWithAggregationInput[]
    by: Auth_accountScalarFieldEnum[] | Auth_accountScalarFieldEnum
    having?: auth_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_accountCountAggregateInputType | true
    _avg?: Auth_accountAvgAggregateInputType
    _sum?: Auth_accountSumAggregateInputType
    _min?: Auth_accountMinAggregateInputType
    _max?: Auth_accountMaxAggregateInputType
  }

  export type Auth_accountGroupByOutputType = {
    id: number
    username: string
    password: string
    userId: number
    santriId: number | null
    isActive: boolean
    createdAt: Date
    _count: Auth_accountCountAggregateOutputType | null
    _avg: Auth_accountAvgAggregateOutputType | null
    _sum: Auth_accountSumAggregateOutputType | null
    _min: Auth_accountMinAggregateOutputType | null
    _max: Auth_accountMaxAggregateOutputType | null
  }

  type GetAuth_accountGroupByPayload<T extends auth_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_accountGroupByOutputType[P]>
        }
      >
    >


  export type auth_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_account"]>

  export type auth_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_account"]>

  export type auth_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_account"]>

  export type auth_accountSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type auth_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "userId" | "santriId" | "isActive" | "createdAt", ExtArgs["result"]["auth_account"]>
  export type auth_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type auth_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type auth_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Santri?: boolean | auth_account$SantriArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $auth_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_account"
    objects: {
      Santri: Prisma.$SantriPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      userId: number
      santriId: number | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["auth_account"]>
    composites: {}
  }

  type auth_accountGetPayload<S extends boolean | null | undefined | auth_accountDefaultArgs> = $Result.GetResult<Prisma.$auth_accountPayload, S>

  type auth_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_accountCountAggregateInputType | true
    }

  export interface auth_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_account'], meta: { name: 'auth_account' } }
    /**
     * Find zero or one Auth_account that matches the filter.
     * @param {auth_accountFindUniqueArgs} args - Arguments to find a Auth_account
     * @example
     * // Get one Auth_account
     * const auth_account = await prisma.auth_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_accountFindUniqueArgs>(args: SelectSubset<T, auth_accountFindUniqueArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_accountFindUniqueOrThrowArgs} args - Arguments to find a Auth_account
     * @example
     * // Get one Auth_account
     * const auth_account = await prisma.auth_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountFindFirstArgs} args - Arguments to find a Auth_account
     * @example
     * // Get one Auth_account
     * const auth_account = await prisma.auth_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_accountFindFirstArgs>(args?: SelectSubset<T, auth_accountFindFirstArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountFindFirstOrThrowArgs} args - Arguments to find a Auth_account
     * @example
     * // Get one Auth_account
     * const auth_account = await prisma.auth_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_accounts
     * const auth_accounts = await prisma.auth_account.findMany()
     * 
     * // Get first 10 Auth_accounts
     * const auth_accounts = await prisma.auth_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_accountWithIdOnly = await prisma.auth_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_accountFindManyArgs>(args?: SelectSubset<T, auth_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_account.
     * @param {auth_accountCreateArgs} args - Arguments to create a Auth_account.
     * @example
     * // Create one Auth_account
     * const Auth_account = await prisma.auth_account.create({
     *   data: {
     *     // ... data to create a Auth_account
     *   }
     * })
     * 
     */
    create<T extends auth_accountCreateArgs>(args: SelectSubset<T, auth_accountCreateArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_accounts.
     * @param {auth_accountCreateManyArgs} args - Arguments to create many Auth_accounts.
     * @example
     * // Create many Auth_accounts
     * const auth_account = await prisma.auth_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_accountCreateManyArgs>(args?: SelectSubset<T, auth_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_accounts and returns the data saved in the database.
     * @param {auth_accountCreateManyAndReturnArgs} args - Arguments to create many Auth_accounts.
     * @example
     * // Create many Auth_accounts
     * const auth_account = await prisma.auth_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_accounts and only return the `id`
     * const auth_accountWithIdOnly = await prisma.auth_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_account.
     * @param {auth_accountDeleteArgs} args - Arguments to delete one Auth_account.
     * @example
     * // Delete one Auth_account
     * const Auth_account = await prisma.auth_account.delete({
     *   where: {
     *     // ... filter to delete one Auth_account
     *   }
     * })
     * 
     */
    delete<T extends auth_accountDeleteArgs>(args: SelectSubset<T, auth_accountDeleteArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_account.
     * @param {auth_accountUpdateArgs} args - Arguments to update one Auth_account.
     * @example
     * // Update one Auth_account
     * const auth_account = await prisma.auth_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_accountUpdateArgs>(args: SelectSubset<T, auth_accountUpdateArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_accounts.
     * @param {auth_accountDeleteManyArgs} args - Arguments to filter Auth_accounts to delete.
     * @example
     * // Delete a few Auth_accounts
     * const { count } = await prisma.auth_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_accountDeleteManyArgs>(args?: SelectSubset<T, auth_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_accounts
     * const auth_account = await prisma.auth_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_accountUpdateManyArgs>(args: SelectSubset<T, auth_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_accounts and returns the data updated in the database.
     * @param {auth_accountUpdateManyAndReturnArgs} args - Arguments to update many Auth_accounts.
     * @example
     * // Update many Auth_accounts
     * const auth_account = await prisma.auth_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_accounts and only return the `id`
     * const auth_accountWithIdOnly = await prisma.auth_account.updateManyAndReturn({
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
    updateManyAndReturn<T extends auth_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_account.
     * @param {auth_accountUpsertArgs} args - Arguments to update or create a Auth_account.
     * @example
     * // Update or create a Auth_account
     * const auth_account = await prisma.auth_account.upsert({
     *   create: {
     *     // ... data to create a Auth_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_account we want to update
     *   }
     * })
     */
    upsert<T extends auth_accountUpsertArgs>(args: SelectSubset<T, auth_accountUpsertArgs<ExtArgs>>): Prisma__auth_accountClient<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountCountArgs} args - Arguments to filter Auth_accounts to count.
     * @example
     * // Count the number of Auth_accounts
     * const count = await prisma.auth_account.count({
     *   where: {
     *     // ... the filter for the Auth_accounts we want to count
     *   }
     * })
    **/
    count<T extends auth_accountCountArgs>(
      args?: Subset<T, auth_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_accountAggregateArgs>(args: Subset<T, Auth_accountAggregateArgs>): Prisma.PrismaPromise<GetAuth_accountAggregateType<T>>

    /**
     * Group by Auth_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_accountGroupByArgs} args - Group by arguments.
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
      T extends auth_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_accountGroupByArgs['orderBy'] }
        : { orderBy?: auth_accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auth_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_account model
   */
  readonly fields: auth_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Santri<T extends auth_account$SantriArgs<ExtArgs> = {}>(args?: Subset<T, auth_account$SantriArgs<ExtArgs>>): Prisma__SantriClient<$Result.GetResult<Prisma.$SantriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the auth_account model
   */
  interface auth_accountFieldRefs {
    readonly id: FieldRef<"auth_account", 'Int'>
    readonly username: FieldRef<"auth_account", 'String'>
    readonly password: FieldRef<"auth_account", 'String'>
    readonly userId: FieldRef<"auth_account", 'Int'>
    readonly santriId: FieldRef<"auth_account", 'Int'>
    readonly isActive: FieldRef<"auth_account", 'Boolean'>
    readonly createdAt: FieldRef<"auth_account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_account findUnique
   */
  export type auth_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter, which auth_account to fetch.
     */
    where: auth_accountWhereUniqueInput
  }

  /**
   * auth_account findUniqueOrThrow
   */
  export type auth_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter, which auth_account to fetch.
     */
    where: auth_accountWhereUniqueInput
  }

  /**
   * auth_account findFirst
   */
  export type auth_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter, which auth_account to fetch.
     */
    where?: auth_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_accounts.
     */
    cursor?: auth_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_accounts.
     */
    distinct?: Auth_accountScalarFieldEnum | Auth_accountScalarFieldEnum[]
  }

  /**
   * auth_account findFirstOrThrow
   */
  export type auth_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter, which auth_account to fetch.
     */
    where?: auth_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_accounts.
     */
    cursor?: auth_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_accounts.
     */
    distinct?: Auth_accountScalarFieldEnum | Auth_accountScalarFieldEnum[]
  }

  /**
   * auth_account findMany
   */
  export type auth_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter, which auth_accounts to fetch.
     */
    where?: auth_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_accounts to fetch.
     */
    orderBy?: auth_accountOrderByWithRelationInput | auth_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_accounts.
     */
    cursor?: auth_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_accounts.
     */
    skip?: number
    distinct?: Auth_accountScalarFieldEnum | Auth_accountScalarFieldEnum[]
  }

  /**
   * auth_account create
   */
  export type auth_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_account.
     */
    data: XOR<auth_accountCreateInput, auth_accountUncheckedCreateInput>
  }

  /**
   * auth_account createMany
   */
  export type auth_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_accounts.
     */
    data: auth_accountCreateManyInput | auth_accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_account createManyAndReturn
   */
  export type auth_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * The data used to create many auth_accounts.
     */
    data: auth_accountCreateManyInput | auth_accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_account update
   */
  export type auth_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_account.
     */
    data: XOR<auth_accountUpdateInput, auth_accountUncheckedUpdateInput>
    /**
     * Choose, which auth_account to update.
     */
    where: auth_accountWhereUniqueInput
  }

  /**
   * auth_account updateMany
   */
  export type auth_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_accounts.
     */
    data: XOR<auth_accountUpdateManyMutationInput, auth_accountUncheckedUpdateManyInput>
    /**
     * Filter which auth_accounts to update
     */
    where?: auth_accountWhereInput
    /**
     * Limit how many auth_accounts to update.
     */
    limit?: number
  }

  /**
   * auth_account updateManyAndReturn
   */
  export type auth_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * The data used to update auth_accounts.
     */
    data: XOR<auth_accountUpdateManyMutationInput, auth_accountUncheckedUpdateManyInput>
    /**
     * Filter which auth_accounts to update
     */
    where?: auth_accountWhereInput
    /**
     * Limit how many auth_accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auth_account upsert
   */
  export type auth_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_account to update in case it exists.
     */
    where: auth_accountWhereUniqueInput
    /**
     * In case the auth_account found by the `where` argument doesn't exist, create a new auth_account with this data.
     */
    create: XOR<auth_accountCreateInput, auth_accountUncheckedCreateInput>
    /**
     * In case the auth_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_accountUpdateInput, auth_accountUncheckedUpdateInput>
  }

  /**
   * auth_account delete
   */
  export type auth_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
    /**
     * Filter which auth_account to delete.
     */
    where: auth_accountWhereUniqueInput
  }

  /**
   * auth_account deleteMany
   */
  export type auth_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_accounts to delete
     */
    where?: auth_accountWhereInput
    /**
     * Limit how many auth_accounts to delete.
     */
    limit?: number
  }

  /**
   * auth_account.Santri
   */
  export type auth_account$SantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Santri
     */
    select?: SantriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Santri
     */
    omit?: SantriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriInclude<ExtArgs> | null
    where?: SantriWhereInput
  }

  /**
   * auth_account without action
   */
  export type auth_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_account
     */
    select?: auth_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_account
     */
    omit?: auth_accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_accountInclude<ExtArgs> | null
  }


  /**
   * Model password_reset
   */

  export type AggregatePassword_reset = {
    _count: Password_resetCountAggregateOutputType | null
    _avg: Password_resetAvgAggregateOutputType | null
    _sum: Password_resetSumAggregateOutputType | null
    _min: Password_resetMinAggregateOutputType | null
    _max: Password_resetMaxAggregateOutputType | null
  }

  export type Password_resetAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_resetSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_resetMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type Password_resetMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type Password_resetCountAggregateOutputType = {
    id: number
    userId: number
    otpCode: number
    expiredAt: number
    isUsed: number
    createdAt: number
    _all: number
  }


  export type Password_resetAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_resetSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_resetMinAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type Password_resetMaxAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type Password_resetCountAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
    _all?: true
  }

  export type Password_resetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset to aggregate.
     */
    where?: password_resetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetOrderByWithRelationInput | password_resetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_resetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_resets
    **/
    _count?: true | Password_resetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Password_resetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Password_resetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_resetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_resetMaxAggregateInputType
  }

  export type GetPassword_resetAggregateType<T extends Password_resetAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset[P]>
      : GetScalarType<T[P], AggregatePassword_reset[P]>
  }




  export type password_resetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_resetWhereInput
    orderBy?: password_resetOrderByWithAggregationInput | password_resetOrderByWithAggregationInput[]
    by: Password_resetScalarFieldEnum[] | Password_resetScalarFieldEnum
    having?: password_resetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_resetCountAggregateInputType | true
    _avg?: Password_resetAvgAggregateInputType
    _sum?: Password_resetSumAggregateInputType
    _min?: Password_resetMinAggregateInputType
    _max?: Password_resetMaxAggregateInputType
  }

  export type Password_resetGroupByOutputType = {
    id: number
    userId: number
    otpCode: string
    expiredAt: Date
    isUsed: boolean
    createdAt: Date
    _count: Password_resetCountAggregateOutputType | null
    _avg: Password_resetAvgAggregateOutputType | null
    _sum: Password_resetSumAggregateOutputType | null
    _min: Password_resetMinAggregateOutputType | null
    _max: Password_resetMaxAggregateOutputType | null
  }

  type GetPassword_resetGroupByPayload<T extends password_resetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_resetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_resetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_resetGroupByOutputType[P]>
            : GetScalarType<T[P], Password_resetGroupByOutputType[P]>
        }
      >
    >


  export type password_resetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset"]>

  export type password_resetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset"]>

  export type password_resetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset"]>

  export type password_resetSelectScalar = {
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }

  export type password_resetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otpCode" | "expiredAt" | "isUsed" | "createdAt", ExtArgs["result"]["password_reset"]>
  export type password_resetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type password_resetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type password_resetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $password_resetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otpCode: string
      expiredAt: Date
      isUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["password_reset"]>
    composites: {}
  }

  type password_resetGetPayload<S extends boolean | null | undefined | password_resetDefaultArgs> = $Result.GetResult<Prisma.$password_resetPayload, S>

  type password_resetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_resetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_resetCountAggregateInputType | true
    }

  export interface password_resetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset'], meta: { name: 'password_reset' } }
    /**
     * Find zero or one Password_reset that matches the filter.
     * @param {password_resetFindUniqueArgs} args - Arguments to find a Password_reset
     * @example
     * // Get one Password_reset
     * const password_reset = await prisma.password_reset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_resetFindUniqueArgs>(args: SelectSubset<T, password_resetFindUniqueArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_resetFindUniqueOrThrowArgs} args - Arguments to find a Password_reset
     * @example
     * // Get one Password_reset
     * const password_reset = await prisma.password_reset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_resetFindUniqueOrThrowArgs>(args: SelectSubset<T, password_resetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetFindFirstArgs} args - Arguments to find a Password_reset
     * @example
     * // Get one Password_reset
     * const password_reset = await prisma.password_reset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_resetFindFirstArgs>(args?: SelectSubset<T, password_resetFindFirstArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetFindFirstOrThrowArgs} args - Arguments to find a Password_reset
     * @example
     * // Get one Password_reset
     * const password_reset = await prisma.password_reset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_resetFindFirstOrThrowArgs>(args?: SelectSubset<T, password_resetFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_resets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_resets
     * const password_resets = await prisma.password_reset.findMany()
     * 
     * // Get first 10 Password_resets
     * const password_resets = await prisma.password_reset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_resetWithIdOnly = await prisma.password_reset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends password_resetFindManyArgs>(args?: SelectSubset<T, password_resetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset.
     * @param {password_resetCreateArgs} args - Arguments to create a Password_reset.
     * @example
     * // Create one Password_reset
     * const Password_reset = await prisma.password_reset.create({
     *   data: {
     *     // ... data to create a Password_reset
     *   }
     * })
     * 
     */
    create<T extends password_resetCreateArgs>(args: SelectSubset<T, password_resetCreateArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_resets.
     * @param {password_resetCreateManyArgs} args - Arguments to create many Password_resets.
     * @example
     * // Create many Password_resets
     * const password_reset = await prisma.password_reset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_resetCreateManyArgs>(args?: SelectSubset<T, password_resetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Password_resets and returns the data saved in the database.
     * @param {password_resetCreateManyAndReturnArgs} args - Arguments to create many Password_resets.
     * @example
     * // Create many Password_resets
     * const password_reset = await prisma.password_reset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Password_resets and only return the `id`
     * const password_resetWithIdOnly = await prisma.password_reset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends password_resetCreateManyAndReturnArgs>(args?: SelectSubset<T, password_resetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password_reset.
     * @param {password_resetDeleteArgs} args - Arguments to delete one Password_reset.
     * @example
     * // Delete one Password_reset
     * const Password_reset = await prisma.password_reset.delete({
     *   where: {
     *     // ... filter to delete one Password_reset
     *   }
     * })
     * 
     */
    delete<T extends password_resetDeleteArgs>(args: SelectSubset<T, password_resetDeleteArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset.
     * @param {password_resetUpdateArgs} args - Arguments to update one Password_reset.
     * @example
     * // Update one Password_reset
     * const password_reset = await prisma.password_reset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_resetUpdateArgs>(args: SelectSubset<T, password_resetUpdateArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_resets.
     * @param {password_resetDeleteManyArgs} args - Arguments to filter Password_resets to delete.
     * @example
     * // Delete a few Password_resets
     * const { count } = await prisma.password_reset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_resetDeleteManyArgs>(args?: SelectSubset<T, password_resetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_resets
     * const password_reset = await prisma.password_reset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_resetUpdateManyArgs>(args: SelectSubset<T, password_resetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_resets and returns the data updated in the database.
     * @param {password_resetUpdateManyAndReturnArgs} args - Arguments to update many Password_resets.
     * @example
     * // Update many Password_resets
     * const password_reset = await prisma.password_reset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Password_resets and only return the `id`
     * const password_resetWithIdOnly = await prisma.password_reset.updateManyAndReturn({
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
    updateManyAndReturn<T extends password_resetUpdateManyAndReturnArgs>(args: SelectSubset<T, password_resetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password_reset.
     * @param {password_resetUpsertArgs} args - Arguments to update or create a Password_reset.
     * @example
     * // Update or create a Password_reset
     * const password_reset = await prisma.password_reset.upsert({
     *   create: {
     *     // ... data to create a Password_reset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset we want to update
     *   }
     * })
     */
    upsert<T extends password_resetUpsertArgs>(args: SelectSubset<T, password_resetUpsertArgs<ExtArgs>>): Prisma__password_resetClient<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_resets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetCountArgs} args - Arguments to filter Password_resets to count.
     * @example
     * // Count the number of Password_resets
     * const count = await prisma.password_reset.count({
     *   where: {
     *     // ... the filter for the Password_resets we want to count
     *   }
     * })
    **/
    count<T extends password_resetCountArgs>(
      args?: Subset<T, password_resetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_resetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_resetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_resetAggregateArgs>(args: Subset<T, Password_resetAggregateArgs>): Prisma.PrismaPromise<GetPassword_resetAggregateType<T>>

    /**
     * Group by Password_reset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_resetGroupByArgs} args - Group by arguments.
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
      T extends password_resetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_resetGroupByArgs['orderBy'] }
        : { orderBy?: password_resetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_resetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_resetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset model
   */
  readonly fields: password_resetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_resetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the password_reset model
   */
  interface password_resetFieldRefs {
    readonly id: FieldRef<"password_reset", 'Int'>
    readonly userId: FieldRef<"password_reset", 'Int'>
    readonly otpCode: FieldRef<"password_reset", 'String'>
    readonly expiredAt: FieldRef<"password_reset", 'DateTime'>
    readonly isUsed: FieldRef<"password_reset", 'Boolean'>
    readonly createdAt: FieldRef<"password_reset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset findUnique
   */
  export type password_resetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter, which password_reset to fetch.
     */
    where: password_resetWhereUniqueInput
  }

  /**
   * password_reset findUniqueOrThrow
   */
  export type password_resetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter, which password_reset to fetch.
     */
    where: password_resetWhereUniqueInput
  }

  /**
   * password_reset findFirst
   */
  export type password_resetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter, which password_reset to fetch.
     */
    where?: password_resetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetOrderByWithRelationInput | password_resetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_resets.
     */
    cursor?: password_resetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_resets.
     */
    distinct?: Password_resetScalarFieldEnum | Password_resetScalarFieldEnum[]
  }

  /**
   * password_reset findFirstOrThrow
   */
  export type password_resetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter, which password_reset to fetch.
     */
    where?: password_resetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetOrderByWithRelationInput | password_resetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_resets.
     */
    cursor?: password_resetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_resets.
     */
    distinct?: Password_resetScalarFieldEnum | Password_resetScalarFieldEnum[]
  }

  /**
   * password_reset findMany
   */
  export type password_resetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter, which password_resets to fetch.
     */
    where?: password_resetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_resets to fetch.
     */
    orderBy?: password_resetOrderByWithRelationInput | password_resetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_resets.
     */
    cursor?: password_resetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_resets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_resets.
     */
    skip?: number
    distinct?: Password_resetScalarFieldEnum | Password_resetScalarFieldEnum[]
  }

  /**
   * password_reset create
   */
  export type password_resetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * The data needed to create a password_reset.
     */
    data: XOR<password_resetCreateInput, password_resetUncheckedCreateInput>
  }

  /**
   * password_reset createMany
   */
  export type password_resetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_resets.
     */
    data: password_resetCreateManyInput | password_resetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset createManyAndReturn
   */
  export type password_resetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * The data used to create many password_resets.
     */
    data: password_resetCreateManyInput | password_resetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset update
   */
  export type password_resetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * The data needed to update a password_reset.
     */
    data: XOR<password_resetUpdateInput, password_resetUncheckedUpdateInput>
    /**
     * Choose, which password_reset to update.
     */
    where: password_resetWhereUniqueInput
  }

  /**
   * password_reset updateMany
   */
  export type password_resetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_resets.
     */
    data: XOR<password_resetUpdateManyMutationInput, password_resetUncheckedUpdateManyInput>
    /**
     * Filter which password_resets to update
     */
    where?: password_resetWhereInput
    /**
     * Limit how many password_resets to update.
     */
    limit?: number
  }

  /**
   * password_reset updateManyAndReturn
   */
  export type password_resetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * The data used to update password_resets.
     */
    data: XOR<password_resetUpdateManyMutationInput, password_resetUncheckedUpdateManyInput>
    /**
     * Filter which password_resets to update
     */
    where?: password_resetWhereInput
    /**
     * Limit how many password_resets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset upsert
   */
  export type password_resetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * The filter to search for the password_reset to update in case it exists.
     */
    where: password_resetWhereUniqueInput
    /**
     * In case the password_reset found by the `where` argument doesn't exist, create a new password_reset with this data.
     */
    create: XOR<password_resetCreateInput, password_resetUncheckedCreateInput>
    /**
     * In case the password_reset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_resetUpdateInput, password_resetUncheckedUpdateInput>
  }

  /**
   * password_reset delete
   */
  export type password_resetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
    /**
     * Filter which password_reset to delete.
     */
    where: password_resetWhereUniqueInput
  }

  /**
   * password_reset deleteMany
   */
  export type password_resetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_resets to delete
     */
    where?: password_resetWhereInput
    /**
     * Limit how many password_resets to delete.
     */
    limit?: number
  }

  /**
   * password_reset without action
   */
  export type password_resetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset
     */
    select?: password_resetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset
     */
    omit?: password_resetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_resetInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    institutionId: 'institutionId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otpCode: 'otpCode',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    address: 'address',
    profile_picture_url: 'profile_picture_url',
    public_id: 'public_id',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SantriScalarFieldEnum: {
    id: 'id',
    nis: 'nis',
    fullname: 'fullname',
    kelas: 'kelas',
    gender: 'gender',
    waliId: 'waliId',
    institutionId: 'institutionId',
    waliName: 'waliName',
    institutionName: 'institutionName',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SantriScalarFieldEnum = (typeof SantriScalarFieldEnum)[keyof typeof SantriScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    santriId: 'santriId',
    categoryId: 'categoryId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    transactionDate: 'transactionDate',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    institutionId: 'institutionId',
    isEmailVerified: 'isEmailVerified',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Auth_accountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    userId: 'userId',
    santriId: 'santriId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type Auth_accountScalarFieldEnum = (typeof Auth_accountScalarFieldEnum)[keyof typeof Auth_accountScalarFieldEnum]


  export const Password_resetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otpCode: 'otpCode',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type Password_resetScalarFieldEnum = (typeof Password_resetScalarFieldEnum)[keyof typeof Password_resetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    institutionId?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Institution?: InstitutionOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    institutionId?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    institutionId?: IntWithAggregatesFilter<"Category"> | number
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: IntFilter<"EmailVerification"> | number
    userId?: IntFilter<"EmailVerification"> | number
    otpCode?: StringFilter<"EmailVerification"> | string
    expiredAt?: DateTimeFilter<"EmailVerification"> | Date | string
    isUsed?: BoolFilter<"EmailVerification"> | boolean
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    userId?: IntFilter<"EmailVerification"> | number
    otpCode?: StringFilter<"EmailVerification"> | string
    expiredAt?: DateTimeFilter<"EmailVerification"> | Date | string
    isUsed?: BoolFilter<"EmailVerification"> | boolean
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _avg?: EmailVerificationAvgOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
    _sum?: EmailVerificationSumOrderByAggregateInput
  }

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailVerification"> | number
    userId?: IntWithAggregatesFilter<"EmailVerification"> | number
    otpCode?: StringWithAggregatesFilter<"EmailVerification"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"EmailVerification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
  }

  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: IntFilter<"Institution"> | number
    name?: StringFilter<"Institution"> | string
    createdBy?: IntFilter<"Institution"> | number
    isActive?: BoolFilter<"Institution"> | boolean
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    Category?: CategoryListRelationFilter
    User_Institution_createdByToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    Santri?: SantriListRelationFilter
    User_User_institutionIdToInstitution?: UserListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    User_Institution_createdByToUser?: UserOrderByWithRelationInput
    Santri?: SantriOrderByRelationAggregateInput
    User_User_institutionIdToInstitution?: UserOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    createdBy?: IntFilter<"Institution"> | number
    isActive?: BoolFilter<"Institution"> | boolean
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    Category?: CategoryListRelationFilter
    User_Institution_createdByToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    Santri?: SantriListRelationFilter
    User_User_institutionIdToInstitution?: UserListRelationFilter
  }, "id" | "name">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _avg?: InstitutionAvgOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
    _sum?: InstitutionSumOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Institution"> | number
    name?: StringWithAggregatesFilter<"Institution"> | string
    createdBy?: IntWithAggregatesFilter<"Institution"> | number
    isActive?: BoolWithAggregatesFilter<"Institution"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    name?: StringFilter<"Profile"> | string
    gender?: StringFilter<"Profile"> | string
    address?: StringFilter<"Profile"> | string
    profile_picture_url?: StringNullableFilter<"Profile"> | string | null
    public_id?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    gender?: StringFilter<"Profile"> | string
    address?: StringFilter<"Profile"> | string
    profile_picture_url?: StringNullableFilter<"Profile"> | string | null
    public_id?: StringNullableFilter<"Profile"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    name?: StringWithAggregatesFilter<"Profile"> | string
    gender?: StringWithAggregatesFilter<"Profile"> | string
    address?: StringWithAggregatesFilter<"Profile"> | string
    profile_picture_url?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    public_id?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type SantriWhereInput = {
    AND?: SantriWhereInput | SantriWhereInput[]
    OR?: SantriWhereInput[]
    NOT?: SantriWhereInput | SantriWhereInput[]
    id?: IntFilter<"Santri"> | number
    nis?: StringFilter<"Santri"> | string
    fullname?: StringFilter<"Santri"> | string
    kelas?: StringFilter<"Santri"> | string
    gender?: StringFilter<"Santri"> | string
    waliId?: IntFilter<"Santri"> | number
    institutionId?: IntFilter<"Santri"> | number
    waliName?: StringNullableFilter<"Santri"> | string | null
    institutionName?: StringNullableFilter<"Santri"> | string | null
    isActive?: BoolFilter<"Santri"> | boolean
    createdAt?: DateTimeFilter<"Santri"> | Date | string
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Transaction?: TransactionListRelationFilter
    auth_account?: Auth_accountListRelationFilter
  }

  export type SantriOrderByWithRelationInput = {
    id?: SortOrder
    nis?: SortOrder
    fullname?: SortOrder
    kelas?: SortOrder
    gender?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
    waliName?: SortOrderInput | SortOrder
    institutionName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Institution?: InstitutionOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
    auth_account?: auth_accountOrderByRelationAggregateInput
  }

  export type SantriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nis_institutionId?: SantriNisInstitutionIdCompoundUniqueInput
    AND?: SantriWhereInput | SantriWhereInput[]
    OR?: SantriWhereInput[]
    NOT?: SantriWhereInput | SantriWhereInput[]
    nis?: StringFilter<"Santri"> | string
    fullname?: StringFilter<"Santri"> | string
    kelas?: StringFilter<"Santri"> | string
    gender?: StringFilter<"Santri"> | string
    waliId?: IntFilter<"Santri"> | number
    institutionId?: IntFilter<"Santri"> | number
    waliName?: StringNullableFilter<"Santri"> | string | null
    institutionName?: StringNullableFilter<"Santri"> | string | null
    isActive?: BoolFilter<"Santri"> | boolean
    createdAt?: DateTimeFilter<"Santri"> | Date | string
    Institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Transaction?: TransactionListRelationFilter
    auth_account?: Auth_accountListRelationFilter
  }, "id" | "nis_institutionId">

  export type SantriOrderByWithAggregationInput = {
    id?: SortOrder
    nis?: SortOrder
    fullname?: SortOrder
    kelas?: SortOrder
    gender?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
    waliName?: SortOrderInput | SortOrder
    institutionName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SantriCountOrderByAggregateInput
    _avg?: SantriAvgOrderByAggregateInput
    _max?: SantriMaxOrderByAggregateInput
    _min?: SantriMinOrderByAggregateInput
    _sum?: SantriSumOrderByAggregateInput
  }

  export type SantriScalarWhereWithAggregatesInput = {
    AND?: SantriScalarWhereWithAggregatesInput | SantriScalarWhereWithAggregatesInput[]
    OR?: SantriScalarWhereWithAggregatesInput[]
    NOT?: SantriScalarWhereWithAggregatesInput | SantriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Santri"> | number
    nis?: StringWithAggregatesFilter<"Santri"> | string
    fullname?: StringWithAggregatesFilter<"Santri"> | string
    kelas?: StringWithAggregatesFilter<"Santri"> | string
    gender?: StringWithAggregatesFilter<"Santri"> | string
    waliId?: IntWithAggregatesFilter<"Santri"> | number
    institutionId?: IntWithAggregatesFilter<"Santri"> | number
    waliName?: StringNullableWithAggregatesFilter<"Santri"> | string | null
    institutionName?: StringNullableWithAggregatesFilter<"Santri"> | string | null
    isActive?: BoolWithAggregatesFilter<"Santri"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Santri"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    santriId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    type?: EnumCategoryTypeFilter<"Transaction"> | $Enums.CategoryType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    createdBy?: IntFilter<"Transaction"> | number
    isDeleted?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Santri?: XOR<SantriScalarRelationFilter, SantriWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Santri?: SantriOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    santriId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    type?: EnumCategoryTypeFilter<"Transaction"> | $Enums.CategoryType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    createdBy?: IntFilter<"Transaction"> | number
    isDeleted?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Santri?: XOR<SantriScalarRelationFilter, SantriWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    transactionDate?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    santriId?: IntWithAggregatesFilter<"Transaction"> | number
    categoryId?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumCategoryTypeWithAggregatesFilter<"Transaction"> | $Enums.CategoryType
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    transactionDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Transaction"> | number
    isDeleted?: BoolWithAggregatesFilter<"Transaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    institutionId?: IntNullableFilter<"User"> | number | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    EmailVerification?: EmailVerificationListRelationFilter
    Institution_Institution_createdByToUser?: InstitutionListRelationFilter
    Notification?: NotificationListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    Santri?: SantriListRelationFilter
    Transaction?: TransactionListRelationFilter
    Institution_User_institutionIdToInstitution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
    auth_account?: Auth_accountListRelationFilter
    password_reset?: Password_resetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    EmailVerification?: EmailVerificationOrderByRelationAggregateInput
    Institution_Institution_createdByToUser?: InstitutionOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    Profile?: ProfileOrderByWithRelationInput
    Santri?: SantriOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
    Institution_User_institutionIdToInstitution?: InstitutionOrderByWithRelationInput
    auth_account?: auth_accountOrderByRelationAggregateInput
    password_reset?: password_resetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    institutionId?: IntNullableFilter<"User"> | number | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    EmailVerification?: EmailVerificationListRelationFilter
    Institution_Institution_createdByToUser?: InstitutionListRelationFilter
    Notification?: NotificationListRelationFilter
    Profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    Santri?: SantriListRelationFilter
    Transaction?: TransactionListRelationFilter
    Institution_User_institutionIdToInstitution?: XOR<InstitutionNullableScalarRelationFilter, InstitutionWhereInput> | null
    auth_account?: Auth_accountListRelationFilter
    password_reset?: Password_resetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    institutionId?: IntNullableWithAggregatesFilter<"User"> | number | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type auth_accountWhereInput = {
    AND?: auth_accountWhereInput | auth_accountWhereInput[]
    OR?: auth_accountWhereInput[]
    NOT?: auth_accountWhereInput | auth_accountWhereInput[]
    id?: IntFilter<"auth_account"> | number
    username?: StringFilter<"auth_account"> | string
    password?: StringFilter<"auth_account"> | string
    userId?: IntFilter<"auth_account"> | number
    santriId?: IntNullableFilter<"auth_account"> | number | null
    isActive?: BoolFilter<"auth_account"> | boolean
    createdAt?: DateTimeFilter<"auth_account"> | Date | string
    Santri?: XOR<SantriNullableScalarRelationFilter, SantriWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type auth_accountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    Santri?: SantriOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type auth_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: auth_accountWhereInput | auth_accountWhereInput[]
    OR?: auth_accountWhereInput[]
    NOT?: auth_accountWhereInput | auth_accountWhereInput[]
    username?: StringFilter<"auth_account"> | string
    password?: StringFilter<"auth_account"> | string
    userId?: IntFilter<"auth_account"> | number
    santriId?: IntNullableFilter<"auth_account"> | number | null
    isActive?: BoolFilter<"auth_account"> | boolean
    createdAt?: DateTimeFilter<"auth_account"> | Date | string
    Santri?: XOR<SantriNullableScalarRelationFilter, SantriWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type auth_accountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: auth_accountCountOrderByAggregateInput
    _avg?: auth_accountAvgOrderByAggregateInput
    _max?: auth_accountMaxOrderByAggregateInput
    _min?: auth_accountMinOrderByAggregateInput
    _sum?: auth_accountSumOrderByAggregateInput
  }

  export type auth_accountScalarWhereWithAggregatesInput = {
    AND?: auth_accountScalarWhereWithAggregatesInput | auth_accountScalarWhereWithAggregatesInput[]
    OR?: auth_accountScalarWhereWithAggregatesInput[]
    NOT?: auth_accountScalarWhereWithAggregatesInput | auth_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_account"> | number
    username?: StringWithAggregatesFilter<"auth_account"> | string
    password?: StringWithAggregatesFilter<"auth_account"> | string
    userId?: IntWithAggregatesFilter<"auth_account"> | number
    santriId?: IntNullableWithAggregatesFilter<"auth_account"> | number | null
    isActive?: BoolWithAggregatesFilter<"auth_account"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"auth_account"> | Date | string
  }

  export type password_resetWhereInput = {
    AND?: password_resetWhereInput | password_resetWhereInput[]
    OR?: password_resetWhereInput[]
    NOT?: password_resetWhereInput | password_resetWhereInput[]
    id?: IntFilter<"password_reset"> | number
    userId?: IntFilter<"password_reset"> | number
    otpCode?: StringFilter<"password_reset"> | string
    expiredAt?: DateTimeFilter<"password_reset"> | Date | string
    isUsed?: BoolFilter<"password_reset"> | boolean
    createdAt?: DateTimeFilter<"password_reset"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type password_resetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type password_resetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: password_resetWhereInput | password_resetWhereInput[]
    OR?: password_resetWhereInput[]
    NOT?: password_resetWhereInput | password_resetWhereInput[]
    userId?: IntFilter<"password_reset"> | number
    otpCode?: StringFilter<"password_reset"> | string
    expiredAt?: DateTimeFilter<"password_reset"> | Date | string
    isUsed?: BoolFilter<"password_reset"> | boolean
    createdAt?: DateTimeFilter<"password_reset"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type password_resetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    _count?: password_resetCountOrderByAggregateInput
    _avg?: password_resetAvgOrderByAggregateInput
    _max?: password_resetMaxOrderByAggregateInput
    _min?: password_resetMinOrderByAggregateInput
    _sum?: password_resetSumOrderByAggregateInput
  }

  export type password_resetScalarWhereWithAggregatesInput = {
    AND?: password_resetScalarWhereWithAggregatesInput | password_resetScalarWhereWithAggregatesInput[]
    OR?: password_resetScalarWhereWithAggregatesInput[]
    NOT?: password_resetScalarWhereWithAggregatesInput | password_resetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"password_reset"> | number
    userId?: IntWithAggregatesFilter<"password_reset"> | number
    otpCode?: StringWithAggregatesFilter<"password_reset"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"password_reset"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"password_reset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"password_reset"> | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    type: $Enums.CategoryType
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutCategoryInput
    Transaction?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutCategoryNestedInput
    Transaction?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEmailVerificationInput
  }

  export type EmailVerificationUncheckedCreateInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEmailVerificationNestedInput
  }

  export type EmailVerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateManyMutationInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutInstitutionInput
    User_Institution_createdByToUser: UserCreateNestedOneWithoutInstitution_Institution_createdByToUserInput
    Santri?: SantriCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutInstitutionInput
    Santri?: SantriUncheckedCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserUncheckedCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutInstitutionNestedInput
    User_Institution_createdByToUser?: UserUpdateOneRequiredWithoutInstitution_Institution_createdByToUserNestedInput
    Santri?: SantriUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutInstitutionNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type InstitutionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    name: string
    gender: string
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    User: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    name: string
    gender: string
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    name: string
    gender: string
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SantriCreateInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutSantriInput
    User: UserCreateNestedOneWithoutSantriInput
    Transaction?: TransactionCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountCreateNestedManyWithoutSantriInput
  }

  export type SantriUncheckedCreateInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
  }

  export type SantriUpdateInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutSantriNestedInput
    User?: UserUpdateOneRequiredWithoutSantriNestedInput
    Transaction?: TransactionUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type SantriCreateManyInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SantriUpdateManyMutationInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    Category: CategoryCreateNestedOneWithoutTransactionInput
    User: UserCreateNestedOneWithoutTransactionInput
    Santri: SantriCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutTransactionNestedInput
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Santri?: SantriUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountCreateInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    Santri?: SantriCreateNestedOneWithoutAuth_accountInput
    User: UserCreateNestedOneWithoutAuth_accountInput
  }

  export type auth_accountUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    userId: number
    santriId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type auth_accountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Santri?: SantriUpdateOneWithoutAuth_accountNestedInput
    User?: UserUpdateOneRequiredWithoutAuth_accountNestedInput
  }

  export type auth_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    santriId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountCreateManyInput = {
    id?: number
    username: string
    password: string
    userId: number
    santriId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type auth_accountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    santriId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetCreateInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutPassword_resetInput
  }

  export type password_resetUncheckedCreateInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type password_resetUpdateInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPassword_resetNestedInput
  }

  export type password_resetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetCreateManyInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type password_resetUpdateManyMutationInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
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

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type SantriListRelationFilter = {
    every?: SantriWhereInput
    some?: SantriWhereInput
    none?: SantriWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SantriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type InstitutionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type InstitutionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type Auth_accountListRelationFilter = {
    every?: auth_accountWhereInput
    some?: auth_accountWhereInput
    none?: auth_accountWhereInput
  }

  export type auth_accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SantriNisInstitutionIdCompoundUniqueInput = {
    nis: string
    institutionId: number
  }

  export type SantriCountOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullname?: SortOrder
    kelas?: SortOrder
    gender?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
    waliName?: SortOrder
    institutionName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SantriAvgOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
  }

  export type SantriMaxOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullname?: SortOrder
    kelas?: SortOrder
    gender?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
    waliName?: SortOrder
    institutionName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SantriMinOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullname?: SortOrder
    kelas?: SortOrder
    gender?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
    waliName?: SortOrder
    institutionName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SantriSumOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SantriScalarRelationFilter = {
    is?: SantriWhereInput
    isNot?: SantriWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    createdBy?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    createdBy?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type EmailVerificationListRelationFilter = {
    every?: EmailVerificationWhereInput
    some?: EmailVerificationWhereInput
    none?: EmailVerificationWhereInput
  }

  export type InstitutionListRelationFilter = {
    every?: InstitutionWhereInput
    some?: InstitutionWhereInput
    none?: InstitutionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type InstitutionNullableScalarRelationFilter = {
    is?: InstitutionWhereInput | null
    isNot?: InstitutionWhereInput | null
  }

  export type Password_resetListRelationFilter = {
    every?: password_resetWhereInput
    some?: password_resetWhereInput
    none?: password_resetWhereInput
  }

  export type EmailVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type password_resetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type SantriNullableScalarRelationFilter = {
    is?: SantriWhereInput | null
    isNot?: SantriWhereInput | null
  }

  export type auth_accountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type auth_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    santriId?: SortOrder
  }

  export type auth_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type auth_accountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type auth_accountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    santriId?: SortOrder
  }

  export type password_resetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type password_resetAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type password_resetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type password_resetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type password_resetSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstitutionCreateNestedOneWithoutCategoryInput = {
    create?: XOR<InstitutionCreateWithoutCategoryInput, InstitutionUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutCategoryInput
    connect?: InstitutionWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstitutionUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<InstitutionCreateWithoutCategoryInput, InstitutionUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutCategoryInput
    upsert?: InstitutionUpsertWithoutCategoryInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutCategoryInput, InstitutionUpdateWithoutCategoryInput>, InstitutionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailVerificationInput = {
    create?: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationInput
    upsert?: UserUpsertWithoutEmailVerificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationInput, UserUpdateWithoutEmailVerificationInput>, UserUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type CategoryCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput> | CategoryCreateWithoutInstitutionInput[] | CategoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutInstitutionInput | CategoryCreateOrConnectWithoutInstitutionInput[]
    createMany?: CategoryCreateManyInstitutionInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutInstitution_Institution_createdByToUserInput = {
    create?: XOR<UserCreateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedCreateWithoutInstitution_Institution_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_Institution_createdByToUserInput
    connect?: UserWhereUniqueInput
  }

  export type SantriCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput> | SantriCreateWithoutInstitutionInput[] | SantriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutInstitutionInput | SantriCreateOrConnectWithoutInstitutionInput[]
    createMany?: SantriCreateManyInstitutionInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput = {
    create?: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput> | UserCreateWithoutInstitution_User_institutionIdToInstitutionInput[] | UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput | UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput[]
    createMany?: UserCreateManyInstitution_User_institutionIdToInstitutionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput> | CategoryCreateWithoutInstitutionInput[] | CategoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutInstitutionInput | CategoryCreateOrConnectWithoutInstitutionInput[]
    createMany?: CategoryCreateManyInstitutionInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SantriUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput> | SantriCreateWithoutInstitutionInput[] | SantriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutInstitutionInput | SantriCreateOrConnectWithoutInstitutionInput[]
    createMany?: SantriCreateManyInstitutionInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput = {
    create?: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput> | UserCreateWithoutInstitution_User_institutionIdToInstitutionInput[] | UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput | UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput[]
    createMany?: UserCreateManyInstitution_User_institutionIdToInstitutionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput> | CategoryCreateWithoutInstitutionInput[] | CategoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutInstitutionInput | CategoryCreateOrConnectWithoutInstitutionInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutInstitutionInput | CategoryUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: CategoryCreateManyInstitutionInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutInstitutionInput | CategoryUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutInstitutionInput | CategoryUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutInstitution_Institution_createdByToUserNestedInput = {
    create?: XOR<UserCreateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedCreateWithoutInstitution_Institution_createdByToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_Institution_createdByToUserInput
    upsert?: UserUpsertWithoutInstitution_Institution_createdByToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstitution_Institution_createdByToUserInput, UserUpdateWithoutInstitution_Institution_createdByToUserInput>, UserUncheckedUpdateWithoutInstitution_Institution_createdByToUserInput>
  }

  export type SantriUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput> | SantriCreateWithoutInstitutionInput[] | SantriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutInstitutionInput | SantriCreateOrConnectWithoutInstitutionInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutInstitutionInput | SantriUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: SantriCreateManyInstitutionInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutInstitutionInput | SantriUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutInstitutionInput | SantriUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type UserUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput = {
    create?: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput> | UserCreateWithoutInstitution_User_institutionIdToInstitutionInput[] | UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput | UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput | UserUpsertWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput[]
    createMany?: UserCreateManyInstitution_User_institutionIdToInstitutionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput | UserUpdateWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstitution_User_institutionIdToInstitutionInput | UserUpdateManyWithWhereWithoutInstitution_User_institutionIdToInstitutionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput> | CategoryCreateWithoutInstitutionInput[] | CategoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutInstitutionInput | CategoryCreateOrConnectWithoutInstitutionInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutInstitutionInput | CategoryUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: CategoryCreateManyInstitutionInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutInstitutionInput | CategoryUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutInstitutionInput | CategoryUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SantriUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput> | SantriCreateWithoutInstitutionInput[] | SantriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutInstitutionInput | SantriCreateOrConnectWithoutInstitutionInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutInstitutionInput | SantriUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: SantriCreateManyInstitutionInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutInstitutionInput | SantriUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutInstitutionInput | SantriUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput = {
    create?: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput> | UserCreateWithoutInstitution_User_institutionIdToInstitutionInput[] | UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput | UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput | UserUpsertWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput[]
    createMany?: UserCreateManyInstitution_User_institutionIdToInstitutionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput | UserUpdateWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstitution_User_institutionIdToInstitutionInput | UserUpdateManyWithWhereWithoutInstitution_User_institutionIdToInstitutionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type InstitutionCreateNestedOneWithoutSantriInput = {
    create?: XOR<InstitutionCreateWithoutSantriInput, InstitutionUncheckedCreateWithoutSantriInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutSantriInput
    connect?: InstitutionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantriInput = {
    create?: XOR<UserCreateWithoutSantriInput, UserUncheckedCreateWithoutSantriInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutSantriInput = {
    create?: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput> | TransactionCreateWithoutSantriInput[] | TransactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSantriInput | TransactionCreateOrConnectWithoutSantriInput[]
    createMany?: TransactionCreateManySantriInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type auth_accountCreateNestedManyWithoutSantriInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput> | TransactionCreateWithoutSantriInput[] | TransactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSantriInput | TransactionCreateOrConnectWithoutSantriInput[]
    createMany?: TransactionCreateManySantriInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type auth_accountUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type InstitutionUpdateOneRequiredWithoutSantriNestedInput = {
    create?: XOR<InstitutionCreateWithoutSantriInput, InstitutionUncheckedCreateWithoutSantriInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutSantriInput
    upsert?: InstitutionUpsertWithoutSantriInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutSantriInput, InstitutionUpdateWithoutSantriInput>, InstitutionUncheckedUpdateWithoutSantriInput>
  }

  export type UserUpdateOneRequiredWithoutSantriNestedInput = {
    create?: XOR<UserCreateWithoutSantriInput, UserUncheckedCreateWithoutSantriInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriInput
    upsert?: UserUpsertWithoutSantriInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantriInput, UserUpdateWithoutSantriInput>, UserUncheckedUpdateWithoutSantriInput>
  }

  export type TransactionUpdateManyWithoutSantriNestedInput = {
    create?: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput> | TransactionCreateWithoutSantriInput[] | TransactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSantriInput | TransactionCreateOrConnectWithoutSantriInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSantriInput | TransactionUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: TransactionCreateManySantriInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSantriInput | TransactionUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSantriInput | TransactionUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type auth_accountUpdateManyWithoutSantriNestedInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    upsert?: auth_accountUpsertWithWhereUniqueWithoutSantriInput | auth_accountUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    set?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    disconnect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    delete?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    update?: auth_accountUpdateWithWhereUniqueWithoutSantriInput | auth_accountUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: auth_accountUpdateManyWithWhereWithoutSantriInput | auth_accountUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput> | TransactionCreateWithoutSantriInput[] | TransactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSantriInput | TransactionCreateOrConnectWithoutSantriInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSantriInput | TransactionUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: TransactionCreateManySantriInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSantriInput | TransactionUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSantriInput | TransactionUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type auth_accountUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    upsert?: auth_accountUpsertWithWhereUniqueWithoutSantriInput | auth_accountUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    set?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    disconnect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    delete?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    update?: auth_accountUpdateWithWhereUniqueWithoutSantriInput | auth_accountUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: auth_accountUpdateManyWithWhereWithoutSantriInput | auth_accountUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CategoryCreateWithoutTransactionInput, CategoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type SantriCreateNestedOneWithoutTransactionInput = {
    create?: XOR<SantriCreateWithoutTransactionInput, SantriUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SantriCreateOrConnectWithoutTransactionInput
    connect?: SantriWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionInput, CategoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionInput
    upsert?: CategoryUpsertWithoutTransactionInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionInput, CategoryUpdateWithoutTransactionInput>, CategoryUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type SantriUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<SantriCreateWithoutTransactionInput, SantriUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SantriCreateOrConnectWithoutTransactionInput
    upsert?: SantriUpsertWithoutTransactionInput
    connect?: SantriWhereUniqueInput
    update?: XOR<XOR<SantriUpdateToOneWithWhereWithoutTransactionInput, SantriUpdateWithoutTransactionInput>, SantriUncheckedUpdateWithoutTransactionInput>
  }

  export type EmailVerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }

  export type InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput = {
    create?: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput> | InstitutionCreateWithoutUser_Institution_createdByToUserInput[] | InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput | InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput[]
    createMany?: InstitutionCreateManyUser_Institution_createdByToUserInputEnvelope
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SantriCreateNestedManyWithoutUserInput = {
    create?: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput> | SantriCreateWithoutUserInput[] | SantriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutUserInput | SantriCreateOrConnectWithoutUserInput[]
    createMany?: SantriCreateManyUserInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput = {
    create?: XOR<InstitutionCreateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedCreateWithoutUser_User_institutionIdToInstitutionInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_User_institutionIdToInstitutionInput
    connect?: InstitutionWhereUniqueInput
  }

  export type auth_accountCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type password_resetCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
  }

  export type EmailVerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }

  export type InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput = {
    create?: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput> | InstitutionCreateWithoutUser_Institution_createdByToUserInput[] | InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput | InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput[]
    createMany?: InstitutionCreateManyUser_Institution_createdByToUserInputEnvelope
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SantriUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput> | SantriCreateWithoutUserInput[] | SantriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutUserInput | SantriCreateOrConnectWithoutUserInput[]
    createMany?: SantriCreateManyUserInputEnvelope
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type auth_accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type password_resetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EmailVerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutUserInput | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutUserInput | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutUserInput | EmailVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }

  export type InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput = {
    create?: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput> | InstitutionCreateWithoutUser_Institution_createdByToUserInput[] | InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput | InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput[]
    upsert?: InstitutionUpsertWithWhereUniqueWithoutUser_Institution_createdByToUserInput | InstitutionUpsertWithWhereUniqueWithoutUser_Institution_createdByToUserInput[]
    createMany?: InstitutionCreateManyUser_Institution_createdByToUserInputEnvelope
    set?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    disconnect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    delete?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    update?: InstitutionUpdateWithWhereUniqueWithoutUser_Institution_createdByToUserInput | InstitutionUpdateWithWhereUniqueWithoutUser_Institution_createdByToUserInput[]
    updateMany?: InstitutionUpdateManyWithWhereWithoutUser_Institution_createdByToUserInput | InstitutionUpdateManyWithWhereWithoutUser_Institution_createdByToUserInput[]
    deleteMany?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SantriUpdateManyWithoutUserNestedInput = {
    create?: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput> | SantriCreateWithoutUserInput[] | SantriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutUserInput | SantriCreateOrConnectWithoutUserInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutUserInput | SantriUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SantriCreateManyUserInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutUserInput | SantriUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutUserInput | SantriUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput = {
    create?: XOR<InstitutionCreateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedCreateWithoutUser_User_institutionIdToInstitutionInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_User_institutionIdToInstitutionInput
    upsert?: InstitutionUpsertWithoutUser_User_institutionIdToInstitutionInput
    disconnect?: InstitutionWhereInput | boolean
    delete?: InstitutionWhereInput | boolean
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutUser_User_institutionIdToInstitutionInput, InstitutionUpdateWithoutUser_User_institutionIdToInstitutionInput>, InstitutionUncheckedUpdateWithoutUser_User_institutionIdToInstitutionInput>
  }

  export type auth_accountUpdateManyWithoutUserNestedInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    upsert?: auth_accountUpsertWithWhereUniqueWithoutUserInput | auth_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    set?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    disconnect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    delete?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    update?: auth_accountUpdateWithWhereUniqueWithoutUserInput | auth_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auth_accountUpdateManyWithWhereWithoutUserInput | auth_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
  }

  export type password_resetUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    upsert?: password_resetUpsertWithWhereUniqueWithoutUserInput | password_resetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    set?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    disconnect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    delete?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    update?: password_resetUpdateWithWhereUniqueWithoutUserInput | password_resetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_resetUpdateManyWithWhereWithoutUserInput | password_resetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_resetScalarWhereInput | password_resetScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailVerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutUserInput | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutUserInput | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutUserInput | EmailVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }

  export type InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput = {
    create?: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput> | InstitutionCreateWithoutUser_Institution_createdByToUserInput[] | InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput[]
    connectOrCreate?: InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput | InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput[]
    upsert?: InstitutionUpsertWithWhereUniqueWithoutUser_Institution_createdByToUserInput | InstitutionUpsertWithWhereUniqueWithoutUser_Institution_createdByToUserInput[]
    createMany?: InstitutionCreateManyUser_Institution_createdByToUserInputEnvelope
    set?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    disconnect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    delete?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    connect?: InstitutionWhereUniqueInput | InstitutionWhereUniqueInput[]
    update?: InstitutionUpdateWithWhereUniqueWithoutUser_Institution_createdByToUserInput | InstitutionUpdateWithWhereUniqueWithoutUser_Institution_createdByToUserInput[]
    updateMany?: InstitutionUpdateManyWithWhereWithoutUser_Institution_createdByToUserInput | InstitutionUpdateManyWithWhereWithoutUser_Institution_createdByToUserInput[]
    deleteMany?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SantriUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput> | SantriCreateWithoutUserInput[] | SantriUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SantriCreateOrConnectWithoutUserInput | SantriCreateOrConnectWithoutUserInput[]
    upsert?: SantriUpsertWithWhereUniqueWithoutUserInput | SantriUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SantriCreateManyUserInputEnvelope
    set?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    disconnect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    delete?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    connect?: SantriWhereUniqueInput | SantriWhereUniqueInput[]
    update?: SantriUpdateWithWhereUniqueWithoutUserInput | SantriUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SantriUpdateManyWithWhereWithoutUserInput | SantriUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SantriScalarWhereInput | SantriScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type auth_accountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    upsert?: auth_accountUpsertWithWhereUniqueWithoutUserInput | auth_accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    set?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    disconnect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    delete?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
    update?: auth_accountUpdateWithWhereUniqueWithoutUserInput | auth_accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auth_accountUpdateManyWithWhereWithoutUserInput | auth_accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
  }

  export type password_resetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    upsert?: password_resetUpsertWithWhereUniqueWithoutUserInput | password_resetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    set?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    disconnect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    delete?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
    update?: password_resetUpdateWithWhereUniqueWithoutUserInput | password_resetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_resetUpdateManyWithWhereWithoutUserInput | password_resetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_resetScalarWhereInput | password_resetScalarWhereInput[]
  }

  export type SantriCreateNestedOneWithoutAuth_accountInput = {
    create?: XOR<SantriCreateWithoutAuth_accountInput, SantriUncheckedCreateWithoutAuth_accountInput>
    connectOrCreate?: SantriCreateOrConnectWithoutAuth_accountInput
    connect?: SantriWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuth_accountInput = {
    create?: XOR<UserCreateWithoutAuth_accountInput, UserUncheckedCreateWithoutAuth_accountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_accountInput
    connect?: UserWhereUniqueInput
  }

  export type SantriUpdateOneWithoutAuth_accountNestedInput = {
    create?: XOR<SantriCreateWithoutAuth_accountInput, SantriUncheckedCreateWithoutAuth_accountInput>
    connectOrCreate?: SantriCreateOrConnectWithoutAuth_accountInput
    upsert?: SantriUpsertWithoutAuth_accountInput
    disconnect?: SantriWhereInput | boolean
    delete?: SantriWhereInput | boolean
    connect?: SantriWhereUniqueInput
    update?: XOR<XOR<SantriUpdateToOneWithWhereWithoutAuth_accountInput, SantriUpdateWithoutAuth_accountInput>, SantriUncheckedUpdateWithoutAuth_accountInput>
  }

  export type UserUpdateOneRequiredWithoutAuth_accountNestedInput = {
    create?: XOR<UserCreateWithoutAuth_accountInput, UserUncheckedCreateWithoutAuth_accountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuth_accountInput
    upsert?: UserUpsertWithoutAuth_accountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuth_accountInput, UserUpdateWithoutAuth_accountInput>, UserUncheckedUpdateWithoutAuth_accountInput>
  }

  export type UserCreateNestedOneWithoutPassword_resetInput = {
    create?: XOR<UserCreateWithoutPassword_resetInput, UserUncheckedCreateWithoutPassword_resetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_resetInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPassword_resetNestedInput = {
    create?: XOR<UserCreateWithoutPassword_resetInput, UserUncheckedCreateWithoutPassword_resetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_resetInput
    upsert?: UserUpsertWithoutPassword_resetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPassword_resetInput, UserUpdateWithoutPassword_resetInput>, UserUncheckedUpdateWithoutPassword_resetInput>
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

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type InstitutionCreateWithoutCategoryInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    User_Institution_createdByToUser: UserCreateNestedOneWithoutInstitution_Institution_createdByToUserInput
    Santri?: SantriCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    Santri?: SantriUncheckedCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserUncheckedCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutCategoryInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutCategoryInput, InstitutionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Santri: SantriCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    santriId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutCategoryInput = {
    update: XOR<InstitutionUpdateWithoutCategoryInput, InstitutionUncheckedUpdateWithoutCategoryInput>
    create: XOR<InstitutionCreateWithoutCategoryInput, InstitutionUncheckedCreateWithoutCategoryInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutCategoryInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutCategoryInput, InstitutionUncheckedUpdateWithoutCategoryInput>
  }

  export type InstitutionUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User_Institution_createdByToUser?: UserUpdateOneRequiredWithoutInstitution_Institution_createdByToUserNestedInput
    Santri?: SantriUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Santri?: SantriUncheckedUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    santriId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    type?: EnumCategoryTypeFilter<"Transaction"> | $Enums.CategoryType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    createdBy?: IntFilter<"Transaction"> | number
    isDeleted?: BoolFilter<"Transaction"> | boolean
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserCreateWithoutEmailVerificationInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
  }

  export type UserUpsertWithoutEmailVerificationInput = {
    update: XOR<UserUpdateWithoutEmailVerificationInput, UserUncheckedUpdateWithoutEmailVerificationInput>
    create: XOR<UserCreateWithoutEmailVerificationInput, UserUncheckedCreateWithoutEmailVerificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationInput, UserUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type UserUpdateWithoutEmailVerificationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutInstitutionInput = {
    name: string
    type: $Enums.CategoryType
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutInstitutionInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutInstitutionInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput>
  }

  export type CategoryCreateManyInstitutionInputEnvelope = {
    data: CategoryCreateManyInstitutionInput | CategoryCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInstitution_Institution_createdByToUserInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstitution_Institution_createdByToUserInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstitution_Institution_createdByToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedCreateWithoutInstitution_Institution_createdByToUserInput>
  }

  export type SantriCreateWithoutInstitutionInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutSantriInput
    Transaction?: TransactionCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountCreateNestedManyWithoutSantriInput
  }

  export type SantriUncheckedCreateWithoutInstitutionInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
  }

  export type SantriCreateOrConnectWithoutInstitutionInput = {
    where: SantriWhereUniqueInput
    create: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput>
  }

  export type SantriCreateManyInstitutionInputEnvelope = {
    data: SantriCreateManyInstitutionInput | SantriCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInstitution_User_institutionIdToInstitutionInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstitution_User_institutionIdToInstitutionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput>
  }

  export type UserCreateManyInstitution_User_institutionIdToInstitutionInputEnvelope = {
    data: UserCreateManyInstitution_User_institutionIdToInstitutionInput | UserCreateManyInstitution_User_institutionIdToInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutInstitutionInput, CategoryUncheckedUpdateWithoutInstitutionInput>
    create: XOR<CategoryCreateWithoutInstitutionInput, CategoryUncheckedCreateWithoutInstitutionInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutInstitutionInput, CategoryUncheckedUpdateWithoutInstitutionInput>
  }

  export type CategoryUpdateManyWithWhereWithoutInstitutionInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    institutionId?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type UserUpsertWithoutInstitution_Institution_createdByToUserInput = {
    update: XOR<UserUpdateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedUpdateWithoutInstitution_Institution_createdByToUserInput>
    create: XOR<UserCreateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedCreateWithoutInstitution_Institution_createdByToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstitution_Institution_createdByToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstitution_Institution_createdByToUserInput, UserUncheckedUpdateWithoutInstitution_Institution_createdByToUserInput>
  }

  export type UserUpdateWithoutInstitution_Institution_createdByToUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstitution_Institution_createdByToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SantriUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: SantriWhereUniqueInput
    update: XOR<SantriUpdateWithoutInstitutionInput, SantriUncheckedUpdateWithoutInstitutionInput>
    create: XOR<SantriCreateWithoutInstitutionInput, SantriUncheckedCreateWithoutInstitutionInput>
  }

  export type SantriUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: SantriWhereUniqueInput
    data: XOR<SantriUpdateWithoutInstitutionInput, SantriUncheckedUpdateWithoutInstitutionInput>
  }

  export type SantriUpdateManyWithWhereWithoutInstitutionInput = {
    where: SantriScalarWhereInput
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type SantriScalarWhereInput = {
    AND?: SantriScalarWhereInput | SantriScalarWhereInput[]
    OR?: SantriScalarWhereInput[]
    NOT?: SantriScalarWhereInput | SantriScalarWhereInput[]
    id?: IntFilter<"Santri"> | number
    nis?: StringFilter<"Santri"> | string
    fullname?: StringFilter<"Santri"> | string
    kelas?: StringFilter<"Santri"> | string
    gender?: StringFilter<"Santri"> | string
    waliId?: IntFilter<"Santri"> | number
    institutionId?: IntFilter<"Santri"> | number
    waliName?: StringNullableFilter<"Santri"> | string | null
    institutionName?: StringNullableFilter<"Santri"> | string | null
    isActive?: BoolFilter<"Santri"> | boolean
    createdAt?: DateTimeFilter<"Santri"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedUpdateWithoutInstitution_User_institutionIdToInstitutionInput>
    create: XOR<UserCreateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedCreateWithoutInstitution_User_institutionIdToInstitutionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInstitution_User_institutionIdToInstitutionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInstitution_User_institutionIdToInstitutionInput, UserUncheckedUpdateWithoutInstitution_User_institutionIdToInstitutionInput>
  }

  export type UserUpdateManyWithWhereWithoutInstitution_User_institutionIdToInstitutionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    institutionId?: IntNullableFilter<"User"> | number | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutNotificationInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstitutionCreateWithoutSantriInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutInstitutionInput
    User_Institution_createdByToUser: UserCreateNestedOneWithoutInstitution_Institution_createdByToUserInput
    User_User_institutionIdToInstitution?: UserCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutSantriInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserUncheckedCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutSantriInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutSantriInput, InstitutionUncheckedCreateWithoutSantriInput>
  }

  export type UserCreateWithoutSantriInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSantriInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSantriInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantriInput, UserUncheckedCreateWithoutSantriInput>
  }

  export type TransactionCreateWithoutSantriInput = {
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    Category: CategoryCreateNestedOneWithoutTransactionInput
    User: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSantriInput = {
    id?: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSantriInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput>
  }

  export type TransactionCreateManySantriInputEnvelope = {
    data: TransactionCreateManySantriInput | TransactionCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type auth_accountCreateWithoutSantriInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutAuth_accountInput
  }

  export type auth_accountUncheckedCreateWithoutSantriInput = {
    id?: number
    username: string
    password: string
    userId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type auth_accountCreateOrConnectWithoutSantriInput = {
    where: auth_accountWhereUniqueInput
    create: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput>
  }

  export type auth_accountCreateManySantriInputEnvelope = {
    data: auth_accountCreateManySantriInput | auth_accountCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutSantriInput = {
    update: XOR<InstitutionUpdateWithoutSantriInput, InstitutionUncheckedUpdateWithoutSantriInput>
    create: XOR<InstitutionCreateWithoutSantriInput, InstitutionUncheckedCreateWithoutSantriInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutSantriInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutSantriInput, InstitutionUncheckedUpdateWithoutSantriInput>
  }

  export type InstitutionUpdateWithoutSantriInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutInstitutionNestedInput
    User_Institution_createdByToUser?: UserUpdateOneRequiredWithoutInstitution_Institution_createdByToUserNestedInput
    User_User_institutionIdToInstitution?: UserUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type UserUpsertWithoutSantriInput = {
    update: XOR<UserUpdateWithoutSantriInput, UserUncheckedUpdateWithoutSantriInput>
    create: XOR<UserCreateWithoutSantriInput, UserUncheckedCreateWithoutSantriInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantriInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantriInput, UserUncheckedUpdateWithoutSantriInput>
  }

  export type UserUpdateWithoutSantriInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutSantriInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSantriInput, TransactionUncheckedUpdateWithoutSantriInput>
    create: XOR<TransactionCreateWithoutSantriInput, TransactionUncheckedCreateWithoutSantriInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSantriInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSantriInput, TransactionUncheckedUpdateWithoutSantriInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSantriInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSantriInput>
  }

  export type auth_accountUpsertWithWhereUniqueWithoutSantriInput = {
    where: auth_accountWhereUniqueInput
    update: XOR<auth_accountUpdateWithoutSantriInput, auth_accountUncheckedUpdateWithoutSantriInput>
    create: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput>
  }

  export type auth_accountUpdateWithWhereUniqueWithoutSantriInput = {
    where: auth_accountWhereUniqueInput
    data: XOR<auth_accountUpdateWithoutSantriInput, auth_accountUncheckedUpdateWithoutSantriInput>
  }

  export type auth_accountUpdateManyWithWhereWithoutSantriInput = {
    where: auth_accountScalarWhereInput
    data: XOR<auth_accountUpdateManyMutationInput, auth_accountUncheckedUpdateManyWithoutSantriInput>
  }

  export type auth_accountScalarWhereInput = {
    AND?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
    OR?: auth_accountScalarWhereInput[]
    NOT?: auth_accountScalarWhereInput | auth_accountScalarWhereInput[]
    id?: IntFilter<"auth_account"> | number
    username?: StringFilter<"auth_account"> | string
    password?: StringFilter<"auth_account"> | string
    userId?: IntFilter<"auth_account"> | number
    santriId?: IntNullableFilter<"auth_account"> | number | null
    isActive?: BoolFilter<"auth_account"> | boolean
    createdAt?: DateTimeFilter<"auth_account"> | Date | string
  }

  export type CategoryCreateWithoutTransactionInput = {
    name: string
    type: $Enums.CategoryType
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutTransactionInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionInput, CategoryUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutTransactionInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type SantriCreateWithoutTransactionInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutSantriInput
    User: UserCreateNestedOneWithoutSantriInput
    auth_account?: auth_accountCreateNestedManyWithoutSantriInput
  }

  export type SantriUncheckedCreateWithoutTransactionInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
  }

  export type SantriCreateOrConnectWithoutTransactionInput = {
    where: SantriWhereUniqueInput
    create: XOR<SantriCreateWithoutTransactionInput, SantriUncheckedCreateWithoutTransactionInput>
  }

  export type CategoryUpsertWithoutTransactionInput = {
    update: XOR<CategoryUpdateWithoutTransactionInput, CategoryUncheckedUpdateWithoutTransactionInput>
    create: XOR<CategoryCreateWithoutTransactionInput, CategoryUncheckedCreateWithoutTransactionInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionInput, CategoryUncheckedUpdateWithoutTransactionInput>
  }

  export type CategoryUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SantriUpsertWithoutTransactionInput = {
    update: XOR<SantriUpdateWithoutTransactionInput, SantriUncheckedUpdateWithoutTransactionInput>
    create: XOR<SantriCreateWithoutTransactionInput, SantriUncheckedCreateWithoutTransactionInput>
    where?: SantriWhereInput
  }

  export type SantriUpdateToOneWithWhereWithoutTransactionInput = {
    where?: SantriWhereInput
    data: XOR<SantriUpdateWithoutTransactionInput, SantriUncheckedUpdateWithoutTransactionInput>
  }

  export type SantriUpdateWithoutTransactionInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutSantriNestedInput
    User?: UserUpdateOneRequiredWithoutSantriNestedInput
    auth_account?: auth_accountUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_account?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type EmailVerificationCreateWithoutUserInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type EmailVerificationUncheckedCreateWithoutUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type EmailVerificationCreateOrConnectWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationCreateManyUserInputEnvelope = {
    data: EmailVerificationCreateManyUserInput | EmailVerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionCreateWithoutUser_Institution_createdByToUserInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutInstitutionInput
    Santri?: SantriCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutInstitutionInput
    Santri?: SantriUncheckedCreateNestedManyWithoutInstitutionInput
    User_User_institutionIdToInstitution?: UserUncheckedCreateNestedManyWithoutInstitution_User_institutionIdToInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUser_Institution_createdByToUserInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput>
  }

  export type InstitutionCreateManyUser_Institution_createdByToUserInputEnvelope = {
    data: InstitutionCreateManyUser_Institution_createdByToUserInput | InstitutionCreateManyUser_Institution_createdByToUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    name: string
    gender: string
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    gender: string
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type SantriCreateWithoutUserInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutSantriInput
    Transaction?: TransactionCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountCreateNestedManyWithoutSantriInput
  }

  export type SantriUncheckedCreateWithoutUserInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutSantriInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
  }

  export type SantriCreateOrConnectWithoutUserInput = {
    where: SantriWhereUniqueInput
    create: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput>
  }

  export type SantriCreateManyUserInputEnvelope = {
    data: SantriCreateManyUserInput | SantriCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    Category: CategoryCreateNestedOneWithoutTransactionInput
    Santri: SantriCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionCreateWithoutUser_User_institutionIdToInstitutionInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutInstitutionInput
    User_Institution_createdByToUser: UserCreateNestedOneWithoutInstitution_Institution_createdByToUserInput
    Santri?: SantriCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUser_User_institutionIdToInstitutionInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutInstitutionInput
    Santri?: SantriUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUser_User_institutionIdToInstitutionInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedCreateWithoutUser_User_institutionIdToInstitutionInput>
  }

  export type auth_accountCreateWithoutUserInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    Santri?: SantriCreateNestedOneWithoutAuth_accountInput
  }

  export type auth_accountUncheckedCreateWithoutUserInput = {
    id?: number
    username: string
    password: string
    santriId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type auth_accountCreateOrConnectWithoutUserInput = {
    where: auth_accountWhereUniqueInput
    create: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput>
  }

  export type auth_accountCreateManyUserInputEnvelope = {
    data: auth_accountCreateManyUserInput | auth_accountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type password_resetCreateWithoutUserInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type password_resetUncheckedCreateWithoutUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type password_resetCreateOrConnectWithoutUserInput = {
    where: password_resetWhereUniqueInput
    create: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput>
  }

  export type password_resetCreateManyUserInputEnvelope = {
    data: password_resetCreateManyUserInput | password_resetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    update: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    data: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationScalarWhereInput
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationScalarWhereInput = {
    AND?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    OR?: EmailVerificationScalarWhereInput[]
    NOT?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    id?: IntFilter<"EmailVerification"> | number
    userId?: IntFilter<"EmailVerification"> | number
    otpCode?: StringFilter<"EmailVerification"> | string
    expiredAt?: DateTimeFilter<"EmailVerification"> | Date | string
    isUsed?: BoolFilter<"EmailVerification"> | boolean
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
  }

  export type InstitutionUpsertWithWhereUniqueWithoutUser_Institution_createdByToUserInput = {
    where: InstitutionWhereUniqueInput
    update: XOR<InstitutionUpdateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedUpdateWithoutUser_Institution_createdByToUserInput>
    create: XOR<InstitutionCreateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedCreateWithoutUser_Institution_createdByToUserInput>
  }

  export type InstitutionUpdateWithWhereUniqueWithoutUser_Institution_createdByToUserInput = {
    where: InstitutionWhereUniqueInput
    data: XOR<InstitutionUpdateWithoutUser_Institution_createdByToUserInput, InstitutionUncheckedUpdateWithoutUser_Institution_createdByToUserInput>
  }

  export type InstitutionUpdateManyWithWhereWithoutUser_Institution_createdByToUserInput = {
    where: InstitutionScalarWhereInput
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserInput>
  }

  export type InstitutionScalarWhereInput = {
    AND?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
    OR?: InstitutionScalarWhereInput[]
    NOT?: InstitutionScalarWhereInput | InstitutionScalarWhereInput[]
    id?: IntFilter<"Institution"> | number
    name?: StringFilter<"Institution"> | string
    createdBy?: IntFilter<"Institution"> | number
    isActive?: BoolFilter<"Institution"> | boolean
    createdAt?: DateTimeFilter<"Institution"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SantriUpsertWithWhereUniqueWithoutUserInput = {
    where: SantriWhereUniqueInput
    update: XOR<SantriUpdateWithoutUserInput, SantriUncheckedUpdateWithoutUserInput>
    create: XOR<SantriCreateWithoutUserInput, SantriUncheckedCreateWithoutUserInput>
  }

  export type SantriUpdateWithWhereUniqueWithoutUserInput = {
    where: SantriWhereUniqueInput
    data: XOR<SantriUpdateWithoutUserInput, SantriUncheckedUpdateWithoutUserInput>
  }

  export type SantriUpdateManyWithWhereWithoutUserInput = {
    where: SantriScalarWhereInput
    data: XOR<SantriUpdateManyMutationInput, SantriUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type InstitutionUpsertWithoutUser_User_institutionIdToInstitutionInput = {
    update: XOR<InstitutionUpdateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedUpdateWithoutUser_User_institutionIdToInstitutionInput>
    create: XOR<InstitutionCreateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedCreateWithoutUser_User_institutionIdToInstitutionInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutUser_User_institutionIdToInstitutionInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutUser_User_institutionIdToInstitutionInput, InstitutionUncheckedUpdateWithoutUser_User_institutionIdToInstitutionInput>
  }

  export type InstitutionUpdateWithoutUser_User_institutionIdToInstitutionInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutInstitutionNestedInput
    User_Institution_createdByToUser?: UserUpdateOneRequiredWithoutInstitution_Institution_createdByToUserNestedInput
    Santri?: SantriUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUser_User_institutionIdToInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutInstitutionNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type auth_accountUpsertWithWhereUniqueWithoutUserInput = {
    where: auth_accountWhereUniqueInput
    update: XOR<auth_accountUpdateWithoutUserInput, auth_accountUncheckedUpdateWithoutUserInput>
    create: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput>
  }

  export type auth_accountUpdateWithWhereUniqueWithoutUserInput = {
    where: auth_accountWhereUniqueInput
    data: XOR<auth_accountUpdateWithoutUserInput, auth_accountUncheckedUpdateWithoutUserInput>
  }

  export type auth_accountUpdateManyWithWhereWithoutUserInput = {
    where: auth_accountScalarWhereInput
    data: XOR<auth_accountUpdateManyMutationInput, auth_accountUncheckedUpdateManyWithoutUserInput>
  }

  export type password_resetUpsertWithWhereUniqueWithoutUserInput = {
    where: password_resetWhereUniqueInput
    update: XOR<password_resetUpdateWithoutUserInput, password_resetUncheckedUpdateWithoutUserInput>
    create: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput>
  }

  export type password_resetUpdateWithWhereUniqueWithoutUserInput = {
    where: password_resetWhereUniqueInput
    data: XOR<password_resetUpdateWithoutUserInput, password_resetUncheckedUpdateWithoutUserInput>
  }

  export type password_resetUpdateManyWithWhereWithoutUserInput = {
    where: password_resetScalarWhereInput
    data: XOR<password_resetUpdateManyMutationInput, password_resetUncheckedUpdateManyWithoutUserInput>
  }

  export type password_resetScalarWhereInput = {
    AND?: password_resetScalarWhereInput | password_resetScalarWhereInput[]
    OR?: password_resetScalarWhereInput[]
    NOT?: password_resetScalarWhereInput | password_resetScalarWhereInput[]
    id?: IntFilter<"password_reset"> | number
    userId?: IntFilter<"password_reset"> | number
    otpCode?: StringFilter<"password_reset"> | string
    expiredAt?: DateTimeFilter<"password_reset"> | Date | string
    isUsed?: BoolFilter<"password_reset"> | boolean
    createdAt?: DateTimeFilter<"password_reset"> | Date | string
  }

  export type SantriCreateWithoutAuth_accountInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Institution: InstitutionCreateNestedOneWithoutSantriInput
    User: UserCreateNestedOneWithoutSantriInput
    Transaction?: TransactionCreateNestedManyWithoutSantriInput
  }

  export type SantriUncheckedCreateWithoutAuth_accountInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutSantriInput
  }

  export type SantriCreateOrConnectWithoutAuth_accountInput = {
    where: SantriWhereUniqueInput
    create: XOR<SantriCreateWithoutAuth_accountInput, SantriUncheckedCreateWithoutAuth_accountInput>
  }

  export type UserCreateWithoutAuth_accountInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    password_reset?: password_resetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuth_accountInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    password_reset?: password_resetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuth_accountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuth_accountInput, UserUncheckedCreateWithoutAuth_accountInput>
  }

  export type SantriUpsertWithoutAuth_accountInput = {
    update: XOR<SantriUpdateWithoutAuth_accountInput, SantriUncheckedUpdateWithoutAuth_accountInput>
    create: XOR<SantriCreateWithoutAuth_accountInput, SantriUncheckedCreateWithoutAuth_accountInput>
    where?: SantriWhereInput
  }

  export type SantriUpdateToOneWithWhereWithoutAuth_accountInput = {
    where?: SantriWhereInput
    data: XOR<SantriUpdateWithoutAuth_accountInput, SantriUncheckedUpdateWithoutAuth_accountInput>
  }

  export type SantriUpdateWithoutAuth_accountInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutSantriNestedInput
    User?: UserUpdateOneRequiredWithoutSantriNestedInput
    Transaction?: TransactionUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateWithoutAuth_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutAuth_accountInput = {
    update: XOR<UserUpdateWithoutAuth_accountInput, UserUncheckedUpdateWithoutAuth_accountInput>
    create: XOR<UserCreateWithoutAuth_accountInput, UserUncheckedCreateWithoutAuth_accountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuth_accountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuth_accountInput, UserUncheckedUpdateWithoutAuth_accountInput>
  }

  export type UserUpdateWithoutAuth_accountInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuth_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPassword_resetInput = {
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedOneWithoutUserInput
    Santri?: SantriCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Institution_User_institutionIdToInstitution?: InstitutionCreateNestedOneWithoutUser_User_institutionIdToInstitutionInput
    auth_account?: auth_accountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPassword_resetInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    EmailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedCreateNestedManyWithoutUser_Institution_createdByToUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Santri?: SantriUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    auth_account?: auth_accountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPassword_resetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPassword_resetInput, UserUncheckedCreateWithoutPassword_resetInput>
  }

  export type UserUpsertWithoutPassword_resetInput = {
    update: XOR<UserUpdateWithoutPassword_resetInput, UserUncheckedUpdateWithoutPassword_resetInput>
    create: XOR<UserCreateWithoutPassword_resetInput, UserUncheckedCreateWithoutPassword_resetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPassword_resetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPassword_resetInput, UserUncheckedUpdateWithoutPassword_resetInput>
  }

  export type UserUpdateWithoutPassword_resetInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Institution_User_institutionIdToInstitution?: InstitutionUpdateOneWithoutUser_User_institutionIdToInstitutionNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPassword_resetInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateManyCategoryInput = {
    id?: number
    santriId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Santri?: SantriUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInstitutionInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SantriCreateManyInstitutionInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserCreateManyInstitution_User_institutionIdToInstitutionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.UserRole
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutInstitutionInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriUpdateWithoutInstitutionInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSantriNestedInput
    Transaction?: TransactionUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateManyWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutInstitution_User_institutionIdToInstitutionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateOneWithoutUserNestedInput
    Santri?: SantriUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstitution_User_institutionIdToInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmailVerification?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
    Institution_Institution_createdByToUser?: InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    password_reset?: password_resetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManySantriInput = {
    id?: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type auth_accountCreateManySantriInput = {
    id?: number
    username: string
    password: string
    userId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutSantriInput = {
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutTransactionNestedInput
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountUpdateWithoutSantriInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutAuth_accountNestedInput
  }

  export type auth_accountUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountUncheckedUpdateManyWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type InstitutionCreateManyUser_Institution_createdByToUserInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type SantriCreateManyUserInput = {
    id?: number
    nis: string
    fullname: string
    kelas: string
    gender: string
    institutionId: number
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.CategoryType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type auth_accountCreateManyUserInput = {
    id?: number
    username: string
    password: string
    santriId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type password_resetCreateManyUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateWithoutUserInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUpdateWithoutUser_Institution_createdByToUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutInstitutionNestedInput
    Santri?: SantriUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUser_Institution_createdByToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutInstitutionNestedInput
    Santri?: SantriUncheckedUpdateManyWithoutInstitutionNestedInput
    User_User_institutionIdToInstitution?: UserUncheckedUpdateManyWithoutInstitution_User_institutionIdToInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateManyWithoutUser_Institution_createdByToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriUpdateWithoutUserInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Institution?: InstitutionUpdateOneRequiredWithoutSantriNestedInput
    Transaction?: TransactionUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutSantriNestedInput
    auth_account?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type SantriUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    institutionId?: IntFieldUpdateOperationsInput | number
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutTransactionNestedInput
    Santri?: SantriUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Santri?: SantriUpdateOneWithoutAuth_accountNestedInput
  }

  export type auth_accountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    santriId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    santriId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetUpdateWithoutUserInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
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