import type { Game } from "@/modules/game";
import type { GameQuery } from "@/modules/gameQuery";
import ApiClient from "@/services/api-client";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    staleTime: 300_000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGame;
