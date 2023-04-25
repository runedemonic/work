import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from './axiosInstance';

const EditLedgerEntry = () => {
    const {id} = useParams();
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');

    useEffect(() => {
        const fetchLedgerEntry = async () => {
            try {
                const response = await axiosInstance.get(`/ledger-entries/${id}/`);
                setAmount(response.data.amount);
                setMemo(response.data.memo);
            } catch (error) {
                console.error('Error fetching ledger entry:', error);
            }
        };

        fetchLedgerEntry();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axiosInstance.patch(`/ledger-entries/${id}/`, {amount, memo});
            // 수정 성공 시 추가 작업 (예: 가계부 목록 새로 고침, 성공 메시지 표시 등)
        } catch (error) {
            console.error('Error updating ledger entry:', error);
        }
    };

    return (
        <div>
            <h2>Edit Ledger Entry</h2>
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

export default EditLedgerEntry;


