import React, { useState } from 'react';

const AIChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
    };

    return (
        <div className="ai-chatbot">
            <h2>AI Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.sender}>{msg.text}</div>
                ))}
            </div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default AIChatbot;
