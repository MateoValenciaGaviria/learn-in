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
import { GlobalPlaylist } from '../../components/GlobalPlaylist/GlobalPlaylist';
import { UserType } from '../../utils/types/UserType';
import { PlatformType } from '../../utils/types/PlatformType';
import { AchievementsType } from '../../utils/types/AchievementsType';
import { DATABASE } from "../../utils/firebase";
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { RankingType } from '../../utils/types/RankingType';

var userObj = {
  name: "",
  password: "",
  email: "",
  img: "",
  background: "",
  playlist: "",
  state: 1,
  birthday: "",
  phone: 0,
  ocupation: "",
  reminder: "",
};

var platformObj = {
  panel1: "empty",
  panel2: "empty",
  panel3: "empty",
  panel4: "empty",
};

var achievementsObj = {
  help: false,
  five: false,
  participate: false,
  emotions: false,
  exonerated: false,
  thebest: false
};

var rankObj = [
  {
    id: "",
    course: "",
    points: 0,
    rank: "",
    rankId: 0
  }
];

var currentGlobalPlaylist = "";

export const App = () => {

  //const [ logged, setLogged ] = React.useState(false);

  const [activeLink, setactiveLink] = React.useState(1);
  const [currentDay, setcurrentDay] = React.useState(new Date());

  //User
  const [mainUser, setMainUser] = React.useState<UserType>(userObj);

  //Platform
  const [mainPlatform, setMainPlatform] = React.useState<PlatformType>(platformObj);
  const [globalPlaylist, setGlobalPlaylist] = React.useState(currentGlobalPlaylist);

  const [mainAchievements, setMainAchievements] = React.useState<AchievementsType>(achievementsObj);
  const [mainRanks, setMainRanks] = React.useState<RankingType[]>(rankObj);

  currentGlobalPlaylist = mainUser.playlist;

  //Update user form firebase
  const getUser = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const docRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      const docSnap = await getDoc(docRef);

      userObj = docSnap.data() as UserType;
      setMainUser(userObj);
    }
  }

  //Update platform from firebase
  const getPlatformInfo = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const docRef = doc(DATABASE, 'platforms', userNameFromLocalStorage);
      const docSnap = await getDoc(docRef);

      platformObj = docSnap.data() as PlatformType;
      setMainPlatform(platformObj);
      // setpanel1(platformObj.panel1);
      // setpanel2(platformObj.panel2);
      // setpanel3(platformObj.panel3);
      // setpanel4(platformObj.panel4);
    }
  }

  //Update achievements from firebase
  const getAchievementsInfo = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const docRef = doc(DATABASE, 'achievements', userNameFromLocalStorage);
      const docSnap = await getDoc(docRef);

      achievementsObj = docSnap.data() as AchievementsType;
      setMainAchievements(achievementsObj);
    }
  }

  //Update ranks from firebase
  const getRanksInfo = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const docRef = doc(DATABASE, 'ranks', userNameFromLocalStorage);
      const docSnap = await getDoc(docRef);

      rankObj = docSnap.data() as RankingType[];
      setMainRanks(rankObj);
    }
  }

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

  const handleStateChanged = (state: number) => {
    mainUser.state = state;
  }

  const handleReminderChanged = (reminder: string) => {
    mainUser.reminder = reminder;
  }

  const handleUrlChange = (url: string) => {
    mainUser.playlist = url;
    setGlobalPlaylist(url);
  }

  const handleBackgroundChange = (background: string) => {
    mainUser.background = background;
  }

  const handlePanel1Change = (panel: string) => {
    mainPlatform.panel1 = panel;
  }

  const handlePanel2Change = (panel: string) => {
    mainPlatform.panel2 = panel;
  }

  const handlePanel3Change = (panel: string) => {
    mainPlatform.panel3 = panel;
  }

  const handlePanel4Change = (panel: string) => {
    mainPlatform.panel4 = panel;
  }

  //var userAvatar = getImage("useravatar");
  var notificationsicon = getImage("notificationsicon");
  var learnInLogo = getImage("learninlogo");

  const updateUserInfo = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      await setDoc(doc(DATABASE, "users", userNameFromLocalStorage), mainUser);
    }
  }

  useEffect(() => { getUser(); }, []);
  useEffect(() => { getPlatformInfo(); }, []);
  useEffect(() => { getAchievementsInfo(); }, []);
  useEffect(() => { getRanksInfo(); }, []);
  useEffect(() => { setGlobalPlaylist(currentGlobalPlaylist) }, [currentGlobalPlaylist]);
  //useEffect(() => { updateUserInfo() }, [mainUser]);

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
              onCurrentDayChange={handleCurrentDay}
              reminder={mainUser.reminder}
              onReminderChange={handleReminderChanged}
              url={mainUser.playlist}
              onUrlChange={handleUrlChange}
              platformObj={mainPlatform}
              onPanel1Change={handlePanel1Change}
              onPanel2Change={handlePanel2Change}
              onPanel3Change={handlePanel3Change}
              onPanel4Change={handlePanel4Change}
              handleChat={handleChat}></Home>}>
          </Route>
          <Route path='/courses' render={() =>
            <Courses></Courses>}>
          </Route>
          <Route path='/schedule' render={() =>
            <Schedule></Schedule>}>
          </Route>
          <Route path='/profile' render={() =>
            <Profile
              user={mainUser}
              onStateChanged={handleStateChanged}
              onUrlChange={handleUrlChange}
              onBackgroundChange={handleBackgroundChange}
              achievementsObj={mainAchievements}
              rankList={mainRanks}></Profile>}>
          </Route>
          <Route path='/chat' render={() =>
            <Chat></Chat>}>
          </Route>
          <Route path="/course-detail/:name" render={() => <CourseDetail teacherView />} />
        </div>
        <GlobalPlaylist playlist={globalPlaylist}></GlobalPlaylist>
      </div> : null}
    </HashRouter>
  );
}
