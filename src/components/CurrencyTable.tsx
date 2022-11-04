import { Currency } from '../api'
import { Table } from 'antd'
import { Container } from './styled'

interface Props {
    currencies: Array<Currency>
}

const CurrencyTable = (props: Props) => {
    return (
        <Container>
            <Table
                pagination={false}
                columns={[
                    { title: 'Country', key: 'country', render: (currencyRow: Currency) => currencyRow.country },
                    { title: 'Foreign value', key: 'currency', render: (currencyRow: Currency) => `${currencyRow.amount} ${currencyRow.currency}` },
                    { title: 'CZK Value', key: 'czk', render: (currencyRow: Currency) => `${currencyRow.rate} CZK` },
                ]}
                dataSource={props.currencies}
            />
        </Container>
    )
}

export default CurrencyTable
