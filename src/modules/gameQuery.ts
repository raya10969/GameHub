import type { Genre } from "./genre";
import type { Platform } from "./platform";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;
}