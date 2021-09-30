import React from 'react';
import { IndividualCourse } from '../../components/IndividualCourse/IndividualCourse';
import { TimeLineItemContainer } from '../../components/TimeLineItem/TimeLineItem';

export const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__left-container">
        <h1 className="courses__title">Tus cursos</h1>
        <section className="courses__wrapper">
        <IndividualCourse></IndividualCourse>
        </section>
        <h1 className="courses__time-line-title">Línea del tiempo</h1>
        <section className="courses__time-line-wrapper">
          <TimeLineItemContainer></TimeLineItemContainer>
        </section>
      </div>
      <div className="courses__right-container">
        <h1 className="courses__ranking-title">Ranking global</h1>
      </div>
    </div>
  );
}