import "./sidetext.styles.scss";

const Sidetext = (props) => {
    const credintial = props.props
  return (
    <div className="tag">
      <h3 className="background__tags">{credintial}</h3>
    </div>
  );
};
export default Sidetext;
