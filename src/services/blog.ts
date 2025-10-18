import { Blog } from "@/types/blog";
import api from "./api";

// ✅ Get all blogs
export const getBlogs = async (): Promise<Blog[]> => {
  const response = await api.get("/blogs");
  return response.data;
};

// ✅ Get a single blog by ID
export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};

// ✅ Create a new blog (requires auth token)
export const createBlog = async (data: Blog, token: string): Promise<Blog> => {
  const response = await api.post("/blogs", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Update blog by ID (requires auth token)
export const updateBlog = async (
  id: string,
  data: Blog,
  token: string
): Promise<Blog> => {
  const response = await api.put(`/blogs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// ✅ Delete blog by ID (requires auth token)
export const deleteBlog = async (
  id: string,
  token: string
): Promise<{ message: string }> => {
  const response = await api.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
