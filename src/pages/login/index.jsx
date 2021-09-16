import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import Modal from "./modal";
import logo from "./fbkLogo.svg";

const Container = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 900px) {
    width: max-content;
    padding-bottom: 50px;
    flex-direction: column;
    text-align: center;
  }
`;

const FormContainer = styled.form`
  width: 400px;
  background-color: #fff;
  padding: 15px 15px 20px;
  box-shadow: 0px 0px 5px #a5a5a599;
  border-radius: 7px;
  display: grid;
  grid-gap: 15px;
  text-align: center;
  button:first-of-type {
    width: 100%;
    background-color: #166fe5;
    font-size: 1.085rem;

    &:hover {
      background-color: #186ddb;
    }
  }

  input {
    padding: 15px;
    &:focus-within {
      border-color: #166fe5;
      box-shadow: 0px 0px 3px #166fe5;
    }
  }

  button:last-of-type {
    width: max-content;
    background-color: #38ac20;
    font-size: 0.98rem;

    &:hover {
      background-color: #319e1b;
    }
  }
  @media (max-width: 900px) {
    max-width: 90%;
    margin: auto;
  }
`;

const TextSide = styled.div`
  max-width: 515px;
  margin-top: 45px;

  @media (max-width: 900px) {
    max-width: 350px;
    margin: auto;
    margin-bottom: 40px;
  }

  img {
    width: 290px;
    margin-left: -30px;

    @media (max-width: 900px) {
      margin: 0;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: -10px;
    @media (max-width: 900px) {
      font-size: 1.3rem;
    }
  }
`;

const BorderDiv = styled.div`
  width: 100%;
  height: 1px;
  background: #ddddddda;
  margin: 5px 0;
`;

const CreatePage = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 0.8rem;
  a {
    color: #000;
    font-weight: bold;
  }
`;

const ForgotPsswrd = styled.div`
  font-size: 0.75rem;
  color: #1877f2;
  a:visited {
    color: #1877f2;
  }
`;
const App = styled.div`
  height: 100vh;
  display: flex;
`;

export default function LoginScreen() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <App>
        <Container>
          <TextSide>
            <img src={logo} alt="Facebook" />
            <h2>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas
              que fazem parte da sua vida.
            </h2>
          </TextSide>
          <div>
            <FormContainer action="" method="post">
              <Input type="email" placeholder="Email ou telefone" />
              <Input type="password" placeholder="Senha" />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Entrar
              </Button>
              <ForgotPsswrd>
                <a href="$">Esqueceu a senha?</a>
              </ForgotPsswrd>
              <BorderDiv></BorderDiv>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setModal(true);
                }}
              >
                Criar nova conta
              </Button>
            </FormContainer>
            <CreatePage>
              <a href="%">Criar uma Página </a>
              <span>para uma celebridade, banda ou empresa.</span>
            </CreatePage>
          </div>
        </Container>
      </App>
      {modal ? <Modal setModal={setModal} /> : ""}
    </>
  );
}
