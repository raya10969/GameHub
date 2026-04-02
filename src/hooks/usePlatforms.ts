import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import ApiClient from "@/services/api-client";
import type { Platform } from "@/modules/platform";
import platforms from "@/data/platforms";

const apiClient = new ApiClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
