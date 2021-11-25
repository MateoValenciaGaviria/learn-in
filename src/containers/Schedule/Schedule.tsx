import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

interface ScheduleProps {
  server: string
}

export const Schedule: React.FC<ScheduleProps> = ({ server }) => {
  
  const localSchedule: any[] = [
    {
      Id: 1,
      Subject: "Álgebra y funciones",
      StartTime: new Date(2021, 9, 6, 11, 0),
      EndTime: new Date(2021, 9, 6, 13, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 2,
      Subject: "Introducción al diseño",
      StartTime: new Date(2021, 9, 6, 14, 0),
      EndTime: new Date(2021, 9, 6, 16, 30),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 8
    },
    {
      Id: 3,
      Subject: "Lógica y argumentación",
      StartTime: new Date(2021, 10, 6, 7, 0),
      EndTime: new Date(2021, 10, 6, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 3
    },
    {
      Id: 4,
      Subject: "Inglés",
      StartTime: new Date(2021, 9, 6, 9, 0),
      EndTime: new Date(2021, 9, 6, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 6
    },
    {
      Id: 5,
      Subject: "Álgebra y funciones",
      StartTime: new Date(2021, 9, 6, 11, 0),
      EndTime: new Date(2021, 9, 6, 13, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 6,
      Subject: "Comunicación escrita I",
      StartTime: new Date(2021, 9, 6, 8, 30),
      EndTime: new Date(2021, 9, 6, 10, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID: 4
    },
    {
      Id: 7,
      Subject: "Diseño bidimensional",
      StartTime: new Date(2021, 9, 6, 14, 0),
      EndTime: new Date(2021, 9, 6, 17, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID:7
    },
    {
      Id: 7,
      Subject: "Lógica y argumentación",
      StartTime: new Date(2021, 9, 6, 7, 0),
      EndTime: new Date(2021, 9, 6, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 3
    },
    {
      Id: 8,
      Subject: "Inglés",
      StartTime: new Date(2021, 9, 6, 9, 0),
      EndTime: new Date(2021, 9, 6, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 6
    },
    {
      Id: 9,
      Subject: "Álgebra y funciones",
      StartTime: new Date(2021, 9, 6, 11, 0),
      EndTime: new Date(2021, 9, 6, 1, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 10,
      Subject: "Comunicación escrita I",
      StartTime: new Date(2021, 9, 6, 8, 30),
      EndTime: new Date(2021, 9, 6, 10, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 4
    },
    {
      Id: 10,
      Subject: "Diseño bidimensional",
      StartTime: new Date(2021, 9, 6, 14, 0),
      EndTime: new Date(2021, 9, 6, 17, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 7
    }
  ];

  const localSecondSchedule: any[] = [
    {
      Id: 1,
      Subject: "Biología",
      StartTime: new Date(2021, 9, 4, 7, 0),
      EndTime: new Date(2021, 9, 4, 8, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 12
    },
    {
      Id: 2,
      Subject: "Inglés",
      StartTime: new Date(2021, 9, 4, 8, 0),
      EndTime: new Date(2021, 9, 4, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 3
    },
    {
      Id: 3,
      Subject: "Ética",
      StartTime: new Date(2021, 9, 4, 10, 0),
      EndTime: new Date(2021, 9, 4, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 13
    },
    {
      Id: 4,
      Subject: "Física",
      StartTime: new Date(2021, 9, 4, 11, 0),
      EndTime: new Date(2021, 9, 4, 12, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 5,
      Subject: "Matemáticas",
      StartTime: new Date(2021, 9, 4, 7, 0),
      EndTime: new Date(2021, 9, 4, 8, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 6
    },
    {
      Id: 6,
      Subject: "Artes",
      StartTime: new Date(2021, 9, 4, 8, 0),
      EndTime: new Date(2021, 9, 4, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 7
    },
    {
      Id: 7,
      Subject: "Física",
      StartTime: new Date(2021, 9, 4, 10, 0),
      EndTime: new Date(2021, 9, 4, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 7,
      Subject: "Filosofía",
      StartTime: new Date(2021, 9, 4, 11, 0),
      EndTime: new Date(2021, 9, 4, 12, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU;COUNT=NEVER",
      ResourceID: 8
    },
    {
      Id: 8,
      Subject: "Inglés",
      StartTime: new Date(2021, 9, 4, 7, 0),
      EndTime: new Date(2021, 9, 4, 8, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID: 3
    },
    {
      Id: 9,
      Subject: "Español",
      StartTime: new Date(2021, 9, 4, 8, 0),
      EndTime: new Date(2021, 9, 4, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID: 9
    },
    {
      Id: 10,
      Subject: "Matemáticas",
      StartTime: new Date(2021, 9, 4, 10, 0),
      EndTime: new Date(2021, 9, 4, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID: 6
    },
    {
      Id: 10,
      Subject: "Ética",
      StartTime: new Date(2021, 9, 4, 11, 0),
      EndTime: new Date(2021, 9, 4, 12, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=WE;COUNT=NEVER",
      ResourceID: 13
    },
    {
      Id: 11,
      Subject: "Español",
      StartTime: new Date(2021, 9, 4, 7, 0),
      EndTime: new Date(2021, 9, 4, 8, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 9
    },
    {
      Id: 12,
      Subject: "Sistemas",
      StartTime: new Date(2021, 9, 4, 8, 0),
      EndTime: new Date(2021, 9, 4, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 10
    },
    {
      Id: 13,
      Subject: "Deportes",
      StartTime: new Date(2021, 9, 4, 10, 0),
      EndTime: new Date(2021, 9, 4, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 11
    },
    {
      Id: 14,
      Subject: "Biología",
      StartTime: new Date(2021, 9, 4, 11, 0),
      EndTime: new Date(2021, 9, 4, 12, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;COUNT=NEVER",
      ResourceID: 12
    },
    {
      Id: 15,
      Subject: "Español",
      StartTime: new Date(2021, 9, 4, 7, 0),
      EndTime: new Date(2021, 9, 4, 8, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 9
    },
    {
      Id: 16,
      Subject: "Inglés",
      StartTime: new Date(2021, 9, 4, 8, 0),
      EndTime: new Date(2021, 9, 4, 9, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 3
    },
    {
      Id: 17,
      Subject: "Matemáticas",
      StartTime: new Date(2021, 9, 4, 10, 0),
      EndTime: new Date(2021, 9, 4, 11, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 6
    },
    {
      Id: 18,
      Subject: "Física",
      StartTime: new Date(2021, 9, 4, 11, 0),
      EndTime: new Date(2021, 9, 4, 12, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=NEVER",
      ResourceID: 5
    },
    {
      Id: 19,
      Subject: "Descanso",
      StartTime: new Date(2021, 9, 4, 9, 0),
      EndTime: new Date(2021, 9, 4, 10, 0),
      RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR;COUNT=NEVER",
      ResourceID: 2
    }
  ];

  
  // const eventTemplate = (props: { [key: string]: Object }): JSX.Element => {
  //   return (<div className="schedule__template-wrape">{props.Subject}</div>);
  // }

  // const remoteData = new DataManager({
  //   url: 'https://ej2services.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
  //   adaptor: new WebApiAdaptor,
  //   crossDomain: true
  // });

  // const editorTemplate = (props: any) => {
  //   return props !== undefined ? (
  //     <table
  //       className="custom-event-editor"
  //     >
  //       <tbody>
  //         <tr>
  //           <td className="e-textlabel">Summary</td>
  //           <td>
  //             <input
  //               id="Summary"
  //               className="e-field e-input"
  //               type="text"
  //               name="Subject"
  //               style={{ width: '100%' }}
  //             />
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="e-textlabel">Status</td>
  //           <td>
              
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="e-textlabel">From</td>
  //         </tr>
  //         <tr>
  //         </tr>
  //         <tr>
  //           <td className="e-textlabel">Reason</td>
  //           <td>
  //             <textarea
  //               id="Description"
  //               className="e-field e-input"
  //               name="Description"
  //               rows={3}
  //               cols={50}
  //               style={{
  //                 width: '100%',
  //                 height: '60px !important',
  //                 resize: 'vertical'
  //               }}
  //             />
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   ) : (
  //     <div />
  //   );
  // };
  
  const resourceDataSource: Object[] = [
    {Name: "Actividad", Id: 1, Color: "#3f51b5"},
    {Name: "Descanso", Id: 2, Color: "#1F223F80"},
    {Name: "Lógica y argumentación", Id: 3, Color: "#6F447A"},
    {Name: "Comunicación escrita I", Id: 4, Color: "#FF7D2E"},
    {Name: "Álgebra y funciones", Id: 5, Color: "#255AE1"},
    {Name: "Inglés", Id: 6, Color: "#F73C3C"},
    {Name: "Diseño bidimensional", Id: 7, Color: "#0DBEBE"},
    {Name: "Introducción al diseño", Id: 8, Color: "#46C443"},
  ]

  const secondResourceDataSource: Object[] = [
    {Name: "Actividad", Id: 1, Color: "#3f51b5"},
    {Name: "Descanso", Id: 2, Color: "#1F223F80"},
    {Name: "Inglés", Id: 3, Color: "#F73C3C"},
    {Name: "Química", Id: 4, Color: "#43C486"},
    {Name: "Física", Id: 5, Color: "#0DBEBE"},
    {Name: "Matemáticas", Id: 6, Color: "#142A50"},
    {Name: "Artes", Id: 7, Color: "#FF7D2E"},
    {Name: "Filosofía", Id: 8, Color: "#C07643"},
    {Name: "Español", Id: 9, Color: "#FFB921"},
    {Name: "Sistemas", Id: 10, Color: "#4F5D78"},
    {Name: "Deportes", Id: 11, Color: "#255AE1"},
    {Name: "Biología", Id: 12, Color: "#46C443"},
    {Name: "Ética", Id: 13, Color: "#6F447A"}
  ]
  
  return (
    <div className="schedule">
      <ScheduleComponent 
        currentView="WorkWeek"
        startHour="7:00"
        endHour="24:00"
        eventSettings={{ dataSource: (server === "servidor1") ? localSchedule : localSecondSchedule }}>
          <ResourcesDirective>
            <ResourceDirective field="ResourceID" title="Color theme" name="Resources"
            textField="Name" idField="Id" colorField="Color" dataSource={ (server === "servidor1") ? resourceDataSource : secondResourceDataSource}></ResourceDirective>
          </ResourcesDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  );
}