import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms'
import ApiClient from "@/services/api-client";
import type { GameQuery } from "@/modules/gameQuery";
import type { Game } from "@/modules/game";

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    staleTime: ms('5m'),
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGame;
