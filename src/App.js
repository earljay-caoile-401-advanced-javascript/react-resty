import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={RESTy} />
        <Route path="/history" component={History} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
