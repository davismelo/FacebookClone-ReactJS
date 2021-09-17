import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import Modal from "./modal";
import logo from "../../img/fbkLogo.svg";

const App = styled.div`
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  margin: auto;
  padding: 0 25px;
  @media (max-width: 900px) {
    gap: 0;
    padding: 0 0 50px;
    flex-direction: column;
    text-align: center;
  }
`;

const FormContainer = styled.form`
  background-color: #fff;
  padding: 15px 15px 20px;
  box-shadow: 0px 0px 5px #a5a5a599;
  border-radius: 7px;
  display: grid;
  grid-gap: 15px;
  text-align: center;
  button:first-of-type {
    width: 100%;
    background-color: var(--color-primary);
    font-size: 1.1rem;

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  button:last-of-type {
    background-color: var(--color-secondary);
    font-size: 0.95rem;
    padding: 15px;
    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }

  input {
    padding: 15px;
    &:focus-within {
      border-color: var(--color-primary);
      box-shadow: 0px 0px 3px var(--color-primary);
    }
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: auto;
  }
`;

const TextSide = styled.div`
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
    font-weight: 400;
    max-width: 480px;
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
  margin-top: 28px;
  text-align: center;
  font-size: 0.775rem;
  a {
    color: #000;
    font-weight: bold;
  }
`;

const ForgotPsswrd = styled.div`
  font-size: 0.75rem;
  margin: 3px 0;
  a {
    color: #1877f4;
  }
  a:visited {
    color: #1877f4;
  }
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
                <a href="#">Esqueceu a senha?</a>
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
              <a href="#">Criar uma Página </a>
              <span>para uma celebridade, banda ou empresa.</span>
            </CreatePage>
          </div>
        </Container>
      </App>
      {modal ? <Modal setModal={setModal} /> : ""}
    </>
  );
}
