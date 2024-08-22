const LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN = "spotifyAccessToken";
const LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN_EXPIRATION_DATE =
  "spotifyAccessTokenExpirationDate";
const LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN = "spotifyRefreshToken";

// getters
export const getLocalStorageAccessToken = () => {
  const localStorageAccessToken = localStorage.getItem(
    LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN
  );

  if (localStorageAccessToken) {
    return JSON.parse(localStorageAccessToken);
  }

  return null;
};

export const getLocalStorageRefreshToken = () => {
  const localStorageRefreshToken = localStorage.getItem(
    LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN
  );

  if (localStorageRefreshToken) {
    return JSON.parse(localStorageRefreshToken);
  }

  return null;
};

export const getLocalStorageAccessTokenExpirationDate = () => {
  const localStorageAccessTokenExpirationDate = localStorage.getItem(
    LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN_EXPIRATION_DATE
  );

  if (localStorageAccessTokenExpirationDate) {
    return JSON.parse(localStorageAccessTokenExpirationDate);
  }

  return null;
};

// setters
export const setLocalStorageAccessToken = (token: string) => {
  localStorage.setItem(
    LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN,
    JSON.stringify(token)
  );
};

export const setLocalStorageRefreshToken = (token: string) => {
  localStorage.setItem(
    LOCAL_STORAGE_SPOTIFY_REFRESH_TOKEN,
    JSON.stringify(token)
  );
};

export const setLocalStorageAccessTokenExpirationDate = (date: string) => {
  localStorage.setItem(
    LOCAL_STORAGE_SPOTIFY_ACCESS_TOKEN_EXPIRATION_DATE,
    JSON.stringify(date)
  );
};
