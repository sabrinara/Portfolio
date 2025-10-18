// src/services/intro.ts
import { Intro } from "@/types/intro";
import api from "./api";


// Fetch all intro data
export const getIntro = async (): Promise<Intro[]> => {
  const response = await api.get("/intro");
  return response.data;
};

// Create intro (requires auth)
export const createIntro = async (data: Intro, token: string): Promise<Intro> => {
  const response = await api.post("/intro", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update intro by ID
export const updateIntro = async (id: string, data: Intro, token: string): Promise<Intro> => {
  const response = await api.put(`/intro/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete intro by ID
export const deleteIntro = async (id: string, token: string): Promise<{ message: string }> => {
  const response = await api.delete(`/intro/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
