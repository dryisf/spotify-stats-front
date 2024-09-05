import { useQuery } from '@tanstack/react-query';
import { getTracks } from 'api/tracks';

const useGetTracks = (enabled: boolean) => {
  const { data: { tracks = [] } = {}, isLoading: areTracksLoading } = useQuery({
    queryFn: () => getTracks(),
    queryKey: ['tracks'],
    enabled,
  });

  return {
    tracks,
    areTracksLoading,
  };
};

export default useGetTracks;
