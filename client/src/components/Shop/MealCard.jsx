import React from 'react';
import styled from 'styled-components';

const MealCard = ({ id, title, image, prepTime }) => {
  return (
    <MealCardContainer>
      <MealCardContent>
        <MealImage
          src={image}
          alt={`${title} meal photo`}
        />
        <h3>{title}</h3>
        <p>{prepTime} min</p>
      </MealCardContent>
    </MealCardContainer>
  )
};

const MealCardContainer = styled.div`
  flex: 1 1 0px;
  max-width: 100%;
`;

const MealCardContent = styled.div`
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const MealImage = styled.img`
  object-fit: cover;
  height: 300px;
  border-radius: 5px 5px 0 0;
`;

export default MealCard;
