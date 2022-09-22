import { useInView } from "react-intersection-observer";
import Card1 from "../card1/card1.component";

const Works = (props) => {
  const { ref: myRef2, inView: elementVisibility } = useInView({
    threshold: 0.2,
    onChange: () => {
        if (elementVisibility) {
          props.handler("Works" );
        }
        console.log("work", elementVisibility);
      },
  });

  return (
    <>
      <div className="content__skills" ref={myRef2}>
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
        <Card1
          props={{
            projectName: "section2",
            projectNumber: "1",
            projectImageLink: "https://picsum.photos/432/232",
          }}
        />
      </div>
    </>
  );
};
export default Works;
