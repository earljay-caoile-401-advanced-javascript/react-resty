import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component that returns the nav bar that links to both the home and history pages
 * @param   {object} props typical React props. Expects a links property
 * @return  {object}  JSX content to be rendered
 */
function Nav(props) {
  const navLinks = [];

  for (let i = 0; i < props.links.length; i++) {
    navLinks.push(
      <li key={i}>
        <Link to={props.links[i].url}>{props.links[i].displayName}</Link>
      </li>
    );
  }

  return (
    <nav className={props.className}>
      <ul>{navLinks}</ul>
    </nav>
  );
}

export default Nav;
