import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { TableHeads, TableRow } from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <TableHeads>Type</TableHeads>
          <TableHeads>Amount</TableHeads>
          <TableHeads>Currency</TableHeads>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <TableRow key={transaction.id}>
              <Transaction transaction={ transaction} />
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
