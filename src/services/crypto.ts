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
                icon: "bg-[url('/images/icons/trump.png')] bg-cover bg-center bg-no-repeat w-6 h-6",
                price: "0.0₵1657",
                change: "4.6%",
                isPositive: true
            },
            {
                id: 2,
                name: "CAT",
                pair: "USDT",
                icon: "bg-[url('/images/icons/cat.png')] bg-cover bg-center bg-no-repeat w-6 h-6",
                price: "0.0₵1657",
                change: "-5.4%",
                isPositive: false
            },
            {
                id: 3,
                name: "LIVE THE",
                pair: "USDT",
                icon: "bg-[url('/images/icons/live-the.png')] bg-cover bg-center bg-no-repeat w-6 h-6",
                price: "0.0₵1657",
                change: "3.6%",
                isPositive: true
            },
            {
                id: 4,
                name: "UNIX",
                pair: "USDT",
                icon: "bg-[url('/images/icons/unx.png')] bg-cover bg-center bg-no-repeat w-6 h-6",
                price: "0.0₵1657",
                change: "-1.6%",
                isPositive: false
            },
            {
                id: 5,
                name: "CGPT",
                pair: "USDT",
                icon: "bg-[url('/images/icons/cgpt.png')] bg-cover bg-center bg-no-repeat w-6 h-6",
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