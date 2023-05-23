export interface IQueryType {
  __typename: '__Type';
  name: string;
  description: string | null;
  fields?: IQueryField[];
  ofType?: IQueryType;
}

export interface IQueryField {
  __typename: '__Field';
  name: string;
  args: IQUeryArg[];
  type: IQueryType;
}
export interface IQUeryArg {
  __typename: '__InputValue';
  name: string;
  description: string;
  type: IQueryType;
}
