import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

const useApiQuery = (key: string[], table: string, query: string = "*") => {
  const supabase = createClient();
  const { isPending, error, data } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase.from(table).select(query);
      if (error) {
        console.error(`Gagal mengambil data dari ${table}:`, error.message);
        throw error;
      }
      return data;
    },
  });
  return { isPending, error, data };
};

export default useApiQuery;
