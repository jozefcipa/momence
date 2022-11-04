import React, { useEffect, useState } from 'react'
import { Currency, loadExchangeRates } from './api'
import CurrencyTable from './components/CurrencyTable'

function App() {
  const [currencies, setCurrencies] = useState<Array<Currency>>([])

  useEffect(() => {
    const loadCurrencies = async () => {
      setCurrencies(await loadExchangeRates())
    }
    loadCurrencies()
  }, [])

  return (
    <>
      <CurrencyTable currencies={currencies} />
    </>
  )
}

export default App;
