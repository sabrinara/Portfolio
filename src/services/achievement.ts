import { IAchievement } from "@/types/achievement";
import api from "./api";

// ✅ Get all achievements
export const getAchievements = async (): Promise<IAchievement[]> => {
  const response = await api.get("/achievements");
  return response.data;
};

// ✅ Create a new achievement (requires auth token)
export const createAchievement = async (
  data: IAchievement,
  token: string
): Promise<IAchievement> => {
  const response = await api.post("/achievements", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


// ✅ Update achievement by ID
export const updateAchievement = async (
  id: string,
  data: IAchievement,
  token: string
): Promise<IAchievement> => {
  const response = await api.put(`/achievements/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Delete achievement by ID
export const deleteAchievement = async (
  id: string,
  token: string
): Promise<{ message: string }> => {
  const response = await api.delete(`/achievements/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
