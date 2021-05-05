import styled from "styled-components";

const ProjectTitle = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(127, 95, 254);
  background: linear-gradient(
    90deg,
    rgba(127, 95, 254, 1) 0%,
    rgba(31, 33, 58, 1) 100%
  );
`;

const Title = (props) => {
  return (
    <ProjectTitle>
      <h1>{props.children}</h1>
    </ProjectTitle>
  );
};

export default Title;
