import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Parent component that shows history of API requests
 *
 * @component
 * @example
 * return (
 *   <History />
 * )
 */
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Created by Earl Jay Caoile</p>
        <a href="https://github.com/ecaoile">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/earl-jay-caoile/">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    );
  }
}

export default Footer;
