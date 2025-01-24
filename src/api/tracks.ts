import qs from 'qs';
import { getLocalStorageAccessToken } from 'utils/localStorage';

import { SpotifyTimeRange } from 'types';
import { API_URL } from './index';

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

  const { data } = await response.json();

  return data;
};
