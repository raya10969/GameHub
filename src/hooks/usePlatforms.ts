import platforms from "@/data/platforms";
import type { Platform } from "@/modules/platform";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 86_400_000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
