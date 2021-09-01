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

  const handleSubmit = (event, emojiObject) => {
    setMood({ date: Date.now(), feeling: emojiObject.emoji })
    setOpen(false);
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
          <form>
            <select onClick={() => setOpen(true)}>
              <option>Select A Mood!</option>
            </select>
          </form>}
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
