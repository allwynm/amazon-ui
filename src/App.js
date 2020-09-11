import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Home />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
