import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";
import chatsData from "../data";
import ChatsIcon from "../assets/images/Chats Icon.svg";
import FindIcon from "../assets/images/Find Icon.svg";
import SettingsIcon from "../assets/images/Settings Icon.svg";
import ProfileIcon from "../assets/images/Profile Icon.svg";

const Chats = () => {
    const navigate = useNavigate();
    return (
        <div className="chats-page">
            <div className="chat-list">
                {chatsData.map((eachChatData) => {
                    return (
                        <Chat
                            key={eachChatData.id}
                            proPic={eachChatData.proPic}
                            name={eachChatData.name}
                            lastMessage={eachChatData.lastMessage}
                            onClick={() => navigate(`${eachChatData.id}`)}
                        />
                    );
                })}
                <div className="nav">
                    <img src={ChatsIcon} alt="Chats icon" />
                    <img src={FindIcon} alt="Find icon" />
                    <img src={SettingsIcon} alt="Settings icon" />
                    <img src={ProfileIcon} alt="Profile icon" />
                </div>
            </div>
        </div>
    );
};

export default Chats;
