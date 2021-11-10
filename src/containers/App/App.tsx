import React, { useEffect } from 'react';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Courses } from '../Courses/Courses';
import { Schedule } from '../Schedule/Schedule';
import { Profile } from '../Profile/Profile';
import { Chat } from '../Chat/Chat';
import { Login } from '../Login/Login';
import { getImage } from '../../utils/getImages';
import { CourseDetail } from '../../components/CourseDetail/CourseDetail';
import { UserType } from '../../utils/types/UserType';
import { DATABASE } from "../../utils/firebase";
import { doc, getDoc } from 'firebase/firestore/lite';

const userObj = {
    name: "",
    password: "",
    email: "",
    img: "https://firebasestorage.googleapis.com/v0/b/learn-in-3a072.appspot.com/o/profilepic%20-%20copia.jpg?alt=media&token=ba89592f-13a8-4967-b014-ccd31cf3d49f",
    playlist: "",
    state: 1,
    birthday: "",
    phone: 0,
    ocupation: ""
};

const platform = [
  {
    daySelected: "",
  }
];

export const App = () => {

  //const [ logged, setLogged ] = React.useState(false);
  
  const [ activeLink, setactiveLink ] = React.useState(1);
  const [ currentDay, setcurrentDay ] = React.useState(new Date());

  //User
  const [ mainUser, setMainUser ] = React.useState(userObj);

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

  const handleCurrentUser = (user: UserType) => {
    setMainUser(user);
  }

  //var userAvatar = getImage("useravatar");
  var notificationsicon = getImage("notificationsicon");
  var learnInLogo = getImage("learninlogo");

  //Update user form firebase
  const getUser = async () => {

    if(localStorage.getItem('username')){
      const userNameFromLocalStorage =  localStorage.getItem("username")!;
      const docRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      const docSnap = await getDoc(docRef);
      const user = docSnap.data() as UserType;
      console.log(user);
      
      setMainUser(user);
    }
  }

  //Sets user locally
  useEffect(() => { getUser() }, []);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      {(!localStorage.getItem('username')) ? <Login onUserChange={handleCurrentUser}></Login> : null}
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
              <p className="app__nav-username">{mainUser.name}</p>
              <p className="app__nav-user-ocupation">{mainUser.ocupation}</p>
            </div>
            <div className="app__user-avatar-container">
              <Link onClick={handleProfile} to="/profile" className={`${(activeLink === 4) ? 'app__link--selected' : 'app__link'}`}>
                <img className="app__user-avatar" src={mainUser.img} alt="user avatar" />
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
              <Profile 
              user={mainUser}></Profile>}>
          </Route>
          <Route path='/chat' render={() => 
              <Chat></Chat>}>
          </Route>
          <Route path="/course-detail/:name" render={() => <CourseDetail teacherView />} />
        </div>
      </div> : null}
    </HashRouter>
  );
}
