/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendars from 'react-calendar';
import Emoji from './Emoji.jsx';

const Calendar = ({ mood }) => {
  const [value, onChange] = useState(new Date());

  return(
    <div>
      <Calendars
        onChange={onChange}
        value={value}
        defaultView={'month'}
        tileContent={({view, date}) => {
          if (mood && view === 'month') {
            return mood.map((pastDay) => {
              if (date.toDateString() === new Date(pastDay.date).toDateString()) {
                return <Emoji symbol={pastDay.feeling} key={pastDay._id}/>
              }
            })
          }
        }}
      />
    </div>
  )
};

export default Calendar;