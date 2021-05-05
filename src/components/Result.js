import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../components/GlobalContext";

const ProjectResult = styled.div`
  background-color: #1f213a;
  grid-area: asideTwo;

  .container td {
    font-size: 1em;
    box-shadow: 0 2px 2px -2px #0e1119;
  }

  .container {
    text-align: left;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    display: table;
    padding: 1rem;
  }

  .container td,
  .container th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
    color: white;
  }

  .container tr:nth-child(odd) {
    background: rgb(127, 95, 254);
    background: linear-gradient(
      300deg,
      rgba(127, 95, 254, 1) 0%,
      rgba(31, 33, 58, 1) 100%
    );
  }

  .container tr:nth-child(even) {
    background-color: #141625;
  }

  .container td:first-child {
    color: white;
  }

  .container tr:hover {
    background-color: #7f5ffe57;
    box-shadow: 0 6px 6px -6px #141625;
  }

  .container td:hover {
    background-color: white;
    color: #7f5ffe;
    font-weight: bold;

    box-shadow: #7f5ffe -1px 1px, #7f5ffe -2px 2px, #7f5ffe -3px 3px,
      #7f5ffe -4px 4px, #7f5ffe -5px 5px, #7f5ffe -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }

  @media (max-width: 800px) {
    .container td:nth-child(4),
    .container th:nth-child(4) {
      display: none;
    }
  }
`;

const Result = () => {
  const {
    dados,
    contadorOne,
    contadorTwo,
    contadorThree,
    contadorFour,
    contadorFive,
  } = React.useContext(GlobalContext);
  if (dados === null) return null;

  return (
    <ProjectResult>
      <table className="container">
        <tbody>
          <tr>
            <td>Cotação Dólar</td>
            <td colspan="2">R$ {dados && <>{dados.USD.bid}</>}</td>
          </tr>
          <tr>
            <td>IOF</td>
            <td colspan="2">{contadorOne}</td>
          </tr>
          <tr>
            <td>Total em dólar sem imposto</td>
            <td colspan="2">U$ {contadorTwo}</td>
          </tr>
          <tr>
            <td>Total em dólar com imposto</td>
            <td colspan="2">U$ {contadorThree}</td>
          </tr>
          <tr>
            <td>Total em real sem imposto</td>
            <td colspan="2">R$ {contadorFour}</td>
          </tr>
          <tr>
            <td>Total em real com imposto</td>
            <td colspan="2">R$ {contadorFive}</td>
          </tr>
        </tbody>
      </table>
    </ProjectResult>
  );
};

export default Result;
