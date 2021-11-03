import React from 'react';
import { getImage } from '../../utils/getImages';

export const EmptyPanel = () => {

    var emptyPanelImg = getImage("emptypanel");

    return(
        <div className="empty-panel">
            <h3 className="empty-panel__text empty-panel__text--title">Panel vacio!</h3>
            <div className="empty-panel__img-container">
                <img src={emptyPanelImg} alt="empty panel" />
            </div>
            <p className="empty-panel__text">Selecciona el panel que desees visualizar</p>
        </div>
    );

}