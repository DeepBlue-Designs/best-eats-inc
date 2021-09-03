import React from 'react';
import styled from 'styled-components';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

const MealCard = ({ id, title, image, prepTime, isSelectable, isSelected, selectedMessage, handleClick }) => (
  <MealCardContainer>
    <MealCardContent>
      <StyledImageDiv>
        <MealImage
          src={image}
          alt={`${title} meal photo`}
        />
      </StyledImageDiv>
      <MealDescription>
        <h4>{title}</h4>
        <p>{prepTime} min total</p>
      </MealDescription>
      {isSelectable
      ?
        (<Select
          onClick={() => {handleClick(id)}}
          isSelected={isSelected}
        >
          {isSelected
          ? (<div>
              <MdRemoveCircleOutline />
              <p>Remove Meal</p>
            </div>
          )
          : (<div>
            <MdAddCircleOutline />
            <p>{selectedMessage}</p>
            </div>
          )}
        </Select>)
      : null}
    </MealCardContent>
  </MealCardContainer>
);

const MealCardContainer = styled.div`
  padding: 10px;
  flex: 0 0 25%;
`;

const MealCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
  background-color: #fff;
`;

const StyledImageDiv = styled.div`
  border-radius: 5px 5px 0 0;
  overflow: hidden;
`;

const MealImage = styled.img`
  width: 100%;
`;

const MealDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-size: 1em;
  & p {
    font-size: .8em;
    color: #999999;
  }
`;

const Select = styled.div`
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#FFEF9C' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 10px 0;
  border-radius: 0 0 5px 5px;
  font-size: .9em;
`;

export default MealCard;
