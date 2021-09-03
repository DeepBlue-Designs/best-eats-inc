import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../../../node_modules/react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

const MainSplash = styled.img`
  height: 80vh;
  width: 90vw;
  object-fit: cover;
  border-radius: 15px;
  margin 20px;
`

const MainSplashContainer = styled.div`
  text-align: center;
  color: white;
`;

const Slogan = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: black;
  font-family: Shadows Into Light Two;
`;

const GetStartedButton = styled.button`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoTile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const TileText = styled.div`
  height: 30vh;
  width: 30vw;
  font-size: 20px;
  margin: 3vw;
`

const TileImg = styled.img`
  height: 400px;
  width: 400px;
  margin: 3vw;
  border-radius: 15px;
  object-fit: cover;
  border: 3px solid #2A2E2B;
`

const CarouselContainer = styled.div`
  width: 90vw;
  margin: auto;
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

const Homepage = () => {
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
        <TileImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8nG1sznO88_JtSIN3x1KFueJOqscjUFeYbd-S-F-skj1bZP4_1PwRNiQF4ts5MTZ8GI&usqp=CAU' />
        <TileText>
          <h1>LOCALLY SOURCED INGREDIENTS</h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
          <h1>CHOOSE A MEAL PLAN BASED ON HEALTH GOALS</h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </TileText>
        <TileImg src='https://us.123rf.com/450wm/tele52/tele521811/tele52181100001/113575054-vector-green-salad-icon-includes-red-and-orange-tomato-lettuce-cheese-egg-red-bell-pepper-croutons-a.jpg?ver=6' />
        </InfoTile>
      </TileContainer>

      <TileContainer>
        <InfoTile>
        <TileImg src='https://previews.123rf.com/images/cosmaa/cosmaa1809/cosmaa180900191/109667864-vector-cartoon-illustration-of-checklist-clipboard-checklist-floral-decoration-object-.jpg' />
        <TileText>
        <h1>LIFESTYLE GUIDE TO TRACK YOUR GOALS</h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </TileText>
        </InfoTile>
      </TileContainer>

      <CarouselContainer>
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
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/Recipe%20Slider/20min_720x720.jpg' /></div>
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/Recipe%20Slider/Veggie_720x720.jpg' /></div>
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/static_slider/W21_R12_2019_R80199A_TruffleBurgerswithSauteedMushrooms_V5_360x360.jpg' /></div>
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/static_slider/W23_R12_2019_R90128A_MediterraneanMezzePlatter360x360.jpg' /></div>
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/Recipe%20Slider/One%20pot%20wonder_720x720.jpg' /></div>
        <div><TileImg src='https://img.hellofresh.com/f_auto,fl_lossy,h_355,q_auto,w_355/hellofresh_website/us/cms/homepage/Recipe%20Slider/Premium_720x720.jpg' /></div>
      </Carousel>
      </CarouselContainer>
    </div>
  );
};

export default Homepage;
