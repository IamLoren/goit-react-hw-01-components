import s from './TransactionHistory.module.css';

export const Transactions = ({items}) => {
    return (
        <tbody>
       {items.map(item => (
          <tr className={s.dataRow} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
       ))}
        </tbody>)
}