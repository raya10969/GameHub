import genres from "@/data/genres";

import type { FetchResponse } from "@/modules/fetchResponse";
import type { Genre } from "@/modules/genre";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 86_400_000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
