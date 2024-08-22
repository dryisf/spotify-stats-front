import { useQuery } from "@tanstack/react-query";
import { getSpotifyAuthorizationPageLink } from "api/authentication";

const useGetSpotifyAuthorizationPageLink = (enabled: boolean) => {
  const {
    data: spotifyAuthorizationPageLink,
    isLoading: isFetchingSpotifyAuthorizationPageLink,
  } = useQuery({
    queryFn: () =>
      getSpotifyAuthorizationPageLink(
        import.meta.env.VITE_SPOTIFY_REDIRECT_URI
      ),
    queryKey: ["spotifyAuthenticationLink"],
    enabled,
  });

  return {
    spotifyAuthorizationPageLink,
    isFetchingSpotifyAuthorizationPageLink,
  };
};

export default useGetSpotifyAuthorizationPageLink;
