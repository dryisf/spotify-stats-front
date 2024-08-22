import { useCallback, useState } from 'react';

import { SpotifyArtist } from 'types';
import useGetSpotifyAuthorizationPageLink from 'hooks/useGetSpotifyAuthorizationPageLink';
import useGetArtists from 'hooks/useGetArtists';
import useAuth from 'hooks/useAuth';

function Home() {
  const [shouldFetchAuthenticationLink, setShouldFetchAuthenticationLink] =
    useState(false);

  const { isLoggedIn, isAuthLoading } = useAuth();

  // TODO: check query param state de la réponse de l'authentification
  const {
    spotifyAuthorizationPageLink,
    isFetchingSpotifyAuthorizationPageLink,
  } = useGetSpotifyAuthorizationPageLink(shouldFetchAuthenticationLink);

  const { artists, areArtistsLoading } = useGetArtists(isLoggedIn);

  const onLogin = useCallback(() => {
    if (!spotifyAuthorizationPageLink) {
      setShouldFetchAuthenticationLink(true);
      return;
    }

    window.location.href = spotifyAuthorizationPageLink;
  }, [spotifyAuthorizationPageLink]);

  return (
    <div className="my-16 flex h-full w-full flex-col items-center justify-center gap-12">
      {isAuthLoading ? (
        <div>Connexion en cours...</div>
      ) : (
        <>
          {isLoggedIn ? (
            <div>Connecté</div>
          ) : (
            <button
              onClick={onLogin}
              disabled={isFetchingSpotifyAuthorizationPageLink}
            >
              Login
            </button>
          )}
          {areArtistsLoading && <div>Chargement artistes</div>}
          {Boolean(artists.length) && (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {artists.map((artist: SpotifyArtist) => (
                <div key={artist.name} className="flex flex-col gap-1">
                  <img className="h-96 w-auto" src={artist.images[0].url}></img>
                  <p>{artist.name}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
