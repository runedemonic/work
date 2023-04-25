import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const LedgerEntryDetail = () => {
  const { entryId } = useParams();
  const [ledgerEntry, setLedgerEntry] = useState(null);

  useEffect(() => {
    const fetchLedgerEntry = async () => {
      try {
        const response = await axiosInstance.get(`/ledger-entries_list/${entryId}/`);
        setLedgerEntry(response.data);
      } catch (error) {
        console.error('Error fetching ledger entry:', error);
      }
    };

    fetchLedgerEntry();
  }, [entryId]);

  return (
    <div>
      {ledgerEntry ? (
        <>
          <h3>{ledgerEntry.memo}</h3>
          <p>Amount: {ledgerEntry.amount}</p>
          <p>Date: {ledgerEntry.date}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LedgerEntryDetail;
