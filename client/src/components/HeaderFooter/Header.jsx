import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from '../Homepage/Homepage.jsx';
import MeetTheFarmers from '../MeetTheFarmers/MeetTheFarmers.jsx';
import LetsGetHealthy from '../LetsGetHealthy/LetsGetHealthy.jsx';

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
            {/* <Shop /> */}
          </Route>
          <Route path="/farmers">
            <MeetTheFarmers />
          </Route>
          <Route path="/healthy">
            <LetsGetHealthy />
          </Route>
          <Route path="/login">
            {/* <LogIn /> */}
          </Route>
          <Route path="/signup">
            {/* <SignUp /> */}
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default Header;
