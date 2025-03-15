import { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense"); // "income" sau "expense"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type,
    };

    onAddTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="text"
        placeholder="Descriere (ex: Salariu, Mâncare)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sumă"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Cheltuială</option>
        <option value="income">Venit</option>
      </select>
      <button type="submit">Adaugă Tranzacție</button>
    </form>
  );
};

export default TransactionForm;
