import { getLocalStorageAccessToken } from "utils/localStorage";

import { API_URL } from "./index";

export const getArtists = async () => {
  const accessToken = getLocalStorageAccessToken();
  const response = await fetch(`${API_URL}/artists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};
