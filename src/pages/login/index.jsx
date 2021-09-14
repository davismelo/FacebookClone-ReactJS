import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin: auto;
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
  }
  button:last-of-type {
    width: max-content;
    background-color: #36a420;
    margin: auto;
    font-size: 0.98rem;
  }
`;

const DataArea = styled.div``;

const TextSide = styled.div`
  max-width: 510px;
  margin-top: 45px;
  h1 {
    font-size: 3.5rem;
    color: #1877f2;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const BorderDiv = styled.div`
  width: 100%;
  height: 1px;
  background: #ddddddda;
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
  font-size: 0.85rem;
`;
const App = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export default function LoginScreen() {
  return (
    <App>
      <Container>
        <TextSide>
          <h1>𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸</h1>
          <h2>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </h2>
        </TextSide>
        <DataArea>
          <FormContainer>
            <Input type="email" placeholder="Email ou telefone" />
            <Input type="password" placeholder="Senha" />
            <Button>Entrar</Button>
            <ForgotPsswrd>
              <a href="$">Esqueceu a senha?</a>
            </ForgotPsswrd>
            <BorderDiv></BorderDiv>
            <Button>Criar nova conta</Button>
          </FormContainer>
          <CreatePage>
            <a href="%">Criar uma Página </a>
            <span>para uma celebridade, banda ou empresa.</span>
          </CreatePage>
        </DataArea>
      </Container>
    </App>
  );
}
