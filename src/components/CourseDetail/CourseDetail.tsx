import React, { CSSProperties } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GradesView } from "../GradesView/GradesView";
import { RankingPanel } from '../../components/RankingPanel/RankingPanel';


interface CourseResourceItemProps {
    type: string,
    title: string,
    status?: string,
}
export interface CSSPropertiesWithVars extends CSSProperties {
    '--mainCourseColor': string;
}

export const CourseResourceItem: React.FC<CourseResourceItemProps> = ({ type, title, status }) => {
    return (
        <div className="course-resource-item">
            <div className="course-resource-item__img"><img src="" alt="" /></div>
            <p className="course-resource-item__title"><b>{type}:</b> {title}</p>
            {status && <p className="course-resource-item__status">{status}</p>}
            <input type="checkbox" name="checkbox" id="" className="course-resource-item__check" />
        </div>
    );
}

interface CourseDetailProps {
   teacherView?: boolean,
}

export const CourseDetail: React.FC<CourseDetailProps> = ({teacherView}) => {
    var loc = document.location.href.split("&");
    const { name } = useParams<{ name?: string }>();
    const mainCourseColor = loc[1].substring(6);
    const [unitNumber, setUnitNumber] = React.useState(1);
    const [activities, setActivities] = React.useState(false);
    const handleUnit1 = () => {
        setUnitNumber(1);
    }
    const handleUnit2 = () => {
        setUnitNumber(2);
    }
    const handleUnit3 = () => {
        setUnitNumber(3);
    }
    const handleActivity = () => {
        setActivities(!activities);
    }

    let content = document.querySelector('.course-detail__unit-info');
    console.log(content?.innerHTML);

    if(teacherView && content!=null){
        content.addEventListener('click', () => {
            // Toggle contentEditable on button click
            
            // If disabled, save text
            if(content!) {
                localStorage.setItem('content', content!.innerHTML);
            }
          });
    }
    

    let history = useHistory();

    return (

        <div className="course-detail" style={{ '--mainCourseColor': mainCourseColor } as React.CSSProperties}>
            <div className="course-detail__left-container">
                <div className="course-detail__top-bar">
                    <button className="course-detail__back-btn" onClick={() => history.goBack()}>
                        <svg className="icon" width="25" height="22" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H27V10.5H2V13.5Z" fill="white" />
                        </svg>
                    </button>
                    <h1 className="course-detail__title">{name}</h1>
                </div>
                <div className="course-detail__units-bar">

                    <p >Unidades</p>
                    <button onClick={handleUnit1} className={`course-detail__unit-number ${unitNumber === 1 ? 'course-detail__unit-number--selected' : ''}`}>1</button>
                    <button onClick={handleUnit2} className={`course-detail__unit-number ${unitNumber === 2 ? 'course-detail__unit-number--selected' : ''}`}>2</button>
                    <button onClick={handleUnit3} className={`course-detail__unit-number ${unitNumber === 3 ? 'course-detail__unit-number--selected' : ''}`}>3</button>

                </div>
                {unitNumber && <details className="course-detail__unit" open>
                    <summary className="course-detail__unit-summary">
                        Unidad {unitNumber}
                    </summary>
                    <article className="course-detail__unit-info"  contentEditable={teacherView===true ? "true" : "false"}  >
                        <p>Estaremos viendo los conceptos de loremp insum dolor its :v:</p>
                        <ol>
                            <li>Esto</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                        </ol>
                    </article>

                    <details className="course-detail__class">
                        <summary>
                            <b> Clase 1:</b> Introducción <button className="course-detail__btn-activities" onClick={handleActivity}>Ver actividades</button>
                        </summary>
                        <CourseResourceItem title="Presentación de la clase" type="Archivo" status="Pendiente"></CourseResourceItem>
                    </details>

                </details>}

            </div>
            <div className="course-detail__right-container">
                {activities === false && <div className="course-detail__rank-wrapper">
                    <RankingPanel></RankingPanel>
                </div>}
                {activities === true && <div className="course-detail__activities-wrapper">
                    <h1>Actividades clase 1</h1>
                    <div className="task-item">
                        <p className="task-item__text">Ejercicio clase 1</p>
                        <input type="checkbox" name="checkbox" id="" className="task-item__check" />
                    </div>
                </div>}
                <GradesView></GradesView>
            </div>
        </div>

    );
}