export const TimeLineItem = () => {
    return (
        <div className="time-line-item">
            <h3>Física</h3>
            <p>Unidad 1:Fundamentos básicos de física</p>
            <div> 
                <h4>Próxima clase:</h4>
                <p>Revisión actividad 3</p>
            </div>
            <div> 
                <h4>Entregable:</h4>
                <p>Actividad 3</p>
            </div>
            <div> 
                <h4>Estado:</h4>
                <p>Finalizada</p>
            </div>
            <div> 
                <h4>Detalles:</h4>
                <p>Veremos los conceptos básicos</p>
            </div>
        </div >
    );
}

export const TimeLineItemContainer = () => {
    return (
        <div className="time-line-item-container">
            <h5>Lunes 13, Septiembre</h5>
            <TimeLineItem/>
            <TimeLineItem/>

        </div>
    );
}