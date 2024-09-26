import { useQuery } from '@tanstack/react-query';
import { getTracks } from 'api/tracks';
import { SpotifyTimeRange } from 'types';

const useGetTracks = (enabled: boolean, timeRange: SpotifyTimeRange) => {
  const { data: { tracks = [] } = {}, isLoading: areTracksLoading } = useQuery({
    queryFn: () => getTracks(timeRange),
    queryKey: ['tracks', timeRange],
    enabled,
  });

  return {
    tracks,
    areTracksLoading,
  };
};

export default useGetTracks;
