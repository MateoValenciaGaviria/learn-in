import React, { useEffect } from 'react';
import { DATABASE } from "../../utils/firebase";
import { doc, setDoc } from 'firebase/firestore/lite';

var localUrl: string = "";
const defaultPlaylist: string = "https://open.spotify.com/embed/playlist/0znZGpitzAg7iOvGpfDJP4?theme=0";
interface spotifyPanelProps {
  url: string,
  onUrlChange: (url: string) => void
}

export const SpotifyPanel: React.FC<spotifyPanelProps> = ({ url, onUrlChange }) => {

  const [playlist, setPlaylist] = React.useState(url);

  const updateUrl = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, 'users', userNameFromLocalStorage);
      setDoc(userRef, { playlist: playlist }, { merge: true });
    }
  }

  const handlePlaylistChange = (urlPlaylist: string) => {
    setPlaylist(urlPlaylist);
    onUrlChange(urlPlaylist);
  }

  useEffect(() => { updateUrl() }, [playlist]);

  return (
    <div className="spotify-panel">
      {(playlist === "") ?
        <div className="spotify-panel__container">
          <p className="spotify-panel__title">Inserta la url de tu playlist</p>
          <input type="text" className="spotify-panel__input" onChange={(e) => localUrl = e.target.value} />
          <div className="spotify-panel__buttons-container">
            <button className="spotify-panel__btn" onClick={(e) => {
              handlePlaylistChange(localUrl);
            }}>Cargar Playlist</button>
            <button className="spotify-panel__btn spotify-panel__btn--secondary" onClick={(e) => {
              handlePlaylistChange(defaultPlaylist);
            }}>Lista predeterminada</button>
          </div>
        </div> : <iframe className="profile__spotify" src={playlist} width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="User playlist" />
      }
    </div>
  );

}