import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <p>Data corrente: {currentDate}</p>
        <div>
          <a href="https://www.facebook.com/cineflixcinemas" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" style={{ margin: '5px' }} />
          </a>
          <a href="https://www.twitter.com/cineflix" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" style={{ margin: '5px' }} />
          </a>
          <a href="https://www.instagram.com/cineflixcinemas/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={{ margin: '5px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
