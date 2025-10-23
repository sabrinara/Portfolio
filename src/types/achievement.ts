export interface IAchievement {
  _id?: string;
  title: string;
  details: string;
  image?: string;
  type: "contest" | "course";
  date?: string; // stored as ISO string in JSON
  createdAt?: string;
  updatedAt?: string;
}
