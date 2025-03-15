const TransactionList = ({ transactions }) => {
    return (
      <div className="transaction-list">
        <h3>Tranzacții recente</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              {transaction.text}: {transaction.amount} RON
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TransactionList;
  