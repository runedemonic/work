import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from './axiosInstance';

const LedgerEntriesList = () => {
    const [ledgerEntries, setLedgerEntries] = useState([]);

    useEffect(() => {
        const fetchLedgerEntries = async () => {
            try {
                const response = await axiosInstance.get('/ledger-entries_list');
                setLedgerEntries(response.data);
            } catch (error) {
                console.error('Error fetching ledger entries:', error);
            }
        };

        fetchLedgerEntries();
    }, []);

    const handleDelete = async (entryId) => {
        try {
            await axiosInstance.delete(`/ledger-entries/${entryId}/delete/`);
            setLedgerEntries(ledgerEntries.filter((entry) => entry.id !== entryId));
        } catch (error) {
            console.error('Error deleting ledger entry:', error);
        }
    };

    return (
        <div>
            <h2>Ledger Entries</h2>
            <ul>
                {ledgerEntries.map((entry) => (
                    <li key={entry.id}>
                        <Link to={`/ledger-entries/${entry.id}`}>
                        {entry.amount} - {entry.memo}{' '}
                        </Link>
                        <Link to={`/edit-ledger-entry/${entry.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LedgerEntriesList;
