const Message = ({ sender, content }) => {
    return (
        <div className={`message ${sender == "user" ? "user" : "other"}`}>
            {content}
        </div>
    );
};

export default Message;
