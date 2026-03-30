import {type Game } from "@/modules/game";
import useData from "./useData";
import type { Genre } from "@/modules/genre";
import type { Platform } from "@/modules/platform";

const useGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
    useData<Game>('/games', {params: {genres:selectedGenre?.id, parent_platforms:selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGame;