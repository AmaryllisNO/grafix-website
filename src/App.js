import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/music' component={Music} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
