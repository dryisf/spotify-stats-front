import { Track } from 'types';
import useGetTracks from 'hooks/useGetTracks';
import useAuth from 'hooks/useAuth';

function Tracks() {
  const { isLoggedIn } = useAuth();

  const { tracks, areTracksLoading } = useGetTracks(isLoggedIn);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12">
      {areTracksLoading && <div>Tracks are loading...</div>}
      {Boolean(tracks.length) && (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {tracks.map((track: Track) => (
            <div key={track.id} className="flex flex-col gap-1">
              <img className="h-96 w-auto" src={track.images[0].url}></img>
              <p>{track.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tracks;
