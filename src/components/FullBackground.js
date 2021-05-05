import styled from "styled-components";

const FullBackground = styled.div`
  border: 2px solid #7f5ffe;
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  gap: 0.3rem;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    "header header header header header header header header"
    ". main main main main sidebar sidebar ."
    ". main main main main sidebar sidebar ."
    ". asideOne asideOne asideOne asideOne asideOne asideOne ."
    ". asideTwo asideTwo asideTwo asideTwo asideTwo asideTwo ."
    "footer footer footer footer footer footer footer footer";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "asideOne"
      "asideTwo"
      "footer";
  }
`;

export default FullBackground;
