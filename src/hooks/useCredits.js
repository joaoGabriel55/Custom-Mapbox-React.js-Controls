import { useQuery } from "react-query"
import { fetchCredits } from "../services/fetchCredits"

export function useCredits() {
  const { data, isFetching } = useQuery(
    'todos',
    async () => await fetchCredits(),
    {
      refetchInterval: 1000,
    }
  )

  return { data, isFetching }
}