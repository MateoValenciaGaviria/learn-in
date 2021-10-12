import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { IndividualCourseType } from '../../utils/types/IndividualCourseType';

export interface CSSPropertiesWithVars extends CSSProperties {
    '--mainColor': string;
}
export const IndividualCourse: React.FC<IndividualCourseType> = ({name, teacherName, progress, calification, important, updates, mainColor}) => {

    return (
        <div className={`individual-course ${important===true? ' individual-course--important':''}`} style={{ '--mainColor': mainColor} as React.CSSProperties} >
            <Link to="/" className={`individual-course__title-link ${updates? ' individual-course__title-link--updates':''}`} data-content={`${updates? updates:''}`}><h2 className="individual-course__title">{name}</h2></Link>
            <Link to="/" className="individual-course__teacher-name">
                <svg className="icon" width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.22428" cy="4.88969" r="4.16667" stroke="white" />
                    <path d="M15.7241 16.5564C15.7241 12.4143 12.3663 9.0564 8.22412 9.0564C4.08199 9.0564 0.724121 12.4143 0.724121 16.5564" stroke="white" />
                </svg>
                {teacherName}
            </Link>
            <progress className="individual-course__progress-bar" max="100" value={progress}> {progress}% </progress>
            <p className="individual-course__text-progress">{progress}% Completado</p>
            <p>Nota provisional: {calification} <span className="tooltip" data-content="Esta es tu nota contabilizando los valores que llevas hasta la fecha.">
            <svg className="icon icon--info" width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.5" cy="4.5" r="4.5" fill="#9098BD" />
                <path d="M4.44366 1.36C4.98766 1.36 5.42232 1.50933 5.74766 1.808C6.07832 2.10667 6.24366 2.51467 6.24366 3.032C6.24366 3.57067 6.07299 3.976 5.73166 4.248C5.39032 4.52 4.93699 4.656 4.37166 4.656L4.33966 5.288H3.54766L3.50766 4.032H3.77166C4.28899 4.032 4.68366 3.96267 4.95566 3.824C5.23299 3.68533 5.37166 3.42133 5.37166 3.032C5.37166 2.74933 5.28899 2.528 5.12366 2.368C4.96366 2.208 4.73966 2.128 4.45166 2.128C4.16366 2.128 3.93699 2.20533 3.77166 2.36C3.60632 2.51467 3.52366 2.73067 3.52366 3.008H2.66766C2.66766 2.688 2.73966 2.40267 2.88366 2.152C3.02766 1.90133 3.23299 1.70667 3.49966 1.568C3.77166 1.42933 4.08632 1.36 4.44366 1.36ZM3.93166 7.056C3.76632 7.056 3.62766 7 3.51566 6.888C3.40366 6.776 3.34766 6.63733 3.34766 6.472C3.34766 6.30667 3.40366 6.168 3.51566 6.056C3.62766 5.944 3.76632 5.888 3.93166 5.888C4.09166 5.888 4.22766 5.944 4.33966 6.056C4.45166 6.168 4.50766 6.30667 4.50766 6.472C4.50766 6.63733 4.45166 6.776 4.33966 6.888C4.22766 7 4.09166 7.056 3.93166 7.056Z" fill="white" />
            </svg>
            </span>
            </p>
        </div>
    );
}