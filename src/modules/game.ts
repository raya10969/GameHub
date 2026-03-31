import type { Platform } from "./platform";

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms?: { platform: Platform }[];
  metacritic: number | null;
  rating_top: number | null;
}
