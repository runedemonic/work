import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function Navbar({ onLogout }) {
  return (
    <nav>
      {/* 다른 네비게이션 링크 */}
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

function App() {
    const navigate = useNavigate();
      const handleLogout = () => {
        localStorage.removeItem('token');
        //message to user ('Logged out successfully')
        navigate('/');


  };

  return (
      <div className="App">
          <Navbar onLogout={handleLogout } />
        <Routes>
          <Route path="/signup" element ={<Signup />} />
            <Route path="/login" element ={<Login />} />
          {/* 다른 라우트 추가 */}
        </Routes>
      </div>
  );
}



// eslint-disable-next-line import/no-anonymous-default-export
export default  () => (
  <Router>
    <App />
  </Router>
);
