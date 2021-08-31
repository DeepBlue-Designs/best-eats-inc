import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const MainSplash = styled.img`
  height: 90vh;
  width: 100vw;
  object-fit: cover;
  border-radius: 15px;
`
const TileContainer = styled.div`
  display: flex;
  flex-direction: column
`

const InfoTile = styled.div`
  display: flex;
  flex-direction: row;
`
const TileText = styled.text`
  font-family: Courier New;
  font-size: 15px;
`

const TileImg = styled.img`
  height: 30vh;
  width: 30vw;
  margin: 5vw;
  border-radius: 15px;
`

const Homepage = ( {test} ) => {
  return (
    <div>
      <div>Homepage {test}</div>
      <MainSplash src='https://puregreensaz.com/wp-content/uploads/2020/06/dan-meyers-IQVFVH0ajag-unsplash-1080x675.jpg'/>
      <TileContainer>
        <TileImg src='https://www.ecocaters.com/wp-content/uploads/2019/05/FreshLocalProductsFT.jpg' />
        <TileText>
          Hello testing testing
        </TileText>
          {/* <Link to={{
            pathname:'/checkout',
            state: {
              nhu: 'smart'
            }
          }} >test link back to checkout</Link> */}

      </TileContainer>
    </div>
  );
};

export default Homepage;
