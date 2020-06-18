import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    const links = [
      { displayName: 'Home', url: '/' },
      { displayName: 'History', url: '/history' },
    ];
    return (
      <header>
        <h1>RESTy</h1>
        <Nav links={links} />
      </header>
    );
  }
}

export default Header;
