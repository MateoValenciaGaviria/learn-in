import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
 
export const Schedule = () => {
  return (
    <div className="schedule">
      <ScheduleComponent currentView="WorkWeek">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  );
}