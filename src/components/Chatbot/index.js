import React, { useState } from 'react';
import './index.css';





const responses = {
    hello: "Hi! How can I help you?",
    order: "You can view your order history on the Order History page.",
    default: "Sorry, I didn't understand that."
};

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMsg = input.toLowerCase();
        const botMsg = responses[userMsg] || responses.default;
        setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: botMsg }]);
        setInput('');
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.sender === 'user' ? 'chatbot-user' : 'chatbot-bot'}>
                        <b>{msg.sender}:</b> {msg.text}
                    </div>
                ))}
            </div>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
