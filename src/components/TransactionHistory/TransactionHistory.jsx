import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

function TransactionHistory({transactions}) {
    return (
        <table className = {css.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id, type, amount, currency})=>{
    return(
    <TransactionElement
    key={id}
    type={type}
    amount={amount}
    currency={currency}
  />
  );
})}
</tbody>
</table>
);
}




function TransactionElement({ type, amount, currency }) {
    return (
      <tr>
        <td className={css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
}



TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };
 
export default TransactionHistory;

