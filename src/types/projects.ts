export interface KeyFeature {
  title: string;
  image?: string;
  details?: string;
}

export type ProjectType = "company" | "team" | "personal";

export interface Project {
  _id?: string;
  title: string;
  category: string;
  imageArray: string[];
  type: ProjectType;
  technologyType?: string;
  subTitle?: string;
  description?: string;
  keyFeatures: KeyFeature[];
  technologies: string[];
  date?: string; // ISO string
  createdAt?: string;
  updatedAt?: string;
  featuredProject?: boolean;
}
