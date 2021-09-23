import React from 'react';

export const Home = () => {

  return (
    <div className="home">
      <div className="home__leftcontainer">
        <div className="home__publicitycontainer">

        </div>
        <div className="home__modulescontainer">
          <div className="home__panelcontainer">
            <div className="home__selectcontainer">
              <select name="panels" id="panels" className="home__select">
                <option value="select" disabled selected className="home__selectoption--disable">Selecciona un panel</option>
                <option value="exams" className="home__selectoption">Exámenes próximos</option>
                <option value="activities" className="home__selectoption">Actividades próximas</option>
                <option value="progress" className="home__selectoption">Progreso del curso</option>
                <option value="tasks" className="home__selectoption">Lista de tareas</option>
                <option value="messages" className="home__selectoption">Últimos mensajes</option>
                <option value="playlist" className="home__selectoption">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panelcontainer">
            <div className="home__selectcontainer">
              <select name="panels" id="panels" className="home__select">
                <option value="select" disabled selected className="home__selectoption--disable">Selecciona un panel</option>
                <option value="exams" className="home__selectoption">Exámenes próximos</option>
                <option value="activities" className="home__selectoption">Actividades próximas</option>
                <option value="progress" className="home__selectoption">Progreso del curso</option>
                <option value="tasks" className="home__selectoption">Lista de tareas</option>
                <option value="messages" className="home__selectoption">Últimos mensajes</option>
                <option value="playlist" className="home__selectoption">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panelcontainer">
            <div className="home__selectcontainer">
              <select name="panels" id="panels" className="home__select">
                <option value="select" disabled selected className="home__selectoption--disable">Selecciona un panel</option>
                <option value="exams" className="home__selectoption">Exámenes próximos</option>
                <option value="activities" className="home__selectoption">Actividades próximas</option>
                <option value="progress" className="home__selectoption">Progreso del curso</option>
                <option value="tasks" className="home__selectoption">Lista de tareas</option>
                <option value="messages" className="home__selectoption">Últimos mensajes</option>
                <option value="playlist" className="home__selectoption">Lista de reproducción</option>
              </select>
            </div>
          </div>
          <div className="home__panelcontainer">
            <div className="home__selectcontainer">
              <select name="panels" id="panels" className="home__select">
                <option value="select" disabled selected className="home__selectoption--disable">Selecciona un panel</option>
                <option value="exams" className="home__selectoption">Exámenes próximos</option>
                <option value="activities" className="home__selectoption">Actividades próximas</option>
                <option value="progress" className="home__selectoption">Progreso del curso</option>
                <option value="tasks" className="home__selectoption">Lista de tareas</option>
                <option value="messages" className="home__selectoption">Últimos mensajes</option>
                <option value="playlist" className="home__selectoption">Lista de reproducción</option>
              </select>
            </div>
          </div>
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