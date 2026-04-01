import platforms from "@/data/platforms";
import type { FetchResponse } from "@/modules/fetchResponse";
import type { Platform } from "@/modules/platform";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 86_400_000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
