import React, { useEffect } from 'react';
import { IndividualCourse } from '../../components/IndividualCourse/IndividualCourse';
import { TimeLineItemContainer } from '../../components/TimeLineItem/TimeLineItem';
import { collection, getDocs } from 'firebase/firestore/lite';
import { IndividualCourseType } from '../../utils/types/IndividualCourseType';
import { DATABASE } from "../../utils/firebase";
import { Route } from 'react-router-dom';
import { CourseDetail } from '../../components/CourseDetail/CourseDetail';
import { RankingPanel } from '../../components/RankingPanel/RankingPanel';


export const Courses = () => {


  var [coursesList, setCoursesList] = React.useState<IndividualCourseType[]>([]);

  var [timeLineItems, setTimeLineItems] = React.useState([]);

  const getCourses = async () => {
    console.log("cursos fire");
    const coursesCollection = collection(DATABASE, 'courses');
    const coursesSnapshot = await getDocs(coursesCollection);
    const list: IndividualCourseType[] = [];
    coursesSnapshot.forEach(doc => {
      list.push(doc.data() as IndividualCourseType);
    });
   setCoursesList(list); 
  }

  useEffect(() => { getCourses() }, []);

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
        </section>
        <h1 className="courses__time-line-title">Línea del tiempo</h1>
        <section className="courses__time-line-wrapper">
          <TimeLineItemContainer date={"Lunes 1, Noviembre"} timeLineItem={[]} ></TimeLineItemContainer>
        </section>
      </div>
      <div className="courses__right-container">
        <div className="courses__rank-wrapper">

        {/* <RankingPanel></RankingPanel> */}
        </div>
      </div>
    </div>
  );
}