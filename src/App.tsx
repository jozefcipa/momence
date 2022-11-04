import React, { useEffect, useState } from 'react'
import { Currency, loadExchangeRates } from './api'
import CurrencyTable from './components/CurrencyTable'
import ConversionCalculator from './components/ConversionCalculator'
import { Col, Row } from 'antd'

function App() {
  const [currencies, setCurrencies] = useState<Array<Currency>>([])

  useEffect(() => {
    const loadCurrencies = async () => {
        // TODO: use react query
      setCurrencies(await loadExchangeRates())
    }
    loadCurrencies()
  }, [])

  return (
      <Row>
        <Col span={8} offset={8}>
            <ConversionCalculator currencies={currencies} />
            <CurrencyTable currencies={currencies} />
        </Col>
      </Row>
  )
}

export default App;
