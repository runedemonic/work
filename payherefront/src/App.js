import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
      const handleLogout = () => {
    localStorage.removeItem('token');
    // 로그아웃 후 리다이렉트 또는 UI 업데이트 처리
  };

  return (
    <Router>
      <div className="App">
          <Navbar onLogout={handleLogout } />
        <Routes>
          <Route path="/signup" element ={<Signup />} />
            <Route path="/login" element ={<Login />} />
          {/* 다른 라우트 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
