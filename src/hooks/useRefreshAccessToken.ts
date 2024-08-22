import { useQuery } from "@tanstack/react-query";
import { refreshAccessToken } from "api/authentication";

const useRefreshSpotifyAccessToken = (enabled: boolean) => {
  const {
    data: { accessToken, accessTokenExpirationDate } = {},
    isLoading: isRefreshingAccessToken,
  } = useQuery({
    queryFn: () => refreshAccessToken(),
    queryKey: ["refreshAccessToken"],
    enabled,
  });

  return {
    accessToken,
    accessTokenExpirationDate,
    isRefreshingAccessToken,
  };
};

export default useRefreshSpotifyAccessToken;
