import "./introduction.styles.scss";
import { useInView } from "react-intersection-observer";
const Intro = (props) => {

  const { ref: myRef, inView: elementVisibility } = useInView({
    threshold: 0,
    
    onChange: () => {
      props.handler("");
      console.log('Intro',elementVisibility);
    },
  });

  return (
    <div className="introduction" >
      <div className="introduction__content" ref={myRef}>
        <p>Hi, I am...</p>
        <h1>Vansh Jain</h1>
        <div className="intro__content__desc">
          <span className="span1">I design and develop</span>
          <span className="span2">Webapps</span>
        </div>
        <p>Let me show you... </p>
      </div>
    </div>
  );
};
export default Intro;
