import React, { CSSProperties } from 'react';
import { ActivityType } from '../../utils/types/ActivityType';
import { Activity } from '../Activity/Activity';
interface TimeLineItemProps {
    courseName: string,
    unit: string,
    nextClass: string[],
    tasks: ActivityType[],
    details: string
}


export const TimeLineItem: React.FC<TimeLineItemProps> = ({ courseName, unit, nextClass, tasks, details}) => {
    return (
        <div className="time-line-item">
            <h3>{courseName}</h3>
            <p className="unit">{unit}</p>
            <div>
                <h4>Próxima clase:</h4>
                {nextClass.map(activity => {return <p>{activity}</p>})}
            </div>
            <div>
                <h4>Entregable:</h4>
                {tasks.map(task => {
                    return <Activity text={task.text} important={task.important} bgColor={task.bgColor} state={task.state}></Activity>
                })}
            </div>
            <div>
                <h4>Estado:</h4>
                {tasks.map(task => {
                    return <p>{task.state}</p>
                })}
            </div>
            <div>
                <h4>Detalles:</h4>
                <p>{details}</p>
            </div>
        </div >
    );
}

interface TimeLineItemContainerProps {
    date: string,
    timeLineItem: TimeLineItemProps[],
}

export const TimeLineItemContainer: React.FC<TimeLineItemContainerProps> = ({date, timeLineItem}) => {
    return (
        <>
            <h5>{date}</h5>
            <div className="time-line-item-container">
            {timeLineItem.map(item => {
                    return <TimeLineItem courseName={item.courseName} unit={item.unit} nextClass={item.nextClass} tasks={item.tasks} details={item.details}/>
                })}
            </div>
        </>
    );
}
