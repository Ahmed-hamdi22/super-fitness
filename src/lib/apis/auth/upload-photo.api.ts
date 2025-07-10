import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function uploadPhoto(token: string, fields: UploadPhotoFields) {
  const apiUrl = `${API_URL}/auth/upload-photo`;

  // Create FormData for file upload
  const formData = new FormData();
  formData.append('photo', fields.photo);

  const response = await axios.put(apiUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  const payload: APIResponse<UploadPhotoResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}