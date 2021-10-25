import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export const Chat = () => {
  return (
    <div className="chat">
      <ChatEngine
        offset={-5}
        height= "90vh"
        projectID="7a20b47a-8235-45bd-a653-6b7379fd4039"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        //renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps}></ChatFeed>}
      ></ChatEngine>
    </div>
  );
}