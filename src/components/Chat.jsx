import ChatInfoIcon from "../assets/images/ChatInfoIcon.svg";

const Chat = ({ proPic, name, lastMessage, onClick }) => {
    return (
        <div onClick={onClick} className="chat">
            <div className="chat-pro-pic">
                <img src={proPic} alt="Profile Picture of this person" />
            </div>
            <div className="name-message">
                <h3>{name}</h3>
                <p>
                    {lastMessage}
                    {String(lastMessage).length > 15 ? " ..." : null}
                </p>
            </div>
            <div className="chat-info">
                <img src={ChatInfoIcon} alt="Chats info icon" />
            </div>
        </div>
    );
};

export default Chat;
