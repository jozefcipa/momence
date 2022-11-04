import React from 'react'
import { useExchangeRates } from './api'
import CurrencyTable from './components/CurrencyTable'
import ConversionCalculator from './components/ConversionCalculator'
import { Col, Row } from 'antd'

function App() {
    const { isLoading, data: currencies, error } = useExchangeRates()

    // TODO: polish design

    if (error) {
        alert('Failed to load data')
        console.error(error)
    }

    return (
        <Row>
            <Col span={8} offset={8}>
                <ConversionCalculator currencies={currencies ?? []} />
                <CurrencyTable currencies={currencies ?? []} isLoading={isLoading}/>
            </Col>
          </Row>
      )
}

export default App;
