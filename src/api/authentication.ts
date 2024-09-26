import { getLocalStorageRefreshToken } from 'utils/localStorage';
import qs from 'qs';

import { API_URL } from './';

export const getSpotifyAuthorizationPageLink = async (redirectUri: string) => {
  const response = await fetch(
    `${API_URL}/login?${qs.stringify({
      redirectUri,
    })}`,
  );

  const { authorizationUrl } = await response.json();

  if (authorizationUrl) {
    window.location.href = authorizationUrl;
  }

  return authorizationUrl;
};

export const getAccessToken = async (
  redirectUri: string,
  authorizationCode: string,
) => {
  const response = await fetch(
    `${API_URL}/token?${qs.stringify({
      redirectUri,
      code: authorizationCode,
    })}`,
  );
  return await response.json();
};

export const refreshAccessToken = async () => {
  const refreshToken = getLocalStorageRefreshToken();
  const response = await fetch(`${API_URL}/token/refresh`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return await response.json();
};
