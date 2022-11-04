import { Currency } from '../../api'
import { Button, Col, Input, Row, Select, Typography } from 'antd'
import { useState } from 'react'

interface Props {
    currencies: Array<Currency>
}

const ConversionCalculator = (props: Props) => {
    const [currency, setCurrency] = useState('')
    const [amount, setAmount] = useState<number|null>(null)
    const [conversionResult, setConversionResult] = useState<number|null>(null)

    const calculateConversion = () => {
        if (amount === null || currency === '') {
            return
        }
        const foreignCurrency = props.currencies.find(currencyRow => currencyRow.code === currency)
        if (!foreignCurrency) {
            alert(`Unknown currency ${currency}`)
            return
        }

        setConversionResult(amount * (foreignCurrency.rate / foreignCurrency.amount))
    }

    return (
        <>
            <Typography.Title>Conversion calculator</Typography.Title>
            <Row>
                <Col span={8}>
                    <Input placeholder="Enter amount" type="number" onChange={evt => {
                        setAmount(Number(evt.target.value))
                    }}/>
                </Col>
                <Col span={8}>
                    <Select
                        dropdownMatchSelectWidth={false}
                        placeholder="Currency"
                        onChange={setCurrency}
                        options={props.currencies.map(currencyRow => ({
                            value: currencyRow.code,
                            label: `${currencyRow.code} (${currencyRow.currency})`,
                        }))}
                    />
                </Col>
                <Col span={8}>
                    <Button block type="primary" onClick={calculateConversion}>Convert</Button>
                </Col>
            </Row>
            { conversionResult !== null && <Typography.Title level={2}>{conversionResult} CZK</Typography.Title> }
        </>
    )
}

export default ConversionCalculator