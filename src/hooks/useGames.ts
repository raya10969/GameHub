import {type Game } from "@/modules/game";
import useData from "./useData";
import type { GameQuery } from "@/modules/gameQuery";

const useGame = (gameQuery: GameQuery) => 
    useData<Game>(
        '/games', 
        {
            params: {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id, 
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }, 
        [gameQuery]);

export default useGame;