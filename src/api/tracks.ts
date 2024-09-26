import { getLocalStorageAccessToken } from 'utils/localStorage';
import qs from 'qs';

import { API_URL } from './index';
import { SpotifyTimeRange } from 'types';

export const getTracks = async (timeRange: SpotifyTimeRange) => {
  const accessToken = getLocalStorageAccessToken();
  const response = await fetch(
    `${API_URL}/tracks?${qs.stringify({
      timeRange,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return await response.json();
};
