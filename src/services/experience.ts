import { Experience } from "@/types/experience";
import api from "./api";

// ✅ Get all experiences
export const getExperiences = async (): Promise<Experience[]> => {
  const response = await api.get("/experience");
  return response.data;
};

// ✅ Create a new experience (requires auth token)
export const createExperience = async (
  data: Experience,
  token: string
): Promise<Experience> => {
  const response = await api.post("/experience", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Update experience by ID (requires auth token)
export const updateExperience = async (
  id: string,
  data: Experience,
  token: string
): Promise<Experience> => {
  const response = await api.put(`/experience/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Delete experience by ID (requires auth token)
export const deleteExperience = async (
  id: string,
  token: string
): Promise<{ message: string }> => {
  const response = await api.delete(`/experience/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
