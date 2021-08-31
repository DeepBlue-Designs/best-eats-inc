import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

const MealCard = ({ id, title, image, prepTime }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  }

  return (
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
          <Select
            onClick={handleClick}
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
              <p>Add Meal</p>
              </div>
            )}
          </Select>
      </MealCardContent>
    </MealCardContainer>
  )
};

const MealCardContainer = styled.div`
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  flex: 1 1 25%;
  border-radius: 5px;
`;

const MealCardContent = styled.div`
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledImageDiv = styled.div`
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  flex: 2 0 50%;
`;

const MealImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MealDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  & h4 {
    font-size: 1em;
  }
`;

const Select = styled.div`
  cursor: pointer;
  display: flex;
  background-color: ${props => props.isSelected ? 'rgba(6, 122, 70, 0.8)' : 'fff'};
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 5px 0;
  border-radius: 0 0 5px 5px;
`;

export default MealCard;
