import React from 'react';
import styled from 'styled-components';
import MealCard from './MealCard.jsx';

const MealList = ({ meals }) => {

  return (
    <Section>
      <MealsContainer>
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            id={meal.id}
            title={meal.title}
            image={meal.image}
            prepTime={meal.readyInMinutes}
          />
        ))}
      </MealsContainer>
    </Section>
  );

}

const MealsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1 1 0%;
  flex-flow: row wrap;
  box-sizing: border-box;
`;

const Section = styled.div`
  max-width: 960px;
  padding-left: 0px;
  padding-right: 0px;
`;

export default MealList;