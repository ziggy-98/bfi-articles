import { Author } from "./author";
import { Type } from "./type";

export interface Article {
  about?: string;
  authors: Author[];
  brand: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
  cms: string;
  content_type: string;
  created: string;
  path: string;
  primary_image: {
    url: string;
    alt?: string;
  };
  subjects?: string;
  summary: string;
  title: string;
  type: Type;
  updated: string;
  url: string;
  uuid: string;
}
