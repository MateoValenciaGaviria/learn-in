import React, { useEffect } from 'react';
import { DATABASE } from "../../utils/firebase";
import { doc, setDoc } from 'firebase/firestore/lite';

var localUrl: string = "";
var currentUrl: string = "";
const defaultPlaylist: string = "https://open.spotify.com/playlist/0znZGpitzAg7iOvGpfDJP4";
interface spotifyPanelProps {
  url: string,
  onUrlChange: (url: string) => void,
  server: string
}

export const SpotifyPanel: React.FC<spotifyPanelProps> = ({ url, onUrlChange, server }) => {

  const [playlist, setPlaylist] = React.useState(localUrl);

  localUrl = url;

  var usersDoc = "";
  (server === "servidor1") ? usersDoc = "users" : usersDoc = "users2";

  const updateUrl = async () => {
    if (localStorage.getItem('username')) {
      const userNameFromLocalStorage = localStorage.getItem("username")!;
      const userRef = doc(DATABASE, usersDoc, userNameFromLocalStorage);
      setDoc(userRef, { playlist: playlist }, { merge: true });
    }
  }

  const handlePlaylistChange = (urlPlaylist: string) => {
    var currentUrl: string = urlPlaylist;
    const spotifyEmbed: string = "?utm_source=generator";
    const youtubeEmbed: string = "https://www.youtube.com/embed/";
    var embedUrl: string = "";
    var spotifyIndex: number = 25;
    var youtubeIndex: number = 17;

    if(currentUrl.includes("spotify")){

      embedUrl = [currentUrl.slice(0, spotifyIndex), "embed/", currentUrl.slice(spotifyIndex)].join('');
      embedUrl = embedUrl+spotifyEmbed;

    }else if(currentUrl.includes("youtu.be")){

      embedUrl = youtubeEmbed + currentUrl.slice(youtubeIndex);

    }

    currentUrl = embedUrl;
    setPlaylist(currentUrl);
    onUrlChange(currentUrl);
  }

  useEffect(() => { updateUrl() }, [playlist]);
  useEffect(() => { setPlaylist(localUrl) }, [localUrl]);

  return (
    <div className="spotify-panel">
      {/* {(playlist === "") ? */}
        <div className="spotify-panel__container">
          <p className="spotify-panel__title">Inserta la url de tu playlist</p>
          <input type="text" className="spotify-panel__input" onChange={(e) => currentUrl = e.target.value} />
          <div className="spotify-panel__buttons-container">
            <button className="spotify-panel__btn" onClick={(e) => {
              handlePlaylistChange(currentUrl);
            }}>Cargar Playlist</button>
            <button className="spotify-panel__btn spotify-panel__btn--secondary" onClick={(e) => {
              handlePlaylistChange(defaultPlaylist);
            }}>Lista predeterminada</button>
          </div>
        </div> 
        {/* : <iframe className="profile__spotify" src={playlist} width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="User playlist" />
      } */}
    </div>
  );

}