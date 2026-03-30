import type { Genre } from "./genre";
import type { Platform } from "./platform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}