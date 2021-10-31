import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
