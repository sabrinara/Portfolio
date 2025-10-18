export type ExperienceType = "company" | "team";

export interface Experience {
  _id?: string;
  title?: string;
  about?: string;
  startDate?: string; // ISO string
  endDate?: string;   // ISO string
  type: ExperienceType;
  technologies: string[];
  certificateUrl?: string;
  url?: string;
  projects?: string[]; // IDs referencing Project documents
  resumeUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
