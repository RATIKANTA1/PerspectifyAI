import React, { useState } from 'react';

function ChatBot() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <div>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-500 text-white flex justify-center items-center shadow-lg text-2xl"
      >
        💬
      </button>

      {/* Chat widget */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-lg rounded-lg">
          {/* Your chatbot iframe */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/12/13/20241212135639-ETXGY2NY.json"
            className="w-full h-full"
            frameBorder="0"
            title="Chatbot Interface" // Added title for accessibility
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
