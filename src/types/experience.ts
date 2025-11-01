import { Project } from "./projects";

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
  projects?: Project[];
  resumeUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
