import React, { useState } from 'react';
import { CoursesProgress } from '../../components/CoursesProgress/CoursesProgress';
import { TaskList } from '../../components/TaskList/TaskList';
import { UpcomingActivities } from '../../components/UpcomingActivities/UpcomingActivities';
import { UpcomingExams } from '../../components/UpcomingExams/UpcomingExams';
import { HomeCalendar } from '../../components/HomeCalendar/HomeCalendar';
import { HomeSchedule } from '../../components/HomeSchedule/HomeSchedule';
import { SpotifyPanel } from '../../components/SpotifyPanel/SpotifyPanel';
import { EmptyPanel } from '../../components/EmptyPanel/EmptyPanel';

export const Home = () => {

  var currentPanel: string = "";

  const  [panel1, setpanel1] = useState("empty");
  const  [panel2, setpanel2] = useState("empty");
  const  [panel3, setpanel3] = useState("empty");
  const  [panel4, setpanel4] = useState("empty");

  const handleSelectedPanel = (numberPanel:number, selectedPanel: string) => {
    //Sets the current panel selected
    currentPanel = selectedPanel;
    sortPanels(numberPanel);
  }

  function sortPanels(indexPanelChanged: number){
    
    //Sets a new panel if the container is empty
    //Sorts the panels if the user change its order
    switch (indexPanelChanged) {
      case 1:
        switch (currentPanel) {
          case panel2:
            setpanel2(panel1);
            break;
          case panel3:
            setpanel3(panel1);
            break;
          case panel4:
            setpanel4(panel1);
            break;
        }
        setpanel1(currentPanel);
        break;
      case 2:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel2);
            break;
          case panel3:
            setpanel3(panel2);
            break;
          case panel4:
            setpanel4(panel2);
            break;
        }
        setpanel2(currentPanel);
        break;
      case 3:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel3);
            break;
          case panel2:
            setpanel2(panel3);
            break;
          case panel4:
            setpanel4(panel3);
            break;
        }
        setpanel3(currentPanel);
        break;
      case 4:
        switch (currentPanel) {
          case panel1:
            setpanel1(panel4);
            break;
          case panel2:
            setpanel2(panel4);
            break;
          case panel3:
            setpanel3(panel4);
            break;
        }
        setpanel4(currentPanel);
        break;    
    }

    currentPanel = "";
    
  }

  // React.useEffect(() => {
  //   sortPanels();
  // }, [ currentPanel1, currentPanel2, currentPanel3, currentPanel4 ]);

  return (
    <div className="home">
      <div className="home__left-container">
        <div className="home__publicity-container">

        </div>
        <div className="home__modules-container">
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel1} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(1, selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel1 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel1 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel1 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel1 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel1 === "tasks") ? <TaskList></TaskList> : null}
            {(panel1 === "playlist") ? <SpotifyPanel></SpotifyPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel2} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(2, selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel2 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel2 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel2 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel2 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel2 === "tasks") ? <TaskList></TaskList> : null}
            {(panel2 === "playlist") ? <SpotifyPanel></SpotifyPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel3} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(3, selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel3 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel3 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel3 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel3 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel3 === "tasks") ? <TaskList></TaskList> : null}
            {(panel3 === "playlist") ? <SpotifyPanel></SpotifyPanel> : null}
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel4} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handleSelectedPanel(4, selectedPanel);
              }} name="panels" id="panels">
                <option value="empty" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
            {(panel4 === "empty") ? <EmptyPanel></EmptyPanel> : null}
            {(panel4 === "exams") ? <UpcomingExams></UpcomingExams> : null}
            {(panel4 === "activities") ? <UpcomingActivities></UpcomingActivities> : null}
            {(panel4 === "progress") ? <CoursesProgress></CoursesProgress> : null}
            {(panel4 === "tasks") ? <TaskList></TaskList> : null}
            {(panel4 === "playlist") ? <SpotifyPanel></SpotifyPanel> : null}
          </div>
        </div>
      </div>
      <div className="home__right-container">
        <div className="home__calendar-container">
          <div className="home__calendar">
            <HomeCalendar></HomeCalendar>
          </div>
        </div>
        <div className="home__schedule-container">
          <hr />
          <div className="home__schedule">
              <HomeSchedule></HomeSchedule>
          </div>
          <hr />
        </div>
        <div className="home__reminder-container">
          <div className="home__card">
              <p className="home__card-title">Recordatorio</p>
              <textarea className="home__card-text-area" maxLength={100}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}