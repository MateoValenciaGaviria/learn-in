import React from 'react';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Courses } from '../Courses/Courses';
import { Schedule } from '../Schedule/Schedule';
import { Profile } from '../Profile/Profile';
import { Chat } from '../Chat/Chat';
import { Login } from '../Login/Login';
import { getImage } from '../../utils/getImages';

const user = [
  {
    userName: "",
    password: "",
    state: "",

  }
];

const platform = [
  {
    daySelected: "",
  }
];

export const App = () => {

  //const [ logged, setLogged ] = React.useState(false);
  
  const [ activeLink, setactiveLink ] = React.useState(1);
  const [ currentDay, setcurrentDay ] = React.useState(new Date);

  //Set the active link
  const handleHome = () => {
    setactiveLink(1);
  }

  const handleCourses = () => {
    setactiveLink(2);
  }

  const handleSchedule = () => {
    setactiveLink(3);
  }

  const handleProfile = () => {
    setactiveLink(4);
  }

  const handleChat = () => {
    setactiveLink(5);
  }

  const handleCurrentDay = (day: Date) => {
    setcurrentDay(day);
  }

  var userAvatar = getImage("useravatar");
  var notificationsicon = getImage("notificationsicon");
  var learnInLogo = getImage("learninlogo");

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      {(!localStorage.getItem('username')) ? <Login></Login> : null}
      {(localStorage.getItem('username')) ? <div className="app__content">
        <div className="app__navbar">
          <img className="app__logo" src={learnInLogo} alt="learn-in logo" />
          <div className="app__links-container">
            <Link onClick={handleHome} to="/home" className={`app__link ${(activeLink === 1) ? 'app__link--selected' : 'app__link'}`}>Inicio</Link>
            <Link onClick={handleCourses} to="/courses" className={`app__link ${(activeLink === 2) ? 'app__link--selected' : 'app__link'}`}>Cursos</Link>
            <Link onClick={handleSchedule} to="/schedule" className={`app__link ${(activeLink === 3) ? 'app__link--selected' : 'app__link'}`}>Horario</Link>
            <Link onClick={handleProfile} to="/profile" className={`app__link ${(activeLink === 4) ? 'app__link--selected' : 'app__link'}`}>Perfil</Link>
            <Link onClick={handleChat} to="/chat" className={`app__link ${(activeLink === 5) ? 'app__link--selected' : 'app__link'}`}>Chat</Link>
          </div>
          <div className="app__user-options-container">
            <img className="app__notifications-icon" src={notificationsicon} alt="notifications icon" />
            <div className="app__username-and-ocupation">
              <p className="app__nav-username">Username</p>
              <p className="app__nav-user-ocupation">User ocupation</p>
            </div>
            <div className="app__user-avatar-container">
              <Link onClick={handleProfile} to="/profile" className={`${(activeLink === 4) ? 'app__link--selected' : 'app__link'}`}>
                <img className="app__user-avatar" src={userAvatar} alt="user avatar" />
              </Link>
            </div>
          </div>
        </div>
        <Redirect to='/home'></Redirect>
        <div className="app__sections-container">
          <Route path='/home' render={() => 
              <Home 
              daySelected={currentDay}
              onCurrentDayChange={handleCurrentDay}> </Home>}>
          </Route>
          <Route path='/courses' render={() => 
              <Courses></Courses>}>
          </Route>
          <Route path='/schedule' render={() => 
              <Schedule></Schedule>}>
          </Route>
          <Route path='/profile' render={() => 
              <Profile></Profile>}>
          </Route>
          <Route path='/chat' render={() => 
              <Chat></Chat>}>
          </Route>
        </div>
      </div> : null}
    </HashRouter>
  );
}
