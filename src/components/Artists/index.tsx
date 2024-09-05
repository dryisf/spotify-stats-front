import { Artist } from 'types';
import useGetArtists from 'hooks/useGetArtists';
import useAuth from 'hooks/useAuth';

function Artists() {
  const { isLoggedIn } = useAuth();

  const { artists, areArtistsLoading } = useGetArtists(isLoggedIn);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12">
      {areArtistsLoading && <div>Artists are loading...</div>}
      {Boolean(artists.length) && (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {artists.map((artist: Artist) => (
            <div key={artist.id} className="flex flex-col gap-1">
              <img className="h-96 w-auto" src={artist.images[0].url}></img>
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Artists;
