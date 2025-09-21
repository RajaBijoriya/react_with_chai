import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
          .then((response) => response.json()) // we can also use JSON.parse()
          .then((response) => setData(response[currency]));
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo