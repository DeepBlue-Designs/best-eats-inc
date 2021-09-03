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
  <>
    <PlanCardContent
      isCurrentlySelected={isCurrentlySelected}
      selectable={selectable}
    >
      <CardTitle>
        {`${plan} Plan`}
      </CardTitle>
      <div>
        <PlanImg src={planInfo[plan].photo} alt={`${plan} plan`} />
      </div>
      <InLineText>
        <div>
          Servings:
        </div>
        <div>
          {planInfo[plan].serving}
        </div>
      </InLineText>
      <InLineText>
        <div>
          Meals/Week:
        </div>
      {selectable
      ? (
        <Select onChange={handleSelectChange} >
          {[...Array(5)].map((el, index) => (
            <option
              key={`meal${index}`}
              value={index + 2}
            >
              {index + 2}
            </option>
          ))}
        </Select>
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
    </PlanCardContent>
  </>
);

const PlanCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 10px;
  padding: 10px;
  background-color: ${props => props.isCurrentlySelected ? '#FFEF9C' : '#FFFFFF'};
  cursor: ${props => props.selectable ? 'pointer' : 'auto'};
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
  text-transform: uppercase;
`;

const PlanImg = styled.img`
  width: 100%;
`;

const Select = styled.select`
  background-color: transparent;
  border: none;
  &:focus{
    outline: none;
  }
  padding: 0 5px;
  text-align: left;
  position: relative;
  border-bottom: 1px solid black;
  font-family: 'Signika Negative', 'Signika Negative', Signika Negative;
  font-size: 1em;
`;


const InLineText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

const CardTitle = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;

export default MealPlanCard;
