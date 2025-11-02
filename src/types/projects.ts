export interface KeyFeature {
  title: string;
  image?: string;
  details?: string;
}

export interface Urls {
  website: string;
  frontend?: string | null;
  backend?: string | null;
}

export type ProjectType = "company" | "team" | "personal";

export type ProjectCategory = "Full Stack" | "Frontend" | "Backend" | "Django" | "MERN";

export interface Project {
  _id?: string;
  title: string;
  imageArray: string[];
  type: ProjectType;
  category: ProjectCategory;
  technologyType?: string;
  subTitle?: string;
  description?: string;
  keyFeatures: KeyFeature[];
  technologies: string[];
  date?: string; // ISO string
  createdAt?: string;
  updatedAt?: string;
  featuredProject?: boolean;
  urls: Urls[];
  totalKeyFeaturesCount: number;
  totalTechnologyCount:number;
}
