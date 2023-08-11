import React, { useState } from 'react';
import './App.css';

function App() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div>
      <button id="toggleChatbox" onClick={toggleChatbox}>
        Chat
      </button>
      <div className={`chatbox ${isChatboxVisible ? 'visible' : ''}`} id="chatbox">
        <div id="root"></div>
          <iframe src="https://chatbot-joyous.vercel.app/" width="350" height="100%"></iframe>
      </div>
    </div>
  );
};

export default App;
