import React, { useEffect } from 'react';
import { ScheduleType } from '../../utils/types/ScheduleType';
import { doc, getDoc } from 'firebase/firestore/lite';
import { DATABASE } from "../../utils/firebase";

interface ScheduleProps{
    daySelected: Date,
}

export const Schedule: React.FC<ScheduleType> = ({ id, course, hours}) => {

    return(
    <div className="home-schedule__row">
        <div className="home-schedule__course-icon">
            
            <svg className="home-schedule__svg" width="47" height="57" viewBox="0 0 47 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`book-svg--${id}`} d="M0 4.44072C0 1.98831 1.98807 0.000244141 4.44048 0.000244141H46.625V56.8383H4.44048C1.98807 56.8383 0 54.8503 0 52.3979V4.44072Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.44048 0.000244141H5.32857V46.1811H46.625V49.5115H4.99554C3.76933 49.5115 2.7753 50.5055 2.7753 51.7317V51.9537C2.7753 53.1799 3.76933 54.174 4.99553 54.174H46.625V56.8383H4.44048C1.98807 56.8383 0 54.8503 0 52.3979V4.44072C0 1.98831 1.98807 0.000244141 4.44048 0.000244141Z" fill="black" fillOpacity="0.2"/>
                <path d="M2.77539 51.7315C2.77539 50.5053 3.76943 49.5112 4.99563 49.5112H46.6251V54.1737H4.99563C3.76942 54.1737 2.77539 53.1797 2.77539 51.9535V51.7315Z" fill="white"/>
                <path d="M11.3232 0H18.761V11.1012L15.1532 7.04926L11.3232 11.1012V0Z" fill="#FFB508"/>
            </svg>
        
            <div className="home-schedule__course-letter">{course.charAt(0)}</div>                  
        </div>
        <div className="home-schedule__course-information">
            <div className="home-schedule__course-name">{course}</div>
            <div className="home-schedule__course-schedule">{hours}</div>
        </div>
    </div>);
}

export const HomeSchedule: React.FC<ScheduleProps> = ( {daySelected} ) => {

    const [scheduleList, setScheduleList] = React.useState<ScheduleType[]>([]);
    var scheduleDay: string = "Sunday";
    switch (daySelected.getDay()) {
        case 1:
            scheduleDay = "Monday";
            break;
        case 2:
            scheduleDay = "Tuesday";
            break;
        case 3:
            scheduleDay = "Wednesday";
            break;
        case 4:
            scheduleDay = "Thursday";
            break;
        case 5:
            scheduleDay = "Friday";
            break;
        case 6:
            scheduleDay = "Saturday";
            break;
        case 7:
            scheduleDay = "Sunday";
            break;
    
        default:
            break;
    }

    const getCourses = async () => {

        if(scheduleDay !== "Saturday" && scheduleDay !== "Sunday"){
            const list: ScheduleType[] = [];
            const docRef = doc(DATABASE, 'schedule', scheduleDay);
            const docSnap = await getDoc(docRef);
            for (let i = 0; i < 4; i++) {
                list.push(docSnap.get(`${i}`) as ScheduleType);
            }
            setScheduleList(list); 
        }
        
    }
    
    useEffect(() => { getCourses() }, [scheduleDay]);

    return (
        <div className="home-schedule">
            <h3 className="home-schedule__title">Horario</h3>
            <div className="home-schedule__row-container">
                {(scheduleDay !== "Saturday" && scheduleDay !== "Sunday") ? scheduleList.map(schedule => {
                    return <Schedule key={schedule.id}
                    id={schedule.id}
                    course={schedule.course}
                    hours={schedule.hours}/>
                    })
                : <h3 className="home-schedule__no-class"> ¡Hoy no tienes clase! 
                <p className="home-schedule__emoji">🎉</p></h3> }
            </div>
        </div>
    );
}