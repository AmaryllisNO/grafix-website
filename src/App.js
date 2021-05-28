import 'simplebar/dist/simplebar.min.css';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';

import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Livestreams from './pages/Livestreams';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/music' component={Music} />
            <Route path='/Tour' component={Tour} />
            <Route path='/livestreams' component={Livestreams} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    </IconContext.Provider>
  );
}

export default App;
