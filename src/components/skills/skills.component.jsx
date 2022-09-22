import "./skills.styles.scss";
import Card1 from "../card1/card1.component";
import { useInView } from "react-intersection-observer";

const Skills = (props) => {
  const { ref: myRef1, inView: elementVisibility } = useInView({
    threshold: 0,
    onChange: () => {
      if (elementVisibility) {
        props.handler("Skills");
      }
      console.log("skills", elementVisibility);
    },
  });

  return (
    <>
      <div className="content__skills" ref={myRef1}>
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "Pralap",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
      </div>
    </>
  );
};
export default Skills;
