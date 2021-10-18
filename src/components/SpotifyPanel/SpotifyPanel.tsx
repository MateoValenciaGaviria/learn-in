import React from 'react';

export const SpotifyPanel = () => {

  return (
    <div className="spotify-panel">
      <iframe className="profile__spotify" src="https://open.spotify.com/embed/playlist/0znZGpitzAg7iOvGpfDJP4?theme=0" width="100%" height="100%" frameBorder="0" allowTransparency={true} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
    </div>
  );

}