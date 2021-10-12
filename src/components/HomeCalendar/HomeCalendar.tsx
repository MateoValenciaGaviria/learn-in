import React, { useState } from 'react';
import Calendar from 'react-calendar';

export const HomeCalendar = () => {

    //Calendar date variable
    const [date, setDate] = useState(new Date());

    return (
        <div className="home-calendar">
            <Calendar onChange={setDate} value={date} />
        </div>
    );

}