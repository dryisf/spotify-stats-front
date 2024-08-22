import { useQuery } from "@tanstack/react-query";
import { getArtists } from "api/artists";

const useGetArtists = (enabled: boolean) => {
  const { data: { artists = [] } = {}, isLoading: areArtistsLoading } =
    useQuery({
      queryFn: () => getArtists(),
      queryKey: ["artists"],
      enabled,
    });

  return {
    artists,
    areArtistsLoading,
  };
};

export default useGetArtists;
