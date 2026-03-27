import {type Genre } from "@/modules/genre";
import useData from "./useData";

const useGenres = () => useData<Genre>('/genres');

export default useGenres