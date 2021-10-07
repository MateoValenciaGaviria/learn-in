import React, { useEffect } from 'react';
import { IndividualCourse } from '../../components/IndividualCourse/IndividualCourse';
import { TimeLineItemContainer } from '../../components/TimeLineItem/TimeLineItem';
import { db } from '../../utils/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { IndividualCourseType } from '../../utils/IndividualCourseType';


export const Courses = () => {
  const defaultCourses: IndividualCourseType[] = [];
  /* {
    id: 'x3234',
    name: 'Matecho',
    teacherName: 'Juli',
    progress: 50,
    calification: 4.0,
  } */

  const [coursesList, setCoursesList] = React.useState([]);

  async function getCourses() {
    const coursesCollection = collection(db, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.forEach(doc => console.log((doc.data())));
    return coursesList;
  }

  useEffect(() => { getCourses() });

  return (
    <div className="courses">
      <div className="courses__left-container">
        <h1 className="courses__title">Tus cursos</h1>
        <section className="courses__wrapper">
          {/* {coursesList.map((id: string , name: string, teacherName: string, progress: number, calification : number) => {
            return <IndividualCourse id={id} name={name} teacherName={teacherName} progress={progress} calification={calification}
            />
          })} */}
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