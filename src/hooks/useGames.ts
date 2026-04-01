import type { FetchResponse } from "@/modules/fetchResponse";
import type { Game } from "@/modules/game";
import type { GameQuery } from "@/modules/gameQuery";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGame = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGame;
