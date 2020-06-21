import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

/**
 * Simple footer content that shows up on every page. Contains name and shameless social media plugs
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
function Footer() {
  return (
    <footer>
      <p>Created by Earl Jay Caoile</p>
      <a href="https://www.linkedin.com/in/earl-jay-caoile/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://github.com/ecaoile">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </footer>
  );
}

export default Footer;
