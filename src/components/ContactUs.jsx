import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {

  const handleInstagramClick = () => {
    // Redirect the user to the Discord URL
    window.location.href = 'https://www.instagram.com/xyz.art.print/?igsh=MXZybWZ3NHh5eDRnbA%3D%3D';
  };

  const handleTiktokClick = () => {
    // Redirect the user to the Discord URL
    window.location.href = 'https://discord.gg/KAaHHBxM';
  };

  const handleFacebookClick = () => {
    // Redirect the user to the Discord URL
    window.location.href = 'https://discord.gg/KAaHHBxM';
  };

  const buttonStyle = {
    margin: 5,
    width: 50, // Adjust the width to make the buttons wider
    height: 50,
    borderRadius: 25, // Rounded with 50px
    // padding: '10px 10px', // Add padding to make the buttons look better
    paddingLeft: 10,
    background: '#151515',
    color: '#a1a1a1',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    justifyContent: 'center', // Center the icon and text horizontally
    border: 'none'
  };

  return (
    <div>
      <div>
        <button onClick={handleInstagramClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} />
        </button>
        <button onClick={handleTiktokClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faTiktok} style={{ marginRight: '5px' }} />
        </button>
        <button onClick={handleFacebookClick} style={buttonStyle}>
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
