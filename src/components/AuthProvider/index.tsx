import { DateTime } from 'luxon';
import { createContext, ReactNode, useState, useMemo, useEffect } from 'react';

import {
  getLocalStorageAccessToken,
  getLocalStorageAccessTokenExpirationDate,
  setLocalStorageAccessToken,
  setLocalStorageAccessTokenExpirationDate,
  setLocalStorageRefreshToken,
} from 'utils/localStorage';

import useGetSpotifyAccessToken from 'hooks/useGetSpotifyAccessToken';
import useRefreshSpotifyAccessToken from 'hooks/useRefreshAccessToken';

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
};

const contextInitialValues = {
  isLoggedIn: false,
  isAuthLoading: false,
};

const AuthContext = createContext<IAuthContext>(contextInitialValues);

const AuthProvider = ({ children }: Props) => {
  const [userAccessToken, setUserAccessToken] = useState<string>('');
  const searchParams = new URLSearchParams(window.location.search);

  const localStorageAccessTokenExpirationDate =
    getLocalStorageAccessTokenExpirationDate();

  const shouldRefreshAccessToken = useMemo(
    () =>
      DateTime.fromISO(localStorageAccessTokenExpirationDate) < DateTime.now(),
    [localStorageAccessTokenExpirationDate],
  );

  const {
    accessToken,
    refreshToken,
    accessTokenExpirationDate,
    isFetchingAccessToken,
  } = useGetSpotifyAccessToken(searchParams?.get('code'));

  const {
    accessToken: newAccessToken,
    accessTokenExpirationDate: newAccessTokenExpirationDate,
    isRefreshingAccessToken,
  } = useRefreshSpotifyAccessToken(shouldRefreshAccessToken);

  const isLoggedIn: boolean = useMemo(
    () => Boolean(userAccessToken) && !shouldRefreshAccessToken,
    [userAccessToken, shouldRefreshAccessToken],
  );

  const isAuthLoading: boolean = useMemo(
    () => isFetchingAccessToken || isRefreshingAccessToken,
    [isFetchingAccessToken, isRefreshingAccessToken],
  );

  useEffect(() => {
    if (shouldRefreshAccessToken) {
      return;
    }

    const localStorageAccessToken = getLocalStorageAccessToken();

    if (localStorageAccessToken) {
      setUserAccessToken(localStorageAccessToken);
    }
  }, [shouldRefreshAccessToken]);

  useEffect(() => {
    if (accessToken && refreshToken && accessTokenExpirationDate) {
      setLocalStorageAccessToken(accessToken);
      setUserAccessToken(accessToken);
      setLocalStorageRefreshToken(refreshToken);
      setLocalStorageAccessTokenExpirationDate(accessTokenExpirationDate);
    }
  }, [accessToken, refreshToken, accessTokenExpirationDate]);

  useEffect(() => {
    if (newAccessToken && newAccessTokenExpirationDate) {
      setLocalStorageAccessToken(newAccessToken);
      setUserAccessToken(newAccessToken);
      setLocalStorageAccessTokenExpirationDate(newAccessTokenExpirationDate);
    }
  }, [newAccessToken, newAccessTokenExpirationDate]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

export default AuthProvider;
