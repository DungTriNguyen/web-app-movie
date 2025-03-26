import getTokens, { TokenRequest } from "@/services/token"
import { useQuery } from "@tanstack/react-query"


export const useTokens = (request: TokenRequest) => {
    const response = useQuery({
        queryKey: ['tokens', request],
        queryFn: () => getTokens(request),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: 60000,
    })

    return {
        ...response
    }
}
