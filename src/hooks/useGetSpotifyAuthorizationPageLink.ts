import { useQuery } from '@tanstack/react-query';
import { getSpotifyAuthorizationPageLink } from 'api/authentication';

const useGetSpotifyAuthorizationPageLink = (enabled: boolean) => {
  const {
    data: spotifyAuthorizationPageLink,
    isLoading: isFetchingSpotifyAuthorizationPageLink,
  } = useQuery({
    queryFn: () => getSpotifyAuthorizationPageLink(),
    queryKey: ['spotifyAuthenticationLink'],
    enabled,
  });

  return {
    spotifyAuthorizationPageLink,
    isFetchingSpotifyAuthorizationPageLink,
  };
};

export default useGetSpotifyAuthorizationPageLink;
