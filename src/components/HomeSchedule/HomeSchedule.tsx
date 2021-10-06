import React, { useState } from 'react';

export const HomeSchedule = () => {

    return (
        <div className="home-schedule">
            <h3 className="home-schedule__title">Horario</h3>
            <div className="home-schedule__row-container">
                <div className="home-schedule__row">
                    <div className="home-schedule__course-icon home-schedule__course-icon--purple">
                        <div className="home-schedule__course-letter">M</div>                  
                    </div>
                    <div className="home-schedule__course-information">
                        <div className="home-schedule__course-name">Matemáticas</div>
                        <div className="home-schedule__course-schedule">7:00 am - 9:00 am</div>
                    </div>
                </div>

                <div className="home-schedule__row">
                    <div className="home-schedule__course-icon home-schedule__course-icon--gray">
                        <div className="home-schedule__course-letter">E</div>                       
                    </div>
                    <div className="home-schedule__course-information">
                        <div className="home-schedule__course-name">Español</div>
                        <div className="home-schedule__course-schedule">9:00 am - 11:00 am</div>
                    </div>
                </div>

                <div className="home-schedule__row">
                    <div className="home-schedule__course-icon home-schedule__course-icon--yellow">
                        <div className="home-schedule__course-letter">F</div>                        
                    </div>
                    <div className="home-schedule__course-information">
                        <div className="home-schedule__course-name">Física</div>
                        <div className="home-schedule__course-schedule">11:00 am - 12:00 pm</div>
                    </div>
                </div>

                <div className="home-schedule__row">
                    <div className="home-schedule__course-icon home-schedule__course-icon--magenta">
                        <div className="home-schedule__course-letter">A</div>                        
                    </div>
                    <div className="home-schedule__course-information">
                        <div className="home-schedule__course-name">Artes</div>
                        <div className="home-schedule__course-schedule">12:00 pm - 1:00 pm</div>
                    </div>
                </div>
            </div>
        </div>
    );
}