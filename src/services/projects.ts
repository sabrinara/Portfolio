
import { Project } from "@/types/projects";
import api from "./api";

// ✅ Get all projects
export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");
  return response.data;
};

// ✅ Get a single project by ID
export const getProjectById = async (id: string): Promise<Project> => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

// ✅ Create a new project (requires auth token)
export const createProject = async (data: Project, token: string): Promise<Project> => {
  const response = await api.post("/projects", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Update a project by ID (requires auth token)
export const updateProject = async (
  id: string,
  data: Project,
  token: string
): Promise<Project> => {
  const response = await api.put(`/projects/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Delete a project by ID (requires auth token)
export const deleteProject = async (
  id: string,
  token: string
): Promise<{ message: string }> => {
  const response = await api.delete(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
