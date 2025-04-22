
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model raza
 * 
 */
export type raza = $Result.DefaultSelection<Prisma.$razaPayload>
/**
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model generos
 * 
 */
export type generos = $Result.DefaultSelection<Prisma.$generosPayload>
/**
 * Model mascotas
 * 
 */
export type mascotas = $Result.DefaultSelection<Prisma.$mascotasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estado: {
  Disponible: 'Disponible',
  Adoptado: 'Adoptado'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raza`: Exposes CRUD operations for the **raza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Razas
    * const razas = await prisma.raza.findMany()
    * ```
    */
  get raza(): Prisma.razaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generos`: Exposes CRUD operations for the **generos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.generos.findMany()
    * ```
    */
  get generos(): Prisma.generosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mascotas`: Exposes CRUD operations for the **mascotas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mascotas
    * const mascotas = await prisma.mascotas.findMany()
    * ```
    */
  get mascotas(): Prisma.mascotasDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    usuarios: 'usuarios',
    raza: 'raza',
    categorias: 'categorias',
    generos: 'generos',
    mascotas: 'mascotas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "raza" | "categorias" | "generos" | "mascotas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      raza: {
        payload: Prisma.$razaPayload<ExtArgs>
        fields: Prisma.razaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.razaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.razaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          findFirst: {
            args: Prisma.razaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.razaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          findMany: {
            args: Prisma.razaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>[]
          }
          create: {
            args: Prisma.razaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          createMany: {
            args: Prisma.razaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.razaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          update: {
            args: Prisma.razaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          deleteMany: {
            args: Prisma.razaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.razaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.razaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$razaPayload>
          }
          aggregate: {
            args: Prisma.RazaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaza>
          }
          groupBy: {
            args: Prisma.razaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RazaGroupByOutputType>[]
          }
          count: {
            args: Prisma.razaCountArgs<ExtArgs>
            result: $Utils.Optional<RazaCountAggregateOutputType> | number
          }
        }
      }
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      generos: {
        payload: Prisma.$generosPayload<ExtArgs>
        fields: Prisma.generosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          findFirst: {
            args: Prisma.generosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          findMany: {
            args: Prisma.generosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>[]
          }
          create: {
            args: Prisma.generosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          createMany: {
            args: Prisma.generosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.generosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          update: {
            args: Prisma.generosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          deleteMany: {
            args: Prisma.generosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.generosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.generosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$generosPayload>
          }
          aggregate: {
            args: Prisma.GenerosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneros>
          }
          groupBy: {
            args: Prisma.generosGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerosGroupByOutputType>[]
          }
          count: {
            args: Prisma.generosCountArgs<ExtArgs>
            result: $Utils.Optional<GenerosCountAggregateOutputType> | number
          }
        }
      }
      mascotas: {
        payload: Prisma.$mascotasPayload<ExtArgs>
        fields: Prisma.mascotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mascotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mascotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          findFirst: {
            args: Prisma.mascotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mascotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          findMany: {
            args: Prisma.mascotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>[]
          }
          create: {
            args: Prisma.mascotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          createMany: {
            args: Prisma.mascotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mascotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          update: {
            args: Prisma.mascotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          deleteMany: {
            args: Prisma.mascotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mascotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mascotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotasPayload>
          }
          aggregate: {
            args: Prisma.MascotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMascotas>
          }
          groupBy: {
            args: Prisma.mascotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MascotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.mascotasCountArgs<ExtArgs>
            result: $Utils.Optional<MascotasCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuarios?: usuariosOmit
    raza?: razaOmit
    categorias?: categoriasOmit
    generos?: generosOmit
    mascotas?: mascotasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type RazaCountOutputType
   */

  export type RazaCountOutputType = {
    mascotas: number
  }

  export type RazaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | RazaCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * RazaCountOutputType without action
   */
  export type RazaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazaCountOutputType
     */
    select?: RazaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RazaCountOutputType without action
   */
  export type RazaCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mascotasWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    mascotas: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | CategoriasCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mascotasWhereInput
  }


  /**
   * Count Type GenerosCountOutputType
   */

  export type GenerosCountOutputType = {
    mascotas: number
  }

  export type GenerosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | GenerosCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * GenerosCountOutputType without action
   */
  export type GenerosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerosCountOutputType
     */
    select?: GenerosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenerosCountOutputType without action
   */
  export type GenerosCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mascotasWhereInput
  }


  /**
   * Count Type MascotasCountOutputType
   */

  export type MascotasCountOutputType = {
    usuarios: number
  }

  export type MascotasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | MascotasCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * MascotasCountOutputType without action
   */
  export type MascotasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MascotasCountOutputType
     */
    select?: MascotasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MascotasCountOutputType without action
   */
  export type MascotasCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    mascota_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    mascota_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    mascota_id: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    mascota_id: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    mascota_id: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    mascota_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    mascota_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    mascota_id?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    mascota_id?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    mascota_id?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    mascota_id: number
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    mascota_id?: boolean
    fk_mascota?: boolean | usuarios$fk_mascotaArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    mascota_id?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "mascota_id", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fk_mascota?: boolean | usuarios$fk_mascotaArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      fk_mascota: Prisma.$mascotasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      mascota_id: number
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fk_mascota<T extends usuarios$fk_mascotaArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$fk_mascotaArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password: FieldRef<"usuarios", 'String'>
    readonly mascota_id: FieldRef<"usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.fk_mascota
   */
  export type usuarios$fk_mascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    where?: mascotasWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model raza
   */

  export type AggregateRaza = {
    _count: RazaCountAggregateOutputType | null
    _avg: RazaAvgAggregateOutputType | null
    _sum: RazaSumAggregateOutputType | null
    _min: RazaMinAggregateOutputType | null
    _max: RazaMaxAggregateOutputType | null
  }

  export type RazaAvgAggregateOutputType = {
    id_raza: number | null
  }

  export type RazaSumAggregateOutputType = {
    id_raza: number | null
  }

  export type RazaMinAggregateOutputType = {
    id_raza: number | null
    nombre: string | null
  }

  export type RazaMaxAggregateOutputType = {
    id_raza: number | null
    nombre: string | null
  }

  export type RazaCountAggregateOutputType = {
    id_raza: number
    nombre: number
    _all: number
  }


  export type RazaAvgAggregateInputType = {
    id_raza?: true
  }

  export type RazaSumAggregateInputType = {
    id_raza?: true
  }

  export type RazaMinAggregateInputType = {
    id_raza?: true
    nombre?: true
  }

  export type RazaMaxAggregateInputType = {
    id_raza?: true
    nombre?: true
  }

  export type RazaCountAggregateInputType = {
    id_raza?: true
    nombre?: true
    _all?: true
  }

  export type RazaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raza to aggregate.
     */
    where?: razaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of razas to fetch.
     */
    orderBy?: razaOrderByWithRelationInput | razaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: razaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned razas
    **/
    _count?: true | RazaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RazaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RazaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RazaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RazaMaxAggregateInputType
  }

  export type GetRazaAggregateType<T extends RazaAggregateArgs> = {
        [P in keyof T & keyof AggregateRaza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaza[P]>
      : GetScalarType<T[P], AggregateRaza[P]>
  }




  export type razaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: razaWhereInput
    orderBy?: razaOrderByWithAggregationInput | razaOrderByWithAggregationInput[]
    by: RazaScalarFieldEnum[] | RazaScalarFieldEnum
    having?: razaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RazaCountAggregateInputType | true
    _avg?: RazaAvgAggregateInputType
    _sum?: RazaSumAggregateInputType
    _min?: RazaMinAggregateInputType
    _max?: RazaMaxAggregateInputType
  }

  export type RazaGroupByOutputType = {
    id_raza: number
    nombre: string
    _count: RazaCountAggregateOutputType | null
    _avg: RazaAvgAggregateOutputType | null
    _sum: RazaSumAggregateOutputType | null
    _min: RazaMinAggregateOutputType | null
    _max: RazaMaxAggregateOutputType | null
  }

  type GetRazaGroupByPayload<T extends razaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RazaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RazaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RazaGroupByOutputType[P]>
            : GetScalarType<T[P], RazaGroupByOutputType[P]>
        }
      >
    >


  export type razaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_raza?: boolean
    nombre?: boolean
    mascotas?: boolean | raza$mascotasArgs<ExtArgs>
    _count?: boolean | RazaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raza"]>



  export type razaSelectScalar = {
    id_raza?: boolean
    nombre?: boolean
  }

  export type razaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_raza" | "nombre", ExtArgs["result"]["raza"]>
  export type razaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | raza$mascotasArgs<ExtArgs>
    _count?: boolean | RazaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $razaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raza"
    objects: {
      mascotas: Prisma.$mascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_raza: number
      nombre: string
    }, ExtArgs["result"]["raza"]>
    composites: {}
  }

  type razaGetPayload<S extends boolean | null | undefined | razaDefaultArgs> = $Result.GetResult<Prisma.$razaPayload, S>

  type razaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<razaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RazaCountAggregateInputType | true
    }

  export interface razaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raza'], meta: { name: 'raza' } }
    /**
     * Find zero or one Raza that matches the filter.
     * @param {razaFindUniqueArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends razaFindUniqueArgs>(args: SelectSubset<T, razaFindUniqueArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {razaFindUniqueOrThrowArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends razaFindUniqueOrThrowArgs>(args: SelectSubset<T, razaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaFindFirstArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends razaFindFirstArgs>(args?: SelectSubset<T, razaFindFirstArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaFindFirstOrThrowArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends razaFindFirstOrThrowArgs>(args?: SelectSubset<T, razaFindFirstOrThrowArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Razas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Razas
     * const razas = await prisma.raza.findMany()
     * 
     * // Get first 10 Razas
     * const razas = await prisma.raza.findMany({ take: 10 })
     * 
     * // Only select the `id_raza`
     * const razaWithId_razaOnly = await prisma.raza.findMany({ select: { id_raza: true } })
     * 
     */
    findMany<T extends razaFindManyArgs>(args?: SelectSubset<T, razaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raza.
     * @param {razaCreateArgs} args - Arguments to create a Raza.
     * @example
     * // Create one Raza
     * const Raza = await prisma.raza.create({
     *   data: {
     *     // ... data to create a Raza
     *   }
     * })
     * 
     */
    create<T extends razaCreateArgs>(args: SelectSubset<T, razaCreateArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Razas.
     * @param {razaCreateManyArgs} args - Arguments to create many Razas.
     * @example
     * // Create many Razas
     * const raza = await prisma.raza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends razaCreateManyArgs>(args?: SelectSubset<T, razaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Raza.
     * @param {razaDeleteArgs} args - Arguments to delete one Raza.
     * @example
     * // Delete one Raza
     * const Raza = await prisma.raza.delete({
     *   where: {
     *     // ... filter to delete one Raza
     *   }
     * })
     * 
     */
    delete<T extends razaDeleteArgs>(args: SelectSubset<T, razaDeleteArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raza.
     * @param {razaUpdateArgs} args - Arguments to update one Raza.
     * @example
     * // Update one Raza
     * const raza = await prisma.raza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends razaUpdateArgs>(args: SelectSubset<T, razaUpdateArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Razas.
     * @param {razaDeleteManyArgs} args - Arguments to filter Razas to delete.
     * @example
     * // Delete a few Razas
     * const { count } = await prisma.raza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends razaDeleteManyArgs>(args?: SelectSubset<T, razaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Razas
     * const raza = await prisma.raza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends razaUpdateManyArgs>(args: SelectSubset<T, razaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Raza.
     * @param {razaUpsertArgs} args - Arguments to update or create a Raza.
     * @example
     * // Update or create a Raza
     * const raza = await prisma.raza.upsert({
     *   create: {
     *     // ... data to create a Raza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raza we want to update
     *   }
     * })
     */
    upsert<T extends razaUpsertArgs>(args: SelectSubset<T, razaUpsertArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaCountArgs} args - Arguments to filter Razas to count.
     * @example
     * // Count the number of Razas
     * const count = await prisma.raza.count({
     *   where: {
     *     // ... the filter for the Razas we want to count
     *   }
     * })
    **/
    count<T extends razaCountArgs>(
      args?: Subset<T, razaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RazaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RazaAggregateArgs>(args: Subset<T, RazaAggregateArgs>): Prisma.PrismaPromise<GetRazaAggregateType<T>>

    /**
     * Group by Raza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {razaGroupByArgs} args - Group by arguments.
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
      T extends razaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: razaGroupByArgs['orderBy'] }
        : { orderBy?: razaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, razaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRazaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raza model
   */
  readonly fields: razaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__razaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascotas<T extends raza$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, raza$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the raza model
   */
  interface razaFieldRefs {
    readonly id_raza: FieldRef<"raza", 'Int'>
    readonly nombre: FieldRef<"raza", 'String'>
  }
    

  // Custom InputTypes
  /**
   * raza findUnique
   */
  export type razaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter, which raza to fetch.
     */
    where: razaWhereUniqueInput
  }

  /**
   * raza findUniqueOrThrow
   */
  export type razaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter, which raza to fetch.
     */
    where: razaWhereUniqueInput
  }

  /**
   * raza findFirst
   */
  export type razaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter, which raza to fetch.
     */
    where?: razaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of razas to fetch.
     */
    orderBy?: razaOrderByWithRelationInput | razaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for razas.
     */
    cursor?: razaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of razas.
     */
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * raza findFirstOrThrow
   */
  export type razaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter, which raza to fetch.
     */
    where?: razaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of razas to fetch.
     */
    orderBy?: razaOrderByWithRelationInput | razaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for razas.
     */
    cursor?: razaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of razas.
     */
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * raza findMany
   */
  export type razaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter, which razas to fetch.
     */
    where?: razaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of razas to fetch.
     */
    orderBy?: razaOrderByWithRelationInput | razaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing razas.
     */
    cursor?: razaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` razas.
     */
    skip?: number
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * raza create
   */
  export type razaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * The data needed to create a raza.
     */
    data: XOR<razaCreateInput, razaUncheckedCreateInput>
  }

  /**
   * raza createMany
   */
  export type razaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many razas.
     */
    data: razaCreateManyInput | razaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raza update
   */
  export type razaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * The data needed to update a raza.
     */
    data: XOR<razaUpdateInput, razaUncheckedUpdateInput>
    /**
     * Choose, which raza to update.
     */
    where: razaWhereUniqueInput
  }

  /**
   * raza updateMany
   */
  export type razaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update razas.
     */
    data: XOR<razaUpdateManyMutationInput, razaUncheckedUpdateManyInput>
    /**
     * Filter which razas to update
     */
    where?: razaWhereInput
    /**
     * Limit how many razas to update.
     */
    limit?: number
  }

  /**
   * raza upsert
   */
  export type razaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * The filter to search for the raza to update in case it exists.
     */
    where: razaWhereUniqueInput
    /**
     * In case the raza found by the `where` argument doesn't exist, create a new raza with this data.
     */
    create: XOR<razaCreateInput, razaUncheckedCreateInput>
    /**
     * In case the raza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<razaUpdateInput, razaUncheckedUpdateInput>
  }

  /**
   * raza delete
   */
  export type razaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    /**
     * Filter which raza to delete.
     */
    where: razaWhereUniqueInput
  }

  /**
   * raza deleteMany
   */
  export type razaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which razas to delete
     */
    where?: razaWhereInput
    /**
     * Limit how many razas to delete.
     */
    limit?: number
  }

  /**
   * raza.mascotas
   */
  export type raza$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    where?: mascotasWhereInput
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    cursor?: mascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * raza without action
   */
  export type razaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
  }


  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriasCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id_categoria: number
    nombre: string
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    mascotas?: boolean | categorias$mascotasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type categoriasSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | categorias$mascotasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      mascotas: Prisma.$mascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascotas<T extends categorias$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, categorias$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id_categoria: FieldRef<"categorias", 'Int'>
    readonly nombre: FieldRef<"categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.mascotas
   */
  export type categorias$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    where?: mascotasWhereInput
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    cursor?: mascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model generos
   */

  export type AggregateGeneros = {
    _count: GenerosCountAggregateOutputType | null
    _avg: GenerosAvgAggregateOutputType | null
    _sum: GenerosSumAggregateOutputType | null
    _min: GenerosMinAggregateOutputType | null
    _max: GenerosMaxAggregateOutputType | null
  }

  export type GenerosAvgAggregateOutputType = {
    id_genero: number | null
  }

  export type GenerosSumAggregateOutputType = {
    id_genero: number | null
  }

  export type GenerosMinAggregateOutputType = {
    id_genero: number | null
    nombre: string | null
  }

  export type GenerosMaxAggregateOutputType = {
    id_genero: number | null
    nombre: string | null
  }

  export type GenerosCountAggregateOutputType = {
    id_genero: number
    nombre: number
    _all: number
  }


  export type GenerosAvgAggregateInputType = {
    id_genero?: true
  }

  export type GenerosSumAggregateInputType = {
    id_genero?: true
  }

  export type GenerosMinAggregateInputType = {
    id_genero?: true
    nombre?: true
  }

  export type GenerosMaxAggregateInputType = {
    id_genero?: true
    nombre?: true
  }

  export type GenerosCountAggregateInputType = {
    id_genero?: true
    nombre?: true
    _all?: true
  }

  export type GenerosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generos to aggregate.
     */
    where?: generosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generosOrderByWithRelationInput | generosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generos
    **/
    _count?: true | GenerosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerosMaxAggregateInputType
  }

  export type GetGenerosAggregateType<T extends GenerosAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneros[P]>
      : GetScalarType<T[P], AggregateGeneros[P]>
  }




  export type generosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generosWhereInput
    orderBy?: generosOrderByWithAggregationInput | generosOrderByWithAggregationInput[]
    by: GenerosScalarFieldEnum[] | GenerosScalarFieldEnum
    having?: generosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerosCountAggregateInputType | true
    _avg?: GenerosAvgAggregateInputType
    _sum?: GenerosSumAggregateInputType
    _min?: GenerosMinAggregateInputType
    _max?: GenerosMaxAggregateInputType
  }

  export type GenerosGroupByOutputType = {
    id_genero: number
    nombre: string
    _count: GenerosCountAggregateOutputType | null
    _avg: GenerosAvgAggregateOutputType | null
    _sum: GenerosSumAggregateOutputType | null
    _min: GenerosMinAggregateOutputType | null
    _max: GenerosMaxAggregateOutputType | null
  }

  type GetGenerosGroupByPayload<T extends generosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerosGroupByOutputType[P]>
            : GetScalarType<T[P], GenerosGroupByOutputType[P]>
        }
      >
    >


  export type generosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    nombre?: boolean
    mascotas?: boolean | generos$mascotasArgs<ExtArgs>
    _count?: boolean | GenerosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generos"]>



  export type generosSelectScalar = {
    id_genero?: boolean
    nombre?: boolean
  }

  export type generosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_genero" | "nombre", ExtArgs["result"]["generos"]>
  export type generosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | generos$mascotasArgs<ExtArgs>
    _count?: boolean | GenerosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $generosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "generos"
    objects: {
      mascotas: Prisma.$mascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_genero: number
      nombre: string
    }, ExtArgs["result"]["generos"]>
    composites: {}
  }

  type generosGetPayload<S extends boolean | null | undefined | generosDefaultArgs> = $Result.GetResult<Prisma.$generosPayload, S>

  type generosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<generosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerosCountAggregateInputType | true
    }

  export interface generosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['generos'], meta: { name: 'generos' } }
    /**
     * Find zero or one Generos that matches the filter.
     * @param {generosFindUniqueArgs} args - Arguments to find a Generos
     * @example
     * // Get one Generos
     * const generos = await prisma.generos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends generosFindUniqueArgs>(args: SelectSubset<T, generosFindUniqueArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {generosFindUniqueOrThrowArgs} args - Arguments to find a Generos
     * @example
     * // Get one Generos
     * const generos = await prisma.generos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends generosFindUniqueOrThrowArgs>(args: SelectSubset<T, generosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosFindFirstArgs} args - Arguments to find a Generos
     * @example
     * // Get one Generos
     * const generos = await prisma.generos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends generosFindFirstArgs>(args?: SelectSubset<T, generosFindFirstArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosFindFirstOrThrowArgs} args - Arguments to find a Generos
     * @example
     * // Get one Generos
     * const generos = await prisma.generos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends generosFindFirstOrThrowArgs>(args?: SelectSubset<T, generosFindFirstOrThrowArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.generos.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.generos.findMany({ take: 10 })
     * 
     * // Only select the `id_genero`
     * const generosWithId_generoOnly = await prisma.generos.findMany({ select: { id_genero: true } })
     * 
     */
    findMany<T extends generosFindManyArgs>(args?: SelectSubset<T, generosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generos.
     * @param {generosCreateArgs} args - Arguments to create a Generos.
     * @example
     * // Create one Generos
     * const Generos = await prisma.generos.create({
     *   data: {
     *     // ... data to create a Generos
     *   }
     * })
     * 
     */
    create<T extends generosCreateArgs>(args: SelectSubset<T, generosCreateArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {generosCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const generos = await prisma.generos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends generosCreateManyArgs>(args?: SelectSubset<T, generosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Generos.
     * @param {generosDeleteArgs} args - Arguments to delete one Generos.
     * @example
     * // Delete one Generos
     * const Generos = await prisma.generos.delete({
     *   where: {
     *     // ... filter to delete one Generos
     *   }
     * })
     * 
     */
    delete<T extends generosDeleteArgs>(args: SelectSubset<T, generosDeleteArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generos.
     * @param {generosUpdateArgs} args - Arguments to update one Generos.
     * @example
     * // Update one Generos
     * const generos = await prisma.generos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends generosUpdateArgs>(args: SelectSubset<T, generosUpdateArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {generosDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.generos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends generosDeleteManyArgs>(args?: SelectSubset<T, generosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const generos = await prisma.generos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends generosUpdateManyArgs>(args: SelectSubset<T, generosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Generos.
     * @param {generosUpsertArgs} args - Arguments to update or create a Generos.
     * @example
     * // Update or create a Generos
     * const generos = await prisma.generos.upsert({
     *   create: {
     *     // ... data to create a Generos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generos we want to update
     *   }
     * })
     */
    upsert<T extends generosUpsertArgs>(args: SelectSubset<T, generosUpsertArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.generos.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends generosCountArgs>(
      args?: Subset<T, generosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenerosAggregateArgs>(args: Subset<T, GenerosAggregateArgs>): Prisma.PrismaPromise<GetGenerosAggregateType<T>>

    /**
     * Group by Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generosGroupByArgs} args - Group by arguments.
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
      T extends generosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generosGroupByArgs['orderBy'] }
        : { orderBy?: generosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, generosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the generos model
   */
  readonly fields: generosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for generos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascotas<T extends generos$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, generos$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the generos model
   */
  interface generosFieldRefs {
    readonly id_genero: FieldRef<"generos", 'Int'>
    readonly nombre: FieldRef<"generos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * generos findUnique
   */
  export type generosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where: generosWhereUniqueInput
  }

  /**
   * generos findUniqueOrThrow
   */
  export type generosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where: generosWhereUniqueInput
  }

  /**
   * generos findFirst
   */
  export type generosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generosOrderByWithRelationInput | generosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GenerosScalarFieldEnum | GenerosScalarFieldEnum[]
  }

  /**
   * generos findFirstOrThrow
   */
  export type generosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generosOrderByWithRelationInput | generosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generos.
     */
    cursor?: generosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generos.
     */
    distinct?: GenerosScalarFieldEnum | GenerosScalarFieldEnum[]
  }

  /**
   * generos findMany
   */
  export type generosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter, which generos to fetch.
     */
    where?: generosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generos to fetch.
     */
    orderBy?: generosOrderByWithRelationInput | generosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generos.
     */
    cursor?: generosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generos.
     */
    skip?: number
    distinct?: GenerosScalarFieldEnum | GenerosScalarFieldEnum[]
  }

  /**
   * generos create
   */
  export type generosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * The data needed to create a generos.
     */
    data: XOR<generosCreateInput, generosUncheckedCreateInput>
  }

  /**
   * generos createMany
   */
  export type generosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generos.
     */
    data: generosCreateManyInput | generosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * generos update
   */
  export type generosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * The data needed to update a generos.
     */
    data: XOR<generosUpdateInput, generosUncheckedUpdateInput>
    /**
     * Choose, which generos to update.
     */
    where: generosWhereUniqueInput
  }

  /**
   * generos updateMany
   */
  export type generosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generos.
     */
    data: XOR<generosUpdateManyMutationInput, generosUncheckedUpdateManyInput>
    /**
     * Filter which generos to update
     */
    where?: generosWhereInput
    /**
     * Limit how many generos to update.
     */
    limit?: number
  }

  /**
   * generos upsert
   */
  export type generosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * The filter to search for the generos to update in case it exists.
     */
    where: generosWhereUniqueInput
    /**
     * In case the generos found by the `where` argument doesn't exist, create a new generos with this data.
     */
    create: XOR<generosCreateInput, generosUncheckedCreateInput>
    /**
     * In case the generos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generosUpdateInput, generosUncheckedUpdateInput>
  }

  /**
   * generos delete
   */
  export type generosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    /**
     * Filter which generos to delete.
     */
    where: generosWhereUniqueInput
  }

  /**
   * generos deleteMany
   */
  export type generosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generos to delete
     */
    where?: generosWhereInput
    /**
     * Limit how many generos to delete.
     */
    limit?: number
  }

  /**
   * generos.mascotas
   */
  export type generos$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    where?: mascotasWhereInput
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    cursor?: mascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * generos without action
   */
  export type generosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
  }


  /**
   * Model mascotas
   */

  export type AggregateMascotas = {
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  export type MascotasAvgAggregateOutputType = {
    id_mascota: number | null
    raza_id: number | null
    categoria_id: number | null
    genero_id: number | null
  }

  export type MascotasSumAggregateOutputType = {
    id_mascota: number | null
    raza_id: number | null
    categoria_id: number | null
    genero_id: number | null
  }

  export type MascotasMinAggregateOutputType = {
    id_mascota: number | null
    nombre: string | null
    raza_id: number | null
    categoria_id: number | null
    foto: string | null
    genero_id: number | null
    estado: $Enums.Estado | null
  }

  export type MascotasMaxAggregateOutputType = {
    id_mascota: number | null
    nombre: string | null
    raza_id: number | null
    categoria_id: number | null
    foto: string | null
    genero_id: number | null
    estado: $Enums.Estado | null
  }

  export type MascotasCountAggregateOutputType = {
    id_mascota: number
    nombre: number
    raza_id: number
    categoria_id: number
    foto: number
    genero_id: number
    estado: number
    _all: number
  }


  export type MascotasAvgAggregateInputType = {
    id_mascota?: true
    raza_id?: true
    categoria_id?: true
    genero_id?: true
  }

  export type MascotasSumAggregateInputType = {
    id_mascota?: true
    raza_id?: true
    categoria_id?: true
    genero_id?: true
  }

  export type MascotasMinAggregateInputType = {
    id_mascota?: true
    nombre?: true
    raza_id?: true
    categoria_id?: true
    foto?: true
    genero_id?: true
    estado?: true
  }

  export type MascotasMaxAggregateInputType = {
    id_mascota?: true
    nombre?: true
    raza_id?: true
    categoria_id?: true
    foto?: true
    genero_id?: true
    estado?: true
  }

  export type MascotasCountAggregateInputType = {
    id_mascota?: true
    nombre?: true
    raza_id?: true
    categoria_id?: true
    foto?: true
    genero_id?: true
    estado?: true
    _all?: true
  }

  export type MascotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mascotas to aggregate.
     */
    where?: mascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mascotas
    **/
    _count?: true | MascotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MascotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MascotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MascotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MascotasMaxAggregateInputType
  }

  export type GetMascotasAggregateType<T extends MascotasAggregateArgs> = {
        [P in keyof T & keyof AggregateMascotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMascotas[P]>
      : GetScalarType<T[P], AggregateMascotas[P]>
  }




  export type mascotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mascotasWhereInput
    orderBy?: mascotasOrderByWithAggregationInput | mascotasOrderByWithAggregationInput[]
    by: MascotasScalarFieldEnum[] | MascotasScalarFieldEnum
    having?: mascotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MascotasCountAggregateInputType | true
    _avg?: MascotasAvgAggregateInputType
    _sum?: MascotasSumAggregateInputType
    _min?: MascotasMinAggregateInputType
    _max?: MascotasMaxAggregateInputType
  }

  export type MascotasGroupByOutputType = {
    id_mascota: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    genero_id: number
    estado: $Enums.Estado
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  type GetMascotasGroupByPayload<T extends mascotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MascotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MascotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MascotasGroupByOutputType[P]>
            : GetScalarType<T[P], MascotasGroupByOutputType[P]>
        }
      >
    >


  export type mascotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mascota?: boolean
    nombre?: boolean
    raza_id?: boolean
    categoria_id?: boolean
    foto?: boolean
    genero_id?: boolean
    estado?: boolean
    fk_genero?: boolean | mascotas$fk_generoArgs<ExtArgs>
    fk_raza?: boolean | mascotas$fk_razaArgs<ExtArgs>
    fk_categoria?: boolean | mascotas$fk_categoriaArgs<ExtArgs>
    usuarios?: boolean | mascotas$usuariosArgs<ExtArgs>
    _count?: boolean | MascotasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascotas"]>



  export type mascotasSelectScalar = {
    id_mascota?: boolean
    nombre?: boolean
    raza_id?: boolean
    categoria_id?: boolean
    foto?: boolean
    genero_id?: boolean
    estado?: boolean
  }

  export type mascotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mascota" | "nombre" | "raza_id" | "categoria_id" | "foto" | "genero_id" | "estado", ExtArgs["result"]["mascotas"]>
  export type mascotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fk_genero?: boolean | mascotas$fk_generoArgs<ExtArgs>
    fk_raza?: boolean | mascotas$fk_razaArgs<ExtArgs>
    fk_categoria?: boolean | mascotas$fk_categoriaArgs<ExtArgs>
    usuarios?: boolean | mascotas$usuariosArgs<ExtArgs>
    _count?: boolean | MascotasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mascotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mascotas"
    objects: {
      fk_genero: Prisma.$generosPayload<ExtArgs> | null
      fk_raza: Prisma.$razaPayload<ExtArgs> | null
      fk_categoria: Prisma.$categoriasPayload<ExtArgs> | null
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mascota: number
      nombre: string
      raza_id: number
      categoria_id: number
      foto: string
      genero_id: number
      estado: $Enums.Estado
    }, ExtArgs["result"]["mascotas"]>
    composites: {}
  }

  type mascotasGetPayload<S extends boolean | null | undefined | mascotasDefaultArgs> = $Result.GetResult<Prisma.$mascotasPayload, S>

  type mascotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mascotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MascotasCountAggregateInputType | true
    }

  export interface mascotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mascotas'], meta: { name: 'mascotas' } }
    /**
     * Find zero or one Mascotas that matches the filter.
     * @param {mascotasFindUniqueArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mascotasFindUniqueArgs>(args: SelectSubset<T, mascotasFindUniqueArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mascotas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mascotasFindUniqueOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mascotasFindUniqueOrThrowArgs>(args: SelectSubset<T, mascotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasFindFirstArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mascotasFindFirstArgs>(args?: SelectSubset<T, mascotasFindFirstArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasFindFirstOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mascotasFindFirstOrThrowArgs>(args?: SelectSubset<T, mascotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mascotas
     * const mascotas = await prisma.mascotas.findMany()
     * 
     * // Get first 10 Mascotas
     * const mascotas = await prisma.mascotas.findMany({ take: 10 })
     * 
     * // Only select the `id_mascota`
     * const mascotasWithId_mascotaOnly = await prisma.mascotas.findMany({ select: { id_mascota: true } })
     * 
     */
    findMany<T extends mascotasFindManyArgs>(args?: SelectSubset<T, mascotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mascotas.
     * @param {mascotasCreateArgs} args - Arguments to create a Mascotas.
     * @example
     * // Create one Mascotas
     * const Mascotas = await prisma.mascotas.create({
     *   data: {
     *     // ... data to create a Mascotas
     *   }
     * })
     * 
     */
    create<T extends mascotasCreateArgs>(args: SelectSubset<T, mascotasCreateArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mascotas.
     * @param {mascotasCreateManyArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascotas = await prisma.mascotas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mascotasCreateManyArgs>(args?: SelectSubset<T, mascotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mascotas.
     * @param {mascotasDeleteArgs} args - Arguments to delete one Mascotas.
     * @example
     * // Delete one Mascotas
     * const Mascotas = await prisma.mascotas.delete({
     *   where: {
     *     // ... filter to delete one Mascotas
     *   }
     * })
     * 
     */
    delete<T extends mascotasDeleteArgs>(args: SelectSubset<T, mascotasDeleteArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mascotas.
     * @param {mascotasUpdateArgs} args - Arguments to update one Mascotas.
     * @example
     * // Update one Mascotas
     * const mascotas = await prisma.mascotas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mascotasUpdateArgs>(args: SelectSubset<T, mascotasUpdateArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mascotas.
     * @param {mascotasDeleteManyArgs} args - Arguments to filter Mascotas to delete.
     * @example
     * // Delete a few Mascotas
     * const { count } = await prisma.mascotas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mascotasDeleteManyArgs>(args?: SelectSubset<T, mascotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mascotas
     * const mascotas = await prisma.mascotas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mascotasUpdateManyArgs>(args: SelectSubset<T, mascotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mascotas.
     * @param {mascotasUpsertArgs} args - Arguments to update or create a Mascotas.
     * @example
     * // Update or create a Mascotas
     * const mascotas = await prisma.mascotas.upsert({
     *   create: {
     *     // ... data to create a Mascotas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mascotas we want to update
     *   }
     * })
     */
    upsert<T extends mascotasUpsertArgs>(args: SelectSubset<T, mascotasUpsertArgs<ExtArgs>>): Prisma__mascotasClient<$Result.GetResult<Prisma.$mascotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasCountArgs} args - Arguments to filter Mascotas to count.
     * @example
     * // Count the number of Mascotas
     * const count = await prisma.mascotas.count({
     *   where: {
     *     // ... the filter for the Mascotas we want to count
     *   }
     * })
    **/
    count<T extends mascotasCountArgs>(
      args?: Subset<T, mascotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MascotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MascotasAggregateArgs>(args: Subset<T, MascotasAggregateArgs>): Prisma.PrismaPromise<GetMascotasAggregateType<T>>

    /**
     * Group by Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotasGroupByArgs} args - Group by arguments.
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
      T extends mascotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mascotasGroupByArgs['orderBy'] }
        : { orderBy?: mascotasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mascotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mascotas model
   */
  readonly fields: mascotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mascotas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mascotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fk_genero<T extends mascotas$fk_generoArgs<ExtArgs> = {}>(args?: Subset<T, mascotas$fk_generoArgs<ExtArgs>>): Prisma__generosClient<$Result.GetResult<Prisma.$generosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fk_raza<T extends mascotas$fk_razaArgs<ExtArgs> = {}>(args?: Subset<T, mascotas$fk_razaArgs<ExtArgs>>): Prisma__razaClient<$Result.GetResult<Prisma.$razaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fk_categoria<T extends mascotas$fk_categoriaArgs<ExtArgs> = {}>(args?: Subset<T, mascotas$fk_categoriaArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends mascotas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, mascotas$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mascotas model
   */
  interface mascotasFieldRefs {
    readonly id_mascota: FieldRef<"mascotas", 'Int'>
    readonly nombre: FieldRef<"mascotas", 'String'>
    readonly raza_id: FieldRef<"mascotas", 'Int'>
    readonly categoria_id: FieldRef<"mascotas", 'Int'>
    readonly foto: FieldRef<"mascotas", 'String'>
    readonly genero_id: FieldRef<"mascotas", 'Int'>
    readonly estado: FieldRef<"mascotas", 'Estado'>
  }
    

  // Custom InputTypes
  /**
   * mascotas findUnique
   */
  export type mascotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where: mascotasWhereUniqueInput
  }

  /**
   * mascotas findUniqueOrThrow
   */
  export type mascotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where: mascotasWhereUniqueInput
  }

  /**
   * mascotas findFirst
   */
  export type mascotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where?: mascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mascotas.
     */
    cursor?: mascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * mascotas findFirstOrThrow
   */
  export type mascotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where?: mascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mascotas.
     */
    cursor?: mascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * mascotas findMany
   */
  export type mascotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where?: mascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotasOrderByWithRelationInput | mascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mascotas.
     */
    cursor?: mascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * mascotas create
   */
  export type mascotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * The data needed to create a mascotas.
     */
    data: XOR<mascotasCreateInput, mascotasUncheckedCreateInput>
  }

  /**
   * mascotas createMany
   */
  export type mascotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mascotas.
     */
    data: mascotasCreateManyInput | mascotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mascotas update
   */
  export type mascotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * The data needed to update a mascotas.
     */
    data: XOR<mascotasUpdateInput, mascotasUncheckedUpdateInput>
    /**
     * Choose, which mascotas to update.
     */
    where: mascotasWhereUniqueInput
  }

  /**
   * mascotas updateMany
   */
  export type mascotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mascotas.
     */
    data: XOR<mascotasUpdateManyMutationInput, mascotasUncheckedUpdateManyInput>
    /**
     * Filter which mascotas to update
     */
    where?: mascotasWhereInput
    /**
     * Limit how many mascotas to update.
     */
    limit?: number
  }

  /**
   * mascotas upsert
   */
  export type mascotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * The filter to search for the mascotas to update in case it exists.
     */
    where: mascotasWhereUniqueInput
    /**
     * In case the mascotas found by the `where` argument doesn't exist, create a new mascotas with this data.
     */
    create: XOR<mascotasCreateInput, mascotasUncheckedCreateInput>
    /**
     * In case the mascotas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mascotasUpdateInput, mascotasUncheckedUpdateInput>
  }

  /**
   * mascotas delete
   */
  export type mascotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
    /**
     * Filter which mascotas to delete.
     */
    where: mascotasWhereUniqueInput
  }

  /**
   * mascotas deleteMany
   */
  export type mascotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mascotas to delete
     */
    where?: mascotasWhereInput
    /**
     * Limit how many mascotas to delete.
     */
    limit?: number
  }

  /**
   * mascotas.fk_genero
   */
  export type mascotas$fk_generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the generos
     */
    select?: generosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the generos
     */
    omit?: generosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: generosInclude<ExtArgs> | null
    where?: generosWhereInput
  }

  /**
   * mascotas.fk_raza
   */
  export type mascotas$fk_razaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raza
     */
    select?: razaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raza
     */
    omit?: razaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: razaInclude<ExtArgs> | null
    where?: razaWhereInput
  }

  /**
   * mascotas.fk_categoria
   */
  export type mascotas$fk_categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * mascotas.usuarios
   */
  export type mascotas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * mascotas without action
   */
  export type mascotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascotas
     */
    select?: mascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascotas
     */
    omit?: mascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotasInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    mascota_id: 'mascota_id'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const RazaScalarFieldEnum: {
    id_raza: 'id_raza',
    nombre: 'nombre'
  };

  export type RazaScalarFieldEnum = (typeof RazaScalarFieldEnum)[keyof typeof RazaScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const GenerosScalarFieldEnum: {
    id_genero: 'id_genero',
    nombre: 'nombre'
  };

  export type GenerosScalarFieldEnum = (typeof GenerosScalarFieldEnum)[keyof typeof GenerosScalarFieldEnum]


  export const MascotasScalarFieldEnum: {
    id_mascota: 'id_mascota',
    nombre: 'nombre',
    raza_id: 'raza_id',
    categoria_id: 'categoria_id',
    foto: 'foto',
    genero_id: 'genero_id',
    estado: 'estado'
  };

  export type MascotasScalarFieldEnum = (typeof MascotasScalarFieldEnum)[keyof typeof MascotasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const razaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type razaOrderByRelevanceFieldEnum = (typeof razaOrderByRelevanceFieldEnum)[keyof typeof razaOrderByRelevanceFieldEnum]


  export const categoriasOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum]


  export const generosOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type generosOrderByRelevanceFieldEnum = (typeof generosOrderByRelevanceFieldEnum)[keyof typeof generosOrderByRelevanceFieldEnum]


  export const mascotasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    foto: 'foto'
  };

  export type mascotasOrderByRelevanceFieldEnum = (typeof mascotasOrderByRelevanceFieldEnum)[keyof typeof mascotasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    mascota_id?: IntFilter<"usuarios"> | number
    fk_mascota?: XOR<MascotasNullableScalarRelationFilter, mascotasWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascota_id?: SortOrder
    fk_mascota?: mascotasOrderByWithRelationInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    mascota_id?: IntFilter<"usuarios"> | number
    fk_mascota?: XOR<MascotasNullableScalarRelationFilter, mascotasWhereInput> | null
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascota_id?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password?: StringWithAggregatesFilter<"usuarios"> | string
    mascota_id?: IntWithAggregatesFilter<"usuarios"> | number
  }

  export type razaWhereInput = {
    AND?: razaWhereInput | razaWhereInput[]
    OR?: razaWhereInput[]
    NOT?: razaWhereInput | razaWhereInput[]
    id_raza?: IntFilter<"raza"> | number
    nombre?: StringFilter<"raza"> | string
    mascotas?: MascotasListRelationFilter
  }

  export type razaOrderByWithRelationInput = {
    id_raza?: SortOrder
    nombre?: SortOrder
    mascotas?: mascotasOrderByRelationAggregateInput
    _relevance?: razaOrderByRelevanceInput
  }

  export type razaWhereUniqueInput = Prisma.AtLeast<{
    id_raza?: number
    AND?: razaWhereInput | razaWhereInput[]
    OR?: razaWhereInput[]
    NOT?: razaWhereInput | razaWhereInput[]
    nombre?: StringFilter<"raza"> | string
    mascotas?: MascotasListRelationFilter
  }, "id_raza">

  export type razaOrderByWithAggregationInput = {
    id_raza?: SortOrder
    nombre?: SortOrder
    _count?: razaCountOrderByAggregateInput
    _avg?: razaAvgOrderByAggregateInput
    _max?: razaMaxOrderByAggregateInput
    _min?: razaMinOrderByAggregateInput
    _sum?: razaSumOrderByAggregateInput
  }

  export type razaScalarWhereWithAggregatesInput = {
    AND?: razaScalarWhereWithAggregatesInput | razaScalarWhereWithAggregatesInput[]
    OR?: razaScalarWhereWithAggregatesInput[]
    NOT?: razaScalarWhereWithAggregatesInput | razaScalarWhereWithAggregatesInput[]
    id_raza?: IntWithAggregatesFilter<"raza"> | number
    nombre?: StringWithAggregatesFilter<"raza"> | string
  }

  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id_categoria?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    mascotas?: MascotasListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    mascotas?: mascotasOrderByRelationAggregateInput
    _relevance?: categoriasOrderByRelevanceInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    nombre?: StringFilter<"categorias"> | string
    mascotas?: MascotasListRelationFilter
  }, "id_categoria">

  export type categoriasOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categorias"> | number
    nombre?: StringWithAggregatesFilter<"categorias"> | string
  }

  export type generosWhereInput = {
    AND?: generosWhereInput | generosWhereInput[]
    OR?: generosWhereInput[]
    NOT?: generosWhereInput | generosWhereInput[]
    id_genero?: IntFilter<"generos"> | number
    nombre?: StringFilter<"generos"> | string
    mascotas?: MascotasListRelationFilter
  }

  export type generosOrderByWithRelationInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
    mascotas?: mascotasOrderByRelationAggregateInput
    _relevance?: generosOrderByRelevanceInput
  }

  export type generosWhereUniqueInput = Prisma.AtLeast<{
    id_genero?: number
    AND?: generosWhereInput | generosWhereInput[]
    OR?: generosWhereInput[]
    NOT?: generosWhereInput | generosWhereInput[]
    nombre?: StringFilter<"generos"> | string
    mascotas?: MascotasListRelationFilter
  }, "id_genero">

  export type generosOrderByWithAggregationInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
    _count?: generosCountOrderByAggregateInput
    _avg?: generosAvgOrderByAggregateInput
    _max?: generosMaxOrderByAggregateInput
    _min?: generosMinOrderByAggregateInput
    _sum?: generosSumOrderByAggregateInput
  }

  export type generosScalarWhereWithAggregatesInput = {
    AND?: generosScalarWhereWithAggregatesInput | generosScalarWhereWithAggregatesInput[]
    OR?: generosScalarWhereWithAggregatesInput[]
    NOT?: generosScalarWhereWithAggregatesInput | generosScalarWhereWithAggregatesInput[]
    id_genero?: IntWithAggregatesFilter<"generos"> | number
    nombre?: StringWithAggregatesFilter<"generos"> | string
  }

  export type mascotasWhereInput = {
    AND?: mascotasWhereInput | mascotasWhereInput[]
    OR?: mascotasWhereInput[]
    NOT?: mascotasWhereInput | mascotasWhereInput[]
    id_mascota?: IntFilter<"mascotas"> | number
    nombre?: StringFilter<"mascotas"> | string
    raza_id?: IntFilter<"mascotas"> | number
    categoria_id?: IntFilter<"mascotas"> | number
    foto?: StringFilter<"mascotas"> | string
    genero_id?: IntFilter<"mascotas"> | number
    estado?: EnumEstadoFilter<"mascotas"> | $Enums.Estado
    fk_genero?: XOR<GenerosNullableScalarRelationFilter, generosWhereInput> | null
    fk_raza?: XOR<RazaNullableScalarRelationFilter, razaWhereInput> | null
    fk_categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    usuarios?: UsuariosListRelationFilter
  }

  export type mascotasOrderByWithRelationInput = {
    id_mascota?: SortOrder
    nombre?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    foto?: SortOrder
    genero_id?: SortOrder
    estado?: SortOrder
    fk_genero?: generosOrderByWithRelationInput
    fk_raza?: razaOrderByWithRelationInput
    fk_categoria?: categoriasOrderByWithRelationInput
    usuarios?: usuariosOrderByRelationAggregateInput
    _relevance?: mascotasOrderByRelevanceInput
  }

  export type mascotasWhereUniqueInput = Prisma.AtLeast<{
    id_mascota?: number
    AND?: mascotasWhereInput | mascotasWhereInput[]
    OR?: mascotasWhereInput[]
    NOT?: mascotasWhereInput | mascotasWhereInput[]
    nombre?: StringFilter<"mascotas"> | string
    raza_id?: IntFilter<"mascotas"> | number
    categoria_id?: IntFilter<"mascotas"> | number
    foto?: StringFilter<"mascotas"> | string
    genero_id?: IntFilter<"mascotas"> | number
    estado?: EnumEstadoFilter<"mascotas"> | $Enums.Estado
    fk_genero?: XOR<GenerosNullableScalarRelationFilter, generosWhereInput> | null
    fk_raza?: XOR<RazaNullableScalarRelationFilter, razaWhereInput> | null
    fk_categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    usuarios?: UsuariosListRelationFilter
  }, "id_mascota">

  export type mascotasOrderByWithAggregationInput = {
    id_mascota?: SortOrder
    nombre?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    foto?: SortOrder
    genero_id?: SortOrder
    estado?: SortOrder
    _count?: mascotasCountOrderByAggregateInput
    _avg?: mascotasAvgOrderByAggregateInput
    _max?: mascotasMaxOrderByAggregateInput
    _min?: mascotasMinOrderByAggregateInput
    _sum?: mascotasSumOrderByAggregateInput
  }

  export type mascotasScalarWhereWithAggregatesInput = {
    AND?: mascotasScalarWhereWithAggregatesInput | mascotasScalarWhereWithAggregatesInput[]
    OR?: mascotasScalarWhereWithAggregatesInput[]
    NOT?: mascotasScalarWhereWithAggregatesInput | mascotasScalarWhereWithAggregatesInput[]
    id_mascota?: IntWithAggregatesFilter<"mascotas"> | number
    nombre?: StringWithAggregatesFilter<"mascotas"> | string
    raza_id?: IntWithAggregatesFilter<"mascotas"> | number
    categoria_id?: IntWithAggregatesFilter<"mascotas"> | number
    foto?: StringWithAggregatesFilter<"mascotas"> | string
    genero_id?: IntWithAggregatesFilter<"mascotas"> | number
    estado?: EnumEstadoWithAggregatesFilter<"mascotas"> | $Enums.Estado
  }

  export type usuariosCreateInput = {
    nombre: string
    email: string
    password: string
    fk_mascota?: mascotasCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    mascota_id: number
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fk_mascota?: mascotasUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mascota_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    mascota_id: number
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mascota_id?: IntFieldUpdateOperationsInput | number
  }

  export type razaCreateInput = {
    nombre: string
    mascotas?: mascotasCreateNestedManyWithoutFk_razaInput
  }

  export type razaUncheckedCreateInput = {
    id_raza?: number
    nombre: string
    mascotas?: mascotasUncheckedCreateNestedManyWithoutFk_razaInput
  }

  export type razaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUpdateManyWithoutFk_razaNestedInput
  }

  export type razaUncheckedUpdateInput = {
    id_raza?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUncheckedUpdateManyWithoutFk_razaNestedInput
  }

  export type razaCreateManyInput = {
    id_raza?: number
    nombre: string
  }

  export type razaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type razaUncheckedUpdateManyInput = {
    id_raza?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasCreateInput = {
    nombre: string
    mascotas?: mascotasCreateNestedManyWithoutFk_categoriaInput
  }

  export type categoriasUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    mascotas?: mascotasUncheckedCreateNestedManyWithoutFk_categoriaInput
  }

  export type categoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUpdateManyWithoutFk_categoriaNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUncheckedUpdateManyWithoutFk_categoriaNestedInput
  }

  export type categoriasCreateManyInput = {
    id_categoria?: number
    nombre: string
  }

  export type categoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type generosCreateInput = {
    nombre: string
    mascotas?: mascotasCreateNestedManyWithoutFk_generoInput
  }

  export type generosUncheckedCreateInput = {
    id_genero?: number
    nombre: string
    mascotas?: mascotasUncheckedCreateNestedManyWithoutFk_generoInput
  }

  export type generosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUpdateManyWithoutFk_generoNestedInput
  }

  export type generosUncheckedUpdateInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascotas?: mascotasUncheckedUpdateManyWithoutFk_generoNestedInput
  }

  export type generosCreateManyInput = {
    id_genero?: number
    nombre: string
  }

  export type generosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type generosUncheckedUpdateManyInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type mascotasCreateInput = {
    nombre: string
    foto: string
    estado?: $Enums.Estado
    fk_genero?: generosCreateNestedOneWithoutMascotasInput
    fk_raza?: razaCreateNestedOneWithoutMascotasInput
    fk_categoria?: categoriasCreateNestedOneWithoutMascotasInput
    usuarios?: usuariosCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasUncheckedCreateInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
    usuarios?: usuariosUncheckedCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    fk_genero?: generosUpdateOneWithoutMascotasNestedInput
    fk_raza?: razaUpdateOneWithoutMascotasNestedInput
    fk_categoria?: categoriasUpdateOneWithoutMascotasNestedInput
    usuarios?: usuariosUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarios?: usuariosUncheckedUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasCreateManyInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
  }

  export type mascotasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type mascotasUncheckedUpdateManyInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MascotasNullableScalarRelationFilter = {
    is?: mascotasWhereInput | null
    isNot?: mascotasWhereInput | null
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascota_id?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    mascota_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascota_id?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascota_id?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    mascota_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MascotasListRelationFilter = {
    every?: mascotasWhereInput
    some?: mascotasWhereInput
    none?: mascotasWhereInput
  }

  export type mascotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type razaOrderByRelevanceInput = {
    fields: razaOrderByRelevanceFieldEnum | razaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type razaCountOrderByAggregateInput = {
    id_raza?: SortOrder
    nombre?: SortOrder
  }

  export type razaAvgOrderByAggregateInput = {
    id_raza?: SortOrder
  }

  export type razaMaxOrderByAggregateInput = {
    id_raza?: SortOrder
    nombre?: SortOrder
  }

  export type razaMinOrderByAggregateInput = {
    id_raza?: SortOrder
    nombre?: SortOrder
  }

  export type razaSumOrderByAggregateInput = {
    id_raza?: SortOrder
  }

  export type categoriasOrderByRelevanceInput = {
    fields: categoriasOrderByRelevanceFieldEnum | categoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriasCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type generosOrderByRelevanceInput = {
    fields: generosOrderByRelevanceFieldEnum | generosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type generosCountOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type generosAvgOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type generosMaxOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type generosMinOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type generosSumOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type GenerosNullableScalarRelationFilter = {
    is?: generosWhereInput | null
    isNot?: generosWhereInput | null
  }

  export type RazaNullableScalarRelationFilter = {
    is?: razaWhereInput | null
    isNot?: razaWhereInput | null
  }

  export type CategoriasNullableScalarRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mascotasOrderByRelevanceInput = {
    fields: mascotasOrderByRelevanceFieldEnum | mascotasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mascotasCountOrderByAggregateInput = {
    id_mascota?: SortOrder
    nombre?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    foto?: SortOrder
    genero_id?: SortOrder
    estado?: SortOrder
  }

  export type mascotasAvgOrderByAggregateInput = {
    id_mascota?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    genero_id?: SortOrder
  }

  export type mascotasMaxOrderByAggregateInput = {
    id_mascota?: SortOrder
    nombre?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    foto?: SortOrder
    genero_id?: SortOrder
    estado?: SortOrder
  }

  export type mascotasMinOrderByAggregateInput = {
    id_mascota?: SortOrder
    nombre?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    foto?: SortOrder
    genero_id?: SortOrder
    estado?: SortOrder
  }

  export type mascotasSumOrderByAggregateInput = {
    id_mascota?: SortOrder
    raza_id?: SortOrder
    categoria_id?: SortOrder
    genero_id?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type mascotasCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<mascotasCreateWithoutUsuariosInput, mascotasUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: mascotasCreateOrConnectWithoutUsuariosInput
    connect?: mascotasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type mascotasUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<mascotasCreateWithoutUsuariosInput, mascotasUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: mascotasCreateOrConnectWithoutUsuariosInput
    upsert?: mascotasUpsertWithoutUsuariosInput
    disconnect?: mascotasWhereInput | boolean
    delete?: mascotasWhereInput | boolean
    connect?: mascotasWhereUniqueInput
    update?: XOR<XOR<mascotasUpdateToOneWithWhereWithoutUsuariosInput, mascotasUpdateWithoutUsuariosInput>, mascotasUncheckedUpdateWithoutUsuariosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mascotasCreateNestedManyWithoutFk_razaInput = {
    create?: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput> | mascotasCreateWithoutFk_razaInput[] | mascotasUncheckedCreateWithoutFk_razaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_razaInput | mascotasCreateOrConnectWithoutFk_razaInput[]
    createMany?: mascotasCreateManyFk_razaInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUncheckedCreateNestedManyWithoutFk_razaInput = {
    create?: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput> | mascotasCreateWithoutFk_razaInput[] | mascotasUncheckedCreateWithoutFk_razaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_razaInput | mascotasCreateOrConnectWithoutFk_razaInput[]
    createMany?: mascotasCreateManyFk_razaInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUpdateManyWithoutFk_razaNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput> | mascotasCreateWithoutFk_razaInput[] | mascotasUncheckedCreateWithoutFk_razaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_razaInput | mascotasCreateOrConnectWithoutFk_razaInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_razaInput | mascotasUpsertWithWhereUniqueWithoutFk_razaInput[]
    createMany?: mascotasCreateManyFk_razaInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_razaInput | mascotasUpdateWithWhereUniqueWithoutFk_razaInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_razaInput | mascotasUpdateManyWithWhereWithoutFk_razaInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type mascotasUncheckedUpdateManyWithoutFk_razaNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput> | mascotasCreateWithoutFk_razaInput[] | mascotasUncheckedCreateWithoutFk_razaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_razaInput | mascotasCreateOrConnectWithoutFk_razaInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_razaInput | mascotasUpsertWithWhereUniqueWithoutFk_razaInput[]
    createMany?: mascotasCreateManyFk_razaInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_razaInput | mascotasUpdateWithWhereUniqueWithoutFk_razaInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_razaInput | mascotasUpdateManyWithWhereWithoutFk_razaInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type mascotasCreateNestedManyWithoutFk_categoriaInput = {
    create?: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput> | mascotasCreateWithoutFk_categoriaInput[] | mascotasUncheckedCreateWithoutFk_categoriaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_categoriaInput | mascotasCreateOrConnectWithoutFk_categoriaInput[]
    createMany?: mascotasCreateManyFk_categoriaInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUncheckedCreateNestedManyWithoutFk_categoriaInput = {
    create?: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput> | mascotasCreateWithoutFk_categoriaInput[] | mascotasUncheckedCreateWithoutFk_categoriaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_categoriaInput | mascotasCreateOrConnectWithoutFk_categoriaInput[]
    createMany?: mascotasCreateManyFk_categoriaInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUpdateManyWithoutFk_categoriaNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput> | mascotasCreateWithoutFk_categoriaInput[] | mascotasUncheckedCreateWithoutFk_categoriaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_categoriaInput | mascotasCreateOrConnectWithoutFk_categoriaInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_categoriaInput | mascotasUpsertWithWhereUniqueWithoutFk_categoriaInput[]
    createMany?: mascotasCreateManyFk_categoriaInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_categoriaInput | mascotasUpdateWithWhereUniqueWithoutFk_categoriaInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_categoriaInput | mascotasUpdateManyWithWhereWithoutFk_categoriaInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type mascotasUncheckedUpdateManyWithoutFk_categoriaNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput> | mascotasCreateWithoutFk_categoriaInput[] | mascotasUncheckedCreateWithoutFk_categoriaInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_categoriaInput | mascotasCreateOrConnectWithoutFk_categoriaInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_categoriaInput | mascotasUpsertWithWhereUniqueWithoutFk_categoriaInput[]
    createMany?: mascotasCreateManyFk_categoriaInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_categoriaInput | mascotasUpdateWithWhereUniqueWithoutFk_categoriaInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_categoriaInput | mascotasUpdateManyWithWhereWithoutFk_categoriaInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type mascotasCreateNestedManyWithoutFk_generoInput = {
    create?: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput> | mascotasCreateWithoutFk_generoInput[] | mascotasUncheckedCreateWithoutFk_generoInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_generoInput | mascotasCreateOrConnectWithoutFk_generoInput[]
    createMany?: mascotasCreateManyFk_generoInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUncheckedCreateNestedManyWithoutFk_generoInput = {
    create?: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput> | mascotasCreateWithoutFk_generoInput[] | mascotasUncheckedCreateWithoutFk_generoInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_generoInput | mascotasCreateOrConnectWithoutFk_generoInput[]
    createMany?: mascotasCreateManyFk_generoInputEnvelope
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
  }

  export type mascotasUpdateManyWithoutFk_generoNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput> | mascotasCreateWithoutFk_generoInput[] | mascotasUncheckedCreateWithoutFk_generoInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_generoInput | mascotasCreateOrConnectWithoutFk_generoInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_generoInput | mascotasUpsertWithWhereUniqueWithoutFk_generoInput[]
    createMany?: mascotasCreateManyFk_generoInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_generoInput | mascotasUpdateWithWhereUniqueWithoutFk_generoInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_generoInput | mascotasUpdateManyWithWhereWithoutFk_generoInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type mascotasUncheckedUpdateManyWithoutFk_generoNestedInput = {
    create?: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput> | mascotasCreateWithoutFk_generoInput[] | mascotasUncheckedCreateWithoutFk_generoInput[]
    connectOrCreate?: mascotasCreateOrConnectWithoutFk_generoInput | mascotasCreateOrConnectWithoutFk_generoInput[]
    upsert?: mascotasUpsertWithWhereUniqueWithoutFk_generoInput | mascotasUpsertWithWhereUniqueWithoutFk_generoInput[]
    createMany?: mascotasCreateManyFk_generoInputEnvelope
    set?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    disconnect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    delete?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    connect?: mascotasWhereUniqueInput | mascotasWhereUniqueInput[]
    update?: mascotasUpdateWithWhereUniqueWithoutFk_generoInput | mascotasUpdateWithWhereUniqueWithoutFk_generoInput[]
    updateMany?: mascotasUpdateManyWithWhereWithoutFk_generoInput | mascotasUpdateManyWithWhereWithoutFk_generoInput[]
    deleteMany?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
  }

  export type generosCreateNestedOneWithoutMascotasInput = {
    create?: XOR<generosCreateWithoutMascotasInput, generosUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: generosCreateOrConnectWithoutMascotasInput
    connect?: generosWhereUniqueInput
  }

  export type razaCreateNestedOneWithoutMascotasInput = {
    create?: XOR<razaCreateWithoutMascotasInput, razaUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: razaCreateOrConnectWithoutMascotasInput
    connect?: razaWhereUniqueInput
  }

  export type categoriasCreateNestedOneWithoutMascotasInput = {
    create?: XOR<categoriasCreateWithoutMascotasInput, categoriasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutMascotasInput
    connect?: categoriasWhereUniqueInput
  }

  export type usuariosCreateNestedManyWithoutFk_mascotaInput = {
    create?: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput> | usuariosCreateWithoutFk_mascotaInput[] | usuariosUncheckedCreateWithoutFk_mascotaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutFk_mascotaInput | usuariosCreateOrConnectWithoutFk_mascotaInput[]
    createMany?: usuariosCreateManyFk_mascotaInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutFk_mascotaInput = {
    create?: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput> | usuariosCreateWithoutFk_mascotaInput[] | usuariosUncheckedCreateWithoutFk_mascotaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutFk_mascotaInput | usuariosCreateOrConnectWithoutFk_mascotaInput[]
    createMany?: usuariosCreateManyFk_mascotaInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type generosUpdateOneWithoutMascotasNestedInput = {
    create?: XOR<generosCreateWithoutMascotasInput, generosUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: generosCreateOrConnectWithoutMascotasInput
    upsert?: generosUpsertWithoutMascotasInput
    disconnect?: generosWhereInput | boolean
    delete?: generosWhereInput | boolean
    connect?: generosWhereUniqueInput
    update?: XOR<XOR<generosUpdateToOneWithWhereWithoutMascotasInput, generosUpdateWithoutMascotasInput>, generosUncheckedUpdateWithoutMascotasInput>
  }

  export type razaUpdateOneWithoutMascotasNestedInput = {
    create?: XOR<razaCreateWithoutMascotasInput, razaUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: razaCreateOrConnectWithoutMascotasInput
    upsert?: razaUpsertWithoutMascotasInput
    disconnect?: razaWhereInput | boolean
    delete?: razaWhereInput | boolean
    connect?: razaWhereUniqueInput
    update?: XOR<XOR<razaUpdateToOneWithWhereWithoutMascotasInput, razaUpdateWithoutMascotasInput>, razaUncheckedUpdateWithoutMascotasInput>
  }

  export type categoriasUpdateOneWithoutMascotasNestedInput = {
    create?: XOR<categoriasCreateWithoutMascotasInput, categoriasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutMascotasInput
    upsert?: categoriasUpsertWithoutMascotasInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutMascotasInput, categoriasUpdateWithoutMascotasInput>, categoriasUncheckedUpdateWithoutMascotasInput>
  }

  export type usuariosUpdateManyWithoutFk_mascotaNestedInput = {
    create?: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput> | usuariosCreateWithoutFk_mascotaInput[] | usuariosUncheckedCreateWithoutFk_mascotaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutFk_mascotaInput | usuariosCreateOrConnectWithoutFk_mascotaInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutFk_mascotaInput | usuariosUpsertWithWhereUniqueWithoutFk_mascotaInput[]
    createMany?: usuariosCreateManyFk_mascotaInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutFk_mascotaInput | usuariosUpdateWithWhereUniqueWithoutFk_mascotaInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutFk_mascotaInput | usuariosUpdateManyWithWhereWithoutFk_mascotaInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutFk_mascotaNestedInput = {
    create?: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput> | usuariosCreateWithoutFk_mascotaInput[] | usuariosUncheckedCreateWithoutFk_mascotaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutFk_mascotaInput | usuariosCreateOrConnectWithoutFk_mascotaInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutFk_mascotaInput | usuariosUpsertWithWhereUniqueWithoutFk_mascotaInput[]
    createMany?: usuariosCreateManyFk_mascotaInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutFk_mascotaInput | usuariosUpdateWithWhereUniqueWithoutFk_mascotaInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutFk_mascotaInput | usuariosUpdateManyWithWhereWithoutFk_mascotaInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type mascotasCreateWithoutUsuariosInput = {
    nombre: string
    foto: string
    estado?: $Enums.Estado
    fk_genero?: generosCreateNestedOneWithoutMascotasInput
    fk_raza?: razaCreateNestedOneWithoutMascotasInput
    fk_categoria?: categoriasCreateNestedOneWithoutMascotasInput
  }

  export type mascotasUncheckedCreateWithoutUsuariosInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
  }

  export type mascotasCreateOrConnectWithoutUsuariosInput = {
    where: mascotasWhereUniqueInput
    create: XOR<mascotasCreateWithoutUsuariosInput, mascotasUncheckedCreateWithoutUsuariosInput>
  }

  export type mascotasUpsertWithoutUsuariosInput = {
    update: XOR<mascotasUpdateWithoutUsuariosInput, mascotasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<mascotasCreateWithoutUsuariosInput, mascotasUncheckedCreateWithoutUsuariosInput>
    where?: mascotasWhereInput
  }

  export type mascotasUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: mascotasWhereInput
    data: XOR<mascotasUpdateWithoutUsuariosInput, mascotasUncheckedUpdateWithoutUsuariosInput>
  }

  export type mascotasUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    fk_genero?: generosUpdateOneWithoutMascotasNestedInput
    fk_raza?: razaUpdateOneWithoutMascotasNestedInput
    fk_categoria?: categoriasUpdateOneWithoutMascotasNestedInput
  }

  export type mascotasUncheckedUpdateWithoutUsuariosInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type mascotasCreateWithoutFk_razaInput = {
    nombre: string
    foto: string
    estado?: $Enums.Estado
    fk_genero?: generosCreateNestedOneWithoutMascotasInput
    fk_categoria?: categoriasCreateNestedOneWithoutMascotasInput
    usuarios?: usuariosCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasUncheckedCreateWithoutFk_razaInput = {
    id_mascota?: number
    nombre: string
    categoria_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
    usuarios?: usuariosUncheckedCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasCreateOrConnectWithoutFk_razaInput = {
    where: mascotasWhereUniqueInput
    create: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput>
  }

  export type mascotasCreateManyFk_razaInputEnvelope = {
    data: mascotasCreateManyFk_razaInput | mascotasCreateManyFk_razaInput[]
    skipDuplicates?: boolean
  }

  export type mascotasUpsertWithWhereUniqueWithoutFk_razaInput = {
    where: mascotasWhereUniqueInput
    update: XOR<mascotasUpdateWithoutFk_razaInput, mascotasUncheckedUpdateWithoutFk_razaInput>
    create: XOR<mascotasCreateWithoutFk_razaInput, mascotasUncheckedCreateWithoutFk_razaInput>
  }

  export type mascotasUpdateWithWhereUniqueWithoutFk_razaInput = {
    where: mascotasWhereUniqueInput
    data: XOR<mascotasUpdateWithoutFk_razaInput, mascotasUncheckedUpdateWithoutFk_razaInput>
  }

  export type mascotasUpdateManyWithWhereWithoutFk_razaInput = {
    where: mascotasScalarWhereInput
    data: XOR<mascotasUpdateManyMutationInput, mascotasUncheckedUpdateManyWithoutFk_razaInput>
  }

  export type mascotasScalarWhereInput = {
    AND?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
    OR?: mascotasScalarWhereInput[]
    NOT?: mascotasScalarWhereInput | mascotasScalarWhereInput[]
    id_mascota?: IntFilter<"mascotas"> | number
    nombre?: StringFilter<"mascotas"> | string
    raza_id?: IntFilter<"mascotas"> | number
    categoria_id?: IntFilter<"mascotas"> | number
    foto?: StringFilter<"mascotas"> | string
    genero_id?: IntFilter<"mascotas"> | number
    estado?: EnumEstadoFilter<"mascotas"> | $Enums.Estado
  }

  export type mascotasCreateWithoutFk_categoriaInput = {
    nombre: string
    foto: string
    estado?: $Enums.Estado
    fk_genero?: generosCreateNestedOneWithoutMascotasInput
    fk_raza?: razaCreateNestedOneWithoutMascotasInput
    usuarios?: usuariosCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasUncheckedCreateWithoutFk_categoriaInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
    usuarios?: usuariosUncheckedCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasCreateOrConnectWithoutFk_categoriaInput = {
    where: mascotasWhereUniqueInput
    create: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput>
  }

  export type mascotasCreateManyFk_categoriaInputEnvelope = {
    data: mascotasCreateManyFk_categoriaInput | mascotasCreateManyFk_categoriaInput[]
    skipDuplicates?: boolean
  }

  export type mascotasUpsertWithWhereUniqueWithoutFk_categoriaInput = {
    where: mascotasWhereUniqueInput
    update: XOR<mascotasUpdateWithoutFk_categoriaInput, mascotasUncheckedUpdateWithoutFk_categoriaInput>
    create: XOR<mascotasCreateWithoutFk_categoriaInput, mascotasUncheckedCreateWithoutFk_categoriaInput>
  }

  export type mascotasUpdateWithWhereUniqueWithoutFk_categoriaInput = {
    where: mascotasWhereUniqueInput
    data: XOR<mascotasUpdateWithoutFk_categoriaInput, mascotasUncheckedUpdateWithoutFk_categoriaInput>
  }

  export type mascotasUpdateManyWithWhereWithoutFk_categoriaInput = {
    where: mascotasScalarWhereInput
    data: XOR<mascotasUpdateManyMutationInput, mascotasUncheckedUpdateManyWithoutFk_categoriaInput>
  }

  export type mascotasCreateWithoutFk_generoInput = {
    nombre: string
    foto: string
    estado?: $Enums.Estado
    fk_raza?: razaCreateNestedOneWithoutMascotasInput
    fk_categoria?: categoriasCreateNestedOneWithoutMascotasInput
    usuarios?: usuariosCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasUncheckedCreateWithoutFk_generoInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    estado?: $Enums.Estado
    usuarios?: usuariosUncheckedCreateNestedManyWithoutFk_mascotaInput
  }

  export type mascotasCreateOrConnectWithoutFk_generoInput = {
    where: mascotasWhereUniqueInput
    create: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput>
  }

  export type mascotasCreateManyFk_generoInputEnvelope = {
    data: mascotasCreateManyFk_generoInput | mascotasCreateManyFk_generoInput[]
    skipDuplicates?: boolean
  }

  export type mascotasUpsertWithWhereUniqueWithoutFk_generoInput = {
    where: mascotasWhereUniqueInput
    update: XOR<mascotasUpdateWithoutFk_generoInput, mascotasUncheckedUpdateWithoutFk_generoInput>
    create: XOR<mascotasCreateWithoutFk_generoInput, mascotasUncheckedCreateWithoutFk_generoInput>
  }

  export type mascotasUpdateWithWhereUniqueWithoutFk_generoInput = {
    where: mascotasWhereUniqueInput
    data: XOR<mascotasUpdateWithoutFk_generoInput, mascotasUncheckedUpdateWithoutFk_generoInput>
  }

  export type mascotasUpdateManyWithWhereWithoutFk_generoInput = {
    where: mascotasScalarWhereInput
    data: XOR<mascotasUpdateManyMutationInput, mascotasUncheckedUpdateManyWithoutFk_generoInput>
  }

  export type generosCreateWithoutMascotasInput = {
    nombre: string
  }

  export type generosUncheckedCreateWithoutMascotasInput = {
    id_genero?: number
    nombre: string
  }

  export type generosCreateOrConnectWithoutMascotasInput = {
    where: generosWhereUniqueInput
    create: XOR<generosCreateWithoutMascotasInput, generosUncheckedCreateWithoutMascotasInput>
  }

  export type razaCreateWithoutMascotasInput = {
    nombre: string
  }

  export type razaUncheckedCreateWithoutMascotasInput = {
    id_raza?: number
    nombre: string
  }

  export type razaCreateOrConnectWithoutMascotasInput = {
    where: razaWhereUniqueInput
    create: XOR<razaCreateWithoutMascotasInput, razaUncheckedCreateWithoutMascotasInput>
  }

  export type categoriasCreateWithoutMascotasInput = {
    nombre: string
  }

  export type categoriasUncheckedCreateWithoutMascotasInput = {
    id_categoria?: number
    nombre: string
  }

  export type categoriasCreateOrConnectWithoutMascotasInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutMascotasInput, categoriasUncheckedCreateWithoutMascotasInput>
  }

  export type usuariosCreateWithoutFk_mascotaInput = {
    nombre: string
    email: string
    password: string
  }

  export type usuariosUncheckedCreateWithoutFk_mascotaInput = {
    id?: number
    nombre: string
    email: string
    password: string
  }

  export type usuariosCreateOrConnectWithoutFk_mascotaInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput>
  }

  export type usuariosCreateManyFk_mascotaInputEnvelope = {
    data: usuariosCreateManyFk_mascotaInput | usuariosCreateManyFk_mascotaInput[]
    skipDuplicates?: boolean
  }

  export type generosUpsertWithoutMascotasInput = {
    update: XOR<generosUpdateWithoutMascotasInput, generosUncheckedUpdateWithoutMascotasInput>
    create: XOR<generosCreateWithoutMascotasInput, generosUncheckedCreateWithoutMascotasInput>
    where?: generosWhereInput
  }

  export type generosUpdateToOneWithWhereWithoutMascotasInput = {
    where?: generosWhereInput
    data: XOR<generosUpdateWithoutMascotasInput, generosUncheckedUpdateWithoutMascotasInput>
  }

  export type generosUpdateWithoutMascotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type generosUncheckedUpdateWithoutMascotasInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type razaUpsertWithoutMascotasInput = {
    update: XOR<razaUpdateWithoutMascotasInput, razaUncheckedUpdateWithoutMascotasInput>
    create: XOR<razaCreateWithoutMascotasInput, razaUncheckedCreateWithoutMascotasInput>
    where?: razaWhereInput
  }

  export type razaUpdateToOneWithWhereWithoutMascotasInput = {
    where?: razaWhereInput
    data: XOR<razaUpdateWithoutMascotasInput, razaUncheckedUpdateWithoutMascotasInput>
  }

  export type razaUpdateWithoutMascotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type razaUncheckedUpdateWithoutMascotasInput = {
    id_raza?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasUpsertWithoutMascotasInput = {
    update: XOR<categoriasUpdateWithoutMascotasInput, categoriasUncheckedUpdateWithoutMascotasInput>
    create: XOR<categoriasCreateWithoutMascotasInput, categoriasUncheckedCreateWithoutMascotasInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutMascotasInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutMascotasInput, categoriasUncheckedUpdateWithoutMascotasInput>
  }

  export type categoriasUpdateWithoutMascotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type categoriasUncheckedUpdateWithoutMascotasInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUpsertWithWhereUniqueWithoutFk_mascotaInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutFk_mascotaInput, usuariosUncheckedUpdateWithoutFk_mascotaInput>
    create: XOR<usuariosCreateWithoutFk_mascotaInput, usuariosUncheckedCreateWithoutFk_mascotaInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutFk_mascotaInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutFk_mascotaInput, usuariosUncheckedUpdateWithoutFk_mascotaInput>
  }

  export type usuariosUpdateManyWithWhereWithoutFk_mascotaInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutFk_mascotaInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password?: StringFilter<"usuarios"> | string
    mascota_id?: IntFilter<"usuarios"> | number
  }

  export type mascotasCreateManyFk_razaInput = {
    id_mascota?: number
    nombre: string
    categoria_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
  }

  export type mascotasUpdateWithoutFk_razaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    fk_genero?: generosUpdateOneWithoutMascotasNestedInput
    fk_categoria?: categoriasUpdateOneWithoutMascotasNestedInput
    usuarios?: usuariosUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateWithoutFk_razaInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarios?: usuariosUncheckedUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateManyWithoutFk_razaInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type mascotasCreateManyFk_categoriaInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    foto: string
    genero_id: number
    estado?: $Enums.Estado
  }

  export type mascotasUpdateWithoutFk_categoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    fk_genero?: generosUpdateOneWithoutMascotasNestedInput
    fk_raza?: razaUpdateOneWithoutMascotasNestedInput
    usuarios?: usuariosUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateWithoutFk_categoriaInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarios?: usuariosUncheckedUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateManyWithoutFk_categoriaInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    genero_id?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type mascotasCreateManyFk_generoInput = {
    id_mascota?: number
    nombre: string
    raza_id: number
    categoria_id: number
    foto: string
    estado?: $Enums.Estado
  }

  export type mascotasUpdateWithoutFk_generoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    fk_raza?: razaUpdateOneWithoutMascotasNestedInput
    fk_categoria?: categoriasUpdateOneWithoutMascotasNestedInput
    usuarios?: usuariosUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateWithoutFk_generoInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    usuarios?: usuariosUncheckedUpdateManyWithoutFk_mascotaNestedInput
  }

  export type mascotasUncheckedUpdateManyWithoutFk_generoInput = {
    id_mascota?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza_id?: IntFieldUpdateOperationsInput | number
    categoria_id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type usuariosCreateManyFk_mascotaInput = {
    id?: number
    nombre: string
    email: string
    password: string
  }

  export type usuariosUpdateWithoutFk_mascotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateWithoutFk_mascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyWithoutFk_mascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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