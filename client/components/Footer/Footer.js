import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <span>Contact us</span> 
        <span> 
          <InstagramIcon /> 
          <FacebookIcon /> 
          <TwitterIcon /> 
        </span>
      </div>
    </div>
  )
}

export default Footer
