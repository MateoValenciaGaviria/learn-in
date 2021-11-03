import React from "react";

export const GradesView = () => {

    var [grades, setgrades] = React.useState([]);

    return (
        <div className="grades-view">
            <div className="grades-view__title">

                <h1>Notas</h1><p className="grades-view__general-grade">General: <b>{/* {generalGrade} */}4.2</b></p>
            </div>
            <div className="grades-view__item">
                <p><b>{/* {type} */}Tarea:</b> {/* {title} */} Ejercicios de práctica</p> <b className="grades-view__item-grade">{/* {grade} */} 5.0</b>
            </div>
            <div className="grades-view__item">
                <p><b>{/* {type} */}Tarea:</b> {/* {title} */} Ejercicios de práctica</p> <b className="grades-view__item-grade">{/* {grade} */} 5.0</b>
            </div>
        </div>
    );
}