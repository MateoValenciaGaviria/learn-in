import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export const Chat = () => {
  return (
    <div className="chat">
      <ChatEngine
        offset={-5}
        height= "90vh"
        projectID={(localStorage.getItem('server') === "servidor1") ? "7a20b47a-8235-45bd-a653-6b7379fd4039" : "9e334154-e11f-4718-839c-0a2181d3d599" }
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        //renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps}></ChatFeed>}
      ></ChatEngine>
    </div>
  );
}