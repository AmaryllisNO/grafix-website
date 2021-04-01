import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Livestreams from './pages/Livestreams';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/music' component={Music} />
          <Route path='/Tour' component={Tour} />
          <Route path='/livestreams' component={Livestreams} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
