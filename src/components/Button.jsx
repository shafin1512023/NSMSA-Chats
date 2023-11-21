const Button = ({ title, className, onClick }) => {
    return <div onClick={onClick} className={`btn ${className}`}>{title}</div>;
};

export default Button;
