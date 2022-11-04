import { Currency } from '../../api'
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd'
import { useState } from 'react'
import { Result } from './styled'

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

        setConversionResult(
            Number(
                ((amount / foreignCurrency.rate) * foreignCurrency.amount).toFixed(2),
            ),
        )
    }

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={calculateConversion}
        >
            <Form.Item
                label="Enter amount in CZK"
                name="amount"
            >
                <Input placeholder="Enter amount in CZK" type="number" onChange={evt => {
                    setAmount(Number(evt.target.value))
                }}/>
            </Form.Item>

            <Form.Item
                label="Currency"
                name="currency"
            >
                <Select
                    dropdownMatchSelectWidth={false}
                    placeholder="Currency"
                    onChange={setCurrency}
                    options={props.currencies.map(currencyRow => ({
                        value: currencyRow.code,
                        label: `${currencyRow.code} (${currencyRow.currency})`,
                    }))}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Calculate
                </Button>
            </Form.Item>

            <Result visible={conversionResult !== null}>
                <Divider orientation="left">Result</Divider>
                <Row>
                    <Col span={8} offset={2}>{amount} CZK</Col>
                    <Col span={4}>👉</Col>
                    <Col span={8}>{conversionResult} {currency}</Col>
                </Row>
            </Result>
        </Form>
    )
}

export default ConversionCalculator
