import { useQuery } from '@tanstack/react-query';
import { getArtists } from 'api/artists';
import { SpotifyTimeRange } from 'types';

const useGetArtists = (enabled: boolean, timeRange: SpotifyTimeRange) => {
  const { data: { artists = [] } = {}, isLoading: areArtistsLoading } =
    useQuery({
      queryFn: () => getArtists(timeRange),
      queryKey: ['artists', timeRange],
      enabled,
    });

  return {
    artists,
    areArtistsLoading,
  };
};

export default useGetArtists;
