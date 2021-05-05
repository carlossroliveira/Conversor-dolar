import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../components/GlobalContext";

const ProjectInput = styled.div`
  background-color: #1f213a;
  grid-area: main;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 3rem;

  .formGroup {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
  }

  .formField {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid white;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .formLabel {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .formLabel {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #fff;
  }

  .formField:focus {
    ~ .formLabel {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #7f5ffe;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #7f5ffe, #141625);
    border-image-slice: 1;
  }
  .formField {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
  select {
    font-size: 1.3rem;
    padding: 0.4rem;
    background: rgb(127, 95, 254);
    background: radial-gradient(
      circle,
      rgba(127, 95, 254, 1) 0%,
      rgba(31, 33, 58, 1) 100%
    );
    color: #fff;
    option {
      background-color: #141625;
      padding: 1rem;
    }
  }
`;

const Input = () => {
  const { handleChangeValue, handleChangeTaxa } = React.useContext(
    GlobalContext
  );

  return (
    <ProjectInput>
      <div className="formGroup field">
        <input
          onChange={handleChangeValue}
          autoFocus={true}
          type="input"
          className="formField"
          placeholder="Valor em Dólar"
          name="name"
          id="name1"
        />
        <label for="name1" className="formLabel">
          Valor em Dólar
        </label>
      </div>

      <div className="formGroup field">
        <form>
          <select onChange={handleChangeTaxa}>
            <option>Taxa do Estado</option>
            <option value="8.5">San Francisco: 8,5%</option>
            <option value="8.38">Califórnia: 8,38%</option>
            <option value="8.61">Arkansas: 8,61%</option>
            <option value="7">Rhode Island: 7%</option>
            <option value="7">Indiana: 7%</option>
            <option value="6.5">Orlando: 6,5%</option>
            <option value="7">Miami: 7% </option>
            <option value="7">Miami Beach: 7%</option>
            <option value="9.5">Chicago: 9,5%</option>
            <option value="7">Tampa: 7%</option>
            <option value="5">Wisconsin: 5%</option>
            <option value="8.45">Alabama: 8,45%</option>
            <option value="8.875">Nova York: 8,875%</option>
            <option value="8.25">Las Vegas: 8,25%</option>
          </select>
        </form>
      </div>
    </ProjectInput>
  );
};

export default Input;
