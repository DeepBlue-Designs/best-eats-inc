import React, { useState } from 'react';
import styled from 'styled-components';
import Emoji from './Emoji.jsx';

const MoodTracker = () => {
  const [currentMood, setMood] = useState({ date: new Date(), feeling: null});
  //TODO: implement dynamic emoji selection for drop down
  const moods = [
    { feeling: <Emoji symbol="🥱 " label="sluggish" />},
    { feeling: <Emoji symbol="🥳 " label="energetic" />},
    { feeling: <Emoji symbol="🤤 " label="hungry" />},
  ];

  const handleChange = (event) => {
    console.log(event.target.value)
    setMood({ date: new Date(), feeling: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = currentMood;
    // axios.put(`/user/${user.id}/moods`, body)
    //   .then((res) => console.log('Successful mood change', res.status))
    //   .catch((err) => console.log('Failed mood change', err))
  }

  return(
    <MoodContainer>
      <DropDownContainer>
        <Text>
          How are you feeling today? <Emoji symbol="🥳"/>
        </Text>
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange}>
            <option>Select A Mood!</option>
            <option value="sluggish">Sluggish</option>
            <option value="energetic">Energetic</option>
            <option value="hungry">Hungry</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </DropDownContainer>
      <CalendarContainer>

    </CalendarContainer>
    </MoodContainer>
  )
};

export default MoodTracker;

const MoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid purple;
  height: 500px; `

const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
  width: 70%;
  height: 20%;
  border: 1px solid blue; `

const Text = styled.span`
  font-family: Tahoma;
`
const CalendarContainer = styled.div`
  border: 1px solid hotpink;
  height: 200px;
  width: 100%;
`
