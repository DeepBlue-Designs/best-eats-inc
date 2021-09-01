/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendars from 'react-calendar';
import Emoji from './Emoji.jsx';

const Calendar = ({ mood }) => {
  const [value, onChange] = useState(new Date());

  //map past moods to calendar days
  const convert = () => {
    mood.map((time) => console.log(new Date(time.date).toDateString()))
  }
  return(
    <div>
      <Calendars
        onChange={onChange}
        value={value}
        defaultView={'year'}
        tileContent={({ view, date }) =>
          mood && view === 'month' && date.toDateString() === mood.date.toDateString() ?  <Emoji symbol={mood.feeling} /> : null}
      />
    </div>
  )
};

export default Calendar;