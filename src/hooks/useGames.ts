import {type Game } from "@/modules/game";
import useData from "./useData";
import type { Genre } from "@/modules/genre";

const useGame = (selectedGenre: Genre | null) => 
    useData<Game>('/games', {params: {genres:selectedGenre?.id}}, [selectedGenre?.id]);

export default useGame;