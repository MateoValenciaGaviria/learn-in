import React, { useState } from 'react';
import Calendar from 'react-calendar';

interface HomeCalendarProps{
    daySelected: Date,
    onCurrentDayChange: (day: Date) => void,
}

export const HomeCalendar: React.FC<HomeCalendarProps> = ( {daySelected, onCurrentDayChange} ) => {

    //Calendar date variable
    const [date, setDate] = useState(daySelected);

    const handleCurrentDay = (day: Date) => {
        onCurrentDayChange(day);
        setDate(day);
    }
    
    return (
        <div className="home-calendar">
            <Calendar onChange={handleCurrentDay} value={date} />
        </div>
    );

}