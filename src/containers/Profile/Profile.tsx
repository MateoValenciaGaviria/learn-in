import Reac, { useState } from 'react';
import { getImage } from '../../utils/getImages';
import { SpotifyPanel } from '../../components/SpotifyPanel/SpotifyPanel';
import { RankingPanel } from '../../components/RankingPanel/RankingPanel';
import { AchievementsPanel } from '../../components/AchievementsPanel/AchievementsPanel';
import { RewardsPanel } from '../../components/RewardsPanel/RewardsPanel';

export const Profile = () => {

  var userAvatar = getImage("useravatar");

  const [emoji, setEmoji] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleEmojiChange = (emojiIndex:number) => {
    //Sets the current emoji
    setEmoji(emojiIndex);
    setDropdownOpen(false);
  }
  
  return (
    <div className="profile">
      <div className="profile__top-container">

      </div>
      <div className="profile__bottom-container">
        <div className="profile__user-information-container">
          <div className="profile__user-information">
            <div className="profile__avatar-container">
              <img className="profile__avatar-img" src={userAvatar} alt="User avatar" />
              <div className="profile__emojis-container">
                <div className="profile__emojis-dropdown">
                    {(emoji === 1) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128516;</button>: null}
                    {(emoji === 2) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128528;</button>: null}
                    {(emoji === 3) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128529;</button>: null}
                    {(emoji === 4) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128533;</button>: null}
                    {(emoji === 5) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128531;</button>: null}
                    {(emoji === 6) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128532;</button>: null}
                    {(emoji === 7) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128545;</button>: null}
                    {(emoji === 8) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128546;</button>: null}
                    {(emoji === 9) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#128549;</button>: null}
                    {(emoji === 10) ? <button className="profile__emojis-btn" disabled={dropdownOpen} onClick={(e) => setDropdownOpen(true)}>&#129314;</button>: null}
                    <ul className={`${dropdownOpen ? "profile__emojis-dropdown-options--open" : "profile__emojis-dropdown-options"}`}>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(1)}>
                        <a className={`${emoji == 1 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128516;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(2)}>
                        <a className={`${emoji == 2 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128528;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(3)}>
                        <a className={`${emoji == 3 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128529;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(4)}>
                        <a className={`${emoji == 4 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128533;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(5)}>
                        <a className={`${emoji == 5 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128531;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(6)}>
                        <a className={`${emoji == 6 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128532;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(7)}>
                        <a className={`${emoji == 7 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128545;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(8)}>
                        <a className={`${emoji == 8 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128546;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(9)}>
                        <a className={`${emoji == 9 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#128549;</a>
                      </li>
                      <li className="profile__emojis-option" onClick={(e) => handleEmojiChange(10)}>
                        <a className={`${emoji == 10 ? "profile__emojis-option-text--active" : "profile__emojis-option-text"}`}>&#129314;</a>
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
                camilor1220@gmail.com
              </p>

              <h3 className="profile__info profile__info--title">
                Cumpleaños
              </h3>
              <p className="profile__info profile__info--text">
                5 Septiembre
              </p>

              <h3 className="profile__info profile__info--title">
                Celular
              </h3>
              <p className="profile__info profile__info--text">
                315 475 8569
              </p>
            </div>
          </div>
        </div>
        <div className="profile__user-stats">
          <div className="profile__username-container">
            <h1 className="profile__username">Username</h1>
            <div className="profile__user-status">
      
            </div>
          </div>
          <div className="profile__panels-container">
            <SpotifyPanel></SpotifyPanel>
            <RankingPanel></RankingPanel>
            <AchievementsPanel></AchievementsPanel>
            <RewardsPanel></RewardsPanel>
          </div>
        </div>
      </div>
    </div>
  );
}