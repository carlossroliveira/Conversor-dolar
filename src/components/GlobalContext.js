import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const GlobalContext = React.createContext();
export const GlobalStorage = ({ children }) => {
  // ==================== Fetch
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  // ==================== Input
  const [valorDolar, setValue] = React.useState("");
  function handleChangeValue({ target }) {
    setValue(target.value);
  }

  // ==================== Select
  const [taxa, setTaxa] = React.useState("");
  function handleChangeTaxa({ target }) {
    setTaxa(target.value);
  }

  // ==================== IOF
  const [contadorOne, setContadorOne] = React.useState("");
  const dinheiroIOF = 0.011;
  const cartaoIOF = 0.064;

  function adicionarContadorOne({ target }) {
    if (target.value === "dinheiro") {
      setContadorOne(Number(dinheiroIOF));
      adicionarContadorThree(dinheiroIOF);
      adicionarContadorFive(dinheiroIOF);
    } else {
      setContadorOne(Number(cartaoIOF));
      adicionarContadorThree(cartaoIOF);
      adicionarContadorFive(cartaoIOF);
    }
  }

  // ==================== Total em dólar sem imposto
  const [contadorTwo, setContadorTwo] = useState("");
  function adicionarContadorTwo() {
    if (valorDolar === "") {
      Swal.fire("Oops...", "Preencha o valor em dólar", "error");
    } else {
      setContadorTwo(Number(valorDolar));
    }
  }

  // ==================== Total em dólar com imposto
  const [contadorThree, setContadorThree] = useState("");
  function adicionarContadorThree(dinheiroIOF) {
    let newValueThree = (
      Number(valorDolar) +
      Number(valorDolar) * (Number(taxa) / 100) +
      Number(valorDolar) * Number(dinheiroIOF)
    ).toFixed(4);
    setContadorThree(newValueThree);
  }

  // ==================== Total em real sem imposto
  const [contadorFour, setContadorFour] = useState("");
  function adicionarContadorFour() {
    let newValueFour = Number(valorDolar * dados.USD.bid).toFixed(4);
    if (valorDolar === "") {
    } else {
      setContadorFour(newValueFour);
    }
  }

  // ==================== Total em real com imposto
  const [contadorFive, setContadorFive] = useState("");
  function adicionarContadorFive(dinheiroIOF) {
    let newValueFive = (
      (Number(valorDolar) + Number(valorDolar) * (Number(taxa) / 100)) *
        Number(dados.USD.bid) +
      Number(valorDolar) * Number(dinheiroIOF)
    ).toFixed(2);
    setContadorFive(newValueFive);
  }

  // ==================== Button Main
  function handleClick() {
    adicionarContadorTwo();
    adicionarContadorFour();
  }

  return (
    <GlobalContext.Provider
      value={{
        dados,
        handleClick,
        handleChangeValue,
        handleChangeTaxa,
        adicionarContadorOne,
        contadorOne,
        adicionarContadorTwo,
        contadorTwo,
        adicionarContadorThree,
        contadorThree,
        adicionarContadorFour,
        contadorFour,
        adicionarContadorFive,
        contadorFive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
