import { useCallback, useState } from 'react';

import useGetSpotifyAuthorizationPageLink from 'hooks/useGetSpotifyAuthorizationPageLink';
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

  const onLogin = useCallback(() => {
    if (!spotifyAuthorizationPageLink) {
      setShouldFetchAuthenticationLink(true);
      return;
    }

    window.location.href = spotifyAuthorizationPageLink;
  }, [spotifyAuthorizationPageLink]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12">
      {isAuthLoading ? (
        <div>Is logging in...</div>
      ) : (
        <>
          {isLoggedIn ? (
            <div>Logged in</div>
          ) : (
            <button
              onClick={onLogin}
              disabled={isFetchingSpotifyAuthorizationPageLink}
            >
              Login
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
