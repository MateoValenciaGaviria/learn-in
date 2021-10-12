import React, { useEffect } from 'react';
import { IndividualCourse } from '../../components/IndividualCourse/IndividualCourse';
import { TimeLineItemContainer } from '../../components/TimeLineItem/TimeLineItem';
import { collection, getDocs } from 'firebase/firestore/lite';
import { IndividualCourseType } from '../../utils/types/IndividualCourseType';
import { DATABASE } from "../../utils/firebase";


export const Courses = () => {

  var [coursesList, setCoursesList] = React.useState<IndividualCourseType[]>([]);

  const getCourses = async () => {
    const coursesCollection = collection(DATABASE, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const list: IndividualCourseType[] = [];
    coursesSnapshot.forEach(doc => {
      list.push(doc.data() as IndividualCourseType);
    });
   setCoursesList(list); 
  }

/*   useEffect(() => { getCourses() }); */

  return (
    <div className="courses">
      <div className="courses__left-container">
        <h1 className="courses__title">Tus cursos</h1>
        <section className="courses__wrapper">

          {coursesList.map(course => {
            
            return <IndividualCourse key={course.id}
              id={course.id}
              name={course.name}
              teacherName={course.teacherName}
              progress={course.progress}
              calification={course.calification}
              important={course.important}
              updates={course.updates}
              mainColor={course.mainColor}
            />

          })}
          <IndividualCourse
              id='25234'
              name="name"
              teacherName="test"
              progress={4}
              calification={2.2}
              important={true}
              updates={1}
              mainColor="#0DBEBE"
            />
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