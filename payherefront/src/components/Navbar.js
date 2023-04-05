import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      {/* 다른 네비게이션 링크 */}
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
