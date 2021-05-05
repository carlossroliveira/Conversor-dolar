// ==================== Components
import React from "react";
import { GlobalStorage } from "../components/GlobalContext";
import FullBackground from "../components/FullBackground";
import GithubCorner from "react-github-corner";
import Title from "../components/Title";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Button from "../components/Button";
import Result from "../components/Result";
import Footer from "../components/Footer";

// ==================== Style
import "../style/Global.css";

// ==================== Home
const Home = () => {
  return (
    <>
      <GlobalStorage>
        <FullBackground>
          <Title>Conversor Dólar - Real</Title>
          <Input />
          <Radio />
          <Button>Calcular</Button>
          <Result />
          <Footer>&copy; 2021 | Carlos Oliveira</Footer>
          <GithubCorner
            href="https://github.com/carlossroliveira"
            target="_blank"
            bannerColor="#7F5FFE"
            octoColor="#fff"
            size={80}
            direction="right"
          />
        </FullBackground>
      </GlobalStorage>
    </>
  );
};

export default Home;
