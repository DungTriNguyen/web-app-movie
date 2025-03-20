// import useSWR from 'swr'

function useCrypto() {
    // const { data, error, isLoading } = useSWR(`/api/crypto`)

    // return {
    //     data,
    //     isLoading,
    //     isError: error
    // }

    return {
        data: [
            {
                id: 1,
                name: "TRUMP",
                pair: "USDT",
                icon: "🦅",
                price: "0.0₵1657",
                change: "4.6%",
                isPositive: true
            },
            {
                id: 2,
                name: "CAT",
                pair: "USDT",
                icon: "🐱",
                price: "0.0₵1657",
                change: "-5.4%",
                isPositive: false
            },
            {
                id: 3,
                name: "LIVE THE",
                pair: "USDT",
                icon: "⭕",
                price: "0.0₵1657",
                change: "3.6%",
                isPositive: true
            },
            {
                id: 4,
                name: "UNIX",
                pair: "USDT",
                icon: "⚪",
                price: "0.0₵1657",
                change: "-1.6%",
                isPositive: false
            },
            {
                id: 5,
                name: "CGPT",
                pair: "USDT",
                icon: "📱",
                price: "0.0₵1657",
                change: "-0.6%",
                isPositive: false
            }
        ],
        isLoading: false,
        isError: false
    }
}

export default useCrypto;