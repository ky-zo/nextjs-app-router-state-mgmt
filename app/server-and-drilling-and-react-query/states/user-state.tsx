import { getUser } from "@/lib/supabase-server";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });
};
