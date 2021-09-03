import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../Context.jsx';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';
import Picker from 'emoji-picker-react';
import Emoji from './Emoji.jsx';

const MoodTracker = () => {
  // eslint-disable-next-line no-unused-vars
  const { userData } = useContext(Context);
  const [pastMoods, setPast] = useState(userData.moods);
  const [currentMood, setMood] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const myStorage = window.sessionStorage;

  const handleSubmit = (event, emojiObject) => {
    if (myStorage.getItem('today') === new Date(Date.now()).toDateString()) {
      setOpen(false);
    } else {
      myStorage.setItem('today', new Date(Date.now()).toDateString());
      setMood({ date: new Date(Date.now()).toDateString(), feeling: emojiObject.emoji })
      setOpen(false);
    }
    event.preventDefault();
  }

  useEffect(() => {
    if (currentMood) {
      axios.put(`/user/${userData._id}/moods`, currentMood)
        .then((res) => {
          setPast(res.data.moods)
        })
        .catch((err) => console.log('Set mood failed', err))
    }
  }, [currentMood])

  console.log(currentMood)
  return(
    <MoodContainer>
      <DropDownContainer>
        <Text>
          How are you feeling today? <Emoji symbol="🥳"/>
        </Text>
        {isOpen ? <Picker onEmojiClick={handleSubmit} preload={true} groupVisibility={{flags: false, travel_places: false, objects: false, symbols: false}} /> :
          <button onClick={() => setOpen(true)}>Select A Mood</button>}
      </DropDownContainer>
      <CalendarContainer>
      <Calendar mood={pastMoods}/>
    </CalendarContainer>
    </MoodContainer>
  )
};

export default MoodTracker;

const MoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 2%;
  border-radius: 5px;
  height: 500px; `

const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3% 5% 5% 5%;
  width: 70%;
  height: 10%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.077), 0 6px 20px 0 rgba(0, 0, 0, 0.077);
  background: #B5FAFF;
   `

const Text = styled.span`
  font-family: Tahoma;
`

const CalendarContainer = styled.div`
  height: fit-content;
  max-width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`
