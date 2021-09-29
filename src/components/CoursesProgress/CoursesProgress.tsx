import React from 'react';

export const CoursesProgress = () => {

    return(
        <div className="courses-progress">
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                    <p className="courses-progress__text">75%</p>
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Matemáticas</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 1: Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                    <p className="courses-progress__text">15%</p>
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Español</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 1: Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                    <p className="courses-progress__text">30%</p>
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Física</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 1: Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
    );

}