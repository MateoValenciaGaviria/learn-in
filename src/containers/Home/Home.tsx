import React, { useState, useEffect } from 'react';
import { CoursesProgress } from '../../components/CoursesProgress/CoursesProgress';
import { TaskList } from '../../components/TaskList/TaskList';
import { UpcomingActivities } from '../../components/UpcomingActivities/UpcomingActivities';
import { UpcomingExams } from '../../components/UpcomingExams/UpcomingExams';
import { HomeCalendar } from '../../components/HomeCalendar/HomeCalendar';
import { HomeSchedule } from '../../components/HomeSchedule/HomeSchedule';
import { SpotifyPanel } from '../../components/SpotifyPanel/SpotifyPanel';
import { EmptyPanel } from '../../components/EmptyPanel/EmptyPanel';
import { EmotionsPanel } from '../../components/EmotionsPanel/EmotionsPanel';
import { getImage } from '../../utils/getImages';
import { PlatformType } from '../../utils/types/PlatformType';
import { DATABASE } from "../../utils/firebase";
import { doc, setDoc } from 'firebase/firestore/lite';

var panelsObj = {
  panel1: "empty",
  panel2: "empty",
  panel3: "empty",
  panel4: "empty",
};

interface HomeProps {
  daySelected: Date,
  onCurrentDayChange: (day: Date) => void,
  reminder: string,
  onReminderChange: (reminder: string) => void,
  url: string,
  onUrlChange: (url: string) => void,
  platformObj: PlatformType,
  onPanel1Change: (panel: string) => void,
  onPanel2Change: (panel: string) => void,
  onPanel3Change: (panel: string) => void,
  onPanel4Change: (panel: string) => void,
  handleChat: () => void,
}

