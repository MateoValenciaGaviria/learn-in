import React from 'react';

export const UpcomingActivities = () => {

    return(
        <div className="upcoming-activities">
            <div className="upcoming-activities__header">
                <p className="upcoming-activities__titles" >Materia</p>
                <p className="upcoming-activities__titles" >Actividad</p>
                <p className="upcoming-activities__titles" >Fecha entrega</p>
                <p className="upcoming-activities__titles" >Estado</p>
            </div>
            <div className="upcoming-activities__rows-container">
                <div className="upcoming-activities__row">
                    <p className="upcoming-activities__info" >Física</p>
                    <p className="upcoming-activities__info--yellow" >Actividad 3</p>
                    <p className="upcoming-activities__info upcoming-activities__info--date" >Lun. 13 Sep.</p>
                    <p className="upcoming-activities__info--finished" >Finalizada</p>
                </div>
                <hr />
                <div className="upcoming-activities__row">
                    <p className="upcoming-activities__info" >Matemáticas</p>
                    <p className="upcoming-activities__info--purple" >Actividad 4</p>
                    <p className="upcoming-activities__info upcoming-activities__info--date" >Mar. 21 Sep.</p>
                    <p className="upcoming-activities__info--pending" >Pendiente</p>
                </div>
                <hr />
                <div className="upcoming-activities__row">
                    <p className="upcoming-activities__info" >Español</p>
                    <p className="upcoming-activities__info--gray" >Actividad 1</p>
                    <p className="upcoming-activities__info upcoming-activities__info--date" >Jue. 23 Sep.</p>
                    <p className="upcoming-activities__info--in-progress" >En curso</p>
                </div>
            </div>
        </div>
    );

}