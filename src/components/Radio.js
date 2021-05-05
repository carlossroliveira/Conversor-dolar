import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../components/GlobalContext";

const ProjectRadio = styled.div`
  background-color: #1f213a;
  grid-area: sidebar;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: rgb(127, 95, 254);
    background: radial-gradient(
      circle,
      rgba(127, 95, 254, 1) 0%,
      rgba(31, 33, 58, 1) 100%
    );
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
  p {
    font-size: 1.2rem;
    label {
      color: white !important;
    }
  }
`;

const Radio = () => {
  const { adicionarContadorOne } = React.useContext(GlobalContext);

  return (
    <ProjectRadio>
      <form>
        <p>
          <input
            type="radio"
            name="form"
            value="dinheiro"
            id="inDinheiro"
            onChange={adicionarContadorOne}
          />
          <label for="inDinheiro">Dinheiro</label>
        </p>

        <p>
          <input
            type="radio"
            name="form"
            value="Cartao"
            id="inCartao"
            onChange={adicionarContadorOne}
          />
          <label for="inCartao">Cartão</label>
        </p>
      </form>
    </ProjectRadio>
  );
};

export default Radio;
