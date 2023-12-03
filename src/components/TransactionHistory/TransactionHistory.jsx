import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ children }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.titleLine}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
};
