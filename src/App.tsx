import React from 'react'
import { useExchangeRates } from './api'
import CurrencyTable from './components/CurrencyTable'
import ConversionCalculator from './components/ConversionCalculator'
import { Col, Layout, Row, Typography } from 'antd'

const { Content } = Layout

function App() {
    const { isLoading, data: currencies, error } = useExchangeRates()

    // TODO table scrolling
    // TODO: responsivity
    // TODO: CORS proxy

    if (error) {
        alert('Failed to load data')
        console.error(error)
    }

    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={8} offset={8}>
                        <Typography.Title>Conversion calculator</Typography.Title>
                        <ConversionCalculator currencies={currencies ?? []} />
                        <CurrencyTable currencies={currencies ?? []} isLoading={isLoading}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default App;
