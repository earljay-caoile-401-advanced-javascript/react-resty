import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RESTy from './components/RESTy';
import History from './components/History';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.scss';

/**
 * Parent component that returns the header, core content, and footer
 *
 * @component
 * @example
 * return (
 *   <h1>RESTy</h1>
 *   <RESTy />
 *   <div>Created by Earl Jay Caoile</div>
 * )
 */
export default function App() {
  const fetchHistory = [];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <RESTy fetchHistory={fetchHistory} />}
          />
          <Route
            exact
            path="/history"
            render={() => <History fetchHistory={fetchHistory} />}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
