export interface IQueryType {
  __typename: '__Type';
  name: string;
  description: string | null;
  fields?: IQueryField[];
}

export interface IQueryField {
  __typename: '__Field';
  name: string;
  args: [];
  type: IQueryType;
}
