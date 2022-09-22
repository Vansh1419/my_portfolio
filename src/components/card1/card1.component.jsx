import Tilt from "react-parallax-tilt";
import "./card1.styles.css";
const Card1 = (props) => {
  const credintials = { ...props.props };
  return (
    <div>
      <Tilt
        className="tilt"
        style={{ background: "transparent" }}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="card1__description">
          <h1 className="card1__description__nameOfProject">
            <u>{credintials.projectName}</u>
          </h1>
          <p className="card1__description__info">
            {credintials.projectNumber}
          </p>
        </div>
        <img
          src={credintials.projectImageLink}
          className="card1__description__image1"
          alt=""
          loading="lazy"
        />
      </Tilt>
    </div>
  );
};
export default Card1;
