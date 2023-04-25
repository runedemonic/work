import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({onLogout}) => {
    return (
        <nav>
            {/* 다른 네비게이션 링크 */}
            <button onClick={onLogout}>Logout</button>
            <Link to="/ledger-entries">Ledger Entries</Link>
        </nav>
    );
};

export default Navbar;
