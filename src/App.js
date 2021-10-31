import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Home} />
        <Route>404 Not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
