import React from 'react';
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

const Header = () => {
  return (
    <div>
      <Router>
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
        <Link to="/profile">
          User Profile
        </Link>
        <Link to="/login">
          <button>LOG IN</button>
        </Link>
        <Link to="/signup">
          <button>SIGN UP</button>
        </Link>

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
    </div>
  );
};

export default Header;
