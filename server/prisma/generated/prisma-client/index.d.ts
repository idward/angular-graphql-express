// Code generated by Prisma (prisma@1.34.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  course: (where?: CourseWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  course: (where: CourseWhereUniqueInput) => CourseNullablePromise;
  courses: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Course>;
  coursesConnection: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CourseConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCourse: (data: CourseCreateInput) => CoursePromise;
  updateCourse: (args: {
    data: CourseUpdateInput;
    where: CourseWhereUniqueInput;
  }) => CoursePromise;
  updateManyCourses: (args: {
    data: CourseUpdateManyMutationInput;
    where?: CourseWhereInput;
  }) => BatchPayloadPromise;
  upsertCourse: (args: {
    where: CourseWhereUniqueInput;
    create: CourseCreateInput;
    update: CourseUpdateInput;
  }) => CoursePromise;
  deleteCourse: (where: CourseWhereUniqueInput) => CoursePromise;
  deleteManyCourses: (where?: CourseWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  course: (
    where?: CourseSubscriptionWhereInput
  ) => CourseSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CourseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC"
  | "description_ASC"
  | "description_DESC"
  | "topic_ASC"
  | "topic_DESC"
  | "url_ASC"
  | "url_DESC"
  | "voteCount_ASC"
  | "voteCount_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CourseCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  author: String;
  description: String;
  topic: String;
  url?: Maybe<String>;
  voteCount?: Maybe<Int>;
}

export interface CourseUpdateInput {
  title?: Maybe<String>;
  author?: Maybe<String>;
  description?: Maybe<String>;
  topic?: Maybe<String>;
  url?: Maybe<String>;
  voteCount?: Maybe<Int>;
}

export interface CourseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  topic?: Maybe<String>;
  topic_not?: Maybe<String>;
  topic_in?: Maybe<String[] | String>;
  topic_not_in?: Maybe<String[] | String>;
  topic_lt?: Maybe<String>;
  topic_lte?: Maybe<String>;
  topic_gt?: Maybe<String>;
  topic_gte?: Maybe<String>;
  topic_contains?: Maybe<String>;
  topic_not_contains?: Maybe<String>;
  topic_starts_with?: Maybe<String>;
  topic_not_starts_with?: Maybe<String>;
  topic_ends_with?: Maybe<String>;
  topic_not_ends_with?: Maybe<String>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  voteCount?: Maybe<Int>;
  voteCount_not?: Maybe<Int>;
  voteCount_in?: Maybe<Int[] | Int>;
  voteCount_not_in?: Maybe<Int[] | Int>;
  voteCount_lt?: Maybe<Int>;
  voteCount_lte?: Maybe<Int>;
  voteCount_gt?: Maybe<Int>;
  voteCount_gte?: Maybe<Int>;
  AND?: Maybe<CourseWhereInput[] | CourseWhereInput>;
}

export interface CourseUpdateManyMutationInput {
  title?: Maybe<String>;
  author?: Maybe<String>;
  description?: Maybe<String>;
  topic?: Maybe<String>;
  url?: Maybe<String>;
  voteCount?: Maybe<Int>;
}

export interface CourseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CourseWhereInput>;
  AND?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
}

export type CourseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateCourse {
  count: Int;
}

export interface AggregateCoursePromise
  extends Promise<AggregateCourse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCourseSubscription
  extends Promise<AsyncIterator<AggregateCourse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CoursePreviousValues {
  id: ID_Output;
  title: String;
  author: String;
  description: String;
  topic: String;
  url?: String;
  voteCount?: Int;
}

export interface CoursePreviousValuesPromise
  extends Promise<CoursePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  description: () => Promise<String>;
  topic: () => Promise<String>;
  url: () => Promise<String>;
  voteCount: () => Promise<Int>;
}

export interface CoursePreviousValuesSubscription
  extends Promise<AsyncIterator<CoursePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  topic: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  voteCount: () => Promise<AsyncIterator<Int>>;
}

export interface CourseEdge {
  node: Course;
  cursor: String;
}

export interface CourseEdgePromise extends Promise<CourseEdge>, Fragmentable {
  node: <T = CoursePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CourseEdgeSubscription
  extends Promise<AsyncIterator<CourseEdge>>,
    Fragmentable {
  node: <T = CourseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CourseSubscriptionPayload {
  mutation: MutationType;
  node: Course;
  updatedFields: String[];
  previousValues: CoursePreviousValues;
}

export interface CourseSubscriptionPayloadPromise
  extends Promise<CourseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CoursePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CoursePreviousValuesPromise>() => T;
}

export interface CourseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CourseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CourseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CoursePreviousValuesSubscription>() => T;
}

export interface Course {
  id: ID_Output;
  title: String;
  author: String;
  description: String;
  topic: String;
  url?: String;
  voteCount?: Int;
}

export interface CoursePromise extends Promise<Course>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  description: () => Promise<String>;
  topic: () => Promise<String>;
  url: () => Promise<String>;
  voteCount: () => Promise<Int>;
}

export interface CourseSubscription
  extends Promise<AsyncIterator<Course>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  topic: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  voteCount: () => Promise<AsyncIterator<Int>>;
}

export interface CourseNullablePromise
  extends Promise<Course | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  description: () => Promise<String>;
  topic: () => Promise<String>;
  url: () => Promise<String>;
  voteCount: () => Promise<Int>;
}

export interface CourseConnection {
  pageInfo: PageInfo;
  edges: CourseEdge[];
}

export interface CourseConnectionPromise
  extends Promise<CourseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CourseEdge>>() => T;
  aggregate: <T = AggregateCoursePromise>() => T;
}

export interface CourseConnectionSubscription
  extends Promise<AsyncIterator<CourseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CourseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCourseSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Course",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
