import React from 'react';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__leftcontainer">
        <div className="home__publicitycontainer"></div>
        <div className="home__modulescontainer">
          <div className="home__box"></div>
          <div className="home__box"></div>
          <div className="home__box"></div>
          <div className="home__box"></div>
        </div>
      </div>
      <div className="home__rightcontainer">
        <div className="home__calendarcontainer">
          <div className="home__calendar">

          </div>
        </div>
        <div className="home__schedulecontainer">
          <div className="home__schedule">

          </div>
        </div>
        <div className="home__remindercontainer">
          <div className="home__reminder">

          </div>
        </div>
      </div>
    </div>
  );
}