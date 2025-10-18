export interface Blog {
  _id?: string;
  date?: string; // ISO string
  title: string;
  url: string;
  image?: string;
  details?: string;
  view?: number;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
}
