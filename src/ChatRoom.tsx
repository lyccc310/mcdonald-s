import { useState, SetStateAction } from 'react';
import './ChatRoom.css';
import axios from 'axios';

interface Message {
    role: string;
    content: string;
}

function ChatRoom() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            setMessages([...messages, { role: 'user', content: newMessage }]);
            try {
                console.log(newMessage)
                // 構建請求的消息體
                const requestBody = {
                    question: newMessage
                };
                console.log("requestBody",requestBody)
                const response = await axios.post(
                    'https://czbnfbbjh5.execute-api.us-west-2.amazonaws.com/test/chatbot',
                    requestBody,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // 打印請求的回應數據
                console.log('Response:', response.data);
                // 檢查回應是否符合預期結構
                if (response.data && response.data.answer) {
                    const botResponse = response.data.answer;
                    setMessages([...messages, { role: 'user', content: newMessage }, { role: 'bot', content: botResponse }]);
                } else {
                    console.error('回應結構不符預期:', response.data);
                }
            } catch (error) {
                console.error('錯誤:', error);
            }
            setNewMessage('');
        }
    };


    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewMessage(event.target.value);
    };


    return (
        <div className="chat-room">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                        {message.content}
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
