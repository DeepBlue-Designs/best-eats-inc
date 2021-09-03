import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const FooterContainer = styled.div`
background: #FFEF9C;
border-radius: 15px;
width: 90vw;
height: 50px;
display: flex;
justify-content: space-evenly;
margin: auto;
line-height: 50px;
`

const Footer = () => {
  return (
  <div style={{position: 'relative'}}>
  <FooterContainer>
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
  </FooterContainer>
  </div>
  );
};

export default Footer;
