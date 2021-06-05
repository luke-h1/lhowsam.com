import gql from 'graphql-tag';
import * as Urql from 'urql';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Post item.  */
  createPost?: Maybe<Post>;
  /**  Create multiple Post items.  */
  createPosts?: Maybe<Array<Maybe<Post>>>;
  /**  Update a single Post item by ID.  */
  updatePost?: Maybe<Post>;
  /**  Update multiple Post items by ID.  */
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  /**  Delete a single Post item by ID.  */
  deletePost?: Maybe<Post>;
  /**  Delete multiple Post items by ID.  */
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  /**  Create a single Project item.  */
  createProject?: Maybe<Project>;
  /**  Create multiple Project items.  */
  createProjects?: Maybe<Array<Maybe<Project>>>;
  /**  Update a single Project item by ID.  */
  updateProject?: Maybe<Project>;
  /**  Update multiple Project items by ID.  */
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  /**  Delete a single Project item by ID.  */
  deleteProject?: Maybe<Project>;
  /**  Delete multiple Project items by ID.  */
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  endSession: Scalars['Boolean'];
};

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationCreatePostArgs = {
  data?: Maybe<PostCreateInput>;
};

export type MutationCreatePostsArgs = {
  data?: Maybe<Array<Maybe<PostsCreateInput>>>;
};

export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  data?: Maybe<PostUpdateInput>;
};

export type MutationUpdatePostsArgs = {
  data?: Maybe<Array<Maybe<PostsUpdateInput>>>;
};

export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePostsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationCreateProjectArgs = {
  data?: Maybe<ProjectCreateInput>;
};

export type MutationCreateProjectsArgs = {
  data?: Maybe<Array<Maybe<ProjectsCreateInput>>>;
};

export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProjectUpdateInput>;
};

export type MutationUpdateProjectsArgs = {
  data?: Maybe<Array<Maybe<ProjectsUpdateInput>>>;
};

export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProjectsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
}

/**  A keystone list  */
export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  content?: Maybe<Post_Content_DocumentField>;
  tags?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
};

export type PostCreateInput = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  tags?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
};

export type PostOrderByInput = {
  id?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
  tags?: Maybe<OrderDirection>;
  publishDate?: Maybe<OrderDirection>;
};

export type PostRelateToManyInput = {
  create?: Maybe<Array<Maybe<PostCreateInput>>>;
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  tags?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Scalars['String']>;
  tags_not?: Maybe<Scalars['String']>;
  tags_contains?: Maybe<Scalars['String']>;
  tags_not_contains?: Maybe<Scalars['String']>;
  tags_starts_with?: Maybe<Scalars['String']>;
  tags_not_starts_with?: Maybe<Scalars['String']>;
  tags_ends_with?: Maybe<Scalars['String']>;
  tags_not_ends_with?: Maybe<Scalars['String']>;
  tags_i?: Maybe<Scalars['String']>;
  tags_not_i?: Maybe<Scalars['String']>;
  tags_contains_i?: Maybe<Scalars['String']>;
  tags_not_contains_i?: Maybe<Scalars['String']>;
  tags_starts_with_i?: Maybe<Scalars['String']>;
  tags_not_starts_with_i?: Maybe<Scalars['String']>;
  tags_ends_with_i?: Maybe<Scalars['String']>;
  tags_not_ends_with_i?: Maybe<Scalars['String']>;
  tags_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishDate?: Maybe<Scalars['String']>;
  publishDate_not?: Maybe<Scalars['String']>;
  publishDate_lt?: Maybe<Scalars['String']>;
  publishDate_lte?: Maybe<Scalars['String']>;
  publishDate_gt?: Maybe<Scalars['String']>;
  publishDate_gte?: Maybe<Scalars['String']>;
  publishDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<UserWhereInput>;
  author_is_null?: Maybe<Scalars['Boolean']>;
};

export type PostWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Post_Content_DocumentField = {
  __typename?: 'Post_content_DocumentField';
  document: Scalars['JSON'];
};

export type Post_Content_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type PostsCreateInput = {
  data?: Maybe<PostCreateInput>;
};

export type PostsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PostUpdateInput>;
};

/**  A keystone list  */
export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  content?: Maybe<Project_Content_DocumentField>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
};

export type ProjectCreateInput = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
};

export type ProjectOrderByInput = {
  id?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
  tags?: Maybe<OrderDirection>;
  publishDate?: Maybe<OrderDirection>;
};

