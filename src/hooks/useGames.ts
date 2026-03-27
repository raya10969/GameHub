import {type Game } from "@/modules/game";
import useData from "./useData";

const useGame = () => useData<Game>('/games');

export default useGame;