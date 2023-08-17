import React, { useState } from 'react';

function App() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div>
      <button id="toggleChatbox" onClick={toggleChatbox}>
        <img src="https://cdn.glitch.global/fd6fe205-9bbb-48bb-9281-ddbca1341e16/chat.svg?v=1692240196555" alt="Chatbot" width="60" height="55" />
      </button>
      <div className={`chatbox ${isChatboxVisible ? 'visible' : ''}`} id="chatbox">
        <div id="root"></div>
          <iframe src="https://chatbot-joyous.vercel.app/" width="300" height="100%"></iframe>
      </div>
    </div>
  );
};

export default App;
