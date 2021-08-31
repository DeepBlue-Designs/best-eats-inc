import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../../../node_modules/react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

const MainSplash = styled.img`
  height: 90vh;
  width: 100vw;
  object-fit: cover;
  border-radius: 15px;
`

const MainSplashContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Slogan = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: black;
`;

const GetStartedButton = styled.button`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 5px solid black;
  height: 30px;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column
`

const InfoTile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const TileText = styled.div`
  font-family: Courier New;
  height: 30vh;
  width: 30vw;
  font-size: 20px;
  margin: 3vw;
`

const TileImg = styled.img`
  height: 30vh;
  width: 30vw;
  margin: 3vw;
  border-radius: 15px;
  object-fit: cover;
`

const CarouselContainer = styled.div`

`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const Homepage = ( {test} ) => {
  return (
    <div>
      {/* <div>Homepage {test}</div> */}
      <MainSplashContainer>
        <MainSplash src='https://puregreensaz.com/wp-content/uploads/2020/06/dan-meyers-IQVFVH0ajag-unsplash-1080x675.jpg'/>
        <Slogan>A one stop shop for the best healthy food, and lifestyle advice, delivered right to your door!</Slogan>
        <GetStartedButton>Get Started</GetStartedButton>
      </MainSplashContainer>
      <TileContainer>
        <InfoTile>
        <TileImg src='https://www.ecocaters.com/wp-content/uploads/2019/05/FreshLocalProductsFT.jpg' />
        <TileText>
          <h1>LOCALLY SOURCED INGREDIENTS</h1>Hello testing testing hihi ok im writing a long thing cuz i need to know how this thing raps
          and by raps i mean raps `not wraps because im launching my own hiphop label soon and need some talent to prop up so we can get the first few albums recordeded
        </TileText>
        </InfoTile>
          {/* <Link to={{
            pathname:'/checkout',
            state: {
              nhu: 'smart'
            }
          }} >test link back to checkout</Link> */}
      </TileContainer>

      <TileContainer>
        <InfoTile>
        <TileText>
          <h1>CHOOSE A MEAL PLAN BASED ON HEALTH GOALS</h1>Hello testing testing hihi ok im writing a long thing cuz i need to know how this thing raps
          and by raps i mean raps `not wraps because im launching my own hiphop label soon and need some talent to prop up so we can get the first few albums recordeded
        </TileText>
        <TileImg src='https://www.ecocaters.com/wp-content/uploads/2019/05/FreshLocalProductsFT.jpg' />
        </InfoTile>
      </TileContainer>

      <TileContainer>
        <InfoTile>
        <TileImg src='https://www.ecocaters.com/wp-content/uploads/2019/05/FreshLocalProductsFT.jpg' />
        <TileText>
        <h1>LIFESTYLE GUIDE TO TRACK YOUR GOALS</h1>Hello testing testing hihi ok im writing a long thing cuz i need to know how this thing raps
          and by raps i mean raps `not wraps because im launching my own hiphop label soon and need some talent to prop up so we can get the first few albums recordeded
        </TileText>
        </InfoTile>
      </TileContainer>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        minimumTouchDrag={80}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 700ms ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div><TileImg src='https://www.ecocaters.com/wp-content/uploads/2019/05/FreshLocalProductsFT.jpg' /></div>
        <div><TileImg src='https://puregreensaz.com/wp-content/uploads/2020/06/dan-meyers-IQVFVH0ajag-unsplash-1080x675.jpg' /></div>
        <div><TileImg src='https://www.tastearkansas.com/wp-content/uploads/2019/03/Critt.-County-Farm-Family-2010-Wallace-Family-034-1024x680.jpg' /></div>
        <div><TileImg src='https://upload.wikimedia.org/wikipedia/commons/b/bf/Woman-Farmer.jpg' /></div>
        <div><TileImg src='https://www.ornatopia.com/wp-content/uploads/2020/10/images873-5f97103b3c1ba.jpg' /></div>
        <div><TileImg src='https://www.nfsmi.org/wp-content/uploads/2020/12/Best-Nutrition-Certifications-for-Fitness-1024x680.jpg' /></div>
        <div><TileImg src='https://www.nfsmi.org/wp-content/uploads/2019/07/how-to-become-a-nutritionist-1024x680.jpg' /></div>
      </Carousel>;
    </div>
  );
};

export default Homepage;
