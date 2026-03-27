import {type Genres } from "@/modules/genres";
import useData from "./useData";

const useGenres = () => useData<Genres>('/genres');

export default useGenres