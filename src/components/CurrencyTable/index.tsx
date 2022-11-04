import { Currency } from '../../api'
import { Table, Typography } from 'antd'

interface Props {
    currencies: Array<Currency>
}

const CurrencyTable = (props: Props) => {
    return (
        <>
            <Typography.Title level={2}>Exchange rates</Typography.Title>
            <Table
                // loading
                bordered
                pagination={false}
                columns={[
                    { title: 'Country', key: 'country', render: (currencyRow: Currency) => currencyRow.country },
                    { title: 'Foreign value', key: 'currency', render: (currencyRow: Currency) => `${currencyRow.amount} ${currencyRow.currency}` },
                    { title: 'CZK Value', key: 'czk', render: (currencyRow: Currency) => `${currencyRow.rate} CZK`, align: 'center' },
                ]}
                dataSource={props.currencies}
            />
        </>

    )
}

export default CurrencyTable
