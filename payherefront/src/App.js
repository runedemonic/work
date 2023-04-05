import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          {/* 다른 라우트 추가 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
