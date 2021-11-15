import React, { useState, useEffect } from 'react';
import { getImage } from '../../utils/getImages';
import { SpotifyPanel } from '../../components/SpotifyPanel/SpotifyPanel';
import { RankingPanel } from '../../components/RankingPanel/RankingPanel';
import { AchievementsPanel } from '../../components/AchievementsPanel/AchievementsPanel';
import { RewardsPanel } from '../../components/RewardsPanel/RewardsPanel';
import { UserType } from '../../utils/types/UserType';
import { DATABASE } from "../../utils/firebase";
import { doc, setDoc } from 'firebase/firestore/lite';

var localBackground = "";
interface ProfileProps {
  user: UserType,
  onStateChanged: (state: number) => void,
  onUrlChange: (url: string) => void
}

export const Profile: React.FC<ProfileProps> = ({ user, onStateChanged, onUrlChange }) => {

  //var userAvatar = getImage(user[0].img);
  const [emoji, setEmoji] = useState(user.state);
  const [userBackground, setUserBackground] = useState(user.background);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const updateState = async (stateIndex: number) => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      setDoc(userRef, { state: stateIndex }, { merge: true });
    }
  }

  const handleEmojiChange = (emojiIndex: number) => {
    //Sets the current emoji
    setEmoji(emojiIndex);
    onStateChanged(emojiIndex);
    updateState(emojiIndex);
    setDropdownOpen(false);
  }

  const updateUrlBackground = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      setDoc(userRef, { background: userBackground }, { merge: true });
    }
  }

  useEffect(() => { updateUrlBackground() }, [userBackground]);

  return (
    <div className="profile">
      <div className="profile__top-container">
        {(userBackground !== "") ?
          <div className="profile__image-change">
            <img className="profile__background-img" src={userBackground} alt="User backgrund" />
            <button className="profile__upload-btn profile__upload-btn--image-change" onClick={(e) => {
              localBackground = "";
              setUserBackground(localBackground);
            }}>Cargar Imagen</button>
          </div> :
          <div className="profile__upload-container">
            <input type="text" className="profile__upload-input" onChange={(e) => localBackground = e.target.value} />
            <button className="profile__upload-btn" onClick={(e) => {
              setUserBackground(localBackground);
            }}>Cambiar Imagen</button>
          </div>
        }
      </div>
      <div className="profile__bottom-container">
        <div className="profile__user-information-container">
          <div className="profile__user-information">
            <div className="profile__avatar-container">
              <img className="profile__avatar-img" src={user.img} alt="User avatar" />
              <div className="profile__emojis-container">
                <div className="profile__emojis-dropdown">
                  {(emoji === 1) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128516;</button> : null}
                  {(emoji === 2) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128528;</button> : null}
                  {(emoji === 3) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128529;</button> : null}
                  {(emoji === 4) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128533;</button> : null}
                  {(emoji === 5) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128531;</button> : null}
                  {(emoji === 6) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128532;</button> : null}
                  {(emoji === 7) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128545;</button> : null}
                  {(emoji === 8) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128546;</button> : null}
                  {(emoji === 9) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128549;</button> : null}
                  {(emoji === 10) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#129314;</button> : null}
                  <ul className={`${dropdownOpen ? "profile__emojis-dropdown-options--open" : "profile__emojis-dropdown-options"}`}>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(1)}>
                      <button className={`${emoji === 1 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128516;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(2)}>
                      <button className={`${emoji === 2 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128528;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(3)}>
                      <button className={`${emoji === 3 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128529;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(4)}>
                      <button className={`${emoji === 4 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128533;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(5)}>
                      <button className={`${emoji === 5 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128531;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(6)}>
                      <button className={`${emoji === 6 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128532;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(7)}>
                      <button className={`${emoji === 7 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128545;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(8)}>
                      <button className={`${emoji === 8 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128546;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(9)}>
                      <button className={`${emoji === 9 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128549;</button>
                    </li>
                    <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(10)}>
                      <button className={`${emoji === 10 ? "profile__emojis-option-text profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#129314;</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="profile__information">
              <h3 className="profile__info profile__info--title">
                ID Llamadas
              </h3>
              <p className="profile__info profile__info--text">
                158 475 785
              </p>

              <h3 className="profile__info profile__info--title">
                Correo electrónico
              </h3>
              <p className="profile__info profile__info--text">
                {user.email}
              </p>

              <h3 className="profile__info profile__info--title">
                Cumpleaños
              </h3>
              <p className="profile__info profile__info--text">
                {user.birthday}
              </p>

              <h3 className="profile__info profile__info--title">
                Celular
              </h3>
              <p className="profile__info profile__info--text">
                {user.phone}
              </p>
              <button className="profile__log-out" onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}>Cerrar sesión</button>
            </div>
          </div>
        </div>
        <div className="profile__user-stats">
          <div className="profile__username-container">
            <h1 className="profile__username">{user.name}</h1>
            <div className="profile__user-status">

            </div>
          </div>
          <div className="profile__panels-container">
            <SpotifyPanel
              url={user.playlist}
              onUrlChange={onUrlChange}></SpotifyPanel>
            <RankingPanel></RankingPanel>
            <AchievementsPanel></AchievementsPanel>
            <RewardsPanel></RewardsPanel>
          </div>
        </div>
      </div>
    </div>
  );
}