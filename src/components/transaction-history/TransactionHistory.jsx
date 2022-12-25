import PropTypes from "prop-types";
import {
  TransactionTable,
  TransactionTableHead,
  TransactionItem,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionTableHead>
      <tbody>
        {items.map(transaction => {
          const { type, amount, currency } = transaction;
          return (
            <tr key={transaction.id}>
              <TransactionItem>{type}</TransactionItem>
              <TransactionItem>{amount}</TransactionItem>
              <TransactionItem>{currency}</TransactionItem>
            </tr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
