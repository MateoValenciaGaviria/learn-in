import React from 'react';
import { getImage } from '../../utils/getImages';

export const TaskList = () => {

    var checkhover = getImage("checkhover");

    return(
        <div className="task-list">
            <div className="task-list__row">
                <p className="task-list__sign">!</p>
                <div className="task-list__info">
                    <p className="task-list__title">Ejercicios matemáticas</p>
                    <p className="task-list__description">1 de 10</p>
                </div>
                <div className="task-list__deadline">
                    <p className="task-list__title">Hoy</p>
                    <p className="task-list__description">Vencimiento</p>
                </div>
                {/* <img className="task-list__check-img" src={checkhover} alt="check hover" /> */}
                <input type="checkbox" name="checkbox" id="" className="task-item__check" />
            </div>

            <div className="task-list__row">
                <p className="task-list__sign">!</p>
                <div className="task-list__info">
                    <p className="task-list__title">Lectura español</p>
                    <p className="task-list__description">Página 10 de 25</p>
                </div>
                <div className="task-list__deadline">
                    <p className="task-list__title">Hoy 1:00 pm</p>
                    <p className="task-list__description">Vencimiento</p>
                </div>
                <input type="checkbox" name="checkbox" id="" className="task-item__check" />
            </div>

            <div className="task-list__row">
                <p className="task-list__sign">!</p>
                <div className="task-list__info">
                    <p className="task-list__title">Limpiar cuarto</p>
                    <p className="task-list__description"></p>
                </div>
                <div className="task-list__deadline">
                    <p className="task-list__title">Mañana</p>
                    <p className="task-list__description">Vencimiento</p>
                </div>
                <input type="checkbox" name="checkbox" id="" className="task-item__check" />
            </div>
        </div>
    );

}