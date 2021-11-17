import React from 'react';

export const RewardsPanel = () => {

  return (
    <div className="rewards-panel">
      <h4 className="rewards-panel__title">Recompensas</h4>
      <div className="rewards-panel__container">
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">E</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#FFB921" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">5 décimas adicionales (Esp)</div>
        </div>
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">M</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#142A50" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">2da revisión de tarea (Mat)</div>
        </div>
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">I</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#F73C3C" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">1 punto en una actividad (Ing)</div>
        </div>
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">B</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#46C443" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">Más plazo (Bio)</div>
        </div>
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">S</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#4F5D78" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">Exonerado (Sis)</div>
        </div>
        <div className="rewards-panel__reward">
          <div className="rewards-panel__reward-img-container">
            <p className="rewards-panel__course-letter">B</p>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35.6" cy="35.6" r="35.6" fill="#46C443" />
              <g style={{ mixBlendMode: "overlay" }}>
                <circle cx="35.5999" cy="35.6" r="26.7957" fill="black" fill-opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className="rewards-panel__reward-name">Recuperar trabajo (Bio)</div>
        </div>
      </div>
    </div>
  );

}