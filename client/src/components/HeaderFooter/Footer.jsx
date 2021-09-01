import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Footer = () => {
  return (
  <div style={{position: 'relative'}}>
    <Link to="/">
      Logo
    {/* <img src="">LOGO</img> */}
    </Link>
    <Link to="/shop">
      Menu & Pricing
    </Link>
    <Link to="/farmers">
      Meet The Farmers
    </Link>
    <Link to="/healthy">
      Let&apos;s Get Healthy
    </Link>
    <Link to="/login">
      <button>LOG IN</button>
    </Link>
    <Link to="/signup">
      <button>SIGN UP</button>
    </Link>
  </div>
  );
};

export default Footer;
