
import React, { useState } from 'react';

const API_URL = "/chatbot"; // Replace with your backend endpoint

const AIChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setLoading(true);
        try {
            // Fetch bot response from backend
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();
            setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
        } catch {
            setMessages((prev) => [...prev, { text: "Sorry, something went wrong.", sender: 'bot' }]);
        }
        setLoading(false);
    };

    return (
        <div className="ai-chatbot">
            <h2>AI Chatbot</h2>
            <div className="chat-window">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.sender + " message-bubble"}>{msg.text}</div>
                ))}
                {loading && <div className="bot message-bubble">Bot is typing...</div>}
            </div>
            <div className="chat-input-row">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyDown={e => e.key === 'Enter' ? handleSend() : null}
                />
                <button onClick={handleSend} disabled={loading || !input.trim()}>Send</button>
            </div>
        </div>
    );
};

export default AIChatbot;
