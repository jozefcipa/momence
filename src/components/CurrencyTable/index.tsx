import { Currency } from '../../api'
import { Table, Typography } from 'antd'
import { Container, TableWrapper } from './styled'

interface Props {
    currencies: Array<Currency>
    isLoading: boolean
}

const CurrencyTable = (props: Props) => {
    return (
        <Container>
            <Typography.Title level={3}>Exchange rates</Typography.Title>
            <TableWrapper>
                <Table
                    size="small"
                    loading={props.isLoading}
                    bordered
                    pagination={false}
                    columns={[
                        { title: 'Country', key: 'country', render: (currencyRow: Currency) => currencyRow.country },
                        { title: 'Foreign value', key: 'currency', render: (currencyRow: Currency) => `${currencyRow.amount} ${currencyRow.currency}` },
                        { title: 'CZK Value', key: 'czk', render: (currencyRow: Currency) => `${currencyRow.rate} CZK`, align: 'center' },
                    ]}
                    dataSource={props.currencies}
                />
            </TableWrapper>
        </Container>

    )
}

export default CurrencyTable
