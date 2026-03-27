import {type Genres } from "@/modules/genres";
import useData from "./useData";

const useGame = () => useData<Genres>('/games');

export default useGame;