export const Home: React.FC<HomeProps> = ({ daySelected, onCurrentDayChange, reminder, onReminderChange, url, onUrlChange, platformObj, onPanel1Change, onPanel2Change, onPanel3Change, onPanel4Change, handleChat }) => {

  var currentPanel: string = "";
  var publicity = getImage("publicity");
  var banner = getImage("banner2");

  //Sets default panels "empty"
  const [panel1, setpanel1] = useState(panelsObj.panel1);
  const [panel2, setpanel2] = useState(panelsObj.panel2);
  const [panel3, setpanel3] = useState(panelsObj.panel3);
  const [panel4, setpanel4] = useState(panelsObj.panel4);

  //Sets panelsObj with the panels from firebase
  panelsObj = platformObj;

  //Sets the panels state with the firebase info
  const loadPanels = () => {
    setpanel1(platformObj.panel1);
    setpanel2(platformObj.panel2);
    setpanel3(platformObj.panel3);
    setpanel4(platformObj.panel4);
  }

  //Update firebase panel1 
  const updatePanel1 = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'platforms', userNameFromLocalStorage);
      setDoc(userRef, { panel1: panel1 }, { merge: true });
    }
  }

  //Update firebase panel2
  const updatePanel2 = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'platforms', userNameFromLocalStorage);
      setDoc(userRef, { panel2: panel2 }, { merge: true });
    }
  }

  //Update firebase panel3 
  const updatePanel3 = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'platforms', userNameFromLocalStorage);
      setDoc(userRef, { panel3: panel3 }, { merge: true });
    }
  }

  //Update firebase panel4 
  const updatePanel4 = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'platforms', userNameFromLocalStorage);
      setDoc(userRef, { panel4: panel4 }, { merge: true });
    }
  }

  const handleSelectedPanel = (numberPanel: number, selectedPanel: string) => {
    //Sets the current panel selected
    currentPanel = selectedPanel;
    sortPanels(numberPanel);
  }

  useEffect(() => { updatePanel1() }, [panel1]);
  useEffect(() => { updatePanel2() }, [panel2]);
  useEffect(() => { updatePanel3() }, [panel3]);
  useEffect(() => { updatePanel4() }, [panel4]);
  useEffect(() => { loadPanels() }, [platformObj]);

  function sortPanels(indexPanelChanged: number) {

    //Sets a new panel if the container is empty
    //Sorts the panels if the user change its order
    switch (indexPanelChanged) {
      case 1:
        switch (currentPanel) {
          case panel2:
            setpanel2(panel1);
            panelsObj.panel2 = panel1;
            break;
          case panel3:
            setpanel3(panel1);
            panelsObj.panel3 = panel1;
            break;
          case panel4:
            setpanel4(panel1);
            panelsObj.panel4 = panel1;
            break;
        }
        setpanel1(currentPanel);
        panelsObj.panel1 = currentPanel;
        break;
      case 2:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel2);
            panelsObj.panel1 = panel2;
            break;
          case panel3:
            setpanel3(panel2);
            panelsObj.panel3 = panel2;
            break;
          case panel4:
            setpanel4(panel2);
            panelsObj.panel4 = panel2;
            break;
        }
        setpanel2(currentPanel);
        panelsObj.panel2 = currentPanel;
        break;
      case 3:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel3);
            panelsObj.panel1 = panel3;
            break;
          case panel2:
            setpanel2(panel3);
            panelsObj.panel2 = panel3;
            break;
          case panel4:
            setpanel4(panel3);
            panelsObj.panel4 = panel3;
            break;
        }
        setpanel3(currentPanel);
        panelsObj.panel3 = currentPanel;
        break;
      case 4:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel4);
            panelsObj.panel1 = panel4;
            break;
          case panel2:
            setpanel2(panel4);
            panelsObj.panel2 = panel4;
            break;
          case panel3:
            setpanel3(panel4);
            panelsObj.panel3 = panel4;
            break;
        }
        setpanel4(currentPanel);
        panelsObj.panel4 = currentPanel;
        break;
    }

    currentPanel = "";

  }

  const updateReminder = async (reminder: string) => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      setDoc(userRef, { reminder: reminder }, { merge: true });
    }
  }

  return (
    <div className="home">
      <div className="home__left-container">
        <div className="home__publicity-container">
          <img className="home__publicity-img" src={banner} alt="School publicity" />
        </div>
        <div className="home__modules-container">
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel1} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(1, selectedPanel);
                onPanel1Change(selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                {/* <option value="messages" className="home__select-option">Últimos mensajes</option> */}
                <option value="emotions" className="home__select-option">Estados de ánimo</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel1 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel1 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel1 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel1 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel1 === "tasks") ? <TaskList></TaskList> : null}
            {(panel1 === "playlist") ? <SpotifyPanel
              url={url}
              onUrlChange={onUrlChange}></SpotifyPanel> : null}
            {(panel1 === "emotions") ? <EmotionsPanel
              handleChat={handleChat}></EmotionsPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel2} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(2, selectedPanel);
                onPanel2Change(selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                {/* <option value="messages" className="home__select-option">Últimos mensajes</option> */}
                <option value="emotions" className="home__select-option">Estados de ánimo</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel2 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel2 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel2 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel2 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel2 === "tasks") ? <TaskList></TaskList> : null}
            {(panel2 === "playlist") ? <SpotifyPanel
              url={url}
              onUrlChange={onUrlChange}></SpotifyPanel> : null}
            {(panel2 === "emotions") ? <EmotionsPanel
              handleChat={handleChat}></EmotionsPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel3} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(3, selectedPanel);
                onPanel3Change(selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                {/* <option value="messages" className="home__select-option">Últimos mensajes</option> */}
                <option value="emotions" className="home__select-option">Estados de ánimo</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel3 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel3 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel3 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel3 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel3 === "tasks") ? <TaskList></TaskList> : null}
            {(panel3 === "playlist") ? <SpotifyPanel
              url={url}
              onUrlChange={onUrlChange}></SpotifyPanel> : null}
            {(panel3 === "emotions") ? <EmotionsPanel
              handleChat={handleChat}></EmotionsPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel4} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(4, selectedPanel);
                onPanel4Change(selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                {/* <option value="messages" className="home__select-option">Últimos mensajes</option> */}
                <option value="emotions" className="home__select-option">Estados de ánimo</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel4 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel4 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel4 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel4 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel4 === "tasks") ? <TaskList></TaskList> : null}
            {(panel4 === "playlist") ? <SpotifyPanel
              url={url}
              onUrlChange={onUrlChange}></SpotifyPanel> : null}
            {(panel4 === "emotions") ? <EmotionsPanel
              handleChat={handleChat}></EmotionsPanel> : null}
          </div>
        </div>
      </div>
      <div className="home__right-container">
        <div className="home__calendar-container">
          <div className="home__calendar">
            <HomeCalendar
              daySelected={daySelected}
              onCurrentDayChange={onCurrentDayChange}></HomeCalendar>
          </div>
        </div>
        <div className="home__schedule-container">
          <hr />
          <div className="home__schedule">
            <HomeSchedule
              daySelected={daySelected}></HomeSchedule>
          </div>
          <hr />
        </div>
        <div className="home__reminder-container">
          <div className="home__card">
            <p className="home__card-title">Recordatorio</p>
            <textarea className="home__card-text-area" maxLength={100} defaultValue={reminder} onChange={(e) => {
              const reminder = e.target.value;
              onReminderChange(reminder);
              updateReminder(reminder);
            }}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}