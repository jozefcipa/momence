import React from 'react'
import { useExchangeRates } from './api'
import CurrencyTable from './components/CurrencyTable'
import ConversionCalculator from './components/ConversionCalculator'
import { Col, Layout, Row, Typography } from 'antd'

const { Content } = Layout

function App() {
    const { isLoading, data: currencies, error } = useExchangeRates()

    // TODO: CORS proxy

    if (error) {
        alert('Failed to load data')
        console.error(error)
    }

    return (
        <Layout>
            <Content style={{ height: '100vh' }}>
                <Row justify="center">
                    <Col lg={12} sm={20} xs={20}>
                        <Typography.Title >Conversion calculator</Typography.Title>
                        <ConversionCalculator currencies={currencies ?? []} />
                        <CurrencyTable currencies={currencies ?? []} isLoading={isLoading}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default App;
