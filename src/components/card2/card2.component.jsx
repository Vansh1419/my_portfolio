import Tilt from "react-parallax-tilt";
import "./card2.styles.scss";
const Card2 = (props) => {
  const credintials = { ...props.props };
  return (
    <>
      <Tilt
        className="tilt"
        style={{ background: "transparent" }}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="card2__description">
          <h1 className="card2__description__nameOfProject">
            <u>{credintials.projectName}</u>
          </h1>
          <p className="card2__description__numbering">
            {credintials.projectNumber}
          </p>
        </div>
        <img
          src={credintials.projectImageLink}
          className="card2__description__image1"
          alt=""
        />
      </Tilt>
    </>
  );
};
export default Card2;
