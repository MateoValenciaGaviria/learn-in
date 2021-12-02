import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

export const CoursesProgress = () => {

    return (
        <div className="courses-progress">
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                    <CircularProgressbar value={50} text="50%" strokeWidth={9} className="courses-progress__circle" styles={{
                        path: {
                            stroke: '#F73C57',
                            strokeLinecap: 'butt',
                        },
                        trail: {
                            stroke: '#2D3044',

                        },
                        text: {
                            fill: '#fff',
                            fontSize: '1.5em',
                            fontFamily: 'Poppins-bold'
                        },
                    }} />
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Matemáticas</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 4: Ecuaciones</p>
                    </div>
                </div>
            </div>
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                <CircularProgressbar value={85} text="85%" strokeWidth={9} className="courses-progress__circle" styles={{
                        path: {
                            stroke: '#FFB921',
                            strokeLinecap: 'butt',
                        },
                        trail: {
                            stroke: '#2D3044',

                        },
                        text: {
                            fill: '#fff',
                            fontSize: '1.5em',
                            fontFamily: 'Poppins-bold'
                        },
                    }} />
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Español</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 4: Lectura Crítica</p>
                    </div>
                </div>
            </div>
            <div className="courses-progress__row">
                <div className="courses-progress__progress-container">
                <CircularProgressbar value={80} text="80%" strokeWidth={9} className="courses-progress__circle" styles={{
                        path: {
                            stroke: '#255AE1',
                            strokeLinecap: 'butt',
                        },
                        trail: {
                            stroke: '#2D3044',

                        },
                        text: {
                            fill: '#fff',
                            fontSize: '1.5em',
                            fontFamily: 'Poppins-bold'
                        },
                    }} />
                </div>
                <div className="courses-progress__course-information">
                    <div className="courses-progress__course">
                        <p className="courses-progress__text--title">Física</p>
                    </div>
                    <div className="courses-progress__unity">
                        <p className="courses-progress__text--description">Unidad 4: Termodinámica</p>
                    </div>
                </div>
            </div>
        </div>
    );

}