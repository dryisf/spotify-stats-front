import { useState } from 'react';
import useGetGenres from 'hooks/useGetGenres';
import useAuth from 'hooks/useAuth';
import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';
import ItemsList from 'components/ItemsList';
import { SpotifyTimeRange } from 'types';
import { capitalizeEachWord } from 'utils/string';

function Genres() {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRange>(
    SpotifyTimeRangeEnum.shortTerm,
  );

  const { isLoggedIn } = useAuth();

  const { genres, areGenresLoading } = useGetGenres(isLoggedIn, timeRange);

  return (
    <ItemsList
      loading={areGenresLoading}
      title="Top Genres"
      timeRange={timeRange}
      setTimeRange={setTimeRange}
    >
      {genres.map(([name, count]) => (
        <div key={name}>{`${capitalizeEachWord(name)}: ${count}`}</div>
      ))}
    </ItemsList>
  );
}

export default Genres;
