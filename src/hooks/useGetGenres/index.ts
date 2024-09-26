import { useQuery } from '@tanstack/react-query';
import { getArtists } from 'api/artists';
import { SpotifyTimeRange } from 'types';
import { useMemo } from 'react';
import { getGenresFromArtists } from './parsers';

const useGetGenres = (enabled: boolean, timeRange: SpotifyTimeRange) => {
  const { data: { artists = [] } = {}, isLoading: areArtistsLoading } =
    useQuery({
      queryFn: () => getArtists(timeRange),
      queryKey: ['artists', timeRange],
      enabled,
    });

  return {
    genres: useMemo(() => getGenresFromArtists(artists), [artists]),
    areGenresLoading: areArtistsLoading,
  };
};

export default useGetGenres;
