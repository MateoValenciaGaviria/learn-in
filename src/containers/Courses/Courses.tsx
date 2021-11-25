import React, { useEffect } from 'react';
import { IndividualCourse } from '../../components/IndividualCourse/IndividualCourse';
import { TimeLineItem, TimeLineItemContainer, TimeLineItemProps } from '../../components/TimeLineItem/TimeLineItem';
import { collection, getDocs } from 'firebase/firestore/lite';
import { IndividualCourseType } from '../../utils/types/IndividualCourseType';
import { DATABASE } from "../../utils/firebase";
import { Route } from 'react-router-dom';
import { CourseDetail } from '../../components/CourseDetail/CourseDetail';
import { RankingPanel } from '../../components/RankingPanel/RankingPanel';
import { RankingType } from '../../utils/types/RankingType';
import { SecondaryRankingPanel } from '../../components/SecondaryRankingPanel/SecondaryRankingPanel';

interface CoursesProps {
  rankList: RankingType[],
  server: string
}

export const Courses: React.FC<CoursesProps> = ({ rankList, server}) => {

  var courseDoc = "";
  (server === "servidor1") ? courseDoc = "courses" : courseDoc = "courses2";

  var [coursesList, setCoursesList] = React.useState<IndividualCourseType[]>([]);
  var [timeLineItems, setTimeLineItems] = React.useState<TimeLineItemProps[]>([]);
  /* courseName="Español" unit="Unidad 1: Fundamentos básicos" nextClass={["Teoría", "Conceptos"]} details="Veremos los conceptos básicos" tasks={[{important:false, text:"Ejercicio 1", state:"En curso", bgColor:"#46C443"}]} */

  timeLineItems.push({courseName:"Diseño Bidimensional", details:"Diseñar un videojuego de un cuento tradicional.", unit:"Unidad 4: Reto Final", nextClass:["2 Bocetos", "Asesoría"], tasks:[{important:true, text:"Bocetos Behance", state:"En curso", bgColor:"#46C443"}]});


  const getCourses = async () => {
    const coursesCollection = collection(DATABASE, courseDoc);
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
          <TimeLineItemContainer date={"Miércoles 24, Noviembre"} timeLineItem={[{courseName:"Diseño Bidimensional", details:"Diseñar un videojuego de un cuento tradicional.", unit:"Unidad 4: Reto Final", nextClass:["2 Bocetos", "Asesoría"], tasks:[{important:false, text:"Bocetos Behance", state:"En curso", bgColor:"#6F447A"}]}]}></TimeLineItemContainer>
          <TimeLineItemContainer date={"Viernes 3, Diciembre"} timeLineItem={[{courseName:"Diseño Bidimensional", details:"Entrega y presentación del proyecto final", unit:"Unidad 4: Reto Final", nextClass:["Final"], tasks:[{important:true, text:"Todos los entregables", state:"Pendiente", bgColor:"#46C443"}]}]} ></TimeLineItemContainer>
        </section>
      </div>
      <div className="courses__right-container">
        <div className="courses__rank-wrapper">
          <RankingPanel rankList={rankList}></RankingPanel>
          <SecondaryRankingPanel rankList={rankList}></SecondaryRankingPanel>
        </div>
      </div>
    </div>
  );
}