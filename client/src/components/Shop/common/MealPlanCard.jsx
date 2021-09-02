import React from 'react';
import styled from 'styled-components';
import { calculateAndFormatPrice } from './helpers.js';

const planInfo = {
  solo: {
    photo: 'https://images.unsplash.com/photo-1461555806864-d8b528023e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    serving: 1,
    baselinePrice: 15.99,
  },
  duo: {
    photo: 'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    serving: 2,
    baselinePrice: 12.49,
  },
  family: {
    photo: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80',
    serving: 4,
    baselinePrice: 8.99,
  },
};

const MealPlanCard = ({ plan, mealsPerWeek, handleSelectChange, selectable, isCurrentlySelected }) => (
  <StyledCard
    isCurrentlySelected={isCurrentlySelected}
    selectable={selectable}
  >
    <div>
      {`${plan} Plan`}
    </div>
    <ImageCard>
      <Img src={planInfo[plan].photo} alt={`${plan} plan`} />
    </ImageCard>
    <InLineText>
      <div>
        Servings:
      </div>
      <div>
        {planInfo[plan].serving}
      </div>
    </InLineText>
    <StyledTextDiv>
      <InLineText>Meals/Week:
    {selectable
    ? (
      <select onChange={handleSelectChange} >
        {[...Array(5)].map((el, index) => (
          <option
            key={`meal${index}`}
            value={index + 2}
          >
            {index + 2}
          </option>
        ))}
      </select>
      )
    : <div>{mealsPerWeek}</div>
    }
    </InLineText>
    <InLineText>
    <div>
      Price:
    </div>
    <div>
      {calculateAndFormatPrice(planInfo[plan].baselinePrice, planInfo[plan].serving, mealsPerWeek)}
    </div>
    </InLineText>
    </StyledTextDiv>
  </StyledCard>
);

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin: 0 10px;
  padding: 10px;
  background-color: ${props => props.isCurrentlySelected ? 'rgba(6, 122, 70, 0.8)' : 'fff'};
  cursor: ${props => props.selectable ? 'pointer' : 'auto'};
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
`;

const StyledTextDiv = styled.div`
  text-transform: uppercase;
`;

const ImageCard = styled.div`
  margin: 10px;
  align-self: center;
`;

const Img = styled.img`
  max-height: 150px;
`;

const InLineText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MealPlanCard;
