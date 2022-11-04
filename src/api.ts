import { useQuery } from 'react-query'

const API_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

export interface Currency {
    country: string
    currency: string
    amount: number
    code: string
    rate: number
}

export const fetchApi = async () => {
    const res = await fetch(API_URL)
    return await res.text()
}

const parseResponse = (response: string): Array<Currency> => {
    return response
        .trim()
        .split('\n')
        .slice(2) // strip first two rows (headers)
        .map(currencyRaw => {
            const [country, currency, amount, code, rate] = currencyRaw.split('|')
            return {
                country,
                currency,
                amount: Number(amount),
                code,
                rate: Number(rate),
            }
        })
}

export const useExchangeRates = () => {
    return useQuery('exchangeRates', async () => {
        const response = await fetchApi()
        return parseResponse(response)
    })
}
