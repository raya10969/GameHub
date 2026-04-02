import genres from "@/data/genres";
import type { Genre } from "@/modules/genre";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 86_400_000, // 24h
    initialData: genres,
  });

export default useGenres;
