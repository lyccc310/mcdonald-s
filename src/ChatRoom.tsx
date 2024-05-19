import React, { useState, ChangeEvent } from 'react';
import './ChatRoom.css';

interface Message {
    text: string;
    sender: string;
}

function ChatRoom() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    function handleSendMessage() {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewMessage(event.target.value);
    }

    return (
        <div className="chat-room">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={handleInputChange}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatRoom;
