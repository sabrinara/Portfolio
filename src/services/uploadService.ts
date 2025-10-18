import api from "./api";

// ✅ Upload image (requires auth token)
export const uploadImage = async (file: File, token: string): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await api.post("/upload/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
