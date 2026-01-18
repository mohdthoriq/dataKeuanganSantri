
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
 * Model email_verification
 * 
 */
export type email_verification = $Result.DefaultSelection<Prisma.$email_verificationPayload>
/**
 * Model auth_account
 * 
 */
export type auth_account = $Result.DefaultSelection<Prisma.$auth_accountPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model institution
 * 
 */
export type institution = $Result.DefaultSelection<Prisma.$institutionPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model password_reset
 * 
 */
export type password_reset = $Result.DefaultSelection<Prisma.$password_resetPayload>
/**
 * Model profile
 * 
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>
/**
 * Model santri
 * 
 */
export type santri = $Result.DefaultSelection<Prisma.$santriPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  ADMIN: 'ADMIN',
  WALI_SANTRI: 'WALI_SANTRI'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const category_type: {
  PEMASUKAN: 'PEMASUKAN',
  PENGELUARAN: 'PENGELUARAN'
};

export type category_type = (typeof category_type)[keyof typeof category_type]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type category_type = $Enums.category_type

export const category_type: typeof $Enums.category_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Email_verifications
 * const email_verifications = await prisma.email_verification.findMany()
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
   * // Fetch zero or more Email_verifications
   * const email_verifications = await prisma.email_verification.findMany()
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
   * `prisma.email_verification`: Exposes CRUD operations for the **email_verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_verifications
    * const email_verifications = await prisma.email_verification.findMany()
    * ```
    */
  get email_verification(): Prisma.email_verificationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.institutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset`: Exposes CRUD operations for the **password_reset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_resets
    * const password_resets = await prisma.password_reset.findMany()
    * ```
    */
  get password_reset(): Prisma.password_resetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.santri`: Exposes CRUD operations for the **santri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Santris
    * const santris = await prisma.santri.findMany()
    * ```
    */
  get santri(): Prisma.santriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
    email_verification: 'email_verification',
    auth_account: 'auth_account',
    category: 'category',
    institution: 'institution',
    notification: 'notification',
    password_reset: 'password_reset',
    profile: 'profile',
    santri: 'santri',
    transaction: 'transaction',
    user: 'user'
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
      modelProps: "email_verification" | "auth_account" | "category" | "institution" | "notification" | "password_reset" | "profile" | "santri" | "transaction" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      email_verification: {
        payload: Prisma.$email_verificationPayload<ExtArgs>
        fields: Prisma.email_verificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_verificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_verificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findFirst: {
            args: Prisma.email_verificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_verificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          findMany: {
            args: Prisma.email_verificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>[]
          }
          create: {
            args: Prisma.email_verificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          createMany: {
            args: Prisma.email_verificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.email_verificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>[]
          }
          delete: {
            args: Prisma.email_verificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          update: {
            args: Prisma.email_verificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          deleteMany: {
            args: Prisma.email_verificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_verificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.email_verificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>[]
          }
          upsert: {
            args: Prisma.email_verificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_verificationPayload>
          }
          aggregate: {
            args: Prisma.Email_verificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_verification>
          }
          groupBy: {
            args: Prisma.email_verificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_verificationCountArgs<ExtArgs>
            result: $Utils.Optional<Email_verificationCountAggregateOutputType> | number
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
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      institution: {
        payload: Prisma.$institutionPayload<ExtArgs>
        fields: Prisma.institutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.institutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.institutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          findFirst: {
            args: Prisma.institutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.institutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          findMany: {
            args: Prisma.institutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>[]
          }
          create: {
            args: Prisma.institutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          createMany: {
            args: Prisma.institutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.institutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>[]
          }
          delete: {
            args: Prisma.institutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          update: {
            args: Prisma.institutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          deleteMany: {
            args: Prisma.institutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.institutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.institutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>[]
          }
          upsert: {
            args: Prisma.institutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$institutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.institutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.institutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>
        fields: Prisma.profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.profileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      santri: {
        payload: Prisma.$santriPayload<ExtArgs>
        fields: Prisma.santriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.santriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.santriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          findFirst: {
            args: Prisma.santriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.santriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          findMany: {
            args: Prisma.santriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>[]
          }
          create: {
            args: Prisma.santriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          createMany: {
            args: Prisma.santriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.santriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>[]
          }
          delete: {
            args: Prisma.santriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          update: {
            args: Prisma.santriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          deleteMany: {
            args: Prisma.santriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.santriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.santriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>[]
          }
          upsert: {
            args: Prisma.santriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$santriPayload>
          }
          aggregate: {
            args: Prisma.SantriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSantri>
          }
          groupBy: {
            args: Prisma.santriGroupByArgs<ExtArgs>
            result: $Utils.Optional<SantriGroupByOutputType>[]
          }
          count: {
            args: Prisma.santriCountArgs<ExtArgs>
            result: $Utils.Optional<SantriCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    email_verification?: email_verificationOmit
    auth_account?: auth_accountOmit
    category?: categoryOmit
    institution?: institutionOmit
    notification?: notificationOmit
    password_reset?: password_resetOmit
    profile?: profileOmit
    santri?: santriOmit
    transaction?: transactionOmit
    user?: userOmit
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
    transactions: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
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
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    categories: number
    santri: number
    users: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | InstitutionCountOutputTypeCountCategoriesArgs
    santri?: boolean | InstitutionCountOutputTypeCountSantriArgs
    users?: boolean | InstitutionCountOutputTypeCountUsersArgs
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
  export type InstitutionCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: santriWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type SantriCountOutputType
   */

  export type SantriCountOutputType = {
    authAccounts: number
    transactions: number
  }

  export type SantriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | SantriCountOutputTypeCountAuthAccountsArgs
    transactions?: boolean | SantriCountOutputTypeCountTransactionsArgs
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
  export type SantriCountOutputTypeCountAuthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountWhereInput
  }

  /**
   * SantriCountOutputType without action
   */
  export type SantriCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authAccounts: number
    emailVerifications: number
    createdInstitutions: number
    notifications: number
    passwordResets: number
    santri: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | UserCountOutputTypeCountAuthAccountsArgs
    emailVerifications?: boolean | UserCountOutputTypeCountEmailVerificationsArgs
    createdInstitutions?: boolean | UserCountOutputTypeCountCreatedInstitutionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    santri?: boolean | UserCountOutputTypeCountSantriArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
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
  export type UserCountOutputTypeCountAuthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_accountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedInstitutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: institutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_resetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: santriWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model email_verification
   */

  export type AggregateEmail_verification = {
    _count: Email_verificationCountAggregateOutputType | null
    _avg: Email_verificationAvgAggregateOutputType | null
    _sum: Email_verificationSumAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  export type Email_verificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Email_verificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Email_verificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type Email_verificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otpCode: string | null
    expiredAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type Email_verificationCountAggregateOutputType = {
    id: number
    userId: number
    otpCode: number
    expiredAt: number
    isUsed: number
    createdAt: number
    _all: number
  }


  export type Email_verificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Email_verificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Email_verificationMinAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type Email_verificationMaxAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type Email_verificationCountAggregateInputType = {
    id?: true
    userId?: true
    otpCode?: true
    expiredAt?: true
    isUsed?: true
    createdAt?: true
    _all?: true
  }

  export type Email_verificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verification to aggregate.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_verifications
    **/
    _count?: true | Email_verificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Email_verificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Email_verificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_verificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_verificationMaxAggregateInputType
  }

  export type GetEmail_verificationAggregateType<T extends Email_verificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_verification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_verification[P]>
      : GetScalarType<T[P], AggregateEmail_verification[P]>
  }




  export type email_verificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_verificationWhereInput
    orderBy?: email_verificationOrderByWithAggregationInput | email_verificationOrderByWithAggregationInput[]
    by: Email_verificationScalarFieldEnum[] | Email_verificationScalarFieldEnum
    having?: email_verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_verificationCountAggregateInputType | true
    _avg?: Email_verificationAvgAggregateInputType
    _sum?: Email_verificationSumAggregateInputType
    _min?: Email_verificationMinAggregateInputType
    _max?: Email_verificationMaxAggregateInputType
  }

  export type Email_verificationGroupByOutputType = {
    id: number
    userId: number
    otpCode: string
    expiredAt: Date
    isUsed: boolean
    createdAt: Date
    _count: Email_verificationCountAggregateOutputType | null
    _avg: Email_verificationAvgAggregateOutputType | null
    _sum: Email_verificationSumAggregateOutputType | null
    _min: Email_verificationMinAggregateOutputType | null
    _max: Email_verificationMaxAggregateOutputType | null
  }

  type GetEmail_verificationGroupByPayload<T extends email_verificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_verificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_verificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
            : GetScalarType<T[P], Email_verificationGroupByOutputType[P]>
        }
      >
    >


  export type email_verificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification"]>

  export type email_verificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification"]>

  export type email_verificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email_verification"]>

  export type email_verificationSelectScalar = {
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }

  export type email_verificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otpCode" | "expiredAt" | "isUsed" | "createdAt", ExtArgs["result"]["email_verification"]>
  export type email_verificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type email_verificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type email_verificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $email_verificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_verification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otpCode: string
      expiredAt: Date
      isUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["email_verification"]>
    composites: {}
  }

  type email_verificationGetPayload<S extends boolean | null | undefined | email_verificationDefaultArgs> = $Result.GetResult<Prisma.$email_verificationPayload, S>

  type email_verificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_verificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_verificationCountAggregateInputType | true
    }

  export interface email_verificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_verification'], meta: { name: 'email_verification' } }
    /**
     * Find zero or one Email_verification that matches the filter.
     * @param {email_verificationFindUniqueArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_verificationFindUniqueArgs>(args: SelectSubset<T, email_verificationFindUniqueArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_verificationFindUniqueOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_verificationFindUniqueOrThrowArgs>(args: SelectSubset<T, email_verificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_verificationFindFirstArgs>(args?: SelectSubset<T, email_verificationFindFirstArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindFirstOrThrowArgs} args - Arguments to find a Email_verification
     * @example
     * // Get one Email_verification
     * const email_verification = await prisma.email_verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_verificationFindFirstOrThrowArgs>(args?: SelectSubset<T, email_verificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_verifications
     * const email_verifications = await prisma.email_verification.findMany()
     * 
     * // Get first 10 Email_verifications
     * const email_verifications = await prisma.email_verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_verificationWithIdOnly = await prisma.email_verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_verificationFindManyArgs>(args?: SelectSubset<T, email_verificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_verification.
     * @param {email_verificationCreateArgs} args - Arguments to create a Email_verification.
     * @example
     * // Create one Email_verification
     * const Email_verification = await prisma.email_verification.create({
     *   data: {
     *     // ... data to create a Email_verification
     *   }
     * })
     * 
     */
    create<T extends email_verificationCreateArgs>(args: SelectSubset<T, email_verificationCreateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_verifications.
     * @param {email_verificationCreateManyArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verification = await prisma.email_verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_verificationCreateManyArgs>(args?: SelectSubset<T, email_verificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Email_verifications and returns the data saved in the database.
     * @param {email_verificationCreateManyAndReturnArgs} args - Arguments to create many Email_verifications.
     * @example
     * // Create many Email_verifications
     * const email_verification = await prisma.email_verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Email_verifications and only return the `id`
     * const email_verificationWithIdOnly = await prisma.email_verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends email_verificationCreateManyAndReturnArgs>(args?: SelectSubset<T, email_verificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email_verification.
     * @param {email_verificationDeleteArgs} args - Arguments to delete one Email_verification.
     * @example
     * // Delete one Email_verification
     * const Email_verification = await prisma.email_verification.delete({
     *   where: {
     *     // ... filter to delete one Email_verification
     *   }
     * })
     * 
     */
    delete<T extends email_verificationDeleteArgs>(args: SelectSubset<T, email_verificationDeleteArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_verification.
     * @param {email_verificationUpdateArgs} args - Arguments to update one Email_verification.
     * @example
     * // Update one Email_verification
     * const email_verification = await prisma.email_verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_verificationUpdateArgs>(args: SelectSubset<T, email_verificationUpdateArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_verifications.
     * @param {email_verificationDeleteManyArgs} args - Arguments to filter Email_verifications to delete.
     * @example
     * // Delete a few Email_verifications
     * const { count } = await prisma.email_verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_verificationDeleteManyArgs>(args?: SelectSubset<T, email_verificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_verifications
     * const email_verification = await prisma.email_verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_verificationUpdateManyArgs>(args: SelectSubset<T, email_verificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_verifications and returns the data updated in the database.
     * @param {email_verificationUpdateManyAndReturnArgs} args - Arguments to update many Email_verifications.
     * @example
     * // Update many Email_verifications
     * const email_verification = await prisma.email_verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Email_verifications and only return the `id`
     * const email_verificationWithIdOnly = await prisma.email_verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends email_verificationUpdateManyAndReturnArgs>(args: SelectSubset<T, email_verificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email_verification.
     * @param {email_verificationUpsertArgs} args - Arguments to update or create a Email_verification.
     * @example
     * // Update or create a Email_verification
     * const email_verification = await prisma.email_verification.upsert({
     *   create: {
     *     // ... data to create a Email_verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_verification we want to update
     *   }
     * })
     */
    upsert<T extends email_verificationUpsertArgs>(args: SelectSubset<T, email_verificationUpsertArgs<ExtArgs>>): Prisma__email_verificationClient<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationCountArgs} args - Arguments to filter Email_verifications to count.
     * @example
     * // Count the number of Email_verifications
     * const count = await prisma.email_verification.count({
     *   where: {
     *     // ... the filter for the Email_verifications we want to count
     *   }
     * })
    **/
    count<T extends email_verificationCountArgs>(
      args?: Subset<T, email_verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_verificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_verificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Email_verificationAggregateArgs>(args: Subset<T, Email_verificationAggregateArgs>): Prisma.PrismaPromise<GetEmail_verificationAggregateType<T>>

    /**
     * Group by Email_verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_verificationGroupByArgs} args - Group by arguments.
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
      T extends email_verificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_verificationGroupByArgs['orderBy'] }
        : { orderBy?: email_verificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, email_verificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_verificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_verification model
   */
  readonly fields: email_verificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_verificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the email_verification model
   */
  interface email_verificationFieldRefs {
    readonly id: FieldRef<"email_verification", 'Int'>
    readonly userId: FieldRef<"email_verification", 'Int'>
    readonly otpCode: FieldRef<"email_verification", 'String'>
    readonly expiredAt: FieldRef<"email_verification", 'DateTime'>
    readonly isUsed: FieldRef<"email_verification", 'Boolean'>
    readonly createdAt: FieldRef<"email_verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_verification findUnique
   */
  export type email_verificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findUniqueOrThrow
   */
  export type email_verificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification findFirst
   */
  export type email_verificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findFirstOrThrow
   */
  export type email_verificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verification to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_verifications.
     */
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification findMany
   */
  export type email_verificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter, which email_verifications to fetch.
     */
    where?: email_verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_verifications to fetch.
     */
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_verifications.
     */
    cursor?: email_verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_verifications.
     */
    skip?: number
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * email_verification create
   */
  export type email_verificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The data needed to create a email_verification.
     */
    data: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
  }

  /**
   * email_verification createMany
   */
  export type email_verificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationCreateManyInput | email_verificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_verification createManyAndReturn
   */
  export type email_verificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * The data used to create many email_verifications.
     */
    data: email_verificationCreateManyInput | email_verificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verification update
   */
  export type email_verificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The data needed to update a email_verification.
     */
    data: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
    /**
     * Choose, which email_verification to update.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification updateMany
   */
  export type email_verificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationUpdateManyMutationInput, email_verificationUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
  }

  /**
   * email_verification updateManyAndReturn
   */
  export type email_verificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * The data used to update email_verifications.
     */
    data: XOR<email_verificationUpdateManyMutationInput, email_verificationUncheckedUpdateManyInput>
    /**
     * Filter which email_verifications to update
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * email_verification upsert
   */
  export type email_verificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * The filter to search for the email_verification to update in case it exists.
     */
    where: email_verificationWhereUniqueInput
    /**
     * In case the email_verification found by the `where` argument doesn't exist, create a new email_verification with this data.
     */
    create: XOR<email_verificationCreateInput, email_verificationUncheckedCreateInput>
    /**
     * In case the email_verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_verificationUpdateInput, email_verificationUncheckedUpdateInput>
  }

  /**
   * email_verification delete
   */
  export type email_verificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    /**
     * Filter which email_verification to delete.
     */
    where: email_verificationWhereUniqueInput
  }

  /**
   * email_verification deleteMany
   */
  export type email_verificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_verifications to delete
     */
    where?: email_verificationWhereInput
    /**
     * Limit how many email_verifications to delete.
     */
    limit?: number
  }

  /**
   * email_verification without action
   */
  export type email_verificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
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
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_account"]>

  export type auth_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_account"]>

  export type auth_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userId?: boolean
    santriId?: boolean
    isActive?: boolean
    createdAt?: boolean
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
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
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type auth_accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type auth_accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | auth_account$santriArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $auth_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_account"
    objects: {
      santri: Prisma.$santriPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
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
    santri<T extends auth_account$santriArgs<ExtArgs> = {}>(args?: Subset<T, auth_account$santriArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * auth_account.santri
   */
  export type auth_account$santriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    where?: santriWhereInput
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
   * Model category
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
    type: $Enums.category_type | null
    institutionId: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.category_type | null
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
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
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




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
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
    type: $Enums.category_type
    institutionId: number
    isActive: boolean
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    transactions?: boolean | category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    institution?: boolean | institutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    institution?: boolean | institutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    institutionId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "institutionId" | "isActive" | "createdAt", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    transactions?: boolean | category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | institutionDefaultArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | institutionDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      institution: Prisma.$institutionPayload<ExtArgs>
      transactions: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.category_type
      institutionId: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
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
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
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
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
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
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
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
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
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
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends institutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, institutionDefaultArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly type: FieldRef<"category", 'category_type'>
    readonly institutionId: FieldRef<"category", 'Int'>
    readonly isActive: FieldRef<"category", 'Boolean'>
    readonly createdAt: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.transactions
   */
  export type category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model institution
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
     * Filter which institution to aggregate.
     */
    where?: institutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: institutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned institutions
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




  export type institutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: institutionWhereInput
    orderBy?: institutionOrderByWithAggregationInput | institutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: institutionScalarWhereWithAggregatesInput
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

  type GetInstitutionGroupByPayload<T extends institutionGroupByArgs> = Prisma.PrismaPromise<
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


  export type institutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    categories?: boolean | institution$categoriesArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | institution$santriArgs<ExtArgs>
    users?: boolean | institution$usersArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type institutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    admin?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type institutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    admin?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type institutionSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type institutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "isActive" | "createdAt", ExtArgs["result"]["institution"]>
  export type institutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | institution$categoriesArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | institution$santriArgs<ExtArgs>
    users?: boolean | institution$usersArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type institutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | userDefaultArgs<ExtArgs>
  }
  export type institutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $institutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "institution"
    objects: {
      categories: Prisma.$categoryPayload<ExtArgs>[]
      admin: Prisma.$userPayload<ExtArgs>
      santri: Prisma.$santriPayload<ExtArgs>[]
      users: Prisma.$userPayload<ExtArgs>[]
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

  type institutionGetPayload<S extends boolean | null | undefined | institutionDefaultArgs> = $Result.GetResult<Prisma.$institutionPayload, S>

  type institutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<institutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface institutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['institution'], meta: { name: 'institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {institutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends institutionFindUniqueArgs>(args: SelectSubset<T, institutionFindUniqueArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {institutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends institutionFindUniqueOrThrowArgs>(args: SelectSubset<T, institutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends institutionFindFirstArgs>(args?: SelectSubset<T, institutionFindFirstArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends institutionFindFirstOrThrowArgs>(args?: SelectSubset<T, institutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends institutionFindManyArgs>(args?: SelectSubset<T, institutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {institutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends institutionCreateArgs>(args: SelectSubset<T, institutionCreateArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {institutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends institutionCreateManyArgs>(args?: SelectSubset<T, institutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {institutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
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
    createManyAndReturn<T extends institutionCreateManyAndReturnArgs>(args?: SelectSubset<T, institutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {institutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends institutionDeleteArgs>(args: SelectSubset<T, institutionDeleteArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {institutionUpdateArgs} args - Arguments to update one Institution.
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
    update<T extends institutionUpdateArgs>(args: SelectSubset<T, institutionUpdateArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {institutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends institutionDeleteManyArgs>(args?: SelectSubset<T, institutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends institutionUpdateManyArgs>(args: SelectSubset<T, institutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {institutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
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
    updateManyAndReturn<T extends institutionUpdateManyAndReturnArgs>(args: SelectSubset<T, institutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {institutionUpsertArgs} args - Arguments to update or create a Institution.
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
    upsert<T extends institutionUpsertArgs>(args: SelectSubset<T, institutionUpsertArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {institutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends institutionCountArgs>(
      args?: Subset<T, institutionCountArgs>,
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
     * @param {institutionGroupByArgs} args - Group by arguments.
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
      T extends institutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: institutionGroupByArgs['orderBy'] }
        : { orderBy?: institutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, institutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the institution model
   */
  readonly fields: institutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__institutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends institution$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, institution$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends institution$santriArgs<ExtArgs> = {}>(args?: Subset<T, institution$santriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends institution$usersArgs<ExtArgs> = {}>(args?: Subset<T, institution$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the institution model
   */
  interface institutionFieldRefs {
    readonly id: FieldRef<"institution", 'Int'>
    readonly name: FieldRef<"institution", 'String'>
    readonly createdBy: FieldRef<"institution", 'Int'>
    readonly isActive: FieldRef<"institution", 'Boolean'>
    readonly createdAt: FieldRef<"institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * institution findUnique
   */
  export type institutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput
  }

  /**
   * institution findUniqueOrThrow
   */
  export type institutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter, which institution to fetch.
     */
    where: institutionWhereUniqueInput
  }

  /**
   * institution findFirst
   */
  export type institutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * institution findFirstOrThrow
   */
  export type institutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter, which institution to fetch.
     */
    where?: institutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for institutions.
     */
    cursor?: institutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * institution findMany
   */
  export type institutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter, which institutions to fetch.
     */
    where?: institutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of institutions to fetch.
     */
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing institutions.
     */
    cursor?: institutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * institution create
   */
  export type institutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * The data needed to create a institution.
     */
    data: XOR<institutionCreateInput, institutionUncheckedCreateInput>
  }

  /**
   * institution createMany
   */
  export type institutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many institutions.
     */
    data: institutionCreateManyInput | institutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * institution createManyAndReturn
   */
  export type institutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * The data used to create many institutions.
     */
    data: institutionCreateManyInput | institutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * institution update
   */
  export type institutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * The data needed to update a institution.
     */
    data: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>
    /**
     * Choose, which institution to update.
     */
    where: institutionWhereUniqueInput
  }

  /**
   * institution updateMany
   */
  export type institutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update institutions.
     */
    data: XOR<institutionUpdateManyMutationInput, institutionUncheckedUpdateManyInput>
    /**
     * Filter which institutions to update
     */
    where?: institutionWhereInput
    /**
     * Limit how many institutions to update.
     */
    limit?: number
  }

  /**
   * institution updateManyAndReturn
   */
  export type institutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * The data used to update institutions.
     */
    data: XOR<institutionUpdateManyMutationInput, institutionUncheckedUpdateManyInput>
    /**
     * Filter which institutions to update
     */
    where?: institutionWhereInput
    /**
     * Limit how many institutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * institution upsert
   */
  export type institutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * The filter to search for the institution to update in case it exists.
     */
    where: institutionWhereUniqueInput
    /**
     * In case the institution found by the `where` argument doesn't exist, create a new institution with this data.
     */
    create: XOR<institutionCreateInput, institutionUncheckedCreateInput>
    /**
     * In case the institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<institutionUpdateInput, institutionUncheckedUpdateInput>
  }

  /**
   * institution delete
   */
  export type institutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    /**
     * Filter which institution to delete.
     */
    where: institutionWhereUniqueInput
  }

  /**
   * institution deleteMany
   */
  export type institutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which institutions to delete
     */
    where?: institutionWhereInput
    /**
     * Limit how many institutions to delete.
     */
    limit?: number
  }

  /**
   * institution.categories
   */
  export type institution$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * institution.santri
   */
  export type institution$santriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    where?: santriWhereInput
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    cursor?: santriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * institution.users
   */
  export type institution$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * institution without action
   */
  export type institutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
  }


  /**
   * Model notification
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
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
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




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
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

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
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


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
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

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
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
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
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
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
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
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
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
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
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
     * @param {notificationGroupByArgs} args - Group by arguments.
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
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly userId: FieldRef<"notification", 'Int'>
    readonly title: FieldRef<"notification", 'String'>
    readonly message: FieldRef<"notification", 'String'>
    readonly isRead: FieldRef<"notification", 'Boolean'>
    readonly createdAt: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
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
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset"]>

  export type password_resetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset"]>

  export type password_resetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otpCode?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
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
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type password_resetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type password_resetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $password_resetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
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
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Model profile
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
    occupation: string | null
    phone: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gender: string | null
    address: string | null
    profile_picture_url: string | null
    public_id: string | null
    userId: number | null
    occupation: string | null
    phone: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    address: number
    profile_picture_url: number
    public_id: number
    userId: number
    occupation: number
    phone: number
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
    occupation?: true
    phone?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    address?: true
    profile_picture_url?: true
    public_id?: true
    userId?: true
    occupation?: true
    phone?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    address?: true
    profile_picture_url?: true
    public_id?: true
    userId?: true
    occupation?: true
    phone?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
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




  export type profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profileWhereInput
    orderBy?: profileOrderByWithAggregationInput | profileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: profileScalarWhereWithAggregatesInput
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
    gender: string | null
    address: string
    profile_picture_url: string | null
    public_id: string | null
    userId: number
    occupation: string | null
    phone: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends profileGroupByArgs> = Prisma.PrismaPromise<
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


  export type profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    occupation?: boolean
    phone?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    occupation?: boolean
    phone?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    occupation?: boolean
    phone?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type profileSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    address?: boolean
    profile_picture_url?: boolean
    public_id?: boolean
    userId?: boolean
    occupation?: boolean
    phone?: boolean
  }

  export type profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "address" | "profile_picture_url" | "public_id" | "userId" | "occupation" | "phone", ExtArgs["result"]["profile"]>
  export type profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gender: string | null
      address: string
      profile_picture_url: string | null
      public_id: string | null
      userId: number
      occupation: string | null
      phone: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type profileGetPayload<S extends boolean | null | undefined | profileDefaultArgs> = $Result.GetResult<Prisma.$profilePayload, S>

  type profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile'], meta: { name: 'profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profileFindUniqueArgs>(args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(args: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profileFindFirstArgs>(args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends profileFindManyArgs>(args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends profileCreateArgs>(args: SelectSubset<T, profileCreateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profileCreateManyArgs>(args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
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
    createManyAndReturn<T extends profileCreateManyAndReturnArgs>(args?: SelectSubset<T, profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends profileDeleteArgs>(args: SelectSubset<T, profileDeleteArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
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
    update<T extends profileUpdateArgs>(args: SelectSubset<T, profileUpdateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profileDeleteManyArgs>(args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends profileUpdateManyArgs>(args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
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
    updateManyAndReturn<T extends profileUpdateManyAndReturnArgs>(args: SelectSubset<T, profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
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
    upsert<T extends profileUpsertArgs>(args: SelectSubset<T, profileUpsertArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
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
     * @param {profileGroupByArgs} args - Group by arguments.
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
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile model
   */
  readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profile model
   */
  interface profileFieldRefs {
    readonly id: FieldRef<"profile", 'Int'>
    readonly name: FieldRef<"profile", 'String'>
    readonly gender: FieldRef<"profile", 'String'>
    readonly address: FieldRef<"profile", 'String'>
    readonly profile_picture_url: FieldRef<"profile", 'String'>
    readonly public_id: FieldRef<"profile", 'String'>
    readonly userId: FieldRef<"profile", 'Int'>
    readonly occupation: FieldRef<"profile", 'String'>
    readonly phone: FieldRef<"profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findMany
   */
  export type profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile create
   */
  export type profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }

  /**
   * profile createMany
   */
  export type profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile createManyAndReturn
   */
  export type profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile update
   */
  export type profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profile updateManyAndReturn
   */
  export type profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile upsert
   */
  export type profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }

  /**
   * profile delete
   */
  export type profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profile without action
   */
  export type profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
  }


  /**
   * Model santri
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
     * Filter which santri to aggregate.
     */
    where?: santriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of santris to fetch.
     */
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: santriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned santris
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




  export type santriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: santriWhereInput
    orderBy?: santriOrderByWithAggregationInput | santriOrderByWithAggregationInput[]
    by: SantriScalarFieldEnum[] | SantriScalarFieldEnum
    having?: santriScalarWhereWithAggregatesInput
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

  type GetSantriGroupByPayload<T extends santriGroupByArgs> = Prisma.PrismaPromise<
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


  export type santriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    authAccounts?: boolean | santri$authAccountsArgs<ExtArgs>
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
    transactions?: boolean | santri$transactionsArgs<ExtArgs>
    _count?: boolean | SantriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type santriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type santriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["santri"]>

  export type santriSelectScalar = {
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

  export type santriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "fullname" | "kelas" | "gender" | "waliId" | "institutionId" | "waliName" | "institutionName" | "isActive" | "createdAt", ExtArgs["result"]["santri"]>
  export type santriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | santri$authAccountsArgs<ExtArgs>
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
    transactions?: boolean | santri$transactionsArgs<ExtArgs>
    _count?: boolean | SantriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type santriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
  }
  export type santriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | institutionDefaultArgs<ExtArgs>
    wali?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $santriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "santri"
    objects: {
      authAccounts: Prisma.$auth_accountPayload<ExtArgs>[]
      institution: Prisma.$institutionPayload<ExtArgs>
      wali: Prisma.$userPayload<ExtArgs>
      transactions: Prisma.$transactionPayload<ExtArgs>[]
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

  type santriGetPayload<S extends boolean | null | undefined | santriDefaultArgs> = $Result.GetResult<Prisma.$santriPayload, S>

  type santriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<santriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SantriCountAggregateInputType | true
    }

  export interface santriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['santri'], meta: { name: 'santri' } }
    /**
     * Find zero or one Santri that matches the filter.
     * @param {santriFindUniqueArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends santriFindUniqueArgs>(args: SelectSubset<T, santriFindUniqueArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Santri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {santriFindUniqueOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends santriFindUniqueOrThrowArgs>(args: SelectSubset<T, santriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {santriFindFirstArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends santriFindFirstArgs>(args?: SelectSubset<T, santriFindFirstArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Santri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {santriFindFirstOrThrowArgs} args - Arguments to find a Santri
     * @example
     * // Get one Santri
     * const santri = await prisma.santri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends santriFindFirstOrThrowArgs>(args?: SelectSubset<T, santriFindFirstOrThrowArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Santris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {santriFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends santriFindManyArgs>(args?: SelectSubset<T, santriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Santri.
     * @param {santriCreateArgs} args - Arguments to create a Santri.
     * @example
     * // Create one Santri
     * const Santri = await prisma.santri.create({
     *   data: {
     *     // ... data to create a Santri
     *   }
     * })
     * 
     */
    create<T extends santriCreateArgs>(args: SelectSubset<T, santriCreateArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Santris.
     * @param {santriCreateManyArgs} args - Arguments to create many Santris.
     * @example
     * // Create many Santris
     * const santri = await prisma.santri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends santriCreateManyArgs>(args?: SelectSubset<T, santriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Santris and returns the data saved in the database.
     * @param {santriCreateManyAndReturnArgs} args - Arguments to create many Santris.
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
    createManyAndReturn<T extends santriCreateManyAndReturnArgs>(args?: SelectSubset<T, santriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Santri.
     * @param {santriDeleteArgs} args - Arguments to delete one Santri.
     * @example
     * // Delete one Santri
     * const Santri = await prisma.santri.delete({
     *   where: {
     *     // ... filter to delete one Santri
     *   }
     * })
     * 
     */
    delete<T extends santriDeleteArgs>(args: SelectSubset<T, santriDeleteArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Santri.
     * @param {santriUpdateArgs} args - Arguments to update one Santri.
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
    update<T extends santriUpdateArgs>(args: SelectSubset<T, santriUpdateArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Santris.
     * @param {santriDeleteManyArgs} args - Arguments to filter Santris to delete.
     * @example
     * // Delete a few Santris
     * const { count } = await prisma.santri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends santriDeleteManyArgs>(args?: SelectSubset<T, santriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {santriUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends santriUpdateManyArgs>(args: SelectSubset<T, santriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Santris and returns the data updated in the database.
     * @param {santriUpdateManyAndReturnArgs} args - Arguments to update many Santris.
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
    updateManyAndReturn<T extends santriUpdateManyAndReturnArgs>(args: SelectSubset<T, santriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Santri.
     * @param {santriUpsertArgs} args - Arguments to update or create a Santri.
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
    upsert<T extends santriUpsertArgs>(args: SelectSubset<T, santriUpsertArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Santris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {santriCountArgs} args - Arguments to filter Santris to count.
     * @example
     * // Count the number of Santris
     * const count = await prisma.santri.count({
     *   where: {
     *     // ... the filter for the Santris we want to count
     *   }
     * })
    **/
    count<T extends santriCountArgs>(
      args?: Subset<T, santriCountArgs>,
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
     * @param {santriGroupByArgs} args - Group by arguments.
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
      T extends santriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: santriGroupByArgs['orderBy'] }
        : { orderBy?: santriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, santriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSantriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the santri model
   */
  readonly fields: santriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for santri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__santriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authAccounts<T extends santri$authAccountsArgs<ExtArgs> = {}>(args?: Subset<T, santri$authAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    institution<T extends institutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, institutionDefaultArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wali<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends santri$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, santri$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the santri model
   */
  interface santriFieldRefs {
    readonly id: FieldRef<"santri", 'Int'>
    readonly nis: FieldRef<"santri", 'String'>
    readonly fullname: FieldRef<"santri", 'String'>
    readonly kelas: FieldRef<"santri", 'String'>
    readonly gender: FieldRef<"santri", 'String'>
    readonly waliId: FieldRef<"santri", 'Int'>
    readonly institutionId: FieldRef<"santri", 'Int'>
    readonly waliName: FieldRef<"santri", 'String'>
    readonly institutionName: FieldRef<"santri", 'String'>
    readonly isActive: FieldRef<"santri", 'Boolean'>
    readonly createdAt: FieldRef<"santri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * santri findUnique
   */
  export type santriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter, which santri to fetch.
     */
    where: santriWhereUniqueInput
  }

  /**
   * santri findUniqueOrThrow
   */
  export type santriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter, which santri to fetch.
     */
    where: santriWhereUniqueInput
  }

  /**
   * santri findFirst
   */
  export type santriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter, which santri to fetch.
     */
    where?: santriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of santris to fetch.
     */
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for santris.
     */
    cursor?: santriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * santri findFirstOrThrow
   */
  export type santriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter, which santri to fetch.
     */
    where?: santriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of santris to fetch.
     */
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for santris.
     */
    cursor?: santriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` santris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of santris.
     */
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * santri findMany
   */
  export type santriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter, which santris to fetch.
     */
    where?: santriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of santris to fetch.
     */
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing santris.
     */
    cursor?: santriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` santris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` santris.
     */
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * santri create
   */
  export type santriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * The data needed to create a santri.
     */
    data: XOR<santriCreateInput, santriUncheckedCreateInput>
  }

  /**
   * santri createMany
   */
  export type santriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many santris.
     */
    data: santriCreateManyInput | santriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * santri createManyAndReturn
   */
  export type santriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * The data used to create many santris.
     */
    data: santriCreateManyInput | santriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * santri update
   */
  export type santriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * The data needed to update a santri.
     */
    data: XOR<santriUpdateInput, santriUncheckedUpdateInput>
    /**
     * Choose, which santri to update.
     */
    where: santriWhereUniqueInput
  }

  /**
   * santri updateMany
   */
  export type santriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update santris.
     */
    data: XOR<santriUpdateManyMutationInput, santriUncheckedUpdateManyInput>
    /**
     * Filter which santris to update
     */
    where?: santriWhereInput
    /**
     * Limit how many santris to update.
     */
    limit?: number
  }

  /**
   * santri updateManyAndReturn
   */
  export type santriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * The data used to update santris.
     */
    data: XOR<santriUpdateManyMutationInput, santriUncheckedUpdateManyInput>
    /**
     * Filter which santris to update
     */
    where?: santriWhereInput
    /**
     * Limit how many santris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * santri upsert
   */
  export type santriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * The filter to search for the santri to update in case it exists.
     */
    where: santriWhereUniqueInput
    /**
     * In case the santri found by the `where` argument doesn't exist, create a new santri with this data.
     */
    create: XOR<santriCreateInput, santriUncheckedCreateInput>
    /**
     * In case the santri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<santriUpdateInput, santriUncheckedUpdateInput>
  }

  /**
   * santri delete
   */
  export type santriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    /**
     * Filter which santri to delete.
     */
    where: santriWhereUniqueInput
  }

  /**
   * santri deleteMany
   */
  export type santriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which santris to delete
     */
    where?: santriWhereInput
    /**
     * Limit how many santris to delete.
     */
    limit?: number
  }

  /**
   * santri.authAccounts
   */
  export type santri$authAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * santri.transactions
   */
  export type santri$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * santri without action
   */
  export type santriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
  }


  /**
   * Model transaction
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
    type: $Enums.category_type | null
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
    type: $Enums.category_type | null
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
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
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




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
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
    type: $Enums.category_type
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

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
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


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
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

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "santriId" | "categoryId" | "type" | "amount" | "description" | "transactionDate" | "createdBy" | "isDeleted" | "createdAt", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    admin?: boolean | userDefaultArgs<ExtArgs>
    santri?: boolean | santriDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      admin: Prisma.$userPayload<ExtArgs>
      santri: Prisma.$santriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      santriId: number
      categoryId: number
      type: $Enums.category_type
      amount: Prisma.Decimal
      description: string | null
      transactionDate: Date
      createdBy: number
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
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
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
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
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
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
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
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
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
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
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends santriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, santriDefaultArgs<ExtArgs>>): Prisma__santriClient<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'Int'>
    readonly santriId: FieldRef<"transaction", 'Int'>
    readonly categoryId: FieldRef<"transaction", 'Int'>
    readonly type: FieldRef<"transaction", 'category_type'>
    readonly amount: FieldRef<"transaction", 'Decimal'>
    readonly description: FieldRef<"transaction", 'String'>
    readonly transactionDate: FieldRef<"transaction", 'DateTime'>
    readonly createdBy: FieldRef<"transaction", 'Int'>
    readonly isDeleted: FieldRef<"transaction", 'Boolean'>
    readonly createdAt: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model user
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
    role: $Enums.user_role | null
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
    role: $Enums.user_role | null
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
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
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
    role: $Enums.user_role
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

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    authAccounts?: boolean | user$authAccountsArgs<ExtArgs>
    emailVerifications?: boolean | user$emailVerificationsArgs<ExtArgs>
    createdInstitutions?: boolean | user$createdInstitutionsArgs<ExtArgs>
    notifications?: boolean | user$notificationsArgs<ExtArgs>
    passwordResets?: boolean | user$passwordResetsArgs<ExtArgs>
    profile?: boolean | user$profileArgs<ExtArgs>
    santri?: boolean | user$santriArgs<ExtArgs>
    transactions?: boolean | user$transactionsArgs<ExtArgs>
    institution?: boolean | user$institutionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    institution?: boolean | user$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    institutionId?: boolean
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: boolean
    institution?: boolean | user$institutionArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
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

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "institutionId" | "isEmailVerified" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | user$authAccountsArgs<ExtArgs>
    emailVerifications?: boolean | user$emailVerificationsArgs<ExtArgs>
    createdInstitutions?: boolean | user$createdInstitutionsArgs<ExtArgs>
    notifications?: boolean | user$notificationsArgs<ExtArgs>
    passwordResets?: boolean | user$passwordResetsArgs<ExtArgs>
    profile?: boolean | user$profileArgs<ExtArgs>
    santri?: boolean | user$santriArgs<ExtArgs>
    transactions?: boolean | user$transactionsArgs<ExtArgs>
    institution?: boolean | user$institutionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | user$institutionArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | user$institutionArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      authAccounts: Prisma.$auth_accountPayload<ExtArgs>[]
      emailVerifications: Prisma.$email_verificationPayload<ExtArgs>[]
      createdInstitutions: Prisma.$institutionPayload<ExtArgs>[]
      notifications: Prisma.$notificationPayload<ExtArgs>[]
      passwordResets: Prisma.$password_resetPayload<ExtArgs>[]
      profile: Prisma.$profilePayload<ExtArgs> | null
      santri: Prisma.$santriPayload<ExtArgs>[]
      transactions: Prisma.$transactionPayload<ExtArgs>[]
      institution: Prisma.$institutionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.user_role
      institutionId: number | null
      isEmailVerified: boolean
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authAccounts<T extends user$authAccountsArgs<ExtArgs> = {}>(args?: Subset<T, user$authAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerifications<T extends user$emailVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, user$emailVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_verificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdInstitutions<T extends user$createdInstitutionsArgs<ExtArgs> = {}>(args?: Subset<T, user$createdInstitutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends user$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, user$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends user$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, user$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_resetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends user$profileArgs<ExtArgs> = {}>(args?: Subset<T, user$profileArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    santri<T extends user$santriArgs<ExtArgs> = {}>(args?: Subset<T, user$santriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$santriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends user$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, user$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    institution<T extends user$institutionArgs<ExtArgs> = {}>(args?: Subset<T, user$institutionArgs<ExtArgs>>): Prisma__institutionClient<$Result.GetResult<Prisma.$institutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly institutionId: FieldRef<"user", 'Int'>
    readonly isEmailVerified: FieldRef<"user", 'Boolean'>
    readonly isActive: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.authAccounts
   */
  export type user$authAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * user.emailVerifications
   */
  export type user$emailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_verification
     */
    select?: email_verificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_verification
     */
    omit?: email_verificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: email_verificationInclude<ExtArgs> | null
    where?: email_verificationWhereInput
    orderBy?: email_verificationOrderByWithRelationInput | email_verificationOrderByWithRelationInput[]
    cursor?: email_verificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Email_verificationScalarFieldEnum | Email_verificationScalarFieldEnum[]
  }

  /**
   * user.createdInstitutions
   */
  export type user$createdInstitutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    where?: institutionWhereInput
    orderBy?: institutionOrderByWithRelationInput | institutionOrderByWithRelationInput[]
    cursor?: institutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * user.notifications
   */
  export type user$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user.passwordResets
   */
  export type user$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * user.profile
   */
  export type user$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    where?: profileWhereInput
  }

  /**
   * user.santri
   */
  export type user$santriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the santri
     */
    select?: santriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the santri
     */
    omit?: santriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: santriInclude<ExtArgs> | null
    where?: santriWhereInput
    orderBy?: santriOrderByWithRelationInput | santriOrderByWithRelationInput[]
    cursor?: santriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriScalarFieldEnum | SantriScalarFieldEnum[]
  }

  /**
   * user.transactions
   */
  export type user$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * user.institution
   */
  export type user$institutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the institution
     */
    select?: institutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the institution
     */
    omit?: institutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: institutionInclude<ExtArgs> | null
    where?: institutionWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const Email_verificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otpCode: 'otpCode',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type Email_verificationScalarFieldEnum = (typeof Email_verificationScalarFieldEnum)[keyof typeof Email_verificationScalarFieldEnum]


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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    institutionId: 'institutionId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


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


  export const Password_resetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otpCode: 'otpCode',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type Password_resetScalarFieldEnum = (typeof Password_resetScalarFieldEnum)[keyof typeof Password_resetScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    address: 'address',
    profile_picture_url: 'profile_picture_url',
    public_id: 'public_id',
    userId: 'userId',
    occupation: 'occupation',
    phone: 'phone'
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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'category_type'
   */
  export type Enumcategory_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category_type'>
    


  /**
   * Reference to a field of type 'category_type[]'
   */
  export type ListEnumcategory_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category_type[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


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


  export type email_verificationWhereInput = {
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    id?: IntFilter<"email_verification"> | number
    userId?: IntFilter<"email_verification"> | number
    otpCode?: StringFilter<"email_verification"> | string
    expiredAt?: DateTimeFilter<"email_verification"> | Date | string
    isUsed?: BoolFilter<"email_verification"> | boolean
    createdAt?: DateTimeFilter<"email_verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type email_verificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type email_verificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: email_verificationWhereInput | email_verificationWhereInput[]
    OR?: email_verificationWhereInput[]
    NOT?: email_verificationWhereInput | email_verificationWhereInput[]
    userId?: IntFilter<"email_verification"> | number
    otpCode?: StringFilter<"email_verification"> | string
    expiredAt?: DateTimeFilter<"email_verification"> | Date | string
    isUsed?: BoolFilter<"email_verification"> | boolean
    createdAt?: DateTimeFilter<"email_verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type email_verificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    _count?: email_verificationCountOrderByAggregateInput
    _avg?: email_verificationAvgOrderByAggregateInput
    _max?: email_verificationMaxOrderByAggregateInput
    _min?: email_verificationMinOrderByAggregateInput
    _sum?: email_verificationSumOrderByAggregateInput
  }

  export type email_verificationScalarWhereWithAggregatesInput = {
    AND?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    OR?: email_verificationScalarWhereWithAggregatesInput[]
    NOT?: email_verificationScalarWhereWithAggregatesInput | email_verificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"email_verification"> | number
    userId?: IntWithAggregatesFilter<"email_verification"> | number
    otpCode?: StringWithAggregatesFilter<"email_verification"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"email_verification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"email_verification"> | Date | string
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
    santri?: XOR<SantriNullableScalarRelationFilter, santriWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type auth_accountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    santriId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    santri?: santriOrderByWithRelationInput
    user?: userOrderByWithRelationInput
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
    santri?: XOR<SantriNullableScalarRelationFilter, santriWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
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

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    type?: Enumcategory_typeFilter<"category"> | $Enums.category_type
    institutionId?: IntFilter<"category"> | number
    isActive?: BoolFilter<"category"> | boolean
    createdAt?: DateTimeFilter<"category"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, institutionWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    institution?: institutionOrderByWithRelationInput
    transactions?: transactionOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    type?: Enumcategory_typeFilter<"category"> | $Enums.category_type
    institutionId?: IntFilter<"category"> | number
    isActive?: BoolFilter<"category"> | boolean
    createdAt?: DateTimeFilter<"category"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, institutionWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    type?: Enumcategory_typeWithAggregatesFilter<"category"> | $Enums.category_type
    institutionId?: IntWithAggregatesFilter<"category"> | number
    isActive?: BoolWithAggregatesFilter<"category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type institutionWhereInput = {
    AND?: institutionWhereInput | institutionWhereInput[]
    OR?: institutionWhereInput[]
    NOT?: institutionWhereInput | institutionWhereInput[]
    id?: IntFilter<"institution"> | number
    name?: StringFilter<"institution"> | string
    createdBy?: IntFilter<"institution"> | number
    isActive?: BoolFilter<"institution"> | boolean
    createdAt?: DateTimeFilter<"institution"> | Date | string
    categories?: CategoryListRelationFilter
    admin?: XOR<UserScalarRelationFilter, userWhereInput>
    santri?: SantriListRelationFilter
    users?: UserListRelationFilter
  }

  export type institutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    categories?: categoryOrderByRelationAggregateInput
    admin?: userOrderByWithRelationInput
    santri?: santriOrderByRelationAggregateInput
    users?: userOrderByRelationAggregateInput
  }

  export type institutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: institutionWhereInput | institutionWhereInput[]
    OR?: institutionWhereInput[]
    NOT?: institutionWhereInput | institutionWhereInput[]
    createdBy?: IntFilter<"institution"> | number
    isActive?: BoolFilter<"institution"> | boolean
    createdAt?: DateTimeFilter<"institution"> | Date | string
    categories?: CategoryListRelationFilter
    admin?: XOR<UserScalarRelationFilter, userWhereInput>
    santri?: SantriListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type institutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: institutionCountOrderByAggregateInput
    _avg?: institutionAvgOrderByAggregateInput
    _max?: institutionMaxOrderByAggregateInput
    _min?: institutionMinOrderByAggregateInput
    _sum?: institutionSumOrderByAggregateInput
  }

  export type institutionScalarWhereWithAggregatesInput = {
    AND?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[]
    OR?: institutionScalarWhereWithAggregatesInput[]
    NOT?: institutionScalarWhereWithAggregatesInput | institutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"institution"> | number
    name?: StringWithAggregatesFilter<"institution"> | string
    createdBy?: IntWithAggregatesFilter<"institution"> | number
    isActive?: BoolWithAggregatesFilter<"institution"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"institution"> | Date | string
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    userId?: IntFilter<"notification"> | number
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    userId?: IntFilter<"notification"> | number
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    userId?: IntWithAggregatesFilter<"notification"> | number
    title?: StringWithAggregatesFilter<"notification"> | string
    message?: StringWithAggregatesFilter<"notification"> | string
    isRead?: BoolWithAggregatesFilter<"notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"notification"> | Date | string
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
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type password_resetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
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
    user?: XOR<UserScalarRelationFilter, userWhereInput>
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

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    id?: IntFilter<"profile"> | number
    name?: StringFilter<"profile"> | string
    gender?: StringNullableFilter<"profile"> | string | null
    address?: StringFilter<"profile"> | string
    profile_picture_url?: StringNullableFilter<"profile"> | string | null
    public_id?: StringNullableFilter<"profile"> | string | null
    userId?: IntFilter<"profile"> | number
    occupation?: StringNullableFilter<"profile"> | string | null
    phone?: StringNullableFilter<"profile"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type profileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    userId?: SortOrder
    occupation?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    name?: StringFilter<"profile"> | string
    gender?: StringNullableFilter<"profile"> | string | null
    address?: StringFilter<"profile"> | string
    profile_picture_url?: StringNullableFilter<"profile"> | string | null
    public_id?: StringNullableFilter<"profile"> | string | null
    occupation?: StringNullableFilter<"profile"> | string | null
    phone?: StringNullableFilter<"profile"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    userId?: SortOrder
    occupation?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    OR?: profileScalarWhereWithAggregatesInput[]
    NOT?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profile"> | number
    name?: StringWithAggregatesFilter<"profile"> | string
    gender?: StringNullableWithAggregatesFilter<"profile"> | string | null
    address?: StringWithAggregatesFilter<"profile"> | string
    profile_picture_url?: StringNullableWithAggregatesFilter<"profile"> | string | null
    public_id?: StringNullableWithAggregatesFilter<"profile"> | string | null
    userId?: IntWithAggregatesFilter<"profile"> | number
    occupation?: StringNullableWithAggregatesFilter<"profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"profile"> | string | null
  }

  export type santriWhereInput = {
    AND?: santriWhereInput | santriWhereInput[]
    OR?: santriWhereInput[]
    NOT?: santriWhereInput | santriWhereInput[]
    id?: IntFilter<"santri"> | number
    nis?: StringFilter<"santri"> | string
    fullname?: StringFilter<"santri"> | string
    kelas?: StringFilter<"santri"> | string
    gender?: StringFilter<"santri"> | string
    waliId?: IntFilter<"santri"> | number
    institutionId?: IntFilter<"santri"> | number
    waliName?: StringNullableFilter<"santri"> | string | null
    institutionName?: StringNullableFilter<"santri"> | string | null
    isActive?: BoolFilter<"santri"> | boolean
    createdAt?: DateTimeFilter<"santri"> | Date | string
    authAccounts?: Auth_accountListRelationFilter
    institution?: XOR<InstitutionScalarRelationFilter, institutionWhereInput>
    wali?: XOR<UserScalarRelationFilter, userWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type santriOrderByWithRelationInput = {
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
    authAccounts?: auth_accountOrderByRelationAggregateInput
    institution?: institutionOrderByWithRelationInput
    wali?: userOrderByWithRelationInput
    transactions?: transactionOrderByRelationAggregateInput
  }

  export type santriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nis?: string
    AND?: santriWhereInput | santriWhereInput[]
    OR?: santriWhereInput[]
    NOT?: santriWhereInput | santriWhereInput[]
    fullname?: StringFilter<"santri"> | string
    kelas?: StringFilter<"santri"> | string
    gender?: StringFilter<"santri"> | string
    waliId?: IntFilter<"santri"> | number
    institutionId?: IntFilter<"santri"> | number
    waliName?: StringNullableFilter<"santri"> | string | null
    institutionName?: StringNullableFilter<"santri"> | string | null
    isActive?: BoolFilter<"santri"> | boolean
    createdAt?: DateTimeFilter<"santri"> | Date | string
    authAccounts?: Auth_accountListRelationFilter
    institution?: XOR<InstitutionScalarRelationFilter, institutionWhereInput>
    wali?: XOR<UserScalarRelationFilter, userWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "nis">

  export type santriOrderByWithAggregationInput = {
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
    _count?: santriCountOrderByAggregateInput
    _avg?: santriAvgOrderByAggregateInput
    _max?: santriMaxOrderByAggregateInput
    _min?: santriMinOrderByAggregateInput
    _sum?: santriSumOrderByAggregateInput
  }

  export type santriScalarWhereWithAggregatesInput = {
    AND?: santriScalarWhereWithAggregatesInput | santriScalarWhereWithAggregatesInput[]
    OR?: santriScalarWhereWithAggregatesInput[]
    NOT?: santriScalarWhereWithAggregatesInput | santriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"santri"> | number
    nis?: StringWithAggregatesFilter<"santri"> | string
    fullname?: StringWithAggregatesFilter<"santri"> | string
    kelas?: StringWithAggregatesFilter<"santri"> | string
    gender?: StringWithAggregatesFilter<"santri"> | string
    waliId?: IntWithAggregatesFilter<"santri"> | number
    institutionId?: IntWithAggregatesFilter<"santri"> | number
    waliName?: StringNullableWithAggregatesFilter<"santri"> | string | null
    institutionName?: StringNullableWithAggregatesFilter<"santri"> | string | null
    isActive?: BoolWithAggregatesFilter<"santri"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"santri"> | Date | string
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: IntFilter<"transaction"> | number
    santriId?: IntFilter<"transaction"> | number
    categoryId?: IntFilter<"transaction"> | number
    type?: Enumcategory_typeFilter<"transaction"> | $Enums.category_type
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transaction"> | string | null
    transactionDate?: DateTimeFilter<"transaction"> | Date | string
    createdBy?: IntFilter<"transaction"> | number
    isDeleted?: BoolFilter<"transaction"> | boolean
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    admin?: XOR<UserScalarRelationFilter, userWhereInput>
    santri?: XOR<SantriScalarRelationFilter, santriWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
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
    category?: categoryOrderByWithRelationInput
    admin?: userOrderByWithRelationInput
    santri?: santriOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    santriId?: IntFilter<"transaction"> | number
    categoryId?: IntFilter<"transaction"> | number
    type?: Enumcategory_typeFilter<"transaction"> | $Enums.category_type
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transaction"> | string | null
    transactionDate?: DateTimeFilter<"transaction"> | Date | string
    createdBy?: IntFilter<"transaction"> | number
    isDeleted?: BoolFilter<"transaction"> | boolean
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    admin?: XOR<UserScalarRelationFilter, userWhereInput>
    santri?: XOR<SantriScalarRelationFilter, santriWhereInput>
  }, "id">

  export type transactionOrderByWithAggregationInput = {
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
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction"> | number
    santriId?: IntWithAggregatesFilter<"transaction"> | number
    categoryId?: IntWithAggregatesFilter<"transaction"> | number
    type?: Enumcategory_typeWithAggregatesFilter<"transaction"> | $Enums.category_type
    amount?: DecimalWithAggregatesFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    transactionDate?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    createdBy?: IntWithAggregatesFilter<"transaction"> | number
    isDeleted?: BoolWithAggregatesFilter<"transaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    institutionId?: IntNullableFilter<"user"> | number | null
    isEmailVerified?: BoolFilter<"user"> | boolean
    isActive?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    authAccounts?: Auth_accountListRelationFilter
    emailVerifications?: Email_verificationListRelationFilter
    createdInstitutions?: InstitutionListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordResets?: Password_resetListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    santri?: SantriListRelationFilter
    transactions?: TransactionListRelationFilter
    institution?: XOR<InstitutionNullableScalarRelationFilter, institutionWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    authAccounts?: auth_accountOrderByRelationAggregateInput
    emailVerifications?: email_verificationOrderByRelationAggregateInput
    createdInstitutions?: institutionOrderByRelationAggregateInput
    notifications?: notificationOrderByRelationAggregateInput
    passwordResets?: password_resetOrderByRelationAggregateInput
    profile?: profileOrderByWithRelationInput
    santri?: santriOrderByRelationAggregateInput
    transactions?: transactionOrderByRelationAggregateInput
    institution?: institutionOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    institutionId?: IntNullableFilter<"user"> | number | null
    isEmailVerified?: BoolFilter<"user"> | boolean
    isActive?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    authAccounts?: Auth_accountListRelationFilter
    emailVerifications?: Email_verificationListRelationFilter
    createdInstitutions?: InstitutionListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordResets?: Password_resetListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    santri?: SantriListRelationFilter
    transactions?: TransactionListRelationFilter
    institution?: XOR<InstitutionNullableScalarRelationFilter, institutionWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    institutionId?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    institutionId?: IntNullableWithAggregatesFilter<"user"> | number | null
    isEmailVerified?: BoolWithAggregatesFilter<"user"> | boolean
    isActive?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type email_verificationCreateInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    user: userCreateNestedOneWithoutEmailVerificationsInput
  }

  export type email_verificationUncheckedCreateInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type email_verificationUpdateInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutEmailVerificationsNestedInput
  }

  export type email_verificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationCreateManyInput = {
    id?: number
    userId: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type email_verificationUpdateManyMutationInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountCreateInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    santri?: santriCreateNestedOneWithoutAuthAccountsInput
    user: userCreateNestedOneWithoutAuthAccountsInput
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
    santri?: santriUpdateOneWithoutAuthAccountsNestedInput
    user?: userUpdateOneRequiredWithoutAuthAccountsNestedInput
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

  export type categoryCreateInput = {
    name: string
    type: $Enums.category_type
    isActive?: boolean
    createdAt?: Date | string
    institution: institutionCreateNestedOneWithoutCategoriesInput
    transactions?: transactionCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.category_type
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
    transactions?: transactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: institutionUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: transactionUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    type: $Enums.category_type
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type institutionCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryCreateNestedManyWithoutInstitutionInput
    admin: userCreateNestedOneWithoutCreatedInstitutionsInput
    santri?: santriCreateNestedManyWithoutInstitutionInput
    users?: userCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUncheckedCreateInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutInstitutionInput
    santri?: santriUncheckedCreateNestedManyWithoutInstitutionInput
    users?: userUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutInstitutionNestedInput
    admin?: userUpdateOneRequiredWithoutCreatedInstitutionsNestedInput
    santri?: santriUpdateManyWithoutInstitutionNestedInput
    users?: userUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutInstitutionNestedInput
    santri?: santriUncheckedUpdateManyWithoutInstitutionNestedInput
    users?: userUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionCreateManyInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type institutionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type institutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: userCreateNestedOneWithoutNotificationsInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type notificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type notificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_resetCreateInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    user: userCreateNestedOneWithoutPasswordResetsInput
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
    user?: userUpdateOneRequiredWithoutPasswordResetsNestedInput
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

  export type profileCreateInput = {
    name: string
    gender?: string | null
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    occupation?: string | null
    phone?: string | null
    user: userCreateNestedOneWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: number
    name: string
    gender?: string | null
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    userId: number
    occupation?: string | null
    phone?: string | null
  }

  export type profileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileCreateManyInput = {
    id?: number
    name: string
    gender?: string | null
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    userId: number
    occupation?: string | null
    phone?: string | null
  }

  export type profileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type santriCreateInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutSantriInput
    institution: institutionCreateNestedOneWithoutSantriInput
    wali: userCreateNestedOneWithoutSantriInput
    transactions?: transactionCreateNestedManyWithoutSantriInput
  }

  export type santriUncheckedCreateInput = {
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
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
    transactions?: transactionUncheckedCreateNestedManyWithoutSantriInput
  }

  export type santriUpdateInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutSantriNestedInput
    institution?: institutionUpdateOneRequiredWithoutSantriNestedInput
    wali?: userUpdateOneRequiredWithoutSantriNestedInput
    transactions?: transactionUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateInput = {
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
    authAccounts?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type santriCreateManyInput = {
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

  export type santriUpdateManyMutationInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type santriUncheckedUpdateManyInput = {
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

  export type transactionCreateInput = {
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    category: categoryCreateNestedOneWithoutTransactionsInput
    admin: userCreateNestedOneWithoutTransactionsInput
    santri: santriCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionUpdateInput = {
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutTransactionsNestedInput
    admin?: userUpdateOneRequiredWithoutTransactionsNestedInput
    santri?: santriUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateManyInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type email_verificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type email_verificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type email_verificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type email_verificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otpCode?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type email_verificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SantriNullableScalarRelationFilter = {
    is?: santriWhereInput | null
    isNot?: santriWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type Enumcategory_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.category_type | Enumcategory_typeFieldRefInput<$PrismaModel>
    in?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_typeFilter<$PrismaModel> | $Enums.category_type
  }

  export type InstitutionScalarRelationFilter = {
    is?: institutionWhereInput
    isNot?: institutionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    institutionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type Enumcategory_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category_type | Enumcategory_typeFieldRefInput<$PrismaModel>
    in?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_typeWithAggregatesFilter<$PrismaModel> | $Enums.category_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategory_typeFilter<$PrismaModel>
    _max?: NestedEnumcategory_typeFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type SantriListRelationFilter = {
    every?: santriWhereInput
    some?: santriWhereInput
    none?: santriWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type santriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type institutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type institutionAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type institutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type institutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type institutionSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
    occupation?: SortOrder
    phone?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
    occupation?: SortOrder
    phone?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    profile_picture_url?: SortOrder
    public_id?: SortOrder
    userId?: SortOrder
    occupation?: SortOrder
    phone?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
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

  export type santriCountOrderByAggregateInput = {
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

  export type santriAvgOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    institutionId?: SortOrder
  }

  export type santriMaxOrderByAggregateInput = {
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

  export type santriMinOrderByAggregateInput = {
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

  export type santriSumOrderByAggregateInput = {
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
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type SantriScalarRelationFilter = {
    is?: santriWhereInput
    isNot?: santriWhereInput
  }

  export type transactionCountOrderByAggregateInput = {
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

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    createdBy?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
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

  export type transactionMinOrderByAggregateInput = {
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

  export type transactionSumOrderByAggregateInput = {
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

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type Email_verificationListRelationFilter = {
    every?: email_verificationWhereInput
    some?: email_verificationWhereInput
    none?: email_verificationWhereInput
  }

  export type InstitutionListRelationFilter = {
    every?: institutionWhereInput
    some?: institutionWhereInput
    none?: institutionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type Password_resetListRelationFilter = {
    every?: password_resetWhereInput
    some?: password_resetWhereInput
    none?: password_resetWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type InstitutionNullableScalarRelationFilter = {
    is?: institutionWhereInput | null
    isNot?: institutionWhereInput | null
  }

  export type email_verificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type institutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type password_resetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
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

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
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

  export type userMinOrderByAggregateInput = {
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

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutEmailVerificationsInput = {
    create?: XOR<userCreateWithoutEmailVerificationsInput, userUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutEmailVerificationsInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutEmailVerificationsNestedInput = {
    create?: XOR<userCreateWithoutEmailVerificationsInput, userUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutEmailVerificationsInput
    upsert?: userUpsertWithoutEmailVerificationsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEmailVerificationsInput, userUpdateWithoutEmailVerificationsInput>, userUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type santriCreateNestedOneWithoutAuthAccountsInput = {
    create?: XOR<santriCreateWithoutAuthAccountsInput, santriUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: santriCreateOrConnectWithoutAuthAccountsInput
    connect?: santriWhereUniqueInput
  }

  export type userCreateNestedOneWithoutAuthAccountsInput = {
    create?: XOR<userCreateWithoutAuthAccountsInput, userUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: userCreateOrConnectWithoutAuthAccountsInput
    connect?: userWhereUniqueInput
  }

  export type santriUpdateOneWithoutAuthAccountsNestedInput = {
    create?: XOR<santriCreateWithoutAuthAccountsInput, santriUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: santriCreateOrConnectWithoutAuthAccountsInput
    upsert?: santriUpsertWithoutAuthAccountsInput
    disconnect?: santriWhereInput | boolean
    delete?: santriWhereInput | boolean
    connect?: santriWhereUniqueInput
    update?: XOR<XOR<santriUpdateToOneWithWhereWithoutAuthAccountsInput, santriUpdateWithoutAuthAccountsInput>, santriUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type userUpdateOneRequiredWithoutAuthAccountsNestedInput = {
    create?: XOR<userCreateWithoutAuthAccountsInput, userUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: userCreateOrConnectWithoutAuthAccountsInput
    upsert?: userUpsertWithoutAuthAccountsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAuthAccountsInput, userUpdateWithoutAuthAccountsInput>, userUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type institutionCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<institutionCreateWithoutCategoriesInput, institutionUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: institutionCreateOrConnectWithoutCategoriesInput
    connect?: institutionWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput> | transactionCreateWithoutCategoryInput[] | transactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCategoryInput | transactionCreateOrConnectWithoutCategoryInput[]
    createMany?: transactionCreateManyCategoryInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput> | transactionCreateWithoutCategoryInput[] | transactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCategoryInput | transactionCreateOrConnectWithoutCategoryInput[]
    createMany?: transactionCreateManyCategoryInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type Enumcategory_typeFieldUpdateOperationsInput = {
    set?: $Enums.category_type
  }

  export type institutionUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<institutionCreateWithoutCategoriesInput, institutionUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: institutionCreateOrConnectWithoutCategoriesInput
    upsert?: institutionUpsertWithoutCategoriesInput
    connect?: institutionWhereUniqueInput
    update?: XOR<XOR<institutionUpdateToOneWithWhereWithoutCategoriesInput, institutionUpdateWithoutCategoriesInput>, institutionUncheckedUpdateWithoutCategoriesInput>
  }

  export type transactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput> | transactionCreateWithoutCategoryInput[] | transactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCategoryInput | transactionCreateOrConnectWithoutCategoryInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutCategoryInput | transactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: transactionCreateManyCategoryInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutCategoryInput | transactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutCategoryInput | transactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput> | transactionCreateWithoutCategoryInput[] | transactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCategoryInput | transactionCreateOrConnectWithoutCategoryInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutCategoryInput | transactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: transactionCreateManyCategoryInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutCategoryInput | transactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutCategoryInput | transactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type categoryCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput> | categoryCreateWithoutInstitutionInput[] | categoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutInstitutionInput | categoryCreateOrConnectWithoutInstitutionInput[]
    createMany?: categoryCreateManyInstitutionInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutCreatedInstitutionsInput = {
    create?: XOR<userCreateWithoutCreatedInstitutionsInput, userUncheckedCreateWithoutCreatedInstitutionsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreatedInstitutionsInput
    connect?: userWhereUniqueInput
  }

  export type santriCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput> | santriCreateWithoutInstitutionInput[] | santriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: santriCreateOrConnectWithoutInstitutionInput | santriCreateOrConnectWithoutInstitutionInput[]
    createMany?: santriCreateManyInstitutionInputEnvelope
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput> | userCreateWithoutInstitutionInput[] | userUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[]
    createMany?: userCreateManyInstitutionInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput> | categoryCreateWithoutInstitutionInput[] | categoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutInstitutionInput | categoryCreateOrConnectWithoutInstitutionInput[]
    createMany?: categoryCreateManyInstitutionInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type santriUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput> | santriCreateWithoutInstitutionInput[] | santriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: santriCreateOrConnectWithoutInstitutionInput | santriCreateOrConnectWithoutInstitutionInput[]
    createMany?: santriCreateManyInstitutionInputEnvelope
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput> | userCreateWithoutInstitutionInput[] | userUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[]
    createMany?: userCreateManyInstitutionInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type categoryUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput> | categoryCreateWithoutInstitutionInput[] | categoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutInstitutionInput | categoryCreateOrConnectWithoutInstitutionInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutInstitutionInput | categoryUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: categoryCreateManyInstitutionInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutInstitutionInput | categoryUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutInstitutionInput | categoryUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutCreatedInstitutionsNestedInput = {
    create?: XOR<userCreateWithoutCreatedInstitutionsInput, userUncheckedCreateWithoutCreatedInstitutionsInput>
    connectOrCreate?: userCreateOrConnectWithoutCreatedInstitutionsInput
    upsert?: userUpsertWithoutCreatedInstitutionsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCreatedInstitutionsInput, userUpdateWithoutCreatedInstitutionsInput>, userUncheckedUpdateWithoutCreatedInstitutionsInput>
  }

  export type santriUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput> | santriCreateWithoutInstitutionInput[] | santriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: santriCreateOrConnectWithoutInstitutionInput | santriCreateOrConnectWithoutInstitutionInput[]
    upsert?: santriUpsertWithWhereUniqueWithoutInstitutionInput | santriUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: santriCreateManyInstitutionInputEnvelope
    set?: santriWhereUniqueInput | santriWhereUniqueInput[]
    disconnect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    delete?: santriWhereUniqueInput | santriWhereUniqueInput[]
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    update?: santriUpdateWithWhereUniqueWithoutInstitutionInput | santriUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: santriUpdateManyWithWhereWithoutInstitutionInput | santriUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: santriScalarWhereInput | santriScalarWhereInput[]
  }

  export type userUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput> | userCreateWithoutInstitutionInput[] | userUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[]
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: userCreateManyInstitutionInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput> | categoryCreateWithoutInstitutionInput[] | categoryUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutInstitutionInput | categoryCreateOrConnectWithoutInstitutionInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutInstitutionInput | categoryUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: categoryCreateManyInstitutionInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutInstitutionInput | categoryUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutInstitutionInput | categoryUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type santriUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput> | santriCreateWithoutInstitutionInput[] | santriUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: santriCreateOrConnectWithoutInstitutionInput | santriCreateOrConnectWithoutInstitutionInput[]
    upsert?: santriUpsertWithWhereUniqueWithoutInstitutionInput | santriUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: santriCreateManyInstitutionInputEnvelope
    set?: santriWhereUniqueInput | santriWhereUniqueInput[]
    disconnect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    delete?: santriWhereUniqueInput | santriWhereUniqueInput[]
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    update?: santriUpdateWithWhereUniqueWithoutInstitutionInput | santriUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: santriUpdateManyWithWhereWithoutInstitutionInput | santriUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: santriScalarWhereInput | santriScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput> | userCreateWithoutInstitutionInput[] | userUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: userCreateOrConnectWithoutInstitutionInput | userCreateOrConnectWithoutInstitutionInput[]
    upsert?: userUpsertWithWhereUniqueWithoutInstitutionInput | userUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: userCreateManyInstitutionInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutInstitutionInput | userUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: userUpdateManyWithWhereWithoutInstitutionInput | userUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    upsert?: userUpsertWithoutNotificationsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotificationsInput, userUpdateWithoutNotificationsInput>, userUncheckedUpdateWithoutNotificationsInput>
  }

  export type userCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<userCreateWithoutPasswordResetsInput, userUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: userCreateOrConnectWithoutPasswordResetsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<userCreateWithoutPasswordResetsInput, userUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: userCreateOrConnectWithoutPasswordResetsInput
    upsert?: userUpsertWithoutPasswordResetsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPasswordResetsInput, userUpdateWithoutPasswordResetsInput>, userUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type userCreateNestedOneWithoutProfileInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
    connectOrCreate?: userCreateOrConnectWithoutProfileInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
    connectOrCreate?: userCreateOrConnectWithoutProfileInput
    upsert?: userUpsertWithoutProfileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProfileInput, userUpdateWithoutProfileInput>, userUncheckedUpdateWithoutProfileInput>
  }

  export type auth_accountCreateNestedManyWithoutSantriInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type institutionCreateNestedOneWithoutSantriInput = {
    create?: XOR<institutionCreateWithoutSantriInput, institutionUncheckedCreateWithoutSantriInput>
    connectOrCreate?: institutionCreateOrConnectWithoutSantriInput
    connect?: institutionWhereUniqueInput
  }

  export type userCreateNestedOneWithoutSantriInput = {
    create?: XOR<userCreateWithoutSantriInput, userUncheckedCreateWithoutSantriInput>
    connectOrCreate?: userCreateOrConnectWithoutSantriInput
    connect?: userWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutSantriInput = {
    create?: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput> | transactionCreateWithoutSantriInput[] | transactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutSantriInput | transactionCreateOrConnectWithoutSantriInput[]
    createMany?: transactionCreateManySantriInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type auth_accountUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<auth_accountCreateWithoutSantriInput, auth_accountUncheckedCreateWithoutSantriInput> | auth_accountCreateWithoutSantriInput[] | auth_accountUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutSantriInput | auth_accountCreateOrConnectWithoutSantriInput[]
    createMany?: auth_accountCreateManySantriInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput> | transactionCreateWithoutSantriInput[] | transactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutSantriInput | transactionCreateOrConnectWithoutSantriInput[]
    createMany?: transactionCreateManySantriInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
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

  export type institutionUpdateOneRequiredWithoutSantriNestedInput = {
    create?: XOR<institutionCreateWithoutSantriInput, institutionUncheckedCreateWithoutSantriInput>
    connectOrCreate?: institutionCreateOrConnectWithoutSantriInput
    upsert?: institutionUpsertWithoutSantriInput
    connect?: institutionWhereUniqueInput
    update?: XOR<XOR<institutionUpdateToOneWithWhereWithoutSantriInput, institutionUpdateWithoutSantriInput>, institutionUncheckedUpdateWithoutSantriInput>
  }

  export type userUpdateOneRequiredWithoutSantriNestedInput = {
    create?: XOR<userCreateWithoutSantriInput, userUncheckedCreateWithoutSantriInput>
    connectOrCreate?: userCreateOrConnectWithoutSantriInput
    upsert?: userUpsertWithoutSantriInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSantriInput, userUpdateWithoutSantriInput>, userUncheckedUpdateWithoutSantriInput>
  }

  export type transactionUpdateManyWithoutSantriNestedInput = {
    create?: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput> | transactionCreateWithoutSantriInput[] | transactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutSantriInput | transactionCreateOrConnectWithoutSantriInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutSantriInput | transactionUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: transactionCreateManySantriInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutSantriInput | transactionUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutSantriInput | transactionUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
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

  export type transactionUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput> | transactionCreateWithoutSantriInput[] | transactionUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutSantriInput | transactionCreateOrConnectWithoutSantriInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutSantriInput | transactionUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: transactionCreateManySantriInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutSantriInput | transactionUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutSantriInput | transactionUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<categoryCreateWithoutTransactionsInput, categoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutTransactionsInput
    connect?: categoryWhereUniqueInput
  }

  export type userCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<userCreateWithoutTransactionsInput, userUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: userCreateOrConnectWithoutTransactionsInput
    connect?: userWhereUniqueInput
  }

  export type santriCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<santriCreateWithoutTransactionsInput, santriUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: santriCreateOrConnectWithoutTransactionsInput
    connect?: santriWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type categoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<categoryCreateWithoutTransactionsInput, categoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutTransactionsInput
    upsert?: categoryUpsertWithoutTransactionsInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutTransactionsInput, categoryUpdateWithoutTransactionsInput>, categoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type userUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<userCreateWithoutTransactionsInput, userUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: userCreateOrConnectWithoutTransactionsInput
    upsert?: userUpsertWithoutTransactionsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTransactionsInput, userUpdateWithoutTransactionsInput>, userUncheckedUpdateWithoutTransactionsInput>
  }

  export type santriUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<santriCreateWithoutTransactionsInput, santriUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: santriCreateOrConnectWithoutTransactionsInput
    upsert?: santriUpsertWithoutTransactionsInput
    connect?: santriWhereUniqueInput
    update?: XOR<XOR<santriUpdateToOneWithWhereWithoutTransactionsInput, santriUpdateWithoutTransactionsInput>, santriUncheckedUpdateWithoutTransactionsInput>
  }

  export type auth_accountCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type email_verificationCreateNestedManyWithoutUserInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput> | email_verificationCreateWithoutUserInput[] | email_verificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput | email_verificationCreateOrConnectWithoutUserInput[]
    createMany?: email_verificationCreateManyUserInputEnvelope
    connect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
  }

  export type institutionCreateNestedManyWithoutAdminInput = {
    create?: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput> | institutionCreateWithoutAdminInput[] | institutionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: institutionCreateOrConnectWithoutAdminInput | institutionCreateOrConnectWithoutAdminInput[]
    createMany?: institutionCreateManyAdminInputEnvelope
    connect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type password_resetCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
  }

  export type profileCreateNestedOneWithoutUserInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    connect?: profileWhereUniqueInput
  }

  export type santriCreateNestedManyWithoutWaliInput = {
    create?: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput> | santriCreateWithoutWaliInput[] | santriUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: santriCreateOrConnectWithoutWaliInput | santriCreateOrConnectWithoutWaliInput[]
    createMany?: santriCreateManyWaliInputEnvelope
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutAdminInput = {
    create?: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput> | transactionCreateWithoutAdminInput[] | transactionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAdminInput | transactionCreateOrConnectWithoutAdminInput[]
    createMany?: transactionCreateManyAdminInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type institutionCreateNestedOneWithoutUsersInput = {
    create?: XOR<institutionCreateWithoutUsersInput, institutionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: institutionCreateOrConnectWithoutUsersInput
    connect?: institutionWhereUniqueInput
  }

  export type auth_accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<auth_accountCreateWithoutUserInput, auth_accountUncheckedCreateWithoutUserInput> | auth_accountCreateWithoutUserInput[] | auth_accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auth_accountCreateOrConnectWithoutUserInput | auth_accountCreateOrConnectWithoutUserInput[]
    createMany?: auth_accountCreateManyUserInputEnvelope
    connect?: auth_accountWhereUniqueInput | auth_accountWhereUniqueInput[]
  }

  export type email_verificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput> | email_verificationCreateWithoutUserInput[] | email_verificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput | email_verificationCreateOrConnectWithoutUserInput[]
    createMany?: email_verificationCreateManyUserInputEnvelope
    connect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
  }

  export type institutionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput> | institutionCreateWithoutAdminInput[] | institutionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: institutionCreateOrConnectWithoutAdminInput | institutionCreateOrConnectWithoutAdminInput[]
    createMany?: institutionCreateManyAdminInputEnvelope
    connect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type password_resetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_resetCreateWithoutUserInput, password_resetUncheckedCreateWithoutUserInput> | password_resetCreateWithoutUserInput[] | password_resetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_resetCreateOrConnectWithoutUserInput | password_resetCreateOrConnectWithoutUserInput[]
    createMany?: password_resetCreateManyUserInputEnvelope
    connect?: password_resetWhereUniqueInput | password_resetWhereUniqueInput[]
  }

  export type profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    connect?: profileWhereUniqueInput
  }

  export type santriUncheckedCreateNestedManyWithoutWaliInput = {
    create?: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput> | santriCreateWithoutWaliInput[] | santriUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: santriCreateOrConnectWithoutWaliInput | santriCreateOrConnectWithoutWaliInput[]
    createMany?: santriCreateManyWaliInputEnvelope
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput> | transactionCreateWithoutAdminInput[] | transactionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAdminInput | transactionCreateOrConnectWithoutAdminInput[]
    createMany?: transactionCreateManyAdminInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
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

  export type email_verificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput> | email_verificationCreateWithoutUserInput[] | email_verificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput | email_verificationCreateOrConnectWithoutUserInput[]
    upsert?: email_verificationUpsertWithWhereUniqueWithoutUserInput | email_verificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_verificationCreateManyUserInputEnvelope
    set?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    disconnect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    delete?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    connect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    update?: email_verificationUpdateWithWhereUniqueWithoutUserInput | email_verificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_verificationUpdateManyWithWhereWithoutUserInput | email_verificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_verificationScalarWhereInput | email_verificationScalarWhereInput[]
  }

  export type institutionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput> | institutionCreateWithoutAdminInput[] | institutionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: institutionCreateOrConnectWithoutAdminInput | institutionCreateOrConnectWithoutAdminInput[]
    upsert?: institutionUpsertWithWhereUniqueWithoutAdminInput | institutionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: institutionCreateManyAdminInputEnvelope
    set?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    disconnect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    delete?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    connect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    update?: institutionUpdateWithWhereUniqueWithoutAdminInput | institutionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: institutionUpdateManyWithWhereWithoutAdminInput | institutionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: institutionScalarWhereInput | institutionScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
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

  export type profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    upsert?: profileUpsertWithoutUserInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutUserInput, profileUpdateWithoutUserInput>, profileUncheckedUpdateWithoutUserInput>
  }

  export type santriUpdateManyWithoutWaliNestedInput = {
    create?: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput> | santriCreateWithoutWaliInput[] | santriUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: santriCreateOrConnectWithoutWaliInput | santriCreateOrConnectWithoutWaliInput[]
    upsert?: santriUpsertWithWhereUniqueWithoutWaliInput | santriUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: santriCreateManyWaliInputEnvelope
    set?: santriWhereUniqueInput | santriWhereUniqueInput[]
    disconnect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    delete?: santriWhereUniqueInput | santriWhereUniqueInput[]
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    update?: santriUpdateWithWhereUniqueWithoutWaliInput | santriUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: santriUpdateManyWithWhereWithoutWaliInput | santriUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: santriScalarWhereInput | santriScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput> | transactionCreateWithoutAdminInput[] | transactionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAdminInput | transactionCreateOrConnectWithoutAdminInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAdminInput | transactionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: transactionCreateManyAdminInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAdminInput | transactionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAdminInput | transactionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type institutionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<institutionCreateWithoutUsersInput, institutionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: institutionCreateOrConnectWithoutUsersInput
    upsert?: institutionUpsertWithoutUsersInput
    disconnect?: institutionWhereInput | boolean
    delete?: institutionWhereInput | boolean
    connect?: institutionWhereUniqueInput
    update?: XOR<XOR<institutionUpdateToOneWithWhereWithoutUsersInput, institutionUpdateWithoutUsersInput>, institutionUncheckedUpdateWithoutUsersInput>
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

  export type email_verificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput> | email_verificationCreateWithoutUserInput[] | email_verificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: email_verificationCreateOrConnectWithoutUserInput | email_verificationCreateOrConnectWithoutUserInput[]
    upsert?: email_verificationUpsertWithWhereUniqueWithoutUserInput | email_verificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: email_verificationCreateManyUserInputEnvelope
    set?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    disconnect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    delete?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    connect?: email_verificationWhereUniqueInput | email_verificationWhereUniqueInput[]
    update?: email_verificationUpdateWithWhereUniqueWithoutUserInput | email_verificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: email_verificationUpdateManyWithWhereWithoutUserInput | email_verificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: email_verificationScalarWhereInput | email_verificationScalarWhereInput[]
  }

  export type institutionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput> | institutionCreateWithoutAdminInput[] | institutionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: institutionCreateOrConnectWithoutAdminInput | institutionCreateOrConnectWithoutAdminInput[]
    upsert?: institutionUpsertWithWhereUniqueWithoutAdminInput | institutionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: institutionCreateManyAdminInputEnvelope
    set?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    disconnect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    delete?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    connect?: institutionWhereUniqueInput | institutionWhereUniqueInput[]
    update?: institutionUpdateWithWhereUniqueWithoutAdminInput | institutionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: institutionUpdateManyWithWhereWithoutAdminInput | institutionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: institutionScalarWhereInput | institutionScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
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

  export type profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    upsert?: profileUpsertWithoutUserInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutUserInput, profileUpdateWithoutUserInput>, profileUncheckedUpdateWithoutUserInput>
  }

  export type santriUncheckedUpdateManyWithoutWaliNestedInput = {
    create?: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput> | santriCreateWithoutWaliInput[] | santriUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: santriCreateOrConnectWithoutWaliInput | santriCreateOrConnectWithoutWaliInput[]
    upsert?: santriUpsertWithWhereUniqueWithoutWaliInput | santriUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: santriCreateManyWaliInputEnvelope
    set?: santriWhereUniqueInput | santriWhereUniqueInput[]
    disconnect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    delete?: santriWhereUniqueInput | santriWhereUniqueInput[]
    connect?: santriWhereUniqueInput | santriWhereUniqueInput[]
    update?: santriUpdateWithWhereUniqueWithoutWaliInput | santriUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: santriUpdateManyWithWhereWithoutWaliInput | santriUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: santriScalarWhereInput | santriScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput> | transactionCreateWithoutAdminInput[] | transactionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAdminInput | transactionCreateOrConnectWithoutAdminInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAdminInput | transactionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: transactionCreateManyAdminInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAdminInput | transactionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAdminInput | transactionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumcategory_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.category_type | Enumcategory_typeFieldRefInput<$PrismaModel>
    in?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_typeFilter<$PrismaModel> | $Enums.category_type
  }

  export type NestedEnumcategory_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category_type | Enumcategory_typeFieldRefInput<$PrismaModel>
    in?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.category_type[] | ListEnumcategory_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumcategory_typeWithAggregatesFilter<$PrismaModel> | $Enums.category_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategory_typeFilter<$PrismaModel>
    _max?: NestedEnumcategory_typeFilter<$PrismaModel>
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

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type userCreateWithoutEmailVerificationsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutEmailVerificationsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutEmailVerificationsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEmailVerificationsInput, userUncheckedCreateWithoutEmailVerificationsInput>
  }

  export type userUpsertWithoutEmailVerificationsInput = {
    update: XOR<userUpdateWithoutEmailVerificationsInput, userUncheckedUpdateWithoutEmailVerificationsInput>
    create: XOR<userCreateWithoutEmailVerificationsInput, userUncheckedCreateWithoutEmailVerificationsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEmailVerificationsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEmailVerificationsInput, userUncheckedUpdateWithoutEmailVerificationsInput>
  }

  export type userUpdateWithoutEmailVerificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type santriCreateWithoutAuthAccountsInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    institution: institutionCreateNestedOneWithoutSantriInput
    wali: userCreateNestedOneWithoutSantriInput
    transactions?: transactionCreateNestedManyWithoutSantriInput
  }

  export type santriUncheckedCreateWithoutAuthAccountsInput = {
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
    transactions?: transactionUncheckedCreateNestedManyWithoutSantriInput
  }

  export type santriCreateOrConnectWithoutAuthAccountsInput = {
    where: santriWhereUniqueInput
    create: XOR<santriCreateWithoutAuthAccountsInput, santriUncheckedCreateWithoutAuthAccountsInput>
  }

  export type userCreateWithoutAuthAccountsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutAuthAccountsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutAuthAccountsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAuthAccountsInput, userUncheckedCreateWithoutAuthAccountsInput>
  }

  export type santriUpsertWithoutAuthAccountsInput = {
    update: XOR<santriUpdateWithoutAuthAccountsInput, santriUncheckedUpdateWithoutAuthAccountsInput>
    create: XOR<santriCreateWithoutAuthAccountsInput, santriUncheckedCreateWithoutAuthAccountsInput>
    where?: santriWhereInput
  }

  export type santriUpdateToOneWithWhereWithoutAuthAccountsInput = {
    where?: santriWhereInput
    data: XOR<santriUpdateWithoutAuthAccountsInput, santriUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type santriUpdateWithoutAuthAccountsInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: institutionUpdateOneRequiredWithoutSantriNestedInput
    wali?: userUpdateOneRequiredWithoutSantriNestedInput
    transactions?: transactionUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateWithoutAuthAccountsInput = {
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
    transactions?: transactionUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type userUpsertWithoutAuthAccountsInput = {
    update: XOR<userUpdateWithoutAuthAccountsInput, userUncheckedUpdateWithoutAuthAccountsInput>
    create: XOR<userCreateWithoutAuthAccountsInput, userUncheckedCreateWithoutAuthAccountsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAuthAccountsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAuthAccountsInput, userUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type userUpdateWithoutAuthAccountsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutAuthAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type institutionCreateWithoutCategoriesInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    admin: userCreateNestedOneWithoutCreatedInstitutionsInput
    santri?: santriCreateNestedManyWithoutInstitutionInput
    users?: userCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    santri?: santriUncheckedCreateNestedManyWithoutInstitutionInput
    users?: userUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type institutionCreateOrConnectWithoutCategoriesInput = {
    where: institutionWhereUniqueInput
    create: XOR<institutionCreateWithoutCategoriesInput, institutionUncheckedCreateWithoutCategoriesInput>
  }

  export type transactionCreateWithoutCategoryInput = {
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    admin: userCreateNestedOneWithoutTransactionsInput
    santri: santriCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    santriId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutCategoryInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput>
  }

  export type transactionCreateManyCategoryInputEnvelope = {
    data: transactionCreateManyCategoryInput | transactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type institutionUpsertWithoutCategoriesInput = {
    update: XOR<institutionUpdateWithoutCategoriesInput, institutionUncheckedUpdateWithoutCategoriesInput>
    create: XOR<institutionCreateWithoutCategoriesInput, institutionUncheckedCreateWithoutCategoriesInput>
    where?: institutionWhereInput
  }

  export type institutionUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: institutionWhereInput
    data: XOR<institutionUpdateWithoutCategoriesInput, institutionUncheckedUpdateWithoutCategoriesInput>
  }

  export type institutionUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: userUpdateOneRequiredWithoutCreatedInstitutionsNestedInput
    santri?: santriUpdateManyWithoutInstitutionNestedInput
    users?: userUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: santriUncheckedUpdateManyWithoutInstitutionNestedInput
    users?: userUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutCategoryInput, transactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<transactionCreateWithoutCategoryInput, transactionUncheckedCreateWithoutCategoryInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutCategoryInput, transactionUncheckedUpdateWithoutCategoryInput>
  }

  export type transactionUpdateManyWithWhereWithoutCategoryInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: IntFilter<"transaction"> | number
    santriId?: IntFilter<"transaction"> | number
    categoryId?: IntFilter<"transaction"> | number
    type?: Enumcategory_typeFilter<"transaction"> | $Enums.category_type
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"transaction"> | string | null
    transactionDate?: DateTimeFilter<"transaction"> | Date | string
    createdBy?: IntFilter<"transaction"> | number
    isDeleted?: BoolFilter<"transaction"> | boolean
    createdAt?: DateTimeFilter<"transaction"> | Date | string
  }

  export type categoryCreateWithoutInstitutionInput = {
    name: string
    type: $Enums.category_type
    isActive?: boolean
    createdAt?: Date | string
    transactions?: transactionCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutInstitutionInput = {
    id?: number
    name: string
    type: $Enums.category_type
    isActive?: boolean
    createdAt?: Date | string
    transactions?: transactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutInstitutionInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput>
  }

  export type categoryCreateManyInstitutionInputEnvelope = {
    data: categoryCreateManyInstitutionInput | categoryCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutCreatedInstitutionsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutCreatedInstitutionsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutCreatedInstitutionsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCreatedInstitutionsInput, userUncheckedCreateWithoutCreatedInstitutionsInput>
  }

  export type santriCreateWithoutInstitutionInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutSantriInput
    wali: userCreateNestedOneWithoutSantriInput
    transactions?: transactionCreateNestedManyWithoutSantriInput
  }

  export type santriUncheckedCreateWithoutInstitutionInput = {
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
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
    transactions?: transactionUncheckedCreateNestedManyWithoutSantriInput
  }

  export type santriCreateOrConnectWithoutInstitutionInput = {
    where: santriWhereUniqueInput
    create: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput>
  }

  export type santriCreateManyInstitutionInputEnvelope = {
    data: santriCreateManyInstitutionInput | santriCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutInstitutionInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
  }

  export type userUncheckedCreateWithoutInstitutionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutInstitutionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
  }

  export type userCreateManyInstitutionInputEnvelope = {
    data: userCreateManyInstitutionInput | userCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutInstitutionInput, categoryUncheckedUpdateWithoutInstitutionInput>
    create: XOR<categoryCreateWithoutInstitutionInput, categoryUncheckedCreateWithoutInstitutionInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutInstitutionInput, categoryUncheckedUpdateWithoutInstitutionInput>
  }

  export type categoryUpdateManyWithWhereWithoutInstitutionInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    type?: Enumcategory_typeFilter<"category"> | $Enums.category_type
    institutionId?: IntFilter<"category"> | number
    isActive?: BoolFilter<"category"> | boolean
    createdAt?: DateTimeFilter<"category"> | Date | string
  }

  export type userUpsertWithoutCreatedInstitutionsInput = {
    update: XOR<userUpdateWithoutCreatedInstitutionsInput, userUncheckedUpdateWithoutCreatedInstitutionsInput>
    create: XOR<userCreateWithoutCreatedInstitutionsInput, userUncheckedCreateWithoutCreatedInstitutionsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCreatedInstitutionsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCreatedInstitutionsInput, userUncheckedUpdateWithoutCreatedInstitutionsInput>
  }

  export type userUpdateWithoutCreatedInstitutionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutCreatedInstitutionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type santriUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: santriWhereUniqueInput
    update: XOR<santriUpdateWithoutInstitutionInput, santriUncheckedUpdateWithoutInstitutionInput>
    create: XOR<santriCreateWithoutInstitutionInput, santriUncheckedCreateWithoutInstitutionInput>
  }

  export type santriUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: santriWhereUniqueInput
    data: XOR<santriUpdateWithoutInstitutionInput, santriUncheckedUpdateWithoutInstitutionInput>
  }

  export type santriUpdateManyWithWhereWithoutInstitutionInput = {
    where: santriScalarWhereInput
    data: XOR<santriUpdateManyMutationInput, santriUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type santriScalarWhereInput = {
    AND?: santriScalarWhereInput | santriScalarWhereInput[]
    OR?: santriScalarWhereInput[]
    NOT?: santriScalarWhereInput | santriScalarWhereInput[]
    id?: IntFilter<"santri"> | number
    nis?: StringFilter<"santri"> | string
    fullname?: StringFilter<"santri"> | string
    kelas?: StringFilter<"santri"> | string
    gender?: StringFilter<"santri"> | string
    waliId?: IntFilter<"santri"> | number
    institutionId?: IntFilter<"santri"> | number
    waliName?: StringNullableFilter<"santri"> | string | null
    institutionName?: StringNullableFilter<"santri"> | string | null
    isActive?: BoolFilter<"santri"> | boolean
    createdAt?: DateTimeFilter<"santri"> | Date | string
  }

  export type userUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>
    create: XOR<userCreateWithoutInstitutionInput, userUncheckedCreateWithoutInstitutionInput>
  }

  export type userUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutInstitutionInput, userUncheckedUpdateWithoutInstitutionInput>
  }

  export type userUpdateManyWithWhereWithoutInstitutionInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    institutionId?: IntNullableFilter<"user"> | number | null
    isEmailVerified?: BoolFilter<"user"> | boolean
    isActive?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
  }

  export type userCreateWithoutNotificationsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutNotificationsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutNotificationsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
  }

  export type userUpsertWithoutNotificationsInput = {
    update: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
  }

  export type userUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type userCreateWithoutPasswordResetsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutPasswordResetsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPasswordResetsInput, userUncheckedCreateWithoutPasswordResetsInput>
  }

  export type userUpsertWithoutPasswordResetsInput = {
    update: XOR<userUpdateWithoutPasswordResetsInput, userUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<userCreateWithoutPasswordResetsInput, userUncheckedCreateWithoutPasswordResetsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPasswordResetsInput, userUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type userUpdateWithoutPasswordResetsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type userCreateWithoutProfileInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutProfileInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutProfileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
  }

  export type userUpsertWithoutProfileInput = {
    update: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProfileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>
  }

  export type userUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type auth_accountCreateWithoutSantriInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    user: userCreateNestedOneWithoutAuthAccountsInput
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

  export type institutionCreateWithoutSantriInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryCreateNestedManyWithoutInstitutionInput
    admin: userCreateNestedOneWithoutCreatedInstitutionsInput
    users?: userCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUncheckedCreateWithoutSantriInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutInstitutionInput
    users?: userUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type institutionCreateOrConnectWithoutSantriInput = {
    where: institutionWhereUniqueInput
    create: XOR<institutionCreateWithoutSantriInput, institutionUncheckedCreateWithoutSantriInput>
  }

  export type userCreateWithoutSantriInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    transactions?: transactionCreateNestedManyWithoutAdminInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutSantriInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type userCreateOrConnectWithoutSantriInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSantriInput, userUncheckedCreateWithoutSantriInput>
  }

  export type transactionCreateWithoutSantriInput = {
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    category: categoryCreateNestedOneWithoutTransactionsInput
    admin: userCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutSantriInput = {
    id?: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutSantriInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput>
  }

  export type transactionCreateManySantriInputEnvelope = {
    data: transactionCreateManySantriInput | transactionCreateManySantriInput[]
    skipDuplicates?: boolean
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

  export type institutionUpsertWithoutSantriInput = {
    update: XOR<institutionUpdateWithoutSantriInput, institutionUncheckedUpdateWithoutSantriInput>
    create: XOR<institutionCreateWithoutSantriInput, institutionUncheckedCreateWithoutSantriInput>
    where?: institutionWhereInput
  }

  export type institutionUpdateToOneWithWhereWithoutSantriInput = {
    where?: institutionWhereInput
    data: XOR<institutionUpdateWithoutSantriInput, institutionUncheckedUpdateWithoutSantriInput>
  }

  export type institutionUpdateWithoutSantriInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutInstitutionNestedInput
    admin?: userUpdateOneRequiredWithoutCreatedInstitutionsNestedInput
    users?: userUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutInstitutionNestedInput
    users?: userUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type userUpsertWithoutSantriInput = {
    update: XOR<userUpdateWithoutSantriInput, userUncheckedUpdateWithoutSantriInput>
    create: XOR<userCreateWithoutSantriInput, userUncheckedCreateWithoutSantriInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSantriInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSantriInput, userUncheckedUpdateWithoutSantriInput>
  }

  export type userUpdateWithoutSantriInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutSantriInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutSantriInput, transactionUncheckedUpdateWithoutSantriInput>
    create: XOR<transactionCreateWithoutSantriInput, transactionUncheckedCreateWithoutSantriInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutSantriInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutSantriInput, transactionUncheckedUpdateWithoutSantriInput>
  }

  export type transactionUpdateManyWithWhereWithoutSantriInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutSantriInput>
  }

  export type categoryCreateWithoutTransactionsInput = {
    name: string
    type: $Enums.category_type
    isActive?: boolean
    createdAt?: Date | string
    institution: institutionCreateNestedOneWithoutCategoriesInput
  }

  export type categoryUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    type: $Enums.category_type
    institutionId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutTransactionsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutTransactionsInput, categoryUncheckedCreateWithoutTransactionsInput>
  }

  export type userCreateWithoutTransactionsInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionCreateNestedManyWithoutAdminInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    passwordResets?: password_resetCreateNestedManyWithoutUserInput
    profile?: profileCreateNestedOneWithoutUserInput
    santri?: santriCreateNestedManyWithoutWaliInput
    institution?: institutionCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    institutionId?: number | null
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: email_verificationUncheckedCreateNestedManyWithoutUserInput
    createdInstitutions?: institutionUncheckedCreateNestedManyWithoutAdminInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: password_resetUncheckedCreateNestedManyWithoutUserInput
    profile?: profileUncheckedCreateNestedOneWithoutUserInput
    santri?: santriUncheckedCreateNestedManyWithoutWaliInput
  }

  export type userCreateOrConnectWithoutTransactionsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTransactionsInput, userUncheckedCreateWithoutTransactionsInput>
  }

  export type santriCreateWithoutTransactionsInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutSantriInput
    institution: institutionCreateNestedOneWithoutSantriInput
    wali: userCreateNestedOneWithoutSantriInput
  }

  export type santriUncheckedCreateWithoutTransactionsInput = {
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
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
  }

  export type santriCreateOrConnectWithoutTransactionsInput = {
    where: santriWhereUniqueInput
    create: XOR<santriCreateWithoutTransactionsInput, santriUncheckedCreateWithoutTransactionsInput>
  }

  export type categoryUpsertWithoutTransactionsInput = {
    update: XOR<categoryUpdateWithoutTransactionsInput, categoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<categoryCreateWithoutTransactionsInput, categoryUncheckedCreateWithoutTransactionsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutTransactionsInput, categoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type categoryUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: institutionUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    institutionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutTransactionsInput = {
    update: XOR<userUpdateWithoutTransactionsInput, userUncheckedUpdateWithoutTransactionsInput>
    create: XOR<userCreateWithoutTransactionsInput, userUncheckedCreateWithoutTransactionsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTransactionsInput, userUncheckedUpdateWithoutTransactionsInput>
  }

  export type userUpdateWithoutTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    institution?: institutionUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    institutionId?: NullableIntFieldUpdateOperationsInput | number | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
  }

  export type santriUpsertWithoutTransactionsInput = {
    update: XOR<santriUpdateWithoutTransactionsInput, santriUncheckedUpdateWithoutTransactionsInput>
    create: XOR<santriCreateWithoutTransactionsInput, santriUncheckedCreateWithoutTransactionsInput>
    where?: santriWhereInput
  }

  export type santriUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: santriWhereInput
    data: XOR<santriUpdateWithoutTransactionsInput, santriUncheckedUpdateWithoutTransactionsInput>
  }

  export type santriUpdateWithoutTransactionsInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutSantriNestedInput
    institution?: institutionUpdateOneRequiredWithoutSantriNestedInput
    wali?: userUpdateOneRequiredWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateWithoutTransactionsInput = {
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
    authAccounts?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type auth_accountCreateWithoutUserInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    santri?: santriCreateNestedOneWithoutAuthAccountsInput
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

  export type email_verificationCreateWithoutUserInput = {
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type email_verificationUncheckedCreateWithoutUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type email_verificationCreateOrConnectWithoutUserInput = {
    where: email_verificationWhereUniqueInput
    create: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
  }

  export type email_verificationCreateManyUserInputEnvelope = {
    data: email_verificationCreateManyUserInput | email_verificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type institutionCreateWithoutAdminInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryCreateNestedManyWithoutInstitutionInput
    santri?: santriCreateNestedManyWithoutInstitutionInput
    users?: userCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutInstitutionInput
    santri?: santriUncheckedCreateNestedManyWithoutInstitutionInput
    users?: userUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type institutionCreateOrConnectWithoutAdminInput = {
    where: institutionWhereUniqueInput
    create: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput>
  }

  export type institutionCreateManyAdminInputEnvelope = {
    data: institutionCreateManyAdminInput | institutionCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUserInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type notificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type notificationCreateOrConnectWithoutUserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateManyUserInputEnvelope = {
    data: notificationCreateManyUserInput | notificationCreateManyUserInput[]
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

  export type profileCreateWithoutUserInput = {
    name: string
    gender?: string | null
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    occupation?: string | null
    phone?: string | null
  }

  export type profileUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    gender?: string | null
    address: string
    profile_picture_url?: string | null
    public_id?: string | null
    occupation?: string | null
    phone?: string | null
  }

  export type profileCreateOrConnectWithoutUserInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
  }

  export type santriCreateWithoutWaliInput = {
    nis: string
    fullname: string
    kelas: string
    gender: string
    waliName?: string | null
    institutionName?: string | null
    isActive?: boolean
    createdAt?: Date | string
    authAccounts?: auth_accountCreateNestedManyWithoutSantriInput
    institution: institutionCreateNestedOneWithoutSantriInput
    transactions?: transactionCreateNestedManyWithoutSantriInput
  }

  export type santriUncheckedCreateWithoutWaliInput = {
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
    authAccounts?: auth_accountUncheckedCreateNestedManyWithoutSantriInput
    transactions?: transactionUncheckedCreateNestedManyWithoutSantriInput
  }

  export type santriCreateOrConnectWithoutWaliInput = {
    where: santriWhereUniqueInput
    create: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput>
  }

  export type santriCreateManyWaliInputEnvelope = {
    data: santriCreateManyWaliInput | santriCreateManyWaliInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutAdminInput = {
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    category: categoryCreateNestedOneWithoutTransactionsInput
    santri: santriCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutAdminInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutAdminInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput>
  }

  export type transactionCreateManyAdminInputEnvelope = {
    data: transactionCreateManyAdminInput | transactionCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type institutionCreateWithoutUsersInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryCreateNestedManyWithoutInstitutionInput
    admin: userCreateNestedOneWithoutCreatedInstitutionsInput
    santri?: santriCreateNestedManyWithoutInstitutionInput
  }

  export type institutionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdBy: number
    isActive?: boolean
    createdAt?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutInstitutionInput
    santri?: santriUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type institutionCreateOrConnectWithoutUsersInput = {
    where: institutionWhereUniqueInput
    create: XOR<institutionCreateWithoutUsersInput, institutionUncheckedCreateWithoutUsersInput>
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

  export type email_verificationUpsertWithWhereUniqueWithoutUserInput = {
    where: email_verificationWhereUniqueInput
    update: XOR<email_verificationUpdateWithoutUserInput, email_verificationUncheckedUpdateWithoutUserInput>
    create: XOR<email_verificationCreateWithoutUserInput, email_verificationUncheckedCreateWithoutUserInput>
  }

  export type email_verificationUpdateWithWhereUniqueWithoutUserInput = {
    where: email_verificationWhereUniqueInput
    data: XOR<email_verificationUpdateWithoutUserInput, email_verificationUncheckedUpdateWithoutUserInput>
  }

  export type email_verificationUpdateManyWithWhereWithoutUserInput = {
    where: email_verificationScalarWhereInput
    data: XOR<email_verificationUpdateManyMutationInput, email_verificationUncheckedUpdateManyWithoutUserInput>
  }

  export type email_verificationScalarWhereInput = {
    AND?: email_verificationScalarWhereInput | email_verificationScalarWhereInput[]
    OR?: email_verificationScalarWhereInput[]
    NOT?: email_verificationScalarWhereInput | email_verificationScalarWhereInput[]
    id?: IntFilter<"email_verification"> | number
    userId?: IntFilter<"email_verification"> | number
    otpCode?: StringFilter<"email_verification"> | string
    expiredAt?: DateTimeFilter<"email_verification"> | Date | string
    isUsed?: BoolFilter<"email_verification"> | boolean
    createdAt?: DateTimeFilter<"email_verification"> | Date | string
  }

  export type institutionUpsertWithWhereUniqueWithoutAdminInput = {
    where: institutionWhereUniqueInput
    update: XOR<institutionUpdateWithoutAdminInput, institutionUncheckedUpdateWithoutAdminInput>
    create: XOR<institutionCreateWithoutAdminInput, institutionUncheckedCreateWithoutAdminInput>
  }

  export type institutionUpdateWithWhereUniqueWithoutAdminInput = {
    where: institutionWhereUniqueInput
    data: XOR<institutionUpdateWithoutAdminInput, institutionUncheckedUpdateWithoutAdminInput>
  }

  export type institutionUpdateManyWithWhereWithoutAdminInput = {
    where: institutionScalarWhereInput
    data: XOR<institutionUpdateManyMutationInput, institutionUncheckedUpdateManyWithoutAdminInput>
  }

  export type institutionScalarWhereInput = {
    AND?: institutionScalarWhereInput | institutionScalarWhereInput[]
    OR?: institutionScalarWhereInput[]
    NOT?: institutionScalarWhereInput | institutionScalarWhereInput[]
    id?: IntFilter<"institution"> | number
    name?: StringFilter<"institution"> | string
    createdBy?: IntFilter<"institution"> | number
    isActive?: BoolFilter<"institution"> | boolean
    createdAt?: DateTimeFilter<"institution"> | Date | string
  }

  export type notificationUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    userId?: IntFilter<"notification"> | number
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
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

  export type profileUpsertWithoutUserInput = {
    update: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutUserInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>
  }

  export type profileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type santriUpsertWithWhereUniqueWithoutWaliInput = {
    where: santriWhereUniqueInput
    update: XOR<santriUpdateWithoutWaliInput, santriUncheckedUpdateWithoutWaliInput>
    create: XOR<santriCreateWithoutWaliInput, santriUncheckedCreateWithoutWaliInput>
  }

  export type santriUpdateWithWhereUniqueWithoutWaliInput = {
    where: santriWhereUniqueInput
    data: XOR<santriUpdateWithoutWaliInput, santriUncheckedUpdateWithoutWaliInput>
  }

  export type santriUpdateManyWithWhereWithoutWaliInput = {
    where: santriScalarWhereInput
    data: XOR<santriUpdateManyMutationInput, santriUncheckedUpdateManyWithoutWaliInput>
  }

  export type transactionUpsertWithWhereUniqueWithoutAdminInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutAdminInput, transactionUncheckedUpdateWithoutAdminInput>
    create: XOR<transactionCreateWithoutAdminInput, transactionUncheckedCreateWithoutAdminInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutAdminInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutAdminInput, transactionUncheckedUpdateWithoutAdminInput>
  }

  export type transactionUpdateManyWithWhereWithoutAdminInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutAdminInput>
  }

  export type institutionUpsertWithoutUsersInput = {
    update: XOR<institutionUpdateWithoutUsersInput, institutionUncheckedUpdateWithoutUsersInput>
    create: XOR<institutionCreateWithoutUsersInput, institutionUncheckedCreateWithoutUsersInput>
    where?: institutionWhereInput
  }

  export type institutionUpdateToOneWithWhereWithoutUsersInput = {
    where?: institutionWhereInput
    data: XOR<institutionUpdateWithoutUsersInput, institutionUncheckedUpdateWithoutUsersInput>
  }

  export type institutionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutInstitutionNestedInput
    admin?: userUpdateOneRequiredWithoutCreatedInstitutionsNestedInput
    santri?: santriUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutInstitutionNestedInput
    santri?: santriUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type transactionCreateManyCategoryInput = {
    id?: number
    santriId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type transactionUpdateWithoutCategoryInput = {
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: userUpdateOneRequiredWithoutTransactionsNestedInput
    santri?: santriUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateManyInstitutionInput = {
    id?: number
    name: string
    type: $Enums.category_type
    isActive?: boolean
    createdAt?: Date | string
  }

  export type santriCreateManyInstitutionInput = {
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

  export type userCreateManyInstitutionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    isEmailVerified?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type categoryUpdateWithoutInstitutionInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type santriUpdateWithoutInstitutionInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutSantriNestedInput
    wali?: userUpdateOneRequiredWithoutSantriNestedInput
    transactions?: transactionUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateWithoutInstitutionInput = {
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
    authAccounts?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateManyWithoutInstitutionInput = {
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

  export type userUpdateWithoutInstitutionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUpdateManyWithoutAdminNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUpdateManyWithoutUserNestedInput
    profile?: profileUpdateOneWithoutUserNestedInput
    santri?: santriUpdateManyWithoutWaliNestedInput
    transactions?: transactionUpdateManyWithoutAdminNestedInput
  }

  export type userUncheckedUpdateWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: email_verificationUncheckedUpdateManyWithoutUserNestedInput
    createdInstitutions?: institutionUncheckedUpdateManyWithoutAdminNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: password_resetUncheckedUpdateManyWithoutUserNestedInput
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput
    santri?: santriUncheckedUpdateManyWithoutWaliNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type userUncheckedUpdateManyWithoutInstitutionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountCreateManySantriInput = {
    id?: number
    username: string
    password: string
    userId: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type transactionCreateManySantriInput = {
    id?: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    createdBy: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type auth_accountUpdateWithoutSantriInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutAuthAccountsNestedInput
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

  export type transactionUpdateWithoutSantriInput = {
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutTransactionsNestedInput
    admin?: userUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyWithoutSantriInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_accountCreateManyUserInput = {
    id?: number
    username: string
    password: string
    santriId?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type email_verificationCreateManyUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type institutionCreateManyAdminInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type notificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type password_resetCreateManyUserInput = {
    id?: number
    otpCode: string
    expiredAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type santriCreateManyWaliInput = {
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

  export type transactionCreateManyAdminInput = {
    id?: number
    santriId: number
    categoryId: number
    type: $Enums.category_type
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    transactionDate: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type auth_accountUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: santriUpdateOneWithoutAuthAccountsNestedInput
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

  export type email_verificationUpdateWithoutUserInput = {
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type email_verificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otpCode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type institutionUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutInstitutionNestedInput
    santri?: santriUpdateManyWithoutInstitutionNestedInput
    users?: userUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutInstitutionNestedInput
    santri?: santriUncheckedUpdateManyWithoutInstitutionNestedInput
    users?: userUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type institutionUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
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

  export type santriUpdateWithoutWaliInput = {
    nis?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    waliName?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: auth_accountUpdateManyWithoutSantriNestedInput
    institution?: institutionUpdateOneRequiredWithoutSantriNestedInput
    transactions?: transactionUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateWithoutWaliInput = {
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
    authAccounts?: auth_accountUncheckedUpdateManyWithoutSantriNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type santriUncheckedUpdateManyWithoutWaliInput = {
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

  export type transactionUpdateWithoutAdminInput = {
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutTransactionsNestedInput
    santri?: santriUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    santriId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    type?: Enumcategory_typeFieldUpdateOperationsInput | $Enums.category_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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