import Button from "../components/Button";
import Logo from "../assets/images/NsmsaChatsLogo.svg";

const LogIn = () => {
    return (
        <div className="page login-page">
            <img className="logo" src={Logo} alt="NSMSA Chats logo" />
            <input
                className="input-box"
                placeholder="Email or Phone Number"
                type="text"
            />
            <input className="input-box" placeholder="Password" type="text" />
            <Button className="login-btn" title="Log In" />
            <div className="bottom-section">
                <p>Don't have an account yet? 🫢</p>
                <p className="sign-up-nav">Click Here</p>
            </div>
        </div>
    );
};

export default LogIn;
