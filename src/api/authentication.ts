import { getLocalStorageRefreshToken } from "utils/localStorage";

import { API_URL } from "./";

export const getSpotifyAuthorizationPageLink = async (redirectUri: string) => {
  const response = await fetch(`${API_URL}/login?redirectUri=${redirectUri}`);

  const { authorizationUrl } = await response.json();

  if (authorizationUrl) {
    window.location.href = authorizationUrl;
  }

  return authorizationUrl;
};

export const getAccessToken = async (
  redirectUri: string,
  authorizationCode: string
) => {
  const response = await fetch(
    `${API_URL}/token?redirectUri=${redirectUri}&code=${authorizationCode}`
  );
  return await response.json();
};

export const refreshAccessToken = async () => {
  const refreshToken = getLocalStorageRefreshToken();
  const response = await fetch(`${API_URL}/refreshToken`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return await response.json();
};
