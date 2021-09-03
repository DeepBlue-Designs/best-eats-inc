import React, { useContext } from 'react';
import Context from '../Context.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from '../Homepage/Homepage.jsx';
import MeetTheFarmers from '../MeetTheFarmers/MeetTheFarmers.jsx';
import LetsGetHealthy from '../LetsGetHealthy/LetsGetHealthy.jsx';
import Shop from '../Shop/Shop.jsx';
import Footer from './Footer.jsx';
import LoginForm from '../LoginSignup/LoginForm.jsx';
import SignupForm from '../LoginSignup/SignupForm.jsx';
import UserProfile from '../UserProfile/UserProfile.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.div`
background: #FFEF9C;
border-radius: 15px;
width: 90vw;
height: 70px;
display: flex;
justify-content: space-evenly;
margin: auto;
line-height: 70px;
`

const Header = () => {

  const { userData } = useContext(Context);

  let userProfilePath;

  if (userData) {
    userProfilePath = '/profile';
  } else {
    userProfilePath = 'login';
  }

  return (
    <Router>
        <HeaderContainer>
        <Link to="/">
        <img src="https://i.imgur.com/7jRksZX.png" title="source: imgur.com" style={{"width": "60px", "border-radius": "5px", "margin-top": "5px"}}/>
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
        <Link to={userProfilePath}>
          User Profile
        </Link>
        <Link to="/login">
          <button>LOG IN</button>
        </Link>
        <Link to="/signup">
          <button>SIGN UP</button>
        </Link>
    </HeaderContainer>

        <Switch>
          <Route exact path="/">
            <Homepage test={'testing testing'} />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/farmers">
            <MeetTheFarmers />
          </Route>
          <Route path="/healthy">
            <LetsGetHealthy />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
};

export default Header;
