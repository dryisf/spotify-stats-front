import { getLocalStorageRefreshToken } from 'utils/localStorage';
import qs from 'qs';

import { API_URL } from './';

const redirectUri = `${window.location.origin}${window.location.pathname}`;

export const getSpotifyAuthorizationPageLink = async () => {
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

export const getAccessToken = async (authorizationCode: string) => {
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
