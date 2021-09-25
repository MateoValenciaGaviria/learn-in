import React, { useState } from 'react';

export const Home = () => {

  var currentPanel1: string = "";
  var currentPanel2: string = "";
  var currentPanel3: string = "";
  var currentPanel4: string = "";

  const  [panel1, setpanel1] = useState("select");
  const  [panel2, setpanel2] = useState("select");
  const  [panel3, setpanel3] = useState("select");
  const  [panel4, setpanel4] = useState("select");

  const handlePanel = (numberPanel:number, selectedPanel: string) => {
    switch (numberPanel) {
      case 1:
        currentPanel1 = selectedPanel;
        break;
      case 2:
        currentPanel2 = selectedPanel;
        break;
      case 3:
        currentPanel3 = selectedPanel;
        break;
      case 4:
        currentPanel4 = selectedPanel;
        break;
    }
  }

  function sortPanels(){
    var indexPanelChanged:number = 0;

    if(currentPanel1 !== ""){
      indexPanelChanged = 1;
    }else if(currentPanel2 !== ""){
      indexPanelChanged = 2;
    }else if(currentPanel3 !== ""){
      indexPanelChanged = 3;
    }else{
      indexPanelChanged = 4;
    }
    
  }

  React.useEffect(() => {
    sortPanels();
  }, [ currentPanel1, currentPanel2, currentPanel3, currentPanel4 ]);

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
                handlePanel(1, selectedPanel);
              }} name="panels" id="panels">
                <option value="select" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel2} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handlePanel(2, selectedPanel);
              }} name="panels" id="panels">
                <option value="select" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel3} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handlePanel(3, selectedPanel);
              }} name="panels" id="panels">
                <option value="select" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panel-container">
            <div className="home__select-container">
              <select className="home__select" value={panel4} onChange={(e) => {
                //Calls the handlePanel fucntion to set the current panel selected 
                const selectedPanel = e.target.value;
                handlePanel(4, selectedPanel);
              }} name="panels" id="panels">
                <option value="select" disabled selected className="home__select-option--disable">Selecciona un panel</option>
                <option value="exams" className="home__select-option">Exámenes próximos</option>
                <option value="activities" className="home__select-option">Actividades próximas</option>
                <option value="progress" className="home__select-option">Progreso del curso</option>
                <option value="tasks" className="home__select-option">Lista de tareas</option>
                <option value="messages" className="home__select-option">Últimos mensajes</option>
                <option value="playlist" className="home__select-option">Lista de reproducción</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="home__right-container">
        <div className="home__calendar-container">
          <div className="home__calendar">

          </div>
        </div>
        <div className="home__schedule-container">
          <div className="home__schedule">

          </div>
        </div>
        <div className="home__reminder-container">
          <div className="home__reminder">

          </div>
        </div>
      </div>
    </div>
  );
}