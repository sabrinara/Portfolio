import api from "./api"; // assuming you have a central axios instance like api.ts
import { LoginRequest, LoginResponse } from "../types/auth";

// Login user (admin)
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
};
