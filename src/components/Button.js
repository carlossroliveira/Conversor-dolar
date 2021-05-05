import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../components/GlobalContext";

const ProjectButton = styled.button`
  grid-area: asideOne;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #1f213a;
  width: 100%;
  padding: 1rem;

  .styleCalcular {
    position: relative;
    padding: 10px 30px;
    margin: 0 15px;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 20px;
    overflow: hidden;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #7f5ffe;
      color: white;
      box-shadow: 0 0 50px #7f5ffe;
      transition-delay: 0s;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      transition: 0.5s;
      transition-delay: 0.2s;
      border-top: 2px solid white;
      border-left: 2px solid white;
    }
    &:hover::before {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
      border-top: 2px solid #7f5ffe;
      border-left: 2px solid #7f5ffe;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      transition: 0.5s;
      transition-delay: 0.2s;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
    &:hover::after {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
      border-bottom: 2px solid #7f5ffe;
      border-right: 2px solid #7f5ffe;
    }
  }
`;

const Button = (props) => {
  const { handleClick } = React.useContext(GlobalContext);

  return (
    <ProjectButton>
      <a className="styleCalcular" onClick={handleClick}>
        {props.children}
      </a>
    </ProjectButton>
  );
};

export default Button;
