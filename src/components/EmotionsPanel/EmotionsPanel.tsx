import React, { useEffect, useState } from 'react';
import { UserType } from '../../utils/types/UserType';
import { DATABASE } from "../../utils/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import { Link } from 'react-router-dom';

interface EmotionsRowProps {
    name: string,
    img: string,
    state: number
}

const EmotionsRow: React.FC<EmotionsRowProps> = ({ name, img, state }) => {

    return (
        <div className="emotion-row">
            <div className="emotion-row__img-container">
                <img className="emotion-row__user-img" src={img} alt="user avatar" />
            </div>
            <p className="emotion-row__user-name">{name}</p>
            <div className="emotion-row__emoji-container">
                {(state === 1) ? <p className="emotion-row__emoji">&#128516;</p> : null}
                {(state === 2) ? <p className="emotion-row__emoji">&#128528;</p> : null}
                {(state === 3) ? <p className="emotion-row__emoji">&#128529;</p> : null}
                {(state === 4) ? <p className="emotion-row__emoji">&#128533;</p> : null}
                {(state === 5) ? <p className="emotion-row__emoji">&#128531;</p> : null}
                {(state === 6) ? <p className="emotion-row__emoji">&#128532;</p> : null}
                {(state === 7) ? <p className="emotion-row__emoji">&#128545;</p> : null}
                {(state === 8) ? <p className="emotion-row__emoji">&#128546;</p> : null}
                {(state === 9) ? <p className="emotion-row__emoji">&#128549;</p> : null}
                {(state === 10) ? <p className="emotion-row__emoji">&#129314;</p> : null}
            </div>
        </div>
    );

}

interface EmotionsPanelProps {
    handleChat: () => void,
}

export const EmotionsPanel: React.FC<EmotionsPanelProps> = ({ handleChat }) => {

    var [usersList, setUsersList] = React.useState<UserType[]>([]);

    const getCourses = async () => {
        const coursesCollection = collection(DATABASE, 'users');
        const coursesSnapshot = await getDocs(coursesCollection);
        const list: UserType[] = [];
        coursesSnapshot.forEach(doc => {
            list.push(doc.data() as UserType);
        });
        setUsersList(list);
        console.log(list);
    }

    useEffect(() => { getCourses() }, []);

    return (
        <div className="emotions-panel">
            <Link className="emotions-panel__link" onClick={handleChat} to="/chat">
                <div className="emotions-panel__wraper">
                    {usersList.map(user => {
                        return <EmotionsRow
                            img={user.img}
                            name={user.name}
                            state={user.state}></EmotionsRow>
                        })}
                </div>
            </Link>
        </div>
    );

}