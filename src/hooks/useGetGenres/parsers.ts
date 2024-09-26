import { Artist } from 'types';

interface GenreMap {
  [name: string]: number;
}

export const getGenresFromArtists = (artists: Artist[]) => {
  const genresMappedByArtistsCount = artists.reduce(
    (acc: GenreMap, artist: Artist) => {
      for (const genre of artist.genres) {
        if (acc[genre]) {
          acc[genre] += 1;
        } else {
          acc[genre] = 1;
        }
      }

      return acc;
    },
    {},
  );

  return Object.entries(genresMappedByArtistsCount).sort(
    ([, genreACount], [, genreBCount]) => genreBCount - genreACount,
  );
};
