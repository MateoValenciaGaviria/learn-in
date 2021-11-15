import React, { useEffect, useState } from 'react';
import { getImage } from '../../utils/getImages';

var localPlaylist = "";

interface GlobalPlaylistProps {
    playlist: string
}

export const GlobalPlaylist: React.FC<GlobalPlaylistProps> = ({ playlist }) => {
    
    const spotifylogo = getImage("spotifylogo");
    const youtubelogo = getImage("youtubelogo");

    const [currentPlaylist, setCurrentPlaylist] = React.useState(localPlaylist);
    const [playListState, setPlayListState] = React.useState(false);

    localPlaylist = playlist;

    useEffect(() => { setCurrentPlaylist(localPlaylist) }, [localPlaylist]);

    return (
        <div className="globalPlaylist">
            {(currentPlaylist !== "") ?
                <div className="globalPlaylist__playlist-container">
                    <div className={(playListState) ? "globalPlaylist__playlist-main" : "globalPlaylist__playlist-main--hidden"}>
                        <iframe className="globalPlaylist__playlist" src={currentPlaylist} width="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="User playlist" />
                    </div>
                    <button className="globalPlaylist__playlist-btn" onClick={() => setPlayListState(!playListState)}>
                        <img className="globalPlaylist__playlist-btn-img" src={(currentPlaylist.includes("spotify")) ? spotifylogo : youtubelogo} alt="learn-in logo" />
                    </button>
                </div> : null}
        </div>
    );
}