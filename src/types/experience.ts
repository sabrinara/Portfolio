export type IExperienceType = "company" | "team" | "course";

export interface IExperience {
  _id?: string;
  title?: string;
  subTitle?: string;
  about?: string;
  startDate?: string; // ISO string
  endDate?: string;   // ISO string
  type: IExperienceType;
  technologies: string[];
  certificateUrl?: string;
  url?: string;
  projects?: string[]; // IDs referencing Project documents
  resumeUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
