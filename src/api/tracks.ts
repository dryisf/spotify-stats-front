import { getLocalStorageAccessToken } from 'utils/localStorage';

import { API_URL } from './index';

export const getTracks = async () => {
  const accessToken = getLocalStorageAccessToken();
  const response = await fetch(`${API_URL}/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};
