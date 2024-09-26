import { useState } from 'react';
import useGetArtists from 'hooks/useGetArtists';
import useAuth from 'hooks/useAuth';
import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';
import ItemsList from 'components/ItemsList';
import { SpotifyTimeRange } from 'types';

function Artists() {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRange>(
    SpotifyTimeRangeEnum.shortTerm,
  );

  const { isLoggedIn } = useAuth();

  const { artists, areArtistsLoading } = useGetArtists(isLoggedIn, timeRange);

  return (
    <ItemsList
      items={artists}
      loading={areArtistsLoading}
      setTimeRange={setTimeRange}
      timeRange={timeRange}
      title="Top Artists"
    />
  );
}

export default Artists;
