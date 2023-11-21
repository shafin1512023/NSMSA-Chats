import { useNavigate, useParams } from "react-router-dom";
import chatsData from "../data";
import { useState } from "react";
import BackButton from "../assets/images/BackButton.svg";
import ChatInfoIcon from "../assets/images/ChatInfoIcon.svg";
import Button from "../components/Button";
import Message from "../components/Message";

const EachChat = () => {
    const params = useParams();
    const id = params.id;
    const currentChatData = chatsData.filter((eachData) => {
        return eachData.id == id;
    });

    const [messages, setMessages] = useState(currentChatData[0].message);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    return (
        <div className="each-chat-page">
            <div className="header">
                <div className="left-part">
                    <img
                        onClick={() => navigate("/chats")}
                        className="back-button"
                        src={BackButton}
                        alt="BackButton"
                    />
                    <img
                        className="pro-pic"
                        src={currentChatData[0].proPic}
                        alt=""
                    />
                    <h3>{currentChatData[0].name}</h3>
                </div>
                <img
                    className="chat-info-icon"
                    src={ChatInfoIcon}
                    alt="Chat info icon"
                />
            </div>
            <div className="message-container">
                {messages.map((eachMessage) => {
                    return (
                        <Message
                            key={eachMessage.id}
                            sender={eachMessage.sender}
                            content={eachMessage.content}
                        />
                    );
                })}
                <Message sender="user" content={message} />
            </div>
            <div className="type-area">
                <textarea
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    type="text"
                    placeholder="Type your message"
                    className="type-box"
                />
                <Button
                    onClick={() => {
                        setMessages(() => {
                            return [
                                ...messages,
                                {
                                    id: messages.length + 1,
                                    sender: "user",
                                    content: message,
                                },
                            ];
                        });
                        setMessage("");
                    }}
                    className="send-btn"
                    title="Send"
                />
            </div>
        </div>
    );
};

export default EachChat;
