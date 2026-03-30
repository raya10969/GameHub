import {type Platform } from "@/modules/platform";
import useData from "./useData";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;