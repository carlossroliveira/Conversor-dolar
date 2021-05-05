import styled from "styled-components";

const ProjectFooter = styled.div`
  grid-area: footer;
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

const Footer = (props) => {
  return (
    <ProjectFooter>
      <h3> {props.children} </h3>
    </ProjectFooter>
  );
};

export default Footer;
