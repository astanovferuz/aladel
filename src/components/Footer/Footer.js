import React from "react";
import logoPic from '../../assets/aladellogo.png'

export const Footer = () => {
  return (
    <div className="custom_footer">
      <div>
        <div className="custom_footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
              paddingLeft: "283px"
            }}
          >
            <img className='custom_image' src={logoPic} alt="logo" />
            Al Adel Debt Collection
          </h3>
          <div className="custom_sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Companies</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>Legal</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{textAlign: 'center', marginTop: 20}}>Developed By Asteruz FZE. All Rights Reserved 2022</p>
    </div>
  );
};
