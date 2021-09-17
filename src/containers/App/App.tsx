import React from 'react';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Courses } from '../Courses/Courses';
import { Schedule } from '../Schedule/Schedule';
import { Profile } from '../Profile/Profile';
import { Chat } from '../Chat/Chat';
import { getImage } from '../../utils/getImages';
import './App.css';

export const App = () => {

  const [ activeLink, setactiveLink ] = React.useState(1);

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

  var userAvatar = getImage("useravatar");
  var notificationsicon = getImage("notificationsicon");
  var learnInLogo = getImage("learninlogo");

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="app__content">
        <div className="app__navbar">
          <img className="app__logo" src={learnInLogo} alt="learn-in logo" />
          <div className="app__linkscontainer">
            <Link onClick={handleHome} to="/home" className={`${(activeLink === 1) ? 'app__link--selected' : 'app__link'}`}>Inicio</Link>
            <Link onClick={handleCourses} to="/courses" className={`${(activeLink === 2) ? 'app__link--selected' : 'app__link'}`}>Cursos</Link>
            <Link onClick={handleSchedule} to="/schedule" className={`${(activeLink === 3) ? 'app__link--selected' : 'app__link'}`}>Horario</Link>
            <Link onClick={handleProfile} to="/profile" className={`${(activeLink === 4) ? 'app__link--selected' : 'app__link'}`}>Perfil</Link>
            <Link onClick={handleChat} to="/chat" className={`${(activeLink === 5) ? 'app__link--selected' : 'app__link'}`}>Chat</Link>
          </div>
          <div className="app__useroptionscontainer">
            <img className="app__notificationsicon" src={notificationsicon} alt="notifications icon" />
            <div className="app__usernameandocupation">
              <p className="app__navusername">Username</p>
              <p className="app__navuserocupation">User ocupation</p>
            </div>
            <div className="app__useravatarcontainer">
              <Link onClick={handleProfile} to="/profile" className={`${(activeLink === 4) ? 'app__link--selected' : 'app__link'}`}>
                <img className="app__useravatar" src={userAvatar} alt="user avatar" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Redirect to='/home'></Redirect>
      <div className="app__sectionscontainer">
        <Route path='/home' render={() => 
            <Home></Home>}>
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
    </HashRouter>
  );
}
