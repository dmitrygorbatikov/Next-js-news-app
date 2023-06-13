export interface IArticle {
  _id: string;
  title: string;
  published_date: string;
  link: string;
  description: string;
  category: string;
  country: string;
  language: string;
  media: string | null;
}

export interface INewsResponse {
  count: number;
  articles: IArticle[];
}

export interface IAutocompleteOpt {
  title: string;
  value: string | null;
}
