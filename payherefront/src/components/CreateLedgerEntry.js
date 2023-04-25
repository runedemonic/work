import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const CreateLedgerEntry = () => {
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post('/ledger-entries/', { amount, memo });
      setAmount('');
      setMemo('');
      // 글 작성 성공 시 추가 작업 (예: 가계부 목록 새로 고침, 성공 메시지 표시 등)
    } catch (error) {
      console.error('Error creating ledger entry:', error);
    }
  };

  return (
    <div>
      <h2>Add Ledger Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="memo">Memo:</label>
        <textarea
          id="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLedgerEntry;
