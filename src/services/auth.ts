import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_AUTH;

/**
 * Login user (admin)
 * @param data { email, password }
 * @returns { token }
 */
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, data);
  return response.data;
};
