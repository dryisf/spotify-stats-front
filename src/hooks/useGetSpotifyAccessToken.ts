import { useQuery } from '@tanstack/react-query';
import { getAccessToken } from 'api/authentication';

const useGetSpotifyAccessToken = (authorizationCode: string | null) => {
  const {
    data: { accessToken, refreshToken, accessTokenExpirationDate } = {},
    isLoading: isFetchingAccessToken,
  } = useQuery({
    queryFn: () => getAccessToken(authorizationCode || ''),
    queryKey: ['accessToken', authorizationCode],
    enabled: Boolean(authorizationCode),
  });

  return {
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
    isFetchingAccessToken,
  };
};

export default useGetSpotifyAccessToken;
