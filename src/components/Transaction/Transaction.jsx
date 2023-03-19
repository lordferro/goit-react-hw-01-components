
import PropTypes from 'prop-types';
import { TableDataCell } from './Transaction.style';

export function Transaction({transaction:{type, amount, currency}}) {
    return (
      <>
        <TableDataCell>{type}</TableDataCell>
        <TableDataCell>{amount}</TableDataCell>
        <TableDataCell>{currency}</TableDataCell>
      </>
    );
}

Transaction.porpTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string,
}
