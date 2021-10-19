import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from '../../components/ChatFeed/ChatFeed';

export const Chat = () => {
  return (
    <div className="chat">
      <ChatEngine
        height= "90vh"
        projectID="7a20b47a-8235-45bd-a653-6b7379fd4039"
        userName="Mateo"
        userSecret="matthew123"
        //renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps}></ChatFeed>}
      ></ChatEngine>
    </div>
  );
}