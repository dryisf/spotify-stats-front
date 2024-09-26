import { useState } from 'react';
import useGetTracks from 'hooks/useGetTracks';
import useAuth from 'hooks/useAuth';
import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';
import ItemsList from 'components/ItemsList';
import { SpotifyTimeRange } from 'types';

function Tracks() {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRange>(
    SpotifyTimeRangeEnum.shortTerm,
  );

  const { isLoggedIn } = useAuth();

  const { tracks, areTracksLoading } = useGetTracks(isLoggedIn, timeRange);

  return (
    <ItemsList
      items={tracks}
      loading={areTracksLoading}
      setTimeRange={setTimeRange}
      timeRange={timeRange}
      title="Top Tracks"
    />
  );
}

export default Tracks;
