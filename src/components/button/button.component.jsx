import "./button.styles.css";
const Button = (props) => {
  const credintials = { ...props.props };

  return (
    <div className="button">
      <button href="#" style={{ "--clr": credintials.buttonColor }}>
        <span>{credintials.buttonText}</span>
        <i></i>
      </button>
    </div>
  );
};
export default Button;
