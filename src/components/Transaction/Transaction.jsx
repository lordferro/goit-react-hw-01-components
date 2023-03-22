import PropTypes from 'prop-types';
import { TableDataCell } from './Transaction.style';

export function Transaction({ transaction: { type, amount, currency } }) {
  return (
    <>
      <TableDataCell>{type}</TableDataCell>
      <TableDataCell>{amount}</TableDataCell>
      <TableDataCell>{currency}</TableDataCell>
    </>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