export type ProjectRelateToManyInput = {
  create?: Maybe<Array<Maybe<ProjectCreateInput>>>;
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateInput = {
  title?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  publishDate?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Scalars['String']>;
  tags_not?: Maybe<Scalars['String']>;
  tags_contains?: Maybe<Scalars['String']>;
  tags_not_contains?: Maybe<Scalars['String']>;
  tags_starts_with?: Maybe<Scalars['String']>;
  tags_not_starts_with?: Maybe<Scalars['String']>;
  tags_ends_with?: Maybe<Scalars['String']>;
  tags_not_ends_with?: Maybe<Scalars['String']>;
  tags_i?: Maybe<Scalars['String']>;
  tags_not_i?: Maybe<Scalars['String']>;
  tags_contains_i?: Maybe<Scalars['String']>;
  tags_not_contains_i?: Maybe<Scalars['String']>;
  tags_starts_with_i?: Maybe<Scalars['String']>;
  tags_not_starts_with_i?: Maybe<Scalars['String']>;
  tags_ends_with_i?: Maybe<Scalars['String']>;
  tags_not_ends_with_i?: Maybe<Scalars['String']>;
  tags_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishDate?: Maybe<Scalars['String']>;
  publishDate_not?: Maybe<Scalars['String']>;
  publishDate_lt?: Maybe<Scalars['String']>;
  publishDate_lte?: Maybe<Scalars['String']>;
  publishDate_gt?: Maybe<Scalars['String']>;
  publishDate_gte?: Maybe<Scalars['String']>;
  publishDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<UserWhereInput>;
  author_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProjectWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Project_Content_DocumentField = {
  __typename?: 'Project_content_DocumentField';
  document: Scalars['JSON'];
};

export type Project_Content_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type ProjectsCreateInput = {
  data?: Maybe<ProjectCreateInput>;
};

export type ProjectsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProjectUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<User>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**
   *  Perform a meta-query on all User items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use usersCount instead.
   */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  /**  Search for all Post items which match the where clause.  */
  allPosts?: Maybe<Array<Post>>;
  /**  Search for the Post item with the matching ID.  */
  Post?: Maybe<Post>;
  /**
   *  Perform a meta-query on all Post items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use postsCount instead.
   */
  _allPostsMeta?: Maybe<_QueryMeta>;
  postsCount?: Maybe<Scalars['Int']>;
  /**  Search for all Project items which match the where clause.  */
  allProjects?: Maybe<Array<Project>>;
  /**  Search for the Project item with the matching ID.  */
  Project?: Maybe<Project>;
  /**
   *  Perform a meta-query on all Project items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use projectsCount instead.
   */
  _allProjectsMeta?: Maybe<_QueryMeta>;
  projectsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export type QueryAllPostsArgs = {
  where?: PostWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<PostOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type Query_AllPostsMetaArgs = {
  where?: PostWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<PostOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};

export type QueryAllProjectsArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type Query_AllProjectsMetaArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};

export enum SortPostsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
}

export enum SortProjectsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  posts: Array<Post>;
  /** @deprecated This query will be removed in a future version. Please use postsCount instead. */
  _postsMeta?: Maybe<_QueryMeta>;
  postsCount?: Maybe<Scalars['Int']>;
  projects: Array<Project>;
  /** @deprecated This query will be removed in a future version. Please use projectsCount instead. */
  _projectsMeta?: Maybe<_QueryMeta>;
  projectsCount?: Maybe<Scalars['Int']>;
};

/**  A keystone list  */
export type UserPostsArgs = {
  where?: PostWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<PostOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

/**  A keystone list  */
export type User_PostsMetaArgs = {
  where?: PostWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<PostOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

/**  A keystone list  */
export type UserPostsCountArgs = {
  where?: PostWhereInput;
};

/**  A keystone list  */
export type UserProjectsArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

/**  A keystone list  */
export type User_ProjectsMetaArgs = {
  where?: ProjectWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProjectOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};

/**  A keystone list  */
export type UserProjectsCountArgs = {
  where?: ProjectWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyInput>;
  projects?: Maybe<ProjectRelateToManyInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyInput>;
  projects?: Maybe<ProjectRelateToManyInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  posts_every?: Maybe<PostWhereInput>;
  /**  condition must be true for at least 1 node  */
  posts_some?: Maybe<PostWhereInput>;
  /**  condition must be false for all nodes  */
  posts_none?: Maybe<PostWhereInput>;
  /**  condition must be true for all nodes  */
  projects_every?: Maybe<ProjectWhereInput>;
  /**  condition must be true for at least 1 node  */
  projects_some?: Maybe<ProjectWhereInput>;
  /**  condition must be false for all nodes  */
  projects_none?: Maybe<ProjectWhereInput>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsQuery = { __typename?: 'Query' } & {
  allPosts?: Maybe<
    Array<
      { __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'publishDate'> & {
          content?: Maybe<
            { __typename?: 'Post_content_DocumentField' } & Pick<
              Post_Content_DocumentField,
              'document'
            >
          >;
        }
    >
  >;
};

export const AllPostsDocument = gql`
  query AllPosts {
    allPosts {
      id
      title
      publishDate
      content {
        document
      }
    }
  }
`;

export function useAllPostsQuery(
  options: Omit<Urql.UseQueryArgs<AllPostsQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<AllPostsQuery>({ query: AllPostsDocument, ...options });
}
