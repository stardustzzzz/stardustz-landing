//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export function gql(strings: TemplateStringsArray, ...args: string[]): string {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (args[i] || '')
  })
  return str
}
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
  post: Post;
  postConnection: PostConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Page | Post;

export type Page = Node & Document & {
  __typename?: 'Page';
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type PostSections = {
  __typename?: 'PostSections';
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  left?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Post = Node & Document & {
  __typename?: 'Post';
  sections?: Maybe<Array<Maybe<PostSections>>>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
  updatePost: Post;
  createPost: Post;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  post?: InputMaybe<PostMutation>;
};

export type PageMutation = {
  body?: InputMaybe<Scalars['JSON']>;
};

export type PostSectionsMutation = {
  title?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  right?: InputMaybe<Scalars['String']>;
  left?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type PostMutation = {
  sections?: InputMaybe<Array<InputMaybe<PostSectionsMutation>>>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
  bottom?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type PagePartsFragment = { __typename?: 'Page', body?: any | null };

export type PostPartsFragment = { __typename?: 'Post', image?: string | null, title?: string | null, top?: string | null, bottom?: string | null, body?: string | null, sections?: Array<{ __typename: 'PostSections', title?: string | null, price?: string | null, right?: string | null, left?: string | null, image?: string | null } | null> | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PageConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, edges?: Array<{ __typename?: 'PageConnectionEdges', node?: { __typename?: 'Page', id: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, image?: string | null, title?: string | null, top?: string | null, bottom?: string | null, body?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, sections?: Array<{ __typename: 'PostSections', title?: string | null, price?: string | null, right?: string | null, left?: string | null, image?: string | null } | null> | null } };

export type PostConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, edges?: Array<{ __typename?: 'PostConnectionEdges', node?: { __typename?: 'Post', id: string, image?: string | null, title?: string | null, top?: string | null, bottom?: string | null, body?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, sections?: Array<{ __typename: 'PostSections', title?: string | null, price?: string | null, right?: string | null, left?: string | null, image?: string | null } | null> | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  sections {
    __typename
    title
    price
    right
    left
    image
  }
  image
  title
  top
  bottom
  body
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    _sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection {
  pageConnection {
    totalCount
    edges {
      node {
        id
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    _sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection {
  postConnection {
    totalCount
    edges {
      node {
        id
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    let data = {};
    try {
      data = await client.request({
        query: doc,
        variables: vars,
      });
    } catch (e) {
      // swallow errors related to document creation
      console.warn("Warning: There was an error when fetching data");
      console.warn(e);
    }

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql" }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

