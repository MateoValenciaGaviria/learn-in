import React from 'react';

export const UpcomingExams = () => {

    return(
        <div className="upcoming-exams">
            <div className="upcoming-exams__header">
                <p className="upcoming-exams__titles" >Materia</p>
                <p className="upcoming-exams__titles" >Tipo</p>
                <p className="upcoming-exams__titles" >Fecha</p>
                <p className="upcoming-exams__titles" >Hora</p>
            </div>
            <div className="upcoming-exams__rows-container">
                <div className="upcoming-exams__row">
                    <p className="upcoming-exams__info" >Física</p>
                    <p className="upcoming-exams__info" >Exámen</p>
                    <p className="upcoming-exams__info" >Jue. 2 Ago.</p>
                    <p className="upcoming-exams__info" >8:00 am</p>
                    <p className="upcoming-exams__info" >···</p>
                </div>
                <hr />
                <div className="upcoming-exams__row">
                    <p className="upcoming-exams__info" >Matemáticas</p>
                    <p className="upcoming-exams__info" >Quiz</p>
                    <p className="upcoming-exams__info" >Lun. 19 Ago.</p>
                    <p className="upcoming-exams__info" >9:00 am</p>
                    <p className="upcoming-exams__info" >···</p>
                </div>
                <hr />
                <div className="upcoming-exams__row">
                    <p className="upcoming-exams__info" >Español</p>
                    <p className="upcoming-exams__info" >Quiz</p>
                    <p className="upcoming-exams__info" >Mie. 15 Sep.</p>
                    <p className="upcoming-exams__info" >10:30 am</p>
                    <p className="upcoming-exams__info" >···</p>
                </div>
            </div>
        </div>
    );
